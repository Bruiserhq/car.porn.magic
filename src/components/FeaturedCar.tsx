import React, { useState } from "react";
import { Share2Icon, CalendarIcon, InfoIcon, ArrowRightIcon } from "lucide-react";
interface CarSpec {
  label: string;
  value: string;
}
interface Car {
  id: string;
  title: string;
  description: string;
  price: string;
  specs: CarSpec[];
  image: string;
  affiliateLink: string;
}
interface FeaturedCarProps {
  car: Car;
}
export function FeaturedCar({
  car
}: FeaturedCarProps) {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  return <>
      <div className="relative w-full">
        <div className="relative h-screen w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${car.image})`
        }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
            <div className="flex items-center text-sm opacity-75 mb-2">
              <CalendarIcon size={16} className="mr-2" />
              <span>{formattedDate}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {car.title}
            </h1>
            <div className="max-w-2xl mb-6">
              <p className="text-lg md:text-xl opacity-90">{car.description}</p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="text-3xl font-bold text-red-500">{car.price}</div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors" onClick={() => window.open(car.affiliateLink, "_blank")}>
                View on eBay
                <ArrowRightIcon size={18} className="ml-2" />
              </button>
              <button className="flex items-center opacity-70 hover:opacity-100 transition-opacity" onClick={() => setShowFullDetails(!showFullDetails)}>
                <InfoIcon size={18} className="mr-2" />
                {showFullDetails ? "Hide details" : "View details"}
              </button>
              <button className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
                <Share2Icon size={18} className="mr-2" />
                Share
              </button>
            </div>
            {showFullDetails && <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-black/50 p-4 rounded-md backdrop-blur-sm">
                  {car.specs.map((spec, index) => <div key={index} className="flex flex-col">
                      <span className="text-sm opacity-70">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>)}
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-md">
                  <div className="h-[250px] w-full max-w-[300px] mx-auto flex items-center justify-center text-xs text-white/40">
                    Rectangle Advertisement
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
      <div className="w-full bg-black/50 backdrop-blur-sm p-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="h-[250px] w-full max-w-[300px] flex items-center justify-center text-xs text-white/40">
            Rectangle Advertisement
          </div>
          <div className="h-[250px] w-full max-w-[300px] flex items-center justify-center text-xs text-white/40">
            Rectangle Advertisement
          </div>
        </div>
      </div>
    </>;
}