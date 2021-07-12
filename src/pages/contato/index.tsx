import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Contato(props): JSX.Element {
  return (
    <>
      <NextSeo title="Contato" />
      <Header />
      <Contact />
      <Footer />
    </>
  );
}

Contato.layoutProps = {
  Layout: (props: unknown) => (
    <div className="border-l-8 border-blue-700" {...props} />
  ),
};
