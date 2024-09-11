"use client";
import React, { useState } from 'react'
import Footer from '@/components/landing-page/Menus/Footer';
import MobileMenu from '@/components/landing-page/Menus/MobileMenu';

import MobileNav from '@/components/landing-page/Menus/MobileNav';
import { MenuSection, TopSection } from '@/components/home';

export default function MainLayout({children}:{children:React.ReactNode}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <main className="scroll-smooth">
          {isMobileMenuOpen ? (
            <MobileMenu onClose={toggleMobileMenu} />
          ) : (
            <>
              <TopSection />
              <MobileNav onClick={toggleMobileMenu} />
              <MenuSection /> 
              {children}
              <Footer />
            </>
           )} 
        </main>
      );
}