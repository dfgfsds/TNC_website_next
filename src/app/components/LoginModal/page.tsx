'use client';

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Eye, EyeOff, Lock, Mail, Phone, X } from "lucide-react";
import { getCartApi } from "../../../../api-endpoints/CartsApi";
import Link from "next/link";
import { postSendSmsOtpUserApi, postVerifySmsOtpApi } from "../../../../api-endpoints/authendication";

interface FormData {
  email: string;
  password: string;
}

function LoginModal({ open, handleClose, vendorId }: any) {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  const [activeTab, setActiveTab] = useState<'email' | 'otp'>('email');

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState<string | null>(null);

  // Safe to use hooks here
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [open]);

  const onSubmit = async (data: FormData) => {
    try {
      const response: any = await axios.post("https://ecomapi.ftdigitalsolutions.org/user_login/", {
        ...data,
        vendor_id: vendorId,
      });

      if (response) {
        localStorage.setItem('userId', response?.data?.user_id);
        const updateApi = await getCartApi(`user/${response?.data?.user_id}`);
        if (updateApi) {
          localStorage.setItem('cartId', updateApi?.data[0]?.id);
          handleClose();
          window.location.reload();
        }
      }
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Something went wrong, please try again later');
    }
  };

  const handleSendOtp = async () => {
    setError('');
    if (!mobile) return setError('Mobile number is required');
    setLoading(true);
    try {
      const res = await postSendSmsOtpUserApi({ contact_number: mobile, vendor_id: vendorId });
      if (res?.data?.token) {
        setOtpSent(true);
        setToken(res.data.token);
      }
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await postVerifySmsOtpApi({
        otp,
        token,
        login_type: "user",
        vendor_id: vendorId,
      });

      const userId = res?.data?.user_id;
      if (userId) {
        localStorage.setItem('userId', userId);
        const cartRes = await getCartApi(`user/${userId}`);
        if (cartRes?.data?.length > 0) {
          localStorage.setItem('cartId', cartRes.data[0].id);
        }
        handleClose();
        window.location.reload();
      }
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };


  // Don't render on server or if not open
  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[100]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Sign in to your account</h2>
          <span onClick={handleClose}><X className="cursor-pointer" /></span>
        </div>
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('email')}
            className={`px-4 py-2 font-medium border-b-2 ${activeTab === 'email' ? 'border-[#a100fe] text-[#a100fe]' : 'text-gray-600 border-transparent'}`}
          >
            Email Login
          </button>
          <button
            onClick={() => setActiveTab('otp')}
            className={`px-4 py-2 font-medium border-b-2 ${activeTab === 'otp' ? 'border-[#a100fe] text-[#a100fe]' : 'text-gray-600 border-transparent'}`}
          >
            OTP Login
          </button>
        </div>

        {activeTab === 'email' ? (

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="email"
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="pl-10 block w-full rounded-md border-2 border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="password"
                  type={passwordShow ? 'text' : 'password'}
                  {...register('password', { required: 'Password is required' })}
                  className="pl-10 block w-full rounded-md border-2 border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {passwordShow ? (
                  <EyeOff onClick={() => setPasswordShow(false)} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                ) : (
                  <Eye onClick={() => setPasswordShow(true)} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                )}
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <Link href="/forgot-password" className="font-medium text-[#a100fe] hover:text-[#a100fe]">
                Forgot your password?
              </Link>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 rounded-md text-white bg-[#a100fe] "
            >
              Sign in
            </button>

            <p className="text-sm text-gray-600 text-center">
              Dont have an account?
              <Link href="/register" className="font-medium text-[#a100fe] hover:text-[#a100fe]">
                Create one
              </Link>
            </p>
          </form>
        ) : (
          <>
            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter mobile number"
                    className="pl-10 pr-4 py-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-[#a100fe] focus:ring-[#a100fe] focus:outline-none"
                  />
                </div>
              </div>

              {!otpSent ? (
                <button
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="w-full bg-[#a100fe] text-white py-2 rounded transition"
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </button>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium">Enter OTP</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={handleVerifyOtp}
                    disabled={loading}
                    className="w-full bg-[#a100fe] text-white py-2 rounded transition"
                  >
                    {loading ? 'Verifying...' : 'Verify & Login'}
                  </button>
                </>
              )}
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            </div>
          </>
        )}

      </div>
    </div>,
    document.body
  );
}

export default LoginModal;
