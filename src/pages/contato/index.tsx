import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo title="Home" />
      <Header />
      <Contact />
      <Footer />
    </>
  );
}

Home.layoutProps = {
  Layout: (props: unknown) => (
    <div className="border-l-8 border-blue-700" {...props} />
  ),
};
