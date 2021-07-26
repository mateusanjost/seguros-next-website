import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";
import FormVidaIndividual from "../../../components/Forms/VidaIndividual/index";
import PriceSimulator from "@/components/PriceSimulator";
import StepWizard from "react-step-wizard";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";

export default function Contato(props: any): JSX.Element {
  return (
    <>
      <NextSeo title="Contato" />
      <Header />
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center rounded bg-white shadow md:w-full ">
          <div className="w-full  p-20">
            <StepWizard>
              <Step1 />
              <Step2 />
            </StepWizard>
          </div>
          <div className="dark:border-gray-700  border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100 lg:w-auto w-full 0 bg-none">
            {" "}
            <PriceSimulator />
          </div>
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
