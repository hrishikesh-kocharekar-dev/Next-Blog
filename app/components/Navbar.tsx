import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="justify-between h-16 flex ">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <h1 className="text-2xl font-medium">
              Next<span className="text-emerald-600">Blog</span>
            </h1>
          </Link>
          {/* <ThemeProvider name=" */}
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
