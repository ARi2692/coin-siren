"use client"

import React from "react";
import Hero from "./components/organisms/Hero";
import Nav from "./components/molecules/Nav";
import Footer from "./components/organisms/Footer";

const Home: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-gradient-to-r from-custom-start to-custom-end">
    <Nav />
    <main className="flex-grow mt-8 mx-8">
    <Hero />
    </main>
    <Footer />
  </div>
);

export default Home;
