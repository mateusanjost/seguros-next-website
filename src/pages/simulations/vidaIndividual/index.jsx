import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import Footer from "@/components/Footer";
import FormVidaIndividual from "../../../components/Forms/VidaIndividual/index";
import PriceSimulator from "@/components/PriceSimulator";

import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import StepWizard from "react-step-wizard";

export default function Contato(props) {
  return (
    <>
      <NextSeo title="Vida individual" />
      <Header />
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center rounded bg-white shadow md:w-full ">
          <div className="w-full  p-20">
            <StepWizard>
              <Step1 />
              <Step2 />
      
            </StepWizard>
          </div>
        
        </div>
      </div>
      <Footer />
    </>
  );
}

Contato.layoutProps = {
  Layout: (props) => <div className="border-l-8 border-blue-700" {...props} />,
};
