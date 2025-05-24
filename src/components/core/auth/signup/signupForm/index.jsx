"use client";
import React from "react";
import LoginBanner from "@/components/ui/banner";
import { Button, Checkbox, Input } from "@/components/ui";
import Image from "next/image";
import { ICONS } from "@/_lib/constant/assets/icons";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/lib/schema";

export default function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      password: "",
      confirmpassword: "",
      terms: false,
    },
  });

  const onSubmit = (data) => {
    // handle signup logic here
    router.push("/home");
  };

  return (
    <>
      <div className="grid grid-cols gap-[40px]">
        <LoginBanner />
        <div className="grid place-items-center gap-[24px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Create Your Account
          </h2>
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-teal-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-10">
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                {/* First Name */}
                <Controller
                  name="firstname"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="First Name"
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
                      error={errors.firstname?.message}
                    />
                  )}
                />
                {/* Last Name */}
                <Controller
                  name="lastname"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Last Name"
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
                      error={errors.lastname?.message}
                    />
                  )}
                />
              </div>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                {/* Email */}
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Email address"
                      id="email"
                      placeholder="Enter your email address here"
                      type="email"
                      icon={
                        <Image
                          src={ICONS.email.path}
                          alt={ICONS.email.alt}
                          width={19}
                          height={15}
                        />
                      }
                      error={errors.email?.message}
                    />
                  )}
                />
                {/* Contact */}
                <Controller
                  name="contact"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Contact Number"
                      id="contact"
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
                      error={errors.contact?.message}
                    />
                  )}
                />
              </div>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                {/* Password */}
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Password"
                      id="password"
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
                      error={errors.password?.message}
                    />
                  )}
                />
                {/* Confirm Password */}
                <Controller
                  name="confirmpassword"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Confirm Password"
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
                      error={errors.confirmpassword?.message}
                    />
                  )}
                />
              </div>
              <Controller
                name="terms"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    id="remember"
                    label="I agree to all the Terms and Privacy Policies"
                  />
                )}
              />
              <div className="w-full flex items-center justify-center">
                <Button
                  type="submit"
                  variant="secondary"
                  size="sm"
                  className="md:min-w-[416px] max-w-full text-lg"
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
