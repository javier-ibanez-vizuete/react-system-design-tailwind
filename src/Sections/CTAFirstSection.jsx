import { useContext } from "react";
import { SectionContainer } from "../components/SectionContainer";
import { LinkButton } from "../components/UI/LinkButton";
import { LanguageContext } from "../contexts/LanguageContext";

export const CTAFirstSection = () => {
    const { getText } = useContext(LanguageContext);

    return (
        <SectionContainer className="flex flex-col gap-sm">
            <h2>
                {getText("CTAFirstSectionTitle1")}
                <span className="text-blue-500run de"> {getText("CTAFirstSectionSpanTitle")} </span>
                {getText("CTAFirstSectionTitle2")}
            </h2>
            <p>{getText("CTAFirstSectionText")}</p>
            <div className="flex items-center justify-center gap-2xs">
                <LinkButton className={"primary-btn"} to={"/register"}>
                    {getText("btnGetStart")}
                </LinkButton>
                <LinkButton className={"px-xs secondary-btn"} to={"/demo"}>
                    {getText("btnWatchDemo")}
                </LinkButton>
            </div>
        </SectionContainer>
    );
};
