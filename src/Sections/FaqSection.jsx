import { useContext } from "react";
import { Accordion } from "../components/Accordion";
import { SectionContainer } from "../components/SectionContainer";
import { LanguageContext } from "../contexts/LanguageContext";

const faqData = [
    {
        title: "faqSectionTitle1",
        content: "faqSectionContent1",
    },
    {
        title: "faqSectionTitle2",
        content: "faqSectionContent2",
    },
    {
        title: "faqSectionTitle3",
        content: "faqSectionContent3",
    },
    {
        title: "faqSectionTitle4",
        content: "faqSectionContent4",
    },
];

export const FaqSection = () => {
    const { getText } = useContext(LanguageContext);

    return (
        <SectionContainer className="flex flex-col gap-8 md:gap-16">
            <div>
                <h2 className="text-4xl">{getText("faqSectionTitle0")}</h2>
                <p>{getText("faqSectionContent0")}</p>
            </div>

            <Accordion items={faqData} />
        </SectionContainer>
    );
};
