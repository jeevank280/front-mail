"use client";

import FAQSections from "@/components/Home/FAQSection";
import FeaturesSection from "@/components/Home/FeaturesSections";
import FollowUpsSections from "@/components/Home/FollowUpsSections";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonials from "@/components/Home/Testimonials";
import React from "react";
import useAuth from "../hooks/useAuth";

export default function Home() {
  useAuth();
  return (
    <>
      <Header />

      <main>
        <div className="max-w-[85rem] mx-auto pt-12 pb-10 px-4 sm:px-6 lg:px-8 md:pt-15">
          {/* your content goes here ... */}
          <HeroSection />
          <FeaturesSection />
        </div>
      </main>

      <HowItWorks />
      <main>
        <div className="max-w-[85rem] mx-auto pt-12 pb-10 px-4 sm:px-6 lg:px-8 md:pt-15">
          {/* your content goes here ... */}
          <FollowUpsSections />
          <Testimonials />
          <FAQSections />
        </div>
      </main>

      <Footer />
    </>
  );
}
