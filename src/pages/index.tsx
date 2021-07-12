import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndexPage from "@/components/VidaIndex";
import { NextSeo } from "next-seo";
import SimulateSection from "../components/SimulateSectionHome/index";

export default function Home(props): JSX.Element {
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
