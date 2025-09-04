import { SectionContainer } from "../components/SectionContainer";

import { useContext } from "react";

import iconCode from "../assets/icons/icon-code.png";
import iconGraphics from "../assets/icons/icon-graphic.png";
import iconMessage from "../assets/icons/icon-message.png";

import { ImageContainer } from "../components/ImageContainer";
import { LanguageContext } from "../contexts/LanguageContext";

const FeaturesData = [
    {
        icon: iconGraphics ? iconGraphics : "",
        title: "featureSectionTitle1",
        content: "featureSectionContent1",
    },
    {
        icon: iconCode ? iconCode : "",
        title: "featureSectionTitle2",
        content: "featureSectionContent2",
    },
    {
        icon: iconMessage ? iconMessage : "",
        title: "featureSectionTitle3",
        content: "featureSectionContent3",
    },
    {
        icon: iconCode ? iconCode : "",
        title: "featureSectionTitle4",
        content: "featureSectionContent4",
    },
    {
        icon: iconGraphics ? iconGraphics : "",
        title: "featureSectionTitle5",
        content: "featureSectionContent5",
    },
    {
        icon: iconMessage ? iconMessage : "",
        title: "featureSectionTitle6",
        content: "featureSectionContent6",
    },
];

export const FeaturesSection = () => {
    const { getText } = useContext(LanguageContext);

    return (
        <SectionContainer>
            <header className="flex flex-col gap-5 mb-10 md:mb-14">
                <span className="text-blue-500">{getText("featureSectionCategoryName")}</span>
                <h2>{getText("featureSectionTitle0")}</h2>
                <p>{getText("featureSectionContent0")}</p>
            </header>
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:grid-cols-3">
                {FeaturesData.map((data) => {
                    return (
                        <li key={data.title} className="flex flex-col items-center gap-5">
                            <ImageContainer className={"w-6"}>
                                <img className="w-full" src={data.icon} alt="Icon" />
                            </ImageContainer>
                            <h4 className="text-lg">{getText(data.title)}</h4>
                            <p>{getText(data.content)}</p>
                        </li>
                    );
                })}
            </ul>
        </SectionContainer>
    );
};
