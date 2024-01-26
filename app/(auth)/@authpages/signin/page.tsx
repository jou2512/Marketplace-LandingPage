export const metadata = {
  title: 'Sign In - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'
import { SignInForm } from '@/components/ui/Forms/SignIn-Form';
import AuthProviderINForm from '@/components/ui/Forms/AuthProviderIN-Form';

export default function SignIn() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">
              Welcome back. We exist to make entrepreneurship easier.
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <AuthProviderINForm providers={
              [
                "google",
                "facebook",
              ]
            }/>
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-700 border-dotted grow mr-3"
                aria-hidden="true"
              ></div>
              <div className="text-gray-400">Or, sign in with your email</div>
              <div
                className="border-t border-gray-700 border-dotted grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            <SignInForm />
            <div className="text-gray-400 text-center mt-6">
              Don’t you have an account?{" "}
              <Link
                href="/signup"
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
