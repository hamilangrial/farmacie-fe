"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { IMAGES } from "@/_lib/constant/assets/images";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  User,
  Mail,
  Lock,
  UserCircle,
  KeyRound,
  Video,
  Calendar,
  Trash2,
  Eye,
  EyeOff,
  ChevronLeft,
} from "lucide-react";
import { changePasswordSchema, editProfileSchema } from "@/lib/schema";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MyAccount = () => {
  const [currentView, setCurrentView] = useState("profile");

  return (
    <div className="flex flex-col min-h-screen">
      <CartHeader />
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
        <div className="flex-1 bg-white shadow-md rounded-2xl p-6">
          {/* Profile Header - Always Visible */}
          <div className="bg-white rounded-2xl overflow-hidden mb-6">
            {/* Banner */}
            <div className="h-48 bg-gradient-to-r from-[#01C9A7] to-[#0A8EA5]" />

            {/* Profile Content */}
            <div className="px-6 pb-6 flex flex-col items-center justify-center">
              {/* Profile Image */}
              <div className="relative -mt-20 mb-4">
                <Image
                  src={IMAGES.profile.path}
                  alt={IMAGES.profile.alt}
                  width={120}
                  height={120}
                  className="rounded-full border-8 border-white shadow-lg"
                />
              </div>

              {/* User Info */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Giovanni Russo
                </h1>
                <div className="flex flex-col md:flex-row gap-2 mt-2 text-gray-600">
                  <p>giovanni-russo123@email.com</p>
                  <p className="hidden md:block">|</p>
                  <p>+39 123 456879</p>
                </div>
              </div>

              {/* Join Info */}
              <div className="flex justify-center gap-8">
                <div className="flex flex-col md:flex-row items-center justify-center text-center">
                  <p className="font-medium">Joined since:</p>
                  <p className="text-sm text-gray-500 ps-3">October 18, 2024</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center text-center">
                  <p className="font-medium ">Total Orders:</p>
                  <p className="text-sm text-gray-500 ps-3">5 Orders Yet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          {currentView === "profile" && (
            <ProfileOptions
              onEditClick={() => setCurrentView("edit")}
              onPasswordClick={() => setCurrentView("password")}
            />
          )}
          {currentView === "edit" && (
            <EditProfileForm onBack={() => setCurrentView("profile")} />
          )}
          {currentView === "password" && (
            <ChangePasswordForm onBack={() => setCurrentView("profile")} />
          )}
        </div>
      </div>
    </div>
  );
};

// CartHeader Component
const CartHeader = () => {
  return (
    <div className="px-3 sm:px-4 ms-2 sm:ms-6 py-2 bg-white w-fit shadow-xs rounded-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/shop">Shop</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>My Account</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

const ProfileOptions = ({ onEditClick, onPasswordClick }) => {
  return (
    <div className="bg-white rounded-2xl p-1 md:p-6 space-y-3">
      <button
        onClick={onEditClick}
        className="w-full py-3.5 px-4 bg-white shadow-sm rounded-sm text-left font-medium hover:bg-gray-50 transition-colors flex items-center gap-3"
      >
        <UserCircle className="w-5 h-5 text-gray-500" />
        Edit Profile
      </button>
      <button
        onClick={onPasswordClick}
        className="w-full py-3.5 px-4 bg-white shadow-sm rounded-sm text-left font-medium hover:bg-gray-50 transition-colors flex items-center gap-3"
      >
        <KeyRound className="w-5 h-5 text-gray-500" />
        Change Password
      </button>
      <button className="w-full py-3.5 px-4 bg-white shadow-sm rounded-sm text-left font-medium hover:bg-gray-50 transition-colors flex items-center gap-3">
        <Video className="w-5 h-5 text-gray-500" />
        Video Booking Schedule
      </button>
      <button className="w-full py-3.5 px-4 bg-white shadow-sm rounded-sm text-left font-medium hover:bg-gray-50 transition-colors flex items-center gap-3">
        <Calendar className="w-5 h-5 text-gray-500" />
        Service Appointment
      </button>
      <button className="w-full py-3.5 px-4 bg-white shadow-sm rounded-sm text-left font-medium text-red-500 hover:bg-red-50 transition-colors flex items-center gap-3">
        <Trash2 className="w-5 h-5" />
        Delete Account
      </button>
    </div>
  );
};

const EditProfileForm = ({ onBack }) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      firstName: "Giovanni",
      lastName: "Russo",
      email: "giovanni-russo123@email.com",
      phone: "+39 123 456879",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle API integration here
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-200 bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold">Edit Profile</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Controller
                name="firstName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <input
                      {...field}
                      className="w-full pl-12 pr-4 py-3 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB]"
                      placeholder="Enter first name"
                    />
                    {error && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Controller
                name="lastName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <input
                      {...field}
                      className="w-full pl-12 pr-4 py-3 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB]"
                      placeholder="Enter last name"
                    />
                    {error && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <input
                      {...field}
                      className="w-full pl-12 pr-4 py-3 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB]"
                      placeholder="Enter email address"
                    />
                    {error && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone Number
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <PhoneInput
                    country={"it"}
                    value={field.value}
                    onChange={(phone) => field.onChange(phone)}
                    inputClass="!w-full !pl-12 !pr-4 !py-3 !bg-[#FCFCFC] !rounded-full focus:!outline-none focus:!ring-1 focus:!ring-[#26C0AB]"
                    containerClass="!w-full"
                    buttonClass="!rounded-full !border-0 !bg-transparent"
                    inputStyle={{
                      border: "none",
                      boxShadow: "none",
                      outline: "none",
                      borderRadius: "9999px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#333",
                      backgroundColor: "#FCFCFC",
                      padding: "10px 16px",
                      transition: "all 0.2s ease-in-out",
                      width: "100%",
                      height: "48px",
                      borderRadius: "9999px",
                    }}
                  />
                  {error && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3.5 bg-[#26C0AB] text-white rounded-full hover:bg-opacity-90 transition-colors font-medium"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

const ChangePasswordForm = ({ onBack }) => {
  const { control, handleSubmit, watch } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  // Add state for password visibility
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Toggle password visibility handler
  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const onSubmit = (data) => {
    console.log(data);
    // Handle API integration here
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-200 bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold">Change Password</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Current Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Controller
              name="currentPassword"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <input
                    type={showPasswords.current ? "text" : "password"}
                    {...field}
                    className="w-full pl-12 pr-12 py-3 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB]"
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("current")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPasswords.current ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  {error && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Controller
              name="newPassword"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    {...field}
                    className="w-full pl-12 pr-12 py-3 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB]"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("new")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPasswords.new ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  {error && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Confirm New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <input
                    type={showPasswords.confirm ? "text" : "password"}
                    {...field}
                    className="w-full pl-12 pr-12 py-3 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB]"
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("confirm")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPasswords.confirm ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  {error && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3.5 bg-[#26C0AB] text-white rounded-full hover:bg-opacity-90 transition-colors font-medium"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyAccount;
