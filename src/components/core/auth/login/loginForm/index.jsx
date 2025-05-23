"use client";
import React from "react";
import LoginBanner from "@/components/ui/banner";
import { Button, Checkbox, Input } from "@/components/ui";
import Image from "next/image";
import { ICONS } from "@/_lib/constant/assets/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/lib/schema";

export default function LoginForm() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log("errors=========", errors);

  return (
    <>
      <div className="grid grid-cols gap-[40px]">
        <LoginBanner />
        <div className="grid place-items-center gap-[24px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Sign In
          </h2>
          <p className="text-gray-600">
            Don’t have an account yet?{" "}
            <Link href="/signup" className="text-teal-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-10">
              {/* Email Field */}
              <Controller
                name="email"
                control={control}
                defaultValue=""
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

              <div className="grid gap-10">
                {/* Password Field */}
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Password"
                      id="password"
                      placeholder="Enter your Password here"
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

                <div className="flex items-center justify-between text-sm">
                  <Checkbox id="remember" label="Remember me" />
                  <Link
                    href="#"
                    className="text-red-500 text-right hover:underline font-normal"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <Button
                  type="submit"
                  variant="secondary"
                  size="sm"
                  className="md:min-w-[416px] max-w-full text-lg"
                >
                  LogIn
                </Button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="lg:w-[310px] w-full">
                  <div className="h-[1px] bg-[#BCBCBC] rounded-md"></div>
                </div>
                <div className="text-gray-500 min-w-[95px] flex justify-center">
                  Or
                </div>
                <div className="lg:w-[310px] w-full">
                  <div className="h-[1px] bg-[#BCBCBC] "></div>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <Button
                  variant="default"
                  type="button"
                  size="sm"
                  className="lg:min-w-[340px] text-sm md:text-base whitespace-normal"
                  onClick={() => router.push("/home")}
                >
                  Continue as a Guest Account
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
