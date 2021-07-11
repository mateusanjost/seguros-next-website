import { A } from "@/components";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndexPage from "@/components/VidaIndex";
import { NextSeo } from "next-seo";
import SimulateSection from "../components/SimulateSectionHome/index";

export default function Home(props): JSX.Element {
  const transition = "color 0.15s ease, border-color 0.15s ease";
  return (
    <>
      <NextSeo title="Home" />
      <Header />
      <SimulateSection />
      <IndexPage />
      <Footer />
    </>
  );
}

Home.layoutProps = {
  Layout: (props: unknown) => (
    <div className="" {...props} />
  ),
};
