'use client';

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Eye, EyeOff, Lock, Mail, Phone, X, Loader2 } from "lucide-react";
import { getCartApi } from "../../../../api-endpoints/CartsApi";
import Link from "next/link";
import { postLoginWithGoogleApi, postSendSmsOtpUserApi, postVerifySmsOtpApi } from "../../../../api-endpoints/authendication";
import { baseUrl } from "../../../../api-endpoints/ApiUrls";
import { auth, googleProvider } from "../../../../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useVendor } from "../../../../context/VendorContext";

interface FormData {
  email: string;
  password: string;
}

function LoginModal({ open, handleClose, vendorId: propVendorId }: any) {
  const { vendorId: contextVendorId } = useVendor();
  const vendorId = propVendorId || contextVendorId || 66;

  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  const [activeTab, setActiveTab] = useState<'email' | 'otp'>('email');

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

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
      const response: any = await axios.post(`${baseUrl}/user_login/`, {
        ...data,
        vendor_id: vendorId,
      });

      if (response) {
        const uid = response?.data?.user_id || response?.data?.user?.id || response?.data?.id;
        if (uid) {
          localStorage.setItem('userId', String(uid));
        }
        if (response?.data?.name || response?.data?.user?.name) {
          localStorage.setItem('userName', response?.data?.name || response?.data?.user?.name);
        }
        if (response?.data?.email || response?.data?.user?.email) {
          localStorage.setItem('email', response?.data?.email || response?.data?.user?.email);
        }

        if (uid) {
          try {
            const updateApi = await getCartApi(`user/${uid}`);
            if (updateApi?.data?.[0]?.id) {
              localStorage.setItem('cartId', updateApi.data[0].id);
            }
          } catch (cErr) {
            console.error(cErr);
          }
        }
        handleClose();
        window.location.reload();
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
        localStorage.setItem('userId', String(userId));
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

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();

      const response: any = await postLoginWithGoogleApi({
        id_token: idToken,
        vendor_id: vendorId,
      });

      if (response) {
        const uid = response?.data?.user_id || response?.data?.user?.id || response?.data?.id;
        if (uid) {
          localStorage.setItem('userId', String(uid));
        }
        if (response?.data?.name || response?.data?.user?.name) {
          localStorage.setItem('userName', response?.data?.name || response?.data?.user?.name);
        }
        if (response?.data?.email || response?.data?.user?.email) {
          localStorage.setItem('email', response?.data?.email || response?.data?.user?.email);
        }

        if (uid) {
          try {
            const updateApi = await getCartApi(`user/${uid}`);
            if (updateApi?.data?.[0]?.id) {
              localStorage.setItem('cartId', updateApi.data[0].id);
            }
          } catch (cartErr) {
            console.error("Error syncing cart on google login:", cartErr);
          }
        }

        handleClose();
        window.location.reload();
      }
    } catch (err: any) {
      console.error("Google login error:", err);
      if (err?.code === 'auth/popup-closed-by-user') {
        setError('Login popup was closed before completing sign in.');
      } else {
        setError(err?.response?.data?.error || err?.response?.data?.message || err?.message || 'Failed to sign in with Google');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  // Don't render on server or if not open
  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[100] p-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Sign in to your account</h2>
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="p-1 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 cursor-pointer" />
          </button>
        </div>

        {/* Google SSO Button */}
        <div className="mb-5">
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading || loading}
            className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm transition-all duration-200 hover:shadow disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {googleLoading ? (
              <Loader2 className="w-5 h-5 animate-spin text-[#a100fe]" />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            )}
            <span>{googleLoading ? "Signing in with Google..." : "Continue with Google"}</span>
          </button>

          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-gray-200 w-full"></div>
            <span className="bg-white px-3 text-xs text-gray-500 font-medium uppercase tracking-wider">or</span>
            <div className="border-t border-gray-200 w-full"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-5">
          <button
            onClick={() => { setActiveTab('email'); setError(''); }}
            className={`flex-1 pb-2.5 font-medium text-sm border-b-2 text-center transition-colors ${activeTab === 'email'
              ? 'border-[#a100fe] text-[#a100fe]'
              : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
          >
            Email Login
          </button>
          <button
            onClick={() => { setActiveTab('otp'); setError(''); }}
            className={`flex-1 pb-2.5 font-medium text-sm border-b-2 text-center transition-colors ${activeTab === 'otp'
              ? 'border-[#a100fe] text-[#a100fe]'
              : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
          >
            OTP Login
          </button>
        </div>

        {activeTab === 'email' ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register('email', { required: 'Email is required' })}
                  className="pl-10 block w-full rounded-lg border border-gray-300 p-2.5 text-sm shadow-sm focus:border-[#a100fe] focus:ring-1 focus:ring-[#a100fe] focus:outline-none"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="password"
                  placeholder="Enter your password"
                  type={passwordShow ? 'text' : 'password'}
                  {...register('password', { required: 'Password is required' })}
                  className="pl-10 pr-10 block w-full rounded-lg border border-gray-300 p-2.5 text-sm shadow-sm focus:border-[#a100fe] focus:ring-1 focus:ring-[#a100fe] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {passwordShow ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-end">
              <Link href="/forgot-password" className="text-xs font-medium text-[#a100fe] hover:underline">
                Forgot your password?
              </Link>
            </div>

            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg text-white font-medium text-sm bg-[#a100fe] hover:bg-[#8e00e0] transition-colors shadow disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className="text-sm text-gray-600 text-center pt-2">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="font-medium text-[#a100fe] hover:underline">
                Create one
              </Link>
            </p>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  className="pl-10 pr-4 py-2.5 block w-full text-sm border border-gray-300 rounded-lg shadow-sm focus:border-[#a100fe] focus:ring-1 focus:ring-[#a100fe] focus:outline-none"
                />
              </div>
            </div>

            {!otpSent ? (
              <button
                type="button"
                onClick={handleSendOtp}
                disabled={loading || googleLoading}
                className="w-full bg-[#a100fe] hover:bg-[#8e00e0] text-white py-2.5 rounded-lg text-sm font-medium transition-colors shadow disabled:opacity-60"
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full px-4 py-2.5 border text-sm rounded-lg border-gray-300 focus:border-[#a100fe] focus:ring-1 focus:ring-[#a100fe] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={loading || googleLoading}
                  className="w-full bg-[#a100fe] hover:bg-[#8e00e0] text-white py-2.5 rounded-lg text-sm font-medium transition-colors shadow disabled:opacity-60"
                >
                  {loading ? 'Verifying...' : 'Verify & Login'}
                </button>
              </>
            )}
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          </div>
        )}

      </div>
    </div>,
    document.body
  );
}

export default LoginModal;


