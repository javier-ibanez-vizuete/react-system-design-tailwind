import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Container } from "./Container";
import { CustomInput } from "./CustomInput";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
    const { lang, languages, handleLang, getText } = useContext(LanguageContext);

    return (
        <footer className="flex flex-col py-lg pb-10">
            <Container className="flex flex-col gap-16">
                <div className="flex flex-col gap-16">
                    <FooterLinks />
                    <CustomInput
                        inputName={"lang"}
                        labelName={getText("languagesLabelName")}
                        className="flex-row gap-2 items-center self-center"
                    >
                        <select
                            className="px-3 rounded-md py-1.5 border border-gray-400"
                            name="lang"
                            id="lang"
                            value={lang}
                            onChange={(event) => handleLang(event.target.value)}
                        >
                            {Object.entries(languages).map(([langCode, langValue]) => {
                                return (
                                    <option key={langCode} value={langCode}>
                                        {langValue}
                                    </option>
                                );
                            })}
                        </select>
                    </CustomInput>
                </div>
                <div className="flex flex-1 justify-center items-center text-center text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} jahedin LTD. {getText("registerFooterText")}
                    </p>
                </div>
            </Container>
        </footer>
    );
};
