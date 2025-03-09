import React from "react";
export function Footer() {
  return <footer className="py-6 px-6 md:px-8 lg:px-12 bg-black text-white/60 text-sm">
      <div className="flex justify-center items-center">
        <div>
          © {new Date().getFullYear()} car.porn — A daily dose of automotive
          excellence
        </div>
      </div>
    </footer>;
}