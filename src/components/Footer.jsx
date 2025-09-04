import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Container } from "./Container";
import { CustomInput } from "./CustomInput";

export const Footer = () => {
    const { lang, languages, handleLang, getText } = useContext(LanguageContext);

    return (
        <footer className="flex flex-col py-6 ">
            <Container>
                <div className="flex flex-col">
                    <div>FOOTER LINKS</div>
                    <CustomInput
                        inputName={"lang"}
                        labelName={getText("languagesLabelName")}
                        className="flex-row gap-2 items-center"
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
                    <p>© {new Date().getFullYear()} Tipico Footer. All rights reserved</p>
                </div>
            </Container>
        </footer>
    );
};
