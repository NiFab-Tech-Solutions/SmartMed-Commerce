'use client'
import BurnerSection from "@/components/landing-page/sections/BurnerSection";
import React from "react";
import MainLayout from "./MainLayout";
import AdsSection from "@/components/landing-page/sections/AdsSection";
import CategorySection from "@/components/landing-page/sections/CategorySection";
import LatestDiscont from "@/components/landing-page/sections/LatestDiscount";
import OurParteners from "@/components/landing-page/sections/OurParteners";
import PopularProductsSection from "@/components/landing-page/sections/PopularProductsSection";
import ProductOfTheDay from "@/components/landing-page/sections/ProductOfDay";
import ContactPage from "@/components/landing-page/sections/ContactPage";

export default function Home() {

  return (
    <main className="scroll-smooth bg-white">
      <MainLayout>
        <section id="home">
          <BurnerSection />
        </section>
        <div className="w-full flex flex-col gap-12 items-center justify-center">
          <CategorySection />
          <PopularProductsSection />
          <ProductOfTheDay />
          <LatestDiscont />
          <OurParteners />
          <AdsSection />
          <ContactPage />
        </div>
      </MainLayout>
    </main>
  );
}