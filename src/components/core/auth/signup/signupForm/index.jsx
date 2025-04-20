import React from "react";
import LoginBanner from "../../../../ui/banner";
import { Button, Checkbox, Input } from "@/components/ui";
import Image from "next/image";
import { ICONS } from "@/_lib/constant/assets/icons";

export default function SignUpForm() {
  const handleSignup = (e) => {
    e.preventDefault();
    router.push("/home");
  };
  return (
    <>
      <div className="grid grid-cols gap-[40px]">
        <LoginBanner />
        <div className="grid place-items-center gap-[24px]">
          <h2 className="text-[32px] font-semibold">Create Your Account</h2>
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-teal-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
        <div>
          <form>
            <div className="grid gap-10">
              <div className="grid gap-10 grid-cols-2">
                <Input
                  label="First Name "
                  id="firstname"
                  placeholder="Enter your First name here"
                  type="text"
                  icon={
                    <Image
                      src={ICONS.user.path}
                      alt={ICONS.user.alt}
                      width={16}
                      height={18}
                    />
                  }
                />
                <Input
                  label="Last Name "
                  id="lastname"
                  placeholder="Enter your Last name here"
                  type="text"
                  icon={
                    <Image
                      src={ICONS.user.path}
                      alt={ICONS.user.alt}
                      width={16}
                      height={18}
                    />
                  }
                />
              </div>

              <div className="grid gap-10 grid-cols-2">
                <Input
                  label="Email address "
                  id="email"
                  placeholder="Enter your email address here"
                  type="email"
                  required
                  icon={
                    <Image
                      src={ICONS.email.path}
                      alt={ICONS.email.alt}
                      width={19}
                      height={15}
                    />
                  }
                />
                <Input
                  label="Contact Name "
                  id="coontact"
                  placeholder="Enter your contact number here"
                  type="tel"
                  icon={
                    <Image
                      src={ICONS.phone.path}
                      alt={ICONS.phone.alt}
                      width={12}
                      height={22}
                    />
                  }
                />
              </div>
              <div className="grid gap-10 grid-cols-2">
                <Input
                  label="Password "
                  id="email"
                  placeholder="Enter your password here"
                  type="password"
                  icon={
                    <Image
                      src={ICONS.password.path}
                      alt={ICONS.password.alt}
                      width={15}
                      height={17}
                    />
                  }
                />
                <Input
                  label="Confirm Password "
                  id="confirmpassword"
                  placeholder="Re-write your password here"
                  type="password"
                  icon={
                    <Image
                      src={ICONS.password.path}
                      alt={ICONS.password.alt}
                      width={15}
                      height={17}
                    />
                  }
                />
              </div>
              <Checkbox
                id="remember"
                label="I agree to all the Terms and Privacy Policies"
              />
              <div className="w-full flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="sm"
                  className="min-w-[416px] max-w-full  text-lg"
                  onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
