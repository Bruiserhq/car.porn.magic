import React from "react";
import { Header } from "./components/Header";
import { FeaturedCar } from "./components/FeaturedCar";
import { Footer } from "./components/Footer";
export function App() {
  const carOfTheDay = {
    id: "daily-001",
    title: "1967 Ferrari 275 GTB/4",
    description: "A masterpiece of Italian engineering and design, this rare 275 GTB/4 represents the pinnacle of 1960s Ferrari innovation. With its Pininfarina-designed body and Colombo V12 engine, it's widely considered one of the most beautiful and desirable Ferraris ever created.",
    price: "$3,500,000",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    affiliateLink: "https://www.ebay.com/sch/i.html?_nkw=ferrari+275+gtb"
  };
  return <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FeaturedCar car={carOfTheDay} />
      </main>
      <Footer />
    </div>;
}