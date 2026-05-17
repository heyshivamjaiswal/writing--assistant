import { useState } from 'react';
import FloatingPreview from '../../../components/landing/ui/FloatingPreview';

export default function AuthenticationPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    userName: '',
    password: '',
    showPassword: '',
  });

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

            <p className="text-[#8A8070] leading-7 text-[15px]">
              {mode === 'signin'
                ? 'Sign in to continue writing with Quillr'
                : 'Start writing faster with AI-powered workflows'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            {mode === 'signup' && (
              <div className="space-y-2">
                <label className="text-sm text-[#8A8070]">Full name</label>

                <input
                  type="text"
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
            <div className="space-y-2">
              <label className="text-sm text-[#8A8070]">Password</label>

              <input
                type="password"
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
            </div>

            {/* Confirm Password */}
            {mode === 'signup' && (
              <div className="space-y-2">
                <label className="text-sm text-[#8A8070]">
                  Confirm password
                </label>

                <input
                  type="password"
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
              </div>
            )}

            {/* Submit */}
            <button
              className="
                w-full
                bg-[#D97B3A]
                hover:bg-[#E8924F]
                text-[#141414]
                font-medium
                py-3
                rounded-2xl
                transition-colors
                mt-2
                cursor-pointer
              "
            >
              {mode === 'signin' ? 'Sign in' : 'Create account'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 py-8">
            <div className="h-px bg-[#2A2A2A] flex-1" />

            <span className="text-sm text-[#6F675C]">or</span>
            <div className="h-px bg-[#2A2A2A] flex-1" />
          </div>
          {/* Google button */}
          <button className="w-full border border-[#2A2A2A] py-3 text-[#E8DCC8] hover:border-[#D97B3A] transition-colors cursor-pointer">
            Continue with google
          </button>
          {/* Switch Mode */}
          <p className="text-sm text-[#8A8070] text-center mt-8">
            {mode === 'signin' ? "Don't have an account" : 'Already writing?'}
            <button
              type="button"
              onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
              className="ml-2 text-[#D97B3A] hover:text-[#E8924F] transition-colors cursor-pointer"
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
