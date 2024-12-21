"use client";
import Banner from "../components/Banner/Banner";
import Companies from "../components/Companies/Companies";
import Tabs from "../components/Courses/Courses";
import Mentor from "../components/Mentor/Mentor";
import Teachers from "../components/Teachersreview/Teachersreview";
import Newsletter from "../components/Newsletter/Newsletter";
import LandingNavbar from "@/components/LNavbar/LandingNavbar";
// import LandingNavbar from "../components/";
// import "../app";
import "./globals.css";
import Pricing from "@/components/pricing";
export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Tabs />
      <Mentor />
      <Teachers />
      <Pricing />

      <Newsletter />
      <LandingNavbar />
    </main>
  );
}
