import { useState } from 'react';
import { useNavigate } from 'react-router';

import { FcGoogle } from 'react-icons/fc';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import { IoEyeSharp } from 'react-icons/io5';

import FloatingPreview from '../../../components/landing/ui/FloatingPreview';
import axiosInstance from '../../../lib/axios';

export default function AuthenticationPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend validation
    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      setLoading(true);

      const endpoint = mode === 'signin' ? '/auth/signin' : '/auth/signup';

      // Clean payload
      const payload =
        mode === 'signin'
          ? {
              email: formData.email,
              password: formData.password,
            }
          : {
              fullName: formData.fullName,
              email: formData.email,
              password: formData.password,
            };

      const response = await axiosInstance.post(endpoint, payload);

      // Store token
      localStorage.setItem('token', response.data.token);

      console.log(response.data);

      // Redirect
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] grid lg:grid-cols-[0.9fr_1.1fr]">
      {/* LEFT */}
      <div className="flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-10">
            <h2 className="font-['Fraunces'] text-[1.8rem] text-[#E8DCC8] -ml-1 mb-12">
              Quillr
            </h2>

            <h1 className="text-3xl font-semibold text-[#E8DCC8]">
              {mode === 'signin' ? 'Welcome back' : 'Create your account'}
            </h1>

            <p className="text-[#8A8070] leading-7 text-[15px] mt-2">
              {mode === 'signin'
                ? 'Sign in to continue writing with Quillr'
                : 'Start writing faster with AI-powered workflows'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            {mode === 'signup' && (
              <div className="space-y-2">
                <label className="text-sm text-[#8A8070]">Full name</label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    w-full
                    bg-[#1D1D1D]
                    border
                    border-[#2A2A2A]
                    rounded-2xl
                    px-4
                    py-3
                    text-[#E8DCC8]
                    placeholder:text-[#666666]
                    outline-none
                    focus:border-[#D97B3A]
                    transition-colors
                  "
                />
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm text-[#8A8070]">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                className="
                  w-full
                  bg-[#1D1D1D]
                  border
                  border-[#2A2A2A]
                  rounded-2xl
                  px-4
                  py-3
                  text-[#E8DCC8]
                  placeholder:text-[#666666]
                  outline-none
                  focus:border-[#D97B3A]
                  transition-colors
                "
              />
            </div>

            {/* Password */}
            <div className="space-y-2 relative">
              <label className="text-sm text-[#8A8070]">Password</label>

              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="
                  w-full
                  bg-[#1D1D1D]
                  border
                  border-[#2A2A2A]
                  rounded-2xl
                  px-4
                  py-3
                  text-[#E8DCC8]
                  placeholder:text-[#666666]
                  outline-none
                  focus:border-[#D97B3A]
                  transition-colors
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="
                  absolute
                  right-3
                  top-[42px]
                  text-white/40
                  hover:text-white/70
                "
              >
                {showPassword ? (
                  <HiMiniEyeSlash size={20} />
                ) : (
                  <IoEyeSharp size={20} />
                )}
              </button>
            </div>

            {/* Confirm Password */}
            {mode === 'signup' && (
              <div className="space-y-2 relative">
                <label className="text-sm text-[#8A8070]">
                  Confirm password
                </label>

                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="
                    w-full
                    bg-[#1D1D1D]
                    border
                    border-[#2A2A2A]
                    rounded-2xl
                    px-4
                    py-3
                    text-[#E8DCC8]
                    placeholder:text-[#666666]
                    outline-none
                    focus:border-[#D97B3A]
                    transition-colors
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((p) => !p)}
                  className="
                    absolute
                    right-3
                    top-[42px]
                    text-white/40
                    hover:text-white/70
                  "
                >
                  {showConfirmPassword ? (
                    <HiMiniEyeSlash size={20} />
                  ) : (
                    <IoEyeSharp size={20} />
                  )}
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-[#D97B3A]
                hover:bg-[#E8924F]
                disabled:opacity-70
                disabled:cursor-not-allowed
                text-[#141414]
                font-medium
                py-3
                rounded-2xl
                transition-colors
                mt-2
                cursor-pointer
              "
            >
              {loading
                ? 'Please wait...'
                : mode === 'signin'
                  ? 'Sign in'
                  : 'Create account'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 py-8">
            <div className="h-px bg-[#2A2A2A] flex-1" />

            <span className="text-sm text-[#6F675C]">or</span>

            <div className="h-px bg-[#2A2A2A] flex-1" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="
              w-full
              border
              border-[#2A2A2A]
              py-3
              text-[#E8DCC8]
              hover:border-[#D97B3A]
              transition-colors
              cursor-pointer
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
            "
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Switch mode */}
          <p className="text-sm text-[#8A8070] text-center mt-8">
            {mode === 'signin' ? "Don't have an account?" : 'Already writing?'}

            <button
              type="button"
              onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
              className="
                ml-2
                text-[#D97B3A]
                hover:text-[#E8924F]
                transition-colors
                cursor-pointer
              "
            >
              {mode === 'signin' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex items-center justify-center px-10 border-l border-[#2A2A2A]">
        <div className="w-full max-w-[540px]">
          <FloatingPreview />
        </div>
      </div>
    </div>
  );
}
