import { useContext } from "react";
import { SectionContainer } from "../components/SectionContainer";
import { LinkButton } from "../components/UI/LinkButton";
import { LanguageContext } from "../contexts/LanguageContext";

export const CTASecondSection = () => {
    const { getText } = useContext(LanguageContext);

    return (
        <SectionContainer className="flex flex-col gap-sm">
            <h2>{getText("CTASecondSectionTitle")}</h2>
            <p>{getText("CTASecondSectionContent")}</p>
            <div className="flex items-center justify-center gap-2xs text-xs">
                <LinkButton className={"primary-btn"} to={"/register"}>
                    {getText("btnGetStarted")}
                </LinkButton>
                <LinkButton className={"secondary-btn"} to={"/demo"}>
                    {getText("btnRequestDemo")}
                </LinkButton>
            </div>
        </SectionContainer>
    );
};
