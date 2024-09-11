'use client'
import BurnerSection from "@/components/landing-page/sections/BurnerSection";
import React from "react";
import MainLayout from "./MainLayout";
import AdsSection from "@/components/landing-page/sections/AdsSection";
import CategorySection from "@/components/landing-page/sections/CtegorySection";
import LatestDiscont from "@/components/landing-page/sections/LatestDiscount";
import OurParteners from "@/components/landing-page/sections/OurParteners";
import PopularProductsSection from "@/components/landing-page/sections/PopularProductsSection";

export default function Home() {

  return (
    <main className="scroll-smooth">
      <MainLayout>
        <section id="home">
          <BurnerSection />
        </section>
        <div className="w-full flex flex-col items-center justify-center">
          <CategorySection />
          <PopularProductsSection />
          <LatestDiscont />
          <OurParteners />
          <AdsSection />
        </div>
      </MainLayout>
    </main>
  );
}