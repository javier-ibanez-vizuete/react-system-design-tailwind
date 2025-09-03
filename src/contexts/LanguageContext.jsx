import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    const getText = (key) => {
        const selectedText = TEXTS[lang][key];
        if (!selectedText)
            return TEXTS[lang] && TEXTS[lang].noTextFound ? TEXTS[lang].noTextFound : "No text Found";
        return selectedText;
    };
    const handleLang = (lang = "en") => {
        setLang(lang);
    };

    const languages = {
        en: "English",
        es: "Español",
        fr: "Français",
        it: "Italiano",
        de: "Deutsch",
        zh: "中文（简体）",
    };

    const TEXTS = {
        en: {
            h1HomePage: "Home Page Title",

            userNavLabel: "Profile",
            homePageNavLabel: "Home",
            productsPageNavLabel: "Products",
            featuresPageNavLabel: "Features",
            pricingPageNavLabel: "Pricing",

            btnSignIn: "Sign In",
            btnLogIn: "Log In",
            btnLogOut: "Log Out",
            btnGetStart: "Get Start",
            btnWatchDemo: "Watch Demo",

            CTAFirstSectionTitle1: "Make Your First",
            CTAFirstSectionTitle2: "Count",
            CTAFirstSectionSpanTitle: "Impression",
            CTAFirstSectionText:
                "powerful seal-serve product analytics to help you convert engage and retain more users",
            brandsSectionTitle: "Already loved and Trusted by product team",

            featureSectionTitle1: "Rich Analitics",
            featureSectionTitle2: "Deep Insights",
            featureSectionTitle3: "Smart Metrics",
            featureSectionTitle4: "Clear Data",
            featureSectionTitle5: "Sharp Trends",
            featureSectionTitle6: "Power Stats",
            featureSectionContent1:
                "Easy data Management with a dedicated admin panel and a developer platform to extend what Polio CRM can do",
            featureSectionContent2:
                "Uncover hidden patterns and valuable trends through deep analysis that turns raw data into smart, strategic decisions.",
            featureSectionContent3:
                "Transform information into intelligent indicators that help you measure, optimize, and anticipate the future with accuracy.",
            featureSectionContent4:
                "Data transparency is essential: gain clean and clear visualizations that build confidence and drive better decisions.",
            featureSectionContent5:
                "Identify changes and market shifts in real time to stay one step ahead with reliable forecasts and actionable insights.",
            featureSectionContent6:
                "Empower your strategies with advanced statistics that turn analysis into action and deliver measurable business impact.",

            noTextFound: "No text Found",
        },

        es: {},

        fr: {},

        it: {},

        de: {},

        zh: {},
    };

    return (
        <LanguageContext value={{ lang, TEXTS, languages, getText, handleLang }}>{children}</LanguageContext>
    );
};
