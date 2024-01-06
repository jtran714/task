import React from "react";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        {/* <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full upprcase">
          <Medal className="h-6 w-6 mr-2" />
          Number 1 Task Management
        </div> */}
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskit brings all your
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 p-2 rounded-md pb-1 w-fit">
          tasks, teammates, and tools together.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskit
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Taskit for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
