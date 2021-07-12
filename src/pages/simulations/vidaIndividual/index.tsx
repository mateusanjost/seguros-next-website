import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";
import FormVidaIndividual from "../../../components/Forms/VidaIndividual/index";
import PriceSimulator from "@/components/PriceSimulator";
export default function Contato(props): JSX.Element {
  return (
    <>
      <NextSeo title="Contato" />
      <Header />
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
          <div className="w-full  p-20">
            <Steps />
            <div className="h-64 pt-20">
              <FormVidaIndividual />
            </div>
          </div>
          <div className="dark:border-gray-700  border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">      <PriceSimulator /></div>
    
        
        </div>
      </div>
      <Footer />
    </>
  );
}

Contato.layoutProps = {
  Layout: (props: unknown) => (
    <div className="border-l-8 border-blue-700" {...props} />
  ),
};
