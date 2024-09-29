"use client";

import FAQSections from "@/components/Home/FAQSection";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import React from "react";

export default function Pricing() {
  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content">
        <div className="overflow-hidden">
          <Header />

          {/* Hero */}
          <div className="relative">
            {/* Gradients */}
            <div
              aria-hidden="true"
              className="flex -z-[1] absolute -top-48 start-0"
            >
              <div className="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
              <div className="bg-gray-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-neutral-800/60"></div>
            </div>
            {/* End Gradients */}

            <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
              {/* Title */}
              <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">
                  Simple, transparent pricing
                </h2>
                <p className="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">
                  Whatever your status, our offers evolve according to your
                  needs.
                </p>
              </div>
              {/* End Title */}

              {/* Switch */}
              <div className="flex justify-center items-center">
                <label
                  htmlFor="pricing-switch"
                  className="min-w-14 text-sm text-gray-600 me-3 dark:text-neutral-400"
                >
                  Monthly
                </label>

                <input type="checkbox" id="pricing-switch" checked />

                <label
                  htmlFor="pricing-switch"
                  className="min-w-14 text-sm text-gray-600 ms-3 dark:text-neutral-400"
                >
                  Annually
                </label>
              </div>
              {/* End Switch */}

              {/* Grid */}
              <div className="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
                {/* Card */}
                <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                  <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                    Free
                  </h4>
                  <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    Get started with basic features
                  </p>

                  <ul className="mt-7 space-y-2.5 text-sm">
                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        1 user
                      </span>
                    </li>

                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        Plan features
                      </span>
                    </li>

                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        Product support
                      </span>
                    </li>
                  </ul>

                  <a
                    className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
                {/* End Card */}

                {/* Card */}
                <div className="flex flex-col bg-white border-2 border-violet-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-violet-700">
                  <p className="mb-3">
                    <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">
                      Most popular
                    </span>
                  </p>
                  <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                    Startup
                  </h4>
                  <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                    $39
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    All the basics for starting a new business
                  </p>

                  <ul className="mt-7 space-y-2.5 text-sm">
                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        2 users
                      </span>
                    </li>

                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        Plan features
                      </span>
                    </li>

                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        Product support
                      </span>
                    </li>
                  </ul>

                  <a
                    className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
                  >
                    Get started
                  </a>
                </div>
                {/* End Card */}

                {/* Card */}
                <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                  <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                    Team
                  </h4>
                  <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                    $89
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    Everything you need for a growing business
                  </p>

                  <ul className="mt-7 space-y-2.5 text-sm">
                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        5 users
                      </span>
                    </li>

                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        Plan features
                      </span>
                    </li>

                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        Product support
                      </span>
                    </li>
                  </ul>

                  <a
                    className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
                {/* End Card */}

                {/* Card */}
                <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                  <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </h4>
                  <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                    $149
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    Advanced features for scaling your business
                  </p>

                  <ul className="mt-7 space-y-2.5 text-sm">
                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        10 users
                      </span>
                    </li>

                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        Plan features
                      </span>
                    </li>

                    <li className="flex space-x-2">
                      <svg
                        className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-800 dark:text-neutral-400">
                        Product support
                      </span>
                    </li>
                  </ul>

                  <a
                    className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
                {/* End Card */}
              </div>
              {/* End Grid */}
            </div>

            <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[340px] h-[340px] border border-dashed border-violet-200 rounded-full dark:border-violet-900/60"></div>
            <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[575px] h-[575px] border border-dashed border-violet-200 rounded-full opacity-80 dark:border-violet-900/60"></div>
            <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[840px] h-[840px] border border-dashed border-violet-200 rounded-full opacity-60 dark:border-violet-900/60"></div>
            <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[1080px] h-[1080px] border border-dashed border-violet-200 rounded-full opacity-40 dark:border-violet-900/60"></div>
          </div>
          {/* End Hero */}
        </div>

        {/* Comparison Table */}
        <div className="relative">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
                Compare plans
              </h2>
            </div>

            {/* Header */}
            <div className="hidden lg:block sticky top-0 start-0 py-2 bg-white/90 backdrop-blur-md dark:bg-black">
              {/* Grid */}
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-2">
                  <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                    Features
                  </span>
                </div>
                {/* End Col */}

                <div className="col-span-1">
                  <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    Free forever
                  </p>
                </div>
                {/* End Col */}

                <div className="col-span-1">
                  <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    $39 per month billed annually
                  </p>
                </div>
                {/* End Col */}

                <div className="col-span-1">
                  <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    $89 per month billed annually
                  </p>
                </div>
                {/* End Col */}

                <div className="col-span-1">
                  <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    $149 per month billed annually
                  </p>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
            {/* End Header */}

            {/* Section */}
            <div className="space-y-4 lg:space-y-0">
              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 lg:py-3">
                  <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    General
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Number of seats
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      1
                    </span>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Up to 3
                    </span>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Up to 10
                    </span>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Unlimited
                    </span>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Storage
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      15 GB
                    </span>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      1 TB
                    </span>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      15 TB
                    </span>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Unlimited
                    </span>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Email sharing
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Any time, anywhere access
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}
            </div>
            {/* End Section */}

            {/* Section */}
            <div className="mt-6 space-y-4 lg:space-y-0">
              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 lg:py-3">
                  <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    Financial data
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Open/High/Low/Close
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Price-volume difference indicator
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}
            </div>
            {/* End Section */}

            {/* Section */}
            <div className="mt-6 space-y-4 lg:space-y-0">
              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 lg:py-3">
                  <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    On-chain data
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Network growth
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Average token age consumed
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Exchange flow
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Total ERC20 exchange funds flow
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Transaction volume
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Total circulation (beta)
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Velocity of tokens (beta)
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    ETH gas used
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}
            </div>
            {/* End Section */}

            {/* Section */}
            <div className="mt-6 space-y-4 lg:space-y-0">
              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 lg:py-3">
                  <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    Social data
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}

                {/* Item */}
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Dev activity
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Topic search
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}

              {/* List */}
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                {/* Item */}
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                    Relative social dominance
                  </span>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Free
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Startup
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Team
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}

                {/* Item */}
                <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                    <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                      Enterprise
                    </span>
                    <svg
                      className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </li>
                {/* End Item */}
              </ul>
              {/* End List */}
            </div>
            {/* End Section */}

            {/* Header */}
            <div className="hidden lg:block mt-6">
              {/* Grid */}
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-2"></div>
                {/* End Col */}

                <div className="col-span-1">
                  <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
                {/* End Col */}

                <div className="col-span-1">
                  <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
                {/* End Col */}

                <div className="col-span-1">
                  <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
                {/* End Col */}

                <div className="col-span-1">
                  <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
            {/* End Header */}

            {/* Button Group */}
            <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                Need a custom plan?
              </p>

              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
              >
                Contact us
              </button>
            </div>
            {/* End Button Group */}
          </div>
        </div>
        {/* End Comparison Table */}

        <FAQSections />
      </main>
      {/* ========== END MAIN CONTENT ========== */}

      <Footer />
    </>
  );
}
