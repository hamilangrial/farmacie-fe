"use client";
import React, { useState } from "react";
import Image from "next/image";
import { pharmacies } from "@/_lib/dumyData";

const Booking = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState(pharmacies[0]);

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <PharmacyServices
        selectedPharmacy={selectedPharmacy}
        onPharmacySelect={setSelectedPharmacy}
      />
      {selectedPharmacy && <PharmacyDetail pharmacy={selectedPharmacy} />}
    </div>
  );
};

const PharmacyServices = ({ selectedPharmacy, onPharmacySelect }) => {
  return (
    <div className="px-4 sm:px-6">
      <h1 className="text-[22px] sm:text-[28px] leading-tight font-bold text-[#1A1A1A] mb-2">
        Conveniently Book Your Pharmacy Service
      </h1>
      <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] mb-6 sm:mb-10">
        Select from our trusted pharmacies to access the services you need, when
        you need them
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
        {pharmacies.map((pharmacy) => (
          <div
            key={pharmacy.id}
            onClick={() => onPharmacySelect(pharmacy)}
            className={`group cursor-pointer ${
              selectedPharmacy?.id === pharmacy.id ? "scale-105" : ""
            }`}
          >
            <div className="relative rounded-lg overflow-hidden mb-3">
              <Image
                src={pharmacy.image}
                alt={pharmacy.name}
                width={164}
                height={140}
                className="w-full aspect-[164/140] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center">
              <span
                className={`text-sm ${
                  selectedPharmacy?.id === pharmacy.id
                    ? "text-[#00BFA5]"
                    : "text-[#1A1A1A]"
                } text-center font-medium`}
              >
                {pharmacy.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PharmacyDetail = ({ pharmacy }) => {
  const [activeTab, setActiveTab] = useState("Prenotazione");
  const [selectedService, setSelectedService] = useState(
    pharmacy?.services?.[0]
  );

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative h-[200px] sm:h-[300px] w-full">
        <Image
          src={pharmacy.bannerImage}
          alt={pharmacy.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 -mt-10 sm:-mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                {pharmacy.name}
              </h2>
              <p className="text-sm sm:text-base text-[#4A4A4A] mt-2">
                {pharmacy.hours}
              </p>
            </div>

            <BookingTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div className="lg:col-span-4 max-h-[500px] overflow-y-auto pr-4">
              <ServicesList
                services={pharmacy.services || []}
                selectedService={selectedService}
                onServiceSelect={setSelectedService}
              />
            </div>

            <div className="lg:col-span-8 max-h-[500px] overflow-y-auto pr-4">
              <ServiceDetail service={selectedService} />
            </div>
          </div>
          <LocationBar address={pharmacy.address} />
        </div>
      </div>
    </div>
  );
};

const ServicesList = ({ services, selectedService, onServiceSelect }) => {
  return (
    <>
      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
        Services
      </h3>
      <div className="flex flex-col gap-3 sm:gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => onServiceSelect(service)}
            className={`flex items-center gap-4 px-4 py-2 rounded-full cursor-pointer transition-all ${
              selectedService?.id === service.id
                ? "bg-white shadow-sm border-l-2 border-[#00BFA5]"
                : "bg-[#FCFCFC]"
            }`}
          >
            <Image
              src={service.image}
              alt={service.name}
              width={60}
              height={60}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-lg object-cover"
            />
            <span className="text-sm font-medium flex-1">{service.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

const ServiceDetail = ({ service }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image
        src={service.image}
        alt={service.name}
        width={800}
        height={400}
        className="w-full h-[200px] sm:h-[300px] object-cover rounded-lg"
      />
      <div className="mt-4 sm:mt-6">
        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          {service.name}
        </h4>
        <p className="text-sm sm:text-base text-[#4A4A4A] mb-6 sm:mb-8">
          {service.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <span className="text-xl sm:text-2xl font-bold text-[#00BFA5]">
            {service.price} €
          </span>
          <button className="w-full sm:w-auto bg-[#00BFA5] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingTabs = ({ activeTab, onTabChange }) => {
  const tabs = ["Prenotazione", "Senza Prenotazione"];

  return (
    <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex-1 sm:flex-none px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab
              ? "bg-[#00BFA5] text-white"
              : "bg-[#F5F5F5] text-[#1A1A1A]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const LocationBar = ({ address }) => {
  return (
    <div className="bg-[#F8FBFF] mt-6 sm:mt-8 py-3 sm:py-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFA5]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm sm:text-base text-[#4A4A4A]">{address}</span>
        </div>
        <button className="w-full sm:w-auto bg-[#15A69A] text-white px-4 sm:px-6 py-2 rounded-full text-sm">
          Schedule Free Video Call
        </button>
      </div>
    </div>
  );
};

export default Booking;
