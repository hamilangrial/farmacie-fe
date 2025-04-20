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
import {
  PlusIcon,
  ChevronRightIcon,
  MailIcon,
  PhoneIcon,
  PencilIcon,
  MapPinIcon,
  LockIcon,
  UserIcon,
} from "lucide-react";
import { IMAGES } from "@/_lib/constant/assets/images";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { countries } from "countries-list";
import { shippingSchema } from "@/lib/schema";

// Convert countries list to options format for react-select
const countryOptions = Object.entries(countries).map(([code, country]) => ({
  value: code,
  label: country.name,
  flag: country.emoji,
}));

const Checkout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CartHeader />
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
        <ShippingAddress />
        <OrderSummary />
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
            <BreadcrumbPage>Billing</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

// Shipping Address Component
const ShippingAddress = () => {
  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      firstName: "Giovanni",
      lastName: "Rossi",
      address: "1234 Via Roma, Apartment 5A",
      city: "Rome",
      state: "Lazio",
      zip: "00100",
      country: "IT",
      email: "giovanni.rossi@email.com",
      phone: "+39123456789",
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(shippingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  const handleEdit = (address) => {
    setEditingAddress(address);
    setShowForm(true);

    // Populate form with address data
    Object.keys(address).forEach((key) => {
      setValue(key, address[key]);
    });
  };

  const onSubmit = (data) => {
    if (editingAddress) {
      // Update existing address
      setSavedAddresses(
        savedAddresses.map((addr) =>
          addr.id === editingAddress.id ? { ...data, id: addr.id } : addr
        )
      );
    } else {
      // Add new address
      const newAddress = {
        id: savedAddresses.length + 1,
        ...data,
      };
      setSavedAddresses([...savedAddresses, newAddress]);
    }
    setSelectedAddress(editingAddress?.id || savedAddresses.length + 1);
    setShowForm(false);
    setEditingAddress(null);
    reset();
  };

  return (
    <div className="flex-1 bg-white shadow-md rounded-2xl p-6">
      {/* Shipping Address Section */}
      <div>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Shipping Address
            </h2>
          </div>

          {/* Warning Message */}
          <p className="text-sm text-red-500">
            * Using your saved address? Double-check for accuracy to ensure
            seamless service!
          </p>

          {/* Saved Addresses */}
          <div className="space-y-4">
            {savedAddresses.map((address) => (
              <div
                key={address.id}
                className={`relative shadow-lg rounded-t-sm cursor-pointer transition-all`}
                onClick={() => setSelectedAddress(address.id)}
              >
                {/* Main Content Container */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start">
                    {/* Radio Button */}
                    <div className="mt-1">
                      <input
                        type="radio"
                        className="w-5 h-5 accent-[#26C0AB]"
                        checked={selectedAddress === address.id}
                        onChange={() => setSelectedAddress(address.id)}
                      />
                    </div>

                    {/* Address Details */}
                    <div className="flex-1 ml-4 sm:ml-6">
                      <h3 className="font-medium text-gray-900 text-[15px] pr-12">
                        {address.firstName} {address.lastName}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 break-words">
                        {address.address}, {address.city}, {address.state},{" "}
                        {address.zip}, {address.country}
                      </p>
                    </div>

                    {/* Edit Button */}
                    <button
                      className="absolute top-4 sm:top-5 right-4 sm:right-5 bg-[#26C0AB] text-white p-1.5 rounded-full hover:bg-opacity-90 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(address);
                      }}
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Contact Info Footer */}
                <div className="bg-[#01C9A7] rounded-b-sm">
                  <div className="px-4 sm:px-6 py-3 ml-9 sm:ml-11">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-white">
                      {/* Email */}
                      <div className="flex items-center text-sm truncate">
                        <MailIcon className="min-w-4 w-4 h-4 mr-2" />
                        <span className="truncate">{address.email}</span>
                      </div>
                      {/* Phone */}
                      <div className="flex items-center text-sm truncate">
                        <PhoneIcon className="min-w-4 w-4 h-4 mr-2" />
                        <span className="truncate">{address.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Address Button */}
          {!showForm && (
            <button
              className="w-full py-3.5 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-[#26C0AB] hover:text-[#26C0AB] transition-colors text-[15px] mt-4"
              onClick={() => {
                setShowForm(true);
                setEditingAddress(null);
                reset();
              }}
            >
              Add New Address
            </button>
          )}

          {/* Form with Controllers */}
          {showForm && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6">
              <h2 className="text-lg font-semibold text-gray-900">
                {editingAddress ? "Edit Address" : "Add New Address"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    First Name
                  </label>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          {...field}
                          className="w-full px-4 py-2.5 pl-12 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB] text-[15px]"
                          placeholder="Enter receiver's first name here"
                        />
                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#26C0AB]" />
                      </div>
                    )}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          {...field}
                          className="w-full px-4 py-2.5 pl-12 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB] text-[15px]"
                          placeholder="Enter receiver's last name here"
                        />
                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#26C0AB]" />
                      </div>
                    )}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact and Email/Country Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Input with OTP */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Contact Number
                  </label>
                  <Controller
                    name="contactNumber"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <div className="relative">
                        <PhoneInput
                          country={"it"}
                          value={value}
                          onChange={(phone) => onChange(phone)}
                          inputStyle={{
                            width: "100%",
                            height: "45px",
                            fontSize: "15px",
                            borderRadius: "9999px",
                            backgroundColor: "#FCFCFC",
                            paddingLeft: "48px",
                            paddingRight: "100px",
                            border: "none",
                            boxShadow: "none",
                            outline: "none",
                          }}
                          buttonStyle={{
                            border: "none",
                            borderRadius: "9999px",
                            backgroundColor: "#FCFCFC",
                            padding: "0 8px",
                            left: "4px",
                          }}
                          containerClass="rounded-full bg-[#FCFCFC]"
                          inputClass="focus:ring-0 focus:outline-none"
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#26C0AB] text-white rounded-full text-sm hover:bg-opacity-90 transition-colors"
                          onClick={() => {
                            /* Handle OTP generation */
                          }}
                        >
                          Generate OTP
                        </button>
                      </div>
                    )}
                  />
                  {errors.contactNumber && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.contactNumber.message}
                    </p>
                  )}
                </div>

                {/* OTP Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    OTP
                  </label>
                  <Controller
                    name="otp"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          {...field}
                          className="w-full px-4 py-2.5 pl-12 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB] text-[15px]"
                          placeholder="Enter 4-digit OTP"
                          maxLength={4}
                        />
                        <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#26C0AB]" />
                      </div>
                    )}
                  />
                  {errors.otp && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.otp.message}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email ID (Optional)
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          {...field}
                          className="w-full px-4 py-2.5 pl-12 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB] text-[15px]"
                          placeholder="Enter your email address here"
                        />
                        <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#26C0AB]" />
                      </div>
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Country/Region Select */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Country/Region
                  </label>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        value={countryOptions.find(
                          (option) => option.value === value
                        )}
                        onChange={(selectedOption) =>
                          onChange(selectedOption.value)
                        }
                        options={countryOptions}
                        placeholder="Select country"
                        className="text-[15px]"
                        styles={{
                          control: (base) => ({
                            ...base,
                            minHeight: "42px",
                            border: "none",
                            borderRadius: "9999px",
                            backgroundColor: "#FCFCFC",
                            boxShadow: "none",
                            "&:hover": {
                              border: "none",
                            },
                          }),
                          input: (base) => ({
                            ...base,
                            margin: 0,
                            padding: "0 8px",
                          }),
                          valueContainer: (base) => ({
                            ...base,
                            padding: "0 16px",
                          }),
                          dropdownIndicator: (base) => ({
                            ...base,
                            padding: "0 16px",
                          }),
                          option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isSelected
                              ? "#26C0AB"
                              : base.backgroundColor,
                            "&:hover": {
                              backgroundColor: "#26C0AB20",
                            },
                          }),
                          menu: (base) => ({
                            ...base,
                            overflow: "hidden",
                            borderRadius: "16px",
                            border: "none",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                          }),
                        }}
                        formatOptionLabel={({ label, flag }) => (
                          <div className="flex items-center">
                            <span className="mr-2">{flag}</span>
                            <span>{label}</span>
                          </div>
                        )}
                      />
                    )}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Apartment & Street Address
                </label>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <input
                        {...field}
                        className="w-full px-4 py-2.5 pl-12 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB] text-[15px]"
                        placeholder="Enter receiver's complete apartment and street address here"
                      />
                      <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#26C0AB]" />
                    </div>
                  )}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1.5">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    City
                  </label>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          {...field}
                          className="w-full px-4 py-2.5 pl-12 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB] text-[15px]"
                          placeholder="City Name"
                        />
                        <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#26C0AB]" />
                      </div>
                    )}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.city.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    State
                  </label>
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          {...field}
                          className="w-full px-4 py-2.5 pl-12 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB] text-[15px]"
                          placeholder="State Name"
                        />
                        <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#26C0AB]" />
                      </div>
                    )}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.state.message}
                    </p>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    ZIP
                  </label>
                  <Controller
                    name="zip"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          {...field}
                          className="w-full px-4 py-2.5 pl-12 bg-[#FCFCFC] rounded-full focus:outline-none focus:ring-1 focus:ring-[#26C0AB] text-[15px]"
                          placeholder="ZIP or Postal Code"
                        />
                        <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#26C0AB]" />
                      </div>
                    )}
                  />
                  {errors.zip && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.zip.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingAddress(null);
                    reset();
                  }}
                  className="flex-1 py-3 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 transition-colors text-[15px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#26C0AB] text-white rounded-full hover:bg-opacity-90 transition-colors text-[15px]"
                >
                  {editingAddress ? "Update Address" : "Save & Use Address"}
                </button>
              </div>
            </form>
          )}
          <Payment />
        </div>
      </div>

      {/* Phone Input Custom Styles */}
      <style jsx global>{`
        .react-tel-input .form-control {
          border: none !important;
          box-shadow: none !important;
          outline: none !important;
        }
        .react-tel-input .form-control:focus,
        .react-tel-input .form-control:hover {
          border: none !important;
          box-shadow: none !important;
          outline: none !important;
        }
        .react-tel-input .flag-dropdown {
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
        }
        .react-tel-input .selected-flag {
          background: transparent !important;
          border: none !important;
        }
        .react-tel-input .selected-flag:hover,
        .react-tel-input .selected-flag:focus,
        .react-tel-input .selected-flag.open {
          background: transparent !important;
          border: none !important;
        }
        @media (max-width: 640px) {
          .truncate {
            max-width: 200px;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .truncate {
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

// Add payment methods data
const paymentMethods = [
  {
    id: "pharmacy",
    title: "Pay on Pharmacy",
    description: "Collect from Pharmacy",
  },
  {
    id: "digital",
    title: "Digital Payment Method",
    description: "Pay securely online",
  },
];

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("digital");

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Payment Method
      </h2>

      <p className="text-sm text-red-500 mb-4">
        * Choose your preferred payment option. Pay directly at the pharmacy or
        proceed to secure digital payment through trusted platforms. Your
        transaction is safe and hassle-free!
      </p>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`relative p-4 cursor-pointer transition-all shadow-lg`}
            onClick={() => setPaymentMethod(method.id)}
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <input
                  type="radio"
                  id={method.id}
                  name="paymentMethod"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5 accent-[#26C0AB]"
                />
              </div>
              <div className="ml-6">
                <label
                  htmlFor={method.id}
                  className="font-medium text-gray-900 text-[15px] block"
                >
                  {method.title}
                </label>
                <p className="text-sm text-gray-500 mt-1">
                  {method.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// OrderSummary Component
const OrderSummary = () => {
  const router = useRouter();
  return (
    <div className="w-full lg:w-[400px] shadow-md h-fit rounded-2xl">
      <div className="bg-white rounded-2xl p-4 sm:p-6">
        <span className="flex items-center justify-center bg-[#26C0AB] py-2 md:py-4 mb-6 rounded-md">
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Order Summary
          </h2>
        </span>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex justify-between text-gray-700 bg-gray-50 rounded-full px-3 sm:px-4 py-2">
            <span className="text-[14px] sm:text-[15px]">Total Products</span>
            <span className="text-[14px] sm:text-[15px]">13</span>
          </div>
          <div className="flex justify-between text-gray-700 bg-gray-50 rounded-full px-3 sm:px-4 py-2">
            <span className="text-[14px] sm:text-[15px]">Products Cost</span>
            <span className="text-[14px] sm:text-[15px]">480.53 €</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-between bg-gray-50 rounded-full px-3 sm:px-4 py-2 gap-2">
              <span className="text-gray-700 text-[14px] sm:text-[15px] min-w-[70px]">
                Discount
              </span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] min-w-[40px]">
                0 €
              </span>
            </span>
            <div className="flex-1">
              <div className="relative bg-gray-50 rounded-full p-1.5">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="w-full rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#26C0AB] placeholder:text-gray-400 pr-12"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#26C0AB] rounded-full text-white hover:bg-opacity-90 transition-colors flex items-center p-1 justify-center w-6 h-6">
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-gray-700 bg-gray-50 rounded-full px-3 sm:px-4 py-2">
            <span className="text-[14px] sm:text-[15px]">Shipping charges</span>
            <span className="text-[14px] sm:text-[15px]">5 €</span>
          </div>
          <div className="flex justify-between text-gray-700 bg-gray-50 rounded-full px-3 sm:px-4 py-2">
            <span className="text-[14px] sm:text-[15px]">Tax / VAT</span>
            <span className="text-[14px] sm:text-[15px]">5 €</span>
          </div>
          <div className="flex justify-between text-lg sm:text-xl font-semibold text-gray-900 pt-4 pb-2">
            <span>Subtotal</span>
            <span>485.53 €</span>
          </div>
          <div className="flex gap-4">
            <button
              className="cursor-pointer w-full bg-none border border-gray-300 text-gray-700 py-1.5 sm:py-2 rounded-full hover:bg-opacity-90 transition-colors font-medium text-[14px] sm:text-[15px]"
              onClick={() => router.push("/")}
            >
              Cancel
            </button>
            <button
              className="cursor-pointer w-full bg-[#26C0AB] text-white py-1.5 sm:py-2 rounded-full hover:bg-opacity-90 transition-colors font-medium text-[14px] sm:text-[15px]"
              onClick={() => router.push("/")}
            >
              Place Order
            </button>
          </div>
          <div className="mt-4 sm:mt-6">
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
              Accepted Secure Payment Methods
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-[20px] sm:h-[25px] w-[32px] sm:w-[40px] relative">
                <Image
                  src={IMAGES.visa.path}
                  alt="Visa"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-[20px] sm:h-[25px] w-[32px] sm:w-[40px] relative">
                <Image
                  src={IMAGES.visa.path}
                  alt="American Express"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-[20px] sm:h-[25px] w-[32px] sm:w-[40px] relative">
                <Image
                  src={IMAGES.visa.path}
                  alt="Mastercard"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-[20px] sm:h-[25px] w-[32px] sm:w-[40px] relative">
                <Image
                  src={IMAGES.visa.path}
                  alt="PayPal"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-[20px] sm:h-[25px] w-[32px] sm:w-[40px] relative">
                <Image
                  src={IMAGES.visa.path}
                  alt="Discover"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
