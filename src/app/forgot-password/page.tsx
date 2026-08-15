'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getCheckEmailApi, postSendOtpAPi, postSendOtpVerifyAPi, updateUserAPi } from '../../../api-endpoints/authendication';
import { useVendor } from '../../../context/VendorContext';
import { Mail, Key, ArrowLeft, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [timer, setTimer] = useState(60);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [emailLoader, setEmailLoader] = useState(false);
  const [otpErrorMessage, setOtpErrorMessage] = useState('');
  const [optLoader, setOtpLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordLoader, setPasswordLoader] = useState(false);
  
  const { vendorId } = useVendor();

  useEffect(() => {
    const storedId = localStorage.getItem('forgetuserId');
    setUserId(storedId);
  }, []);

  useEffect(() => {
    if (showModal && timer > 0) {
      const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [showModal, timer]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return setErrorMessage("Email is required.");
    setErrorMessage('');
    setEmailLoader(true);
    try {
      const updateApi = await getCheckEmailApi(`?email=${email}&vendor_id=${vendorId}`);
      if (updateApi?.data?.id) {
        const sendOtp = await postSendOtpAPi({ email: updateApi?.data?.email, vendor_id: vendorId });
        if (sendOtp) {
          setEmailLoader(false);
          setToken(sendOtp?.data?.token);
          setShowModal(true);
          setTimer(60);
          setOtp(Array(6).fill(''));
          setTimeout(() => inputsRef.current[0]?.focus(), 100);
        }
      } else {
        setErrorMessage("You're not a user, please create an account.");
        setEmailLoader(false);
      }
    } catch (error) {
      setErrorMessage("You're not a user, please create an account.");
      setEmailLoader(false);
    }
  };

  const handleOtpChange = (val: string, idx: number) => {
    if (!/^\d*$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    if (val && idx < 5) inputsRef.current[idx + 1]?.focus();
  };

  const handleBackspace = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handleOtpSubmit = async () => {
    setOtpLoader(true);
    setOtpErrorMessage('');
    const finalOtp = otp.join('');
    if (finalOtp.length === 6) {
      try {
        const updateApi = await postSendOtpVerifyAPi({
          token,
          otp: finalOtp,
          vendor_id: vendorId,
          login_type: 'user',
        });

        if (updateApi?.data?.user_id) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('forgetuserId', updateApi?.data?.user_id);
            setUserId(updateApi?.data?.user_id);
            setOtpLoader(false);
            setShowModal(false);
            setShowPasswordReset(true);
          }
        }
      } catch (error: any) {
        const errMsg = error?.response?.data?.message || 'Failed to verify OTP. Please try again.';
        setOtpErrorMessage(errMsg);
        setOtpLoader(false);
      }
    } else {
      setOtpLoader(false);
      setOtpErrorMessage('Please enter a valid 6-digit OTP.');
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    if (newPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    setErrorMessage('');
    setPasswordLoader(true);
    try {
      const targetUserId = userId || localStorage.getItem('forgetuserId');
      const updateApi = await updateUserAPi(`/${targetUserId}`, {
        password: newPassword,
        updated_by: "user",
        role: 3,
        vendor: vendorId,
      });

      if (updateApi) {
        router.push('/login');
        setShowPasswordReset(false);
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      console.error('Password reset failed:', error);
      setErrorMessage('Failed to reset password. Please try again.');
    } finally {
      setPasswordLoader(false);
    }
  };

  const sendOtpToEmail = async () => {
    setErrorMessage('');
    try {
      const updateApi = await getCheckEmailApi(`?email=${email}&vendor_id=${vendorId}`);
      if (updateApi?.data?.id) {
        const sendOtp = await postSendOtpAPi({ email: updateApi?.data?.email, vendor_id: vendorId });
        if (sendOtp) {
          setToken(sendOtp?.data?.token);
          setShowModal(true);
          setTimer(60);
          setOtp(Array(6).fill(''));
          setTimeout(() => inputsRef.current[0]?.focus(), 100);
        }
      } else {
        setErrorMessage("You're not a registered user. Please create an account.");
      }
    } catch (error: any) {
      console.log(error, "check email error");
      setErrorMessage("Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 selection:bg-[#a100fe]/20">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all">
        {/* Header Area */}
        <div className="p-8 pb-6 text-center">
          <div className="w-16 h-16 bg-[#a100fe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            {showPasswordReset ? (
              <Key className="w-8 h-8 text-[#a100fe]" />
            ) : showModal ? (
              <Key className="w-8 h-8 text-[#a100fe]" />
            ) : (
              <Lock className="w-8 h-8 text-[#a100fe]" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {showPasswordReset ? 'Set new password' : showModal ? 'Check your email' : 'Forgot password?'}
          </h2>
          <p className="text-gray-500 text-sm">
            {showPasswordReset 
              ? 'Your new password must be different from previously used passwords.' 
              : showModal 
                ? `We sent a verification code to ${email}` 
                : "No worries, we'll send you reset instructions."}
          </p>
        </div>

        {/* Content Area */}
        <div className="px-8 pb-8">
          {/* Step 1: Request OTP */}
          {!showModal && !showPasswordReset && (
            <form onSubmit={handleEmailSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 block w-full rounded-lg border border-gray-300 p-2.5 text-sm shadow-sm focus:border-[#a100fe] focus:ring-1 focus:ring-[#a100fe] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {errorMessage && <p className="text-red-500 text-xs text-center font-medium">{errorMessage}</p>}

              <button
                type="submit"
                disabled={emailLoader || !email}
                className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg text-white font-medium text-sm bg-[#a100fe] hover:bg-[#8e00e0] transition-colors shadow disabled:opacity-60"
              >
                {emailLoader ? <Loader2 className="w-5 h-5 animate-spin" /> : "Reset password"}
              </button>
            </form>
          )}

          {/* Step 2: Verify OTP */}
          {showModal && !showPasswordReset && (
            <div className="space-y-6">
              <div className="flex justify-between items-center gap-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => { inputsRef.current[idx] = el; }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, idx)}
                    onKeyDown={(e) => handleBackspace(e, idx)}
                    className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:border-[#a100fe] focus:ring-1 focus:ring-[#a100fe] focus:outline-none transition-all shadow-sm"
                  />
                ))}
              </div>

              {otpErrorMessage && <p className="text-red-500 text-xs text-center font-medium">{otpErrorMessage}</p>}

              <button
                onClick={handleOtpSubmit}
                disabled={optLoader || otp.join('').length !== 6}
                className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg text-white font-medium text-sm bg-[#a100fe] hover:bg-[#8e00e0] transition-colors shadow disabled:opacity-60"
              >
                {optLoader ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify Code"}
              </button>

              <div className="text-center mt-4 text-sm">
                <span className="text-gray-500">Didn't receive the email? </span>
                {timer > 0 ? (
                  <span className="text-gray-400 font-medium ml-1">Resend in {timer}s</span>
                ) : (
                  <button 
                    onClick={sendOtpToEmail} 
                    className="text-[#a100fe] font-medium hover:underline ml-1"
                  >
                    Click to resend
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Reset Password */}
          {showPasswordReset && (
            <form onSubmit={handlePasswordReset} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="pl-10 pr-10 block w-full rounded-lg border border-gray-300 p-2.5 text-sm shadow-sm focus:border-[#a100fe] focus:ring-1 focus:ring-[#a100fe] focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="pl-10 pr-10 block w-full rounded-lg border border-gray-300 p-2.5 text-sm shadow-sm focus:border-[#a100fe] focus:ring-1 focus:ring-[#a100fe] focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {errorMessage && <p className="text-red-500 text-xs text-center font-medium">{errorMessage}</p>}

              <button
                type="submit"
                disabled={passwordLoader || !newPassword || !confirmPassword}
                className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg text-white font-medium text-sm bg-[#a100fe] hover:bg-[#8e00e0] transition-colors shadow disabled:opacity-60"
              >
                {passwordLoader ? <Loader2 className="w-5 h-5 animate-spin" /> : "Reset password"}
              </button>
            </form>
          )}

          {/* Back to Login Link */}
          <div className="mt-8 text-center">
            <Link href="/login" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#a100fe] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
