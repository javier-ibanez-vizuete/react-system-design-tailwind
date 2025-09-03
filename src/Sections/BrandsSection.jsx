import { ImageContainer } from "../components/ImageContainer";
import { SectionContainer } from "../components/SectionContainer";

import logoAmazon from "../assets/pictures/home-page/logo-amazon.png";
import logoCocacola from "../assets/pictures/home-page/logo-cocacola.png";
import logoFedex from "../assets/pictures/home-page/logo-fedex.png";
import logoIBM from "../assets/pictures/home-page/logo-ibm.png";
import logoWalmart from "../assets/pictures/home-page/logo-walmart.png";

export const BrandsSection = () => {
    return (
        <SectionContainer className="flex flex-col gap-8">
            <h5 className="text-md text-gray-400">Already loved and Trusted by product team</h5>
            <div className="grid grid-cols-3  gap-12 place-self-center md:grid-cols-4 lg:grid-cols-5 md:place-self-stretch md:place-items-center">
                <ImageContainer className={"w-20"}>
                    <img className="w-full" src={logoIBM} alt="Logo IBM" />
                </ImageContainer>
                <ImageContainer className={"w-20"}>
                    <img className="w-full" src={logoCocacola} alt="Logo Cocacola" />
                </ImageContainer>
                <ImageContainer className={"w-20"}>
                    <img className="w-full" src={logoAmazon} alt="Logo Amazon" />
                </ImageContainer>
                <ImageContainer className={"hidden w-20 md:flex"}>
                    <img className="w-full" src={logoFedex} alt="Logo Fedex" />
                </ImageContainer>
                <ImageContainer className={"hidden w-20 lg:flex"}>
                    <img className="w-full" src={logoWalmart} alt="Logo Walmart" />
                </ImageContainer>
            </div>
        </SectionContainer>
    );
};
