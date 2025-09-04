import { ProtocolCard } from "../components/ProtocolCard";
import { SectionContainer } from "../components/SectionContainer";

import { useContext } from "react";
import imageAppSettings from "../assets/pictures/home-page/image-app-settings.png";
import imageProductivity from "../assets/pictures/home-page/image-productivity.png";
import { LanguageContext } from "../contexts/LanguageContext";

const PROTOCOL_DATA = [
    {
        title: "protocolSectionTitle1",
        content: "protocolSectionContent1",
        img: imageAppSettings ? imageAppSettings : "",
    },
    {
        title: "protocolSectionTitle2",
        content: "protocolSectionContent2",
        img: imageProductivity ? imageProductivity : "",
    },
    {
        title: "protocolSectionTitle3",
        content: "protocolSectionContent3",
        img: imageAppSettings ? imageAppSettings : "",
    },
    {
        title: "protocolSectionTitle4",
        content: "protocolSectionContent4",
        img: imageProductivity ? imageProductivity : "",
    },
];

export const ProtocolSection = () => {
    const { getText } = useContext(LanguageContext);

    return (
        <SectionContainer className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
            {PROTOCOL_DATA.map((data, index) => {
                return (
                    <ProtocolCard
                        key={data.title}
                        title={getText(data.title)}
                        content={getText(data.content)}
                        img={data?.img}
                        direction={index % 2 !== 0 ? "md:flex-col-reverse" : "md:flex-col"}
                        imgSize="max-w-[200px] md:max-w-[400px] xl:max-w-[500px]"
                    />
                );
            })}
        </SectionContainer>
    );
};
