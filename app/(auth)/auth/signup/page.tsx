export const metadata = {
  title: 'Sign Up - Open PRO',
  description: 'Page description',
}

import { SignUpForm } from '@/components/ui/Forms/SignUp-Form';
import Link from 'next/link'
import AuthProviderForm from '@/components/ui/Forms/AuthProvider-Form';

export default function SignUp() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome. We exist to make Voiceflow easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            {/* Auth provider buttons */}
            <AuthProviderForm providers={
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
              <div className="text-gray-400">Or, register with your email</div>
              <div
                className="border-t border-gray-700 border-dotted grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            <SignUpForm />
            <div className="text-gray-400 text-center mt-6">
              Already using Open PRO?{" "}
              <Link
                href="/signin"
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
