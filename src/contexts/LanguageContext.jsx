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
            btnGetStarted: "Get Started",
            btnRequestDemo: "Request a Demo",
            btnTryIt: "Try it for Free",

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

            CTASecondSectionTitle: "Create Your First Personalized",
            CTASecondSectionContent: "No credit card required 7 days free trial",

            protocolSectionTitle1: "Make the best hire in half the time",
            protocolSectionTitle2: "Streamline your recruitment process",
            protocolSectionTitle3: "Improve candidate experience",
            protocolSectionTitle4: "Data-driven hiring decisions",
            protocolSectionContent1:
                "Move faster on a recruiting platform that automates manual tasks like scheduling interviews and getting approvals.",
            protocolSectionContent2:
                "Centralize candidate data, simplify workflows, and collaborate with your team in real time.",
            protocolSectionContent3:
                "Offer a smooth and professional journey with automated communication and personalized touchpoints.",
            protocolSectionContent4:
                "Use analytics and reporting tools to optimize your recruitment strategy and reduce time-to-hire.",

            CTAThirdSectionTitle: "Let's grow together",
            CTAThirdSectioncontent:
                "Explore out full hiring platform with 15 days free trial no credit card.Post jobs get candidates and manage applicants all in one.",

            faqSectionTitle0: "Frequently asked question",
            faqSectionTitle1: "Is there a free trial available?",
            faqSectionTitle2: "How does billing and pricing work?",
            faqSectionTitle3: "Can I cancel my subscription?",
            faqSectionTitle4: "What support options are available?",
            faqSectionContent0: "Everything you need to know aboyt jahedin",
            faqSectionContent1:
                "Yes — we offer a 14-day free trial with full access to all features. No credit card required, and you can upgrade at any time without losing your data.",
            faqSectionContent2:
                "We provide monthly and annual plans. Annual subscriptions include a discount (typically ~20%). Billing occurs at the start of each period and you can change plans from your account settings; prorated adjustments may apply when switching.",
            faqSectionContent3:
                "Yes — you can cancel anytime from your account. Cancellation stops future charges immediately but you will keep access until the end of the current paid period. There are no reactivation fees if you decide to come back.",
            faqSectionContent4:
                "Support includes email (response within 24 business hours), live chat for paid plans, and a searchable help center with guides and tutorials to solve common issues quickly.",

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
