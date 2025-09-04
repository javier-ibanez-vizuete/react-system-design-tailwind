import { ImageContainer } from "../components/ImageContainer";
import { SectionContainer } from "../components/SectionContainer";
import { LinkButton } from "../components/UI/LinkButton";

import { useContext } from "react";
import imageCallCenter from "../assets/pictures/home-page/image-cta-section-3.png";
import { LanguageContext } from "../contexts/LanguageContext";

export const CTAThirdSection = () => {
    const { getText } = useContext(LanguageContext);

    return (
        <SectionContainer className="flex flex-col">
            <div className="flex flex-col items-center gap-8">
                <h2>{getText("CTAThirdSectionTitle")}</h2>
                <p className="text-xl">{getText("CTAThirdSectioncontent")}</p>
                <LinkButton className={"primary-btn"} to={"/register"}>
                    {getText("btnTryIt")}
                </LinkButton>
            </div>
            <ImageContainer className={"self-center lg:max-w-[700px]"}>
                <img src={imageCallCenter} alt="Image Woman Calling" />
            </ImageContainer>
        </SectionContainer>
    );
};
