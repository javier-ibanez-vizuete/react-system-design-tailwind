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

            languagesLabelName: "Language",

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

            featureSectionCategoryName: "Features",
            featureSectionTitle0: "You will never missed a deadline",
            featureSectionTitle1: "Rich Analitics",
            featureSectionTitle2: "Deep Insights",
            featureSectionTitle3: "Smart Metrics",
            featureSectionTitle4: "Clear Data",
            featureSectionTitle5: "Sharp Trends",
            featureSectionTitle6: "Power Stats",
            featureSectionContent0:
                "Connect expose and visualize and over 150 Sass tools without engineering method",
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

            linksFormDataTitle1: "Product",
            linksFormDataTitle2: "Company",
            linksFormDataTitle3: "Resource",
            linksFormDataTitle4: "Features",
            linksFormDataTitle5: "About",

            linkFormDataLabel1: "Overview",
            linkFormDataLabel2: "Pricing",
            linkFormDataLabel3: "Integrations",
            linkFormDataLabel4: "Demo",
            linkFormDataLabel5: "Enterprise",
            linkFormDataLabel6: "About Us",
            linkFormDataLabel7: "Team",
            linkFormDataLabel8: "Careers",
            linkFormDataLabel9: "Press",
            linkFormDataLabel10: "Investors",
            linkFormDataLabel11: "Documentation",
            linkFormDataLabel12: "Blog",
            linkFormDataLabel13: "Help Center",
            linkFormDataLabel14: "Tutorials",
            linkFormDataLabel15: "API Reference",
            linkFormDataLabel16: "Scheduling",
            linkFormDataLabel17: "Analytics",
            linkFormDataLabel18: "Collaboration",
            linkFormDataLabel19: "Automation",
            linkFormDataLabel20: "Security",
            linkFormDataLabel21: "Contact",
            linkFormDataLabel22: "Location",
            linkFormDataLabel23: "Terms of Service",
            linkFormDataLabel24: "Privacy Policy",
            linkFormDataLabel25: "FAQs",

            registerFooterText: "All Rights reserved.",
            noTextFound: "No text Found",
        },

        es: {
            h1HomePage: "Título de la página principal",

            userNavLabel: "Perfil",
            homePageNavLabel: "Inicio",
            productsPageNavLabel: "Productos",
            featuresPageNavLabel: "Características",
            pricingPageNavLabel: "Precios",

            languagesLabelName: "Idioma",

            btnSignIn: "Registrarse",
            btnLogIn: "Iniciar sesión",
            btnLogOut: "Cerrar sesión",
            btnGetStart: "Comenzar",
            btnWatchDemo: "Ver demo",
            btnGetStarted: "Empezar",
            btnRequestDemo: "Solicitar demo",
            btnTryIt: "Pruébalo gratis",

            CTAFirstSectionTitle1: "Haz que tu primera",
            CTAFirstSectionTitle2: "cuente",
            CTAFirstSectionSpanTitle: "impresión",
            CTAFirstSectionText:
                "Potentes analíticas de producto self-service para ayudarte a convertir, involucrar y retener a más usuarios",
            brandsSectionTitle: "Amado y confiado por equipos de producto",

            featureSectionCategoryName: "Características",
            featureSectionTitle0: "Nunca volverás a perder un plazo",
            featureSectionTitle1: "Analíticas avanzadas",
            featureSectionTitle2: "Perspectivas profundas",
            featureSectionTitle3: "Métricas inteligentes",
            featureSectionTitle4: "Datos claros",
            featureSectionTitle5: "Tendencias marcadas",
            featureSectionTitle6: "Estadísticas potentes",
            featureSectionContent0:
                "Conecta, expón y visualiza más de 150 herramientas SaaS sin necesidad de ingeniería.",
            featureSectionContent1:
                "Gestión de datos sencilla con un panel de administración dedicado y una plataforma para desarrolladores que amplía lo que Polio CRM puede hacer.",
            featureSectionContent2:
                "Descubre patrones ocultos y tendencias valiosas mediante análisis profundos que convierten datos en decisiones estratégicas e inteligentes.",
            featureSectionContent3:
                "Transforma la información en indicadores inteligentes que te ayudan a medir, optimizar y anticipar el futuro con precisión.",
            featureSectionContent4:
                "La transparencia de los datos es esencial: obtén visualizaciones limpias y claras que generen confianza y mejoren la toma de decisiones.",
            featureSectionContent5:
                "Identifica cambios y desplazamientos del mercado en tiempo real para mantenerte un paso por delante con previsiones fiables y acciones concretas.",
            featureSectionContent6:
                "Potencia tus estrategias con estadísticas avanzadas que convierten el análisis en acción y ofrecen un impacto empresarial medible.",

            CTASecondSectionTitle: "Crea tu primera experiencia personalizada",
            CTASecondSectionContent: "No se requiere tarjeta de crédito — 7 días de prueba gratis",

            protocolSectionTitle1: "Haz la mejor contratación en la mitad de tiempo",
            protocolSectionTitle2: "Optimiza tu proceso de reclutamiento",
            protocolSectionTitle3: "Mejora la experiencia del candidato",
            protocolSectionTitle4: "Decisiones de contratación basadas en datos",
            protocolSectionContent1:
                "Avanza más rápido en una plataforma de reclutamiento que automatiza tareas manuales como programar entrevistas y gestionar aprobaciones.",
            protocolSectionContent2:
                "Centraliza los datos de los candidatos, simplifica flujos de trabajo y colabora con tu equipo en tiempo real.",
            protocolSectionContent3:
                "Ofrece una experiencia fluida y profesional con comunicaciones automatizadas y puntos de contacto personalizados.",
            protocolSectionContent4:
                "Usa herramientas de analítica e informes para optimizar tu estrategia de contratación y reducir el tiempo hasta la contratación.",

            CTAThirdSectionTitle: "Crezcamos juntos",
            CTAThirdSectioncontent:
                "Explora nuestra plataforma de contratación completa con 15 días de prueba gratis sin tarjeta de crédito. Publica ofertas, recibe candidatos y gestiona solicitantes todo en uno.",

            faqSectionTitle0: "Preguntas frecuentes",
            faqSectionTitle1: "¿Hay una prueba gratuita disponible?",
            faqSectionTitle2: "¿Cómo funcionan la facturación y los precios?",
            faqSectionTitle3: "¿Puedo cancelar mi suscripción?",
            faqSectionTitle4: "¿Qué opciones de soporte hay disponibles?",
            faqSectionContent0: "Todo lo que necesitas saber sobre jahedin",
            faqSectionContent1:
                "Sí — ofrecemos una prueba gratuita de 14 días con acceso completo a todas las funciones. No se requiere tarjeta de crédito y puedes actualizar en cualquier momento sin perder tus datos.",
            faqSectionContent2:
                "Ofrecemos planes mensuales y anuales. Las suscripciones anuales incluyen un descuento (normalmente ~20%). La facturación se realiza al inicio de cada periodo y puedes cambiar de plan desde la configuración de tu cuenta; pueden aplicarse ajustes prorrateados al cambiar.",
            faqSectionContent3:
                "Sí — puedes cancelar en cualquier momento desde tu cuenta. La cancelación detiene cargos futuros inmediatamente pero conservarás el acceso hasta el final del periodo pagado actual. No hay tarifas de reactivación si decides volver.",
            faqSectionContent4:
                "El soporte incluye correo electrónico (respuesta en 24 horas laborables), chat en vivo para planes de pago y un centro de ayuda buscable con guías y tutoriales para resolver problemas comunes rápidamente.",

            linksFormDataTitle1: "Producto",
            linksFormDataTitle2: "Compañía",
            linksFormDataTitle3: "Recursos",
            linksFormDataTitle4: "Características",
            linksFormDataTitle5: "Acerca de",

            linkFormDataLabel1: "Resumen",
            linkFormDataLabel2: "Precios",
            linkFormDataLabel3: "Integraciones",
            linkFormDataLabel4: "Demo",
            linkFormDataLabel5: "Empresas",
            linkFormDataLabel6: "Sobre nosotros",
            linkFormDataLabel7: "Equipo",
            linkFormDataLabel8: "Empleo",
            linkFormDataLabel9: "Prensa",
            linkFormDataLabel10: "Inversores",
            linkFormDataLabel11: "Documentación",
            linkFormDataLabel12: "Blog",
            linkFormDataLabel13: "Centro de ayuda",
            linkFormDataLabel14: "Tutoriales",
            linkFormDataLabel15: "Referencia API",
            linkFormDataLabel16: "Programación",
            linkFormDataLabel17: "Analítica",
            linkFormDataLabel18: "Colaboración",
            linkFormDataLabel19: "Automatización",
            linkFormDataLabel20: "Seguridad",
            linkFormDataLabel21: "Contacto",
            linkFormDataLabel22: "Ubicación",
            linkFormDataLabel23: "Términos del servicio",
            linkFormDataLabel24: "Política de privacidad",
            linkFormDataLabel25: "Preguntas frecuentes",

            registerFooterText: "Todos los derechos reservados.",
            noTextFound: "No se encontró texto",
        },

        fr: {
            h1HomePage: "Titre de la page d'accueil",

            userNavLabel: "Profil",
            homePageNavLabel: "Accueil",
            productsPageNavLabel: "Produits",
            featuresPageNavLabel: "Fonctionnalités",
            pricingPageNavLabel: "Tarifs",

            languagesLabelName: "Langue",

            btnSignIn: "S'inscrire",
            btnLogIn: "Se connecter",
            btnLogOut: "Se déconnecter",
            btnGetStart: "Commencer",
            btnWatchDemo: "Voir la démo",
            btnGetStarted: "Démarrer",
            btnRequestDemo: "Demander une démo",
            btnTryIt: "Essayer gratuitement",

            CTAFirstSectionTitle1: "Faites que votre première",
            CTAFirstSectionTitle2: "compte",
            CTAFirstSectionSpanTitle: "impression",
            CTAFirstSectionText:
                "puissantes analyses produit en libre-service pour vous aider à convertir, engager et fidéliser plus d'utilisateurs",
            brandsSectionTitle: "Déjà aimé et approuvé par les équipes produit",

            featureSectionCategoryName: "Fonctionnalités",
            featureSectionTitle0: "Vous ne manquerez plus jamais une échéance",
            featureSectionTitle1: "Analyses avancées",
            featureSectionTitle2: "Insights approfondis",
            featureSectionTitle3: "Mesures intelligentes",
            featureSectionTitle4: "Données claires",
            featureSectionTitle5: "Tendances marquées",
            featureSectionTitle6: "Statistiques puissantes",
            featureSectionContent0:
                "Connectez, exposez et visualisez plus de 150 outils SaaS sans effort d’ingénierie.",
            featureSectionContent1:
                "Gestion simplifiée des données avec un panneau d'administration dédié et une plateforme développeur pour étendre les capacités de Polio CRM.",
            featureSectionContent2:
                "Détectez des modèles cachés et des tendances précieuses grâce à des analyses approfondies qui transforment les données brutes en décisions stratégiques intelligentes.",
            featureSectionContent3:
                "Transformez l'information en indicateurs intelligents qui vous aident à mesurer, optimiser et anticiper l'avenir avec précision.",
            featureSectionContent4:
                "La transparence des données est essentielle : obtenez des visualisations claires qui renforcent la confiance et améliorent la prise de décision.",
            featureSectionContent5:
                "Identifiez les changements et les évolutions du marché en temps réel pour garder une longueur d'avance avec des prévisions fiables et des actions concrètes.",
            featureSectionContent6:
                "Renforcez vos stratégies avec des statistiques avancées qui transforment l'analyse en actions et produisent un impact mesurable.",

            CTASecondSectionTitle: "Créez votre première expérience personnalisée",
            CTASecondSectionContent: "Aucune carte de crédit requise — 7 jours d'essai gratuit",

            protocolSectionTitle1: "Faites la meilleure embauche en moitié moins de temps",
            protocolSectionTitle2: "Rationalisez votre processus de recrutement",
            protocolSectionTitle3: "Améliorez l'expérience candidat",
            protocolSectionTitle4: "Décisions d'embauche basées sur les données",
            protocolSectionContent1:
                "Allez plus vite avec une plateforme qui automatise les tâches manuelles comme la planification d'entretiens et les approbations.",
            protocolSectionContent2:
                "Centralisez les données des candidats, simplifiez les flux et collaborez avec votre équipe en temps réel.",
            protocolSectionContent3:
                "Offrez un parcours fluide et professionnel avec des communications automatisées et des points de contact personnalisés.",
            protocolSectionContent4:
                "Utilisez des outils d'analyse et de reporting pour optimiser votre stratégie de recrutement et réduire le temps d'embauche.",

            CTAThirdSectionTitle: "Grandissons ensemble",
            CTAThirdSectioncontent:
                "Découvrez notre plateforme complète de recrutement avec 15 jours d'essai gratuit sans carte de crédit. Publiez des offres, recevez des candidats et gérez les postulants en un seul endroit.",

            faqSectionTitle0: "Questions fréquemment posées",
            faqSectionTitle1: "Y a-t-il un essai gratuit disponible ?",
            faqSectionTitle2: "Comment fonctionnent la facturation et les tarifs ?",
            faqSectionTitle3: "Puis-je annuler mon abonnement ?",
            faqSectionTitle4: "Quelles options de support sont disponibles ?",
            faqSectionContent0: "Tout ce que vous devez savoir sur jahedin",
            faqSectionContent1:
                "Oui — nous proposons un essai gratuit de 14 jours avec accès complet à toutes les fonctionnalités. Aucune carte de crédit requise, et vous pouvez passer à une offre supérieure à tout moment sans perdre vos données.",
            faqSectionContent2:
                "Nous proposons des plans mensuels et annuels. Les abonnements annuels incluent une remise (généralement ~20%). La facturation a lieu au début de chaque période et vous pouvez modifier votre plan depuis les paramètres de votre compte ; des ajustements au prorata peuvent s'appliquer lors d'un changement.",
            faqSectionContent3:
                "Oui — vous pouvez annuler à tout moment depuis votre compte. L'annulation arrête les prélèvements futurs immédiatement mais vous conservez l'accès jusqu'à la fin de la période payée en cours. Il n'y a pas de frais de réactivation si vous décidez de revenir.",
            faqSectionContent4:
                "Le support comprend l'e-mail (réponse sous 24 heures ouvrées), le chat en direct pour les plans payants et un centre d'aide consultable avec guides et tutoriels pour résoudre rapidement les problèmes courants.",

            linksFormDataTitle1: "Produit",
            linksFormDataTitle2: "Entreprise",
            linksFormDataTitle3: "Ressources",
            linksFormDataTitle4: "Fonctionnalités",
            linksFormDataTitle5: "À propos",

            linkFormDataLabel1: "Aperçu",
            linkFormDataLabel2: "Tarifs",
            linkFormDataLabel3: "Intégrations",
            linkFormDataLabel4: "Démo",
            linkFormDataLabel5: "Entreprise",
            linkFormDataLabel6: "À propos de nous",
            linkFormDataLabel7: "Équipe",
            linkFormDataLabel8: "Carrières",
            linkFormDataLabel9: "Presse",
            linkFormDataLabel10: "Investisseurs",
            linkFormDataLabel11: "Documentation",
            linkFormDataLabel12: "Blog",
            linkFormDataLabel13: "Centre d'aide",
            linkFormDataLabel14: "Tutoriels",
            linkFormDataLabel15: "Référence API",
            linkFormDataLabel16: "Planification",
            linkFormDataLabel17: "Analytique",
            linkFormDataLabel18: "Collaboration",
            linkFormDataLabel19: "Automatisation",
            linkFormDataLabel20: "Sécurité",
            linkFormDataLabel21: "Contact",
            linkFormDataLabel22: "Emplacement",
            linkFormDataLabel23: "Conditions d'utilisation",
            linkFormDataLabel24: "Politique de confidentialité",
            linkFormDataLabel25: "FAQ",

            registerFooterText: "Tous droits réservés.",
            noTextFound: "Texte non trouvé",
        },

        it: {
            h1HomePage: "Titolo della pagina principale",

            userNavLabel: "Profilo",
            homePageNavLabel: "Home",
            productsPageNavLabel: "Prodotti",
            featuresPageNavLabel: "Caratteristiche",
            pricingPageNavLabel: "Prezzi",

            languagesLabelName: "Lingua",

            btnSignIn: "Registrati",
            btnLogIn: "Accedi",
            btnLogOut: "Disconnetti",
            btnGetStart: "Inizia",
            btnWatchDemo: "Guarda la demo",
            btnGetStarted: "Inizia ora",
            btnRequestDemo: "Richiedi una demo",
            btnTryIt: "Provalo gratis",

            CTAFirstSectionTitle1: "Fai sì che il tuo primo",
            CTAFirstSectionTitle2: "conti",
            CTAFirstSectionSpanTitle: "impatto",
            CTAFirstSectionText:
                "potenti analytics prodotto self-service per aiutarti a convertire, coinvolgere e trattenere più utenti",
            brandsSectionTitle: "Già apprezzato e affidato dai team prodotto",

            featureSectionCategoryName: "Caratteristiche",
            featureSectionTitle0: "Non perderai mai più una scadenza",
            featureSectionTitle1: "Analitiche avanzate",
            featureSectionTitle2: "Approfondimenti",
            featureSectionTitle3: "Metriche intelligenti",
            featureSectionTitle4: "Dati chiari",
            featureSectionTitle5: "Tendenze evidenti",
            featureSectionTitle6: "Statistiche potenti",
            featureSectionContent0:
                "Connetti, esponi e visualizza oltre 150 strumenti SaaS senza intervento ingegneristico.",
            featureSectionContent1:
                "Gestione dei dati semplice con un pannello di amministrazione dedicato e una piattaforma per sviluppatori per estendere le funzionalità di Polio CRM.",
            featureSectionContent2:
                "Scopri pattern nascosti e tendenze preziose tramite analisi approfondite che trasformano i dati grezzi in decisioni strategiche intelligenti.",
            featureSectionContent3:
                "Trasforma le informazioni in indicatori intelligenti che ti aiutano a misurare, ottimizzare e anticipare il futuro con precisione.",
            featureSectionContent4:
                "La trasparenza dei dati è essenziale: ottieni visualizzazioni pulite e chiare che costruiscono fiducia e guidano decisioni migliori.",
            featureSectionContent5:
                "Identifica cambiamenti e spostamenti di mercato in tempo reale per restare un passo avanti con previsioni affidabili e insight azionabili.",
            featureSectionContent6:
                "Potenzia le tue strategie con statistiche avanzate che trasformano l'analisi in azione e portano un impatto aziendale misurabile.",

            CTASecondSectionTitle: "Crea la tua prima esperienza personalizzata",
            CTASecondSectionContent: "Nessuna carta di credito richiesta — 7 giorni di prova gratuita",

            protocolSectionTitle1: "Fai la migliore assunzione in metà tempo",
            protocolSectionTitle2: "Snellisci il tuo processo di reclutamento",
            protocolSectionTitle3: "Migliora l'esperienza del candidato",
            protocolSectionTitle4: "Decisioni di assunzione guidate dai dati",
            protocolSectionContent1:
                "Muoviti più velocemente su una piattaforma di recruiting che automatizza attività manuali come la pianificazione dei colloqui e le approvazioni.",
            protocolSectionContent2:
                "Centralizza i dati dei candidati, semplifica i flussi di lavoro e collabora con il tuo team in tempo reale.",
            protocolSectionContent3:
                "Offri un percorso fluido e professionale con comunicazioni automatizzate e touchpoint personalizzati.",
            protocolSectionContent4:
                "Usa strumenti di analisi e report per ottimizzare la tua strategia di assunzione e ridurre il time-to-hire.",

            CTAThirdSectionTitle: "Cresciamo insieme",
            CTAThirdSectioncontent:
                "Esplora la nostra piattaforma di recruiting completa con 15 giorni di prova gratuita senza carta di credito. Pubblica annunci, ricevi candidati e gestisci le candidature tutto in un unico posto.",

            faqSectionTitle0: "Domande frequenti",
            faqSectionTitle1: "È disponibile una prova gratuita?",
            faqSectionTitle2: "Come funzionano fatturazione e prezzi?",
            faqSectionTitle3: "Posso annullare l'abbonamento?",
            faqSectionTitle4: "Quali opzioni di supporto sono disponibili?",
            faqSectionContent0: "Tutto quello che devi sapere su jahedin",
            faqSectionContent1:
                "Sì — offriamo una prova gratuita di 14 giorni con accesso completo a tutte le funzionalità. Nessuna carta di credito richiesta e puoi aggiornare in qualsiasi momento senza perdere i tuoi dati.",
            faqSectionContent2:
                "Forniamo piani mensili e annuali. Gli abbonamenti annuali includono uno sconto (tipicamente ~20%). La fatturazione avviene all'inizio di ogni periodo e puoi cambiare piano dalle impostazioni del tuo account; potrebbero applicarsi aggiustamenti proporzionali al cambio.",
            faqSectionContent3:
                "Sì — puoi annullare in qualsiasi momento dal tuo account. La cancellazione interrompe i pagamenti futuri immediatamente ma manterrai l'accesso fino alla fine del periodo pagato corrente. Non ci sono costi di riattivazione se decidi di tornare.",
            faqSectionContent4:
                "Il supporto include email (risposta entro 24 ore lavorative), chat live per i piani a pagamento e un centro assistenza consultabile con guide e tutorial per risolvere rapidamente i problemi comuni.",

            linksFormDataTitle1: "Prodotto",
            linksFormDataTitle2: "Azienda",
            linksFormDataTitle3: "Risorse",
            linksFormDataTitle4: "Caratteristiche",
            linksFormDataTitle5: "Informazioni",

            linkFormDataLabel1: "Panoramica",
            linkFormDataLabel2: "Prezzi",
            linkFormDataLabel3: "Integrazioni",
            linkFormDataLabel4: "Demo",
            linkFormDataLabel5: "Aziende",
            linkFormDataLabel6: "Chi siamo",
            linkFormDataLabel7: "Team",
            linkFormDataLabel8: "Carriere",
            linkFormDataLabel9: "Stampa",
            linkFormDataLabel10: "Investitori",
            linkFormDataLabel11: "Documentazione",
            linkFormDataLabel12: "Blog",
            linkFormDataLabel13: "Centro assistenza",
            linkFormDataLabel14: "Tutorial",
            linkFormDataLabel15: "Riferimento API",
            linkFormDataLabel16: "Pianificazione",
            linkFormDataLabel17: "Analitica",
            linkFormDataLabel18: "Collaborazione",
            linkFormDataLabel19: "Automazione",
            linkFormDataLabel20: "Sicurezza",
            linkFormDataLabel21: "Contatto",
            linkFormDataLabel22: "Sede",
            linkFormDataLabel23: "Termini di servizio",
            linkFormDataLabel24: "Informativa sulla privacy",
            linkFormDataLabel25: "Domande frequenti",

            registerFooterText: "Tutti i diritti riservati.",
            noTextFound: "Testo non trovato",
        },

        de: {
            h1HomePage: "Titel der Startseite",

            userNavLabel: "Profil",
            homePageNavLabel: "Startseite",
            productsPageNavLabel: "Produkte",
            featuresPageNavLabel: "Funktionen",
            pricingPageNavLabel: "Preise",

            languagesLabelName: "Sprache",

            btnSignIn: "Anmelden",
            btnLogIn: "Einloggen",
            btnLogOut: "Ausloggen",
            btnGetStart: "Loslegen",
            btnWatchDemo: "Demo ansehen",
            btnGetStarted: "Jetzt starten",
            btnRequestDemo: "Demo anfordern",
            btnTryIt: "Kostenlos testen",

            CTAFirstSectionTitle1: "Mach deinen ersten",
            CTAFirstSectionTitle2: "zählen",
            CTAFirstSectionSpanTitle: "Eindruck",
            CTAFirstSectionText:
                "Leistungsstarke Self-Service-Produktanalysen, die dir helfen, mehr Nutzer zu konvertieren, zu binden und zu halten",
            brandsSectionTitle: "Bereits geliebt und vertraut von Produktteams",

            featureSectionCategoryName: "Funktionen",
            featureSectionTitle0: "Du verpasst nie wieder eine Frist",
            featureSectionTitle1: "Umfassende Analysen",
            featureSectionTitle2: "Tiefgehende Einblicke",
            featureSectionTitle3: "Intelligente Kennzahlen",
            featureSectionTitle4: "Klare Daten",
            featureSectionTitle5: "Deutliche Trends",
            featureSectionTitle6: "Leistungsstarke Statistiken",
            featureSectionContent0:
                "Verbinde, stelle bereit und visualisiere über 150 SaaS-Tools – ganz ohne Engineering-Aufwand.",
            featureSectionContent1:
                "Einfache Datenverwaltung mit einem dedizierten Admin-Panel und einer Entwicklerplattform, um die Möglichkeiten von Polio CRM zu erweitern.",
            featureSectionContent2:
                "Entdecke verborgene Muster und wertvolle Trends durch tiefe Analysen, die Rohdaten in intelligente, strategische Entscheidungen verwandeln.",
            featureSectionContent3:
                "Verwandle Informationen in intelligente Indikatoren, die dir helfen, genau zu messen, zu optimieren und vorauszuplanen.",
            featureSectionContent4:
                "Datentransparenz ist entscheidend: Erhalte saubere und klare Visualisierungen, die Vertrauen schaffen und bessere Entscheidungen ermöglichen.",
            featureSectionContent5:
                "Erkenne Veränderungen und Marktverschiebungen in Echtzeit, um einen Schritt voraus zu sein – mit verlässlichen Prognosen und umsetzbaren Erkenntnissen.",
            featureSectionContent6:
                "Stärke deine Strategien mit fortgeschrittener Statistik, die Analyse in Aktion verwandelt und messbare Geschäftsergebnisse liefert.",

            CTASecondSectionTitle: "Erstelle deine erste personalisierte Erfahrung",
            CTASecondSectionContent: "Keine Kreditkarte erforderlich — 7 Tage kostenlos testen",

            protocolSectionTitle1: "Treffe die beste Einstellung in der halben Zeit",
            protocolSectionTitle2: "Optimieren Sie Ihren Einstellungsprozess",
            protocolSectionTitle3: "Verbessern Sie die Kandidatenerfahrung",
            protocolSectionTitle4: "Datengetriebene Einstellungsentscheidungen",
            protocolSectionContent1:
                "Bewege dich schneller auf einer Recruiting-Plattform, die manuelle Aufgaben wie Terminplanung und Genehmigungen automatisiert.",
            protocolSectionContent2:
                "Zentralisiere Kandidatendaten, vereinfache Workflows und kollaboriere in Echtzeit mit deinem Team.",
            protocolSectionContent3:
                "Biete eine reibungslose und professionelle Reise mit automatisierter Kommunikation und personalisierten Touchpoints.",
            protocolSectionContent4:
                "Nutze Analyse- und Reporting-Tools, um deine Recruiting-Strategie zu optimieren und die Time-to-Hire zu verkürzen.",

            CTAThirdSectionTitle: "Wachsen wir zusammen",
            CTAThirdSectioncontent:
                "Entdecken Sie unsere vollständige Recruiting-Plattform mit 15 Tagen kostenloser Testversion ohne Kreditkarte. Stellen Sie Jobs ein, erhalten Sie Kandidaten und verwalten Sie Bewerbungen an einem Ort.",

            faqSectionTitle0: "Häufig gestellte Fragen",
            faqSectionTitle1: "Gibt es eine kostenlose Testversion?",
            faqSectionTitle2: "Wie funktionieren Abrechnung und Preise?",
            faqSectionTitle3: "Kann ich mein Abonnement kündigen?",
            faqSectionTitle4: "Welche Support-Optionen gibt es?",
            faqSectionContent0: "Alles, was Sie über jahedin wissen müssen",
            faqSectionContent1:
                "Ja — wir bieten eine 14-tägige kostenlose Testversion mit vollem Zugriff auf alle Funktionen. Keine Kreditkarte erforderlich, und Sie können jederzeit upgraden, ohne Ihre Daten zu verlieren.",
            faqSectionContent2:
                "Wir bieten monatliche und jährliche Pläne. Jahresabonnements beinhalten in der Regel einen Rabatt (~20%). Die Abrechnung erfolgt zu Beginn jedes Zeitraums und Sie können Ihren Plan in den Kontoeinstellungen ändern; anteilige Anpassungen können beim Wechsel anfallen.",
            faqSectionContent3:
                "Ja — Sie können jederzeit in Ihrem Konto kündigen. Die Kündigung stoppt zukünftige Abrechnungen sofort, aber Sie behalten Zugriff bis zum Ende des aktuell bezahlten Zeitraums. Es fallen keine Reaktivierungsgebühren an, falls Sie zurückkehren.",
            faqSectionContent4:
                "Support umfasst E-Mail (Antwort innerhalb von 24 Arbeitsstunden), Live-Chat für zahlende Pläne und ein durchsuchbares Helpcenter mit Anleitungen und Tutorials zur schnellen Problemlösung.",

            linksFormDataTitle1: "Produkt",
            linksFormDataTitle2: "Unternehmen",
            linksFormDataTitle3: "Ressourcen",
            linksFormDataTitle4: "Funktionen",
            linksFormDataTitle5: "Über",

            linkFormDataLabel1: "Überblick",
            linkFormDataLabel2: "Preise",
            linkFormDataLabel3: "Integrationen",
            linkFormDataLabel4: "Demo",
            linkFormDataLabel5: "Unternehmen",
            linkFormDataLabel6: "Über uns",
            linkFormDataLabel7: "Team",
            linkFormDataLabel8: "Karriere",
            linkFormDataLabel9: "Presse",
            linkFormDataLabel10: "Investoren",
            linkFormDataLabel11: "Dokumentation",
            linkFormDataLabel12: "Blog",
            linkFormDataLabel13: "Helpcenter",
            linkFormDataLabel14: "Tutorials",
            linkFormDataLabel15: "API-Referenz",
            linkFormDataLabel16: "Terminplanung",
            linkFormDataLabel17: "Analysen",
            linkFormDataLabel18: "Zusammenarbeit",
            linkFormDataLabel19: "Automatisierung",
            linkFormDataLabel20: "Sicherheit",
            linkFormDataLabel21: "Kontakt",
            linkFormDataLabel22: "Standort",
            linkFormDataLabel23: "Nutzungsbedingungen",
            linkFormDataLabel24: "Datenschutzrichtlinie",
            linkFormDataLabel25: "FAQs",

            registerFooterText: "Alle Rechte vorbehalten.",
            noTextFound: "Kein Text gefunden",
        },

        zh: {
            h1HomePage: "主页标题",

            userNavLabel: "个人资料",
            homePageNavLabel: "首页",
            productsPageNavLabel: "产品",
            featuresPageNavLabel: "功能",
            pricingPageNavLabel: "定价",

            languagesLabelName: "语言",

            btnSignIn: "注册",
            btnLogIn: "登录",
            btnLogOut: "登出",
            btnGetStart: "开始",
            btnWatchDemo: "观看演示",
            btnGetStarted: "立即开始",
            btnRequestDemo: "申请演示",
            btnTryIt: "免费试用",

            CTAFirstSectionTitle1: "让你的第一",
            CTAFirstSectionTitle2: "更有意义",
            CTAFirstSectionSpanTitle: "印象",
            CTAFirstSectionText: "强大的自助式产品分析，帮助您转化、吸引并留住更多用户",
            brandsSectionTitle: "已被产品团队喜爱与信赖",

            featureSectionCategoryName: "功能",
            featureSectionTitle0: "你将不再错过任何截止日期",
            featureSectionTitle1: "丰富的分析",
            featureSectionTitle2: "深度洞察",
            featureSectionTitle3: "智能指标",
            featureSectionTitle4: "清晰的数据",
            featureSectionTitle5: "明显趋势",
            featureSectionTitle6: "强大统计",
            featureSectionContent0: "无需工程投入即可连接、开放并可视化 150+ 款 SaaS 工具。",
            featureSectionContent1: "通过专用管理面板和开发者平台轻松管理数据，扩展 Polio CRM 的功能。",
            featureSectionContent2:
                "通过深入分析发现隐藏模式和有价值的趋势，将原始数据转化为智能、战略性的决策。",
            featureSectionContent3: "将信息转化为智能指标，帮助您准确地衡量、优化并预测未来。",
            featureSectionContent4: "数据透明至关重要：获得干净清晰的可视化，建立信任并推动更好的决策。",
            featureSectionContent5: "实时识别变化和市场转向，借助可靠的预测和可执行的洞察保持领先一步。",
            featureSectionContent6: "用高级统计增强您的策略，将分析转化为行动并带来可量化的业务影响。",

            CTASecondSectionTitle: "创建您的第一个个性化体验",
            CTASecondSectionContent: "无需信用卡 — 7 天免费试用",

            protocolSectionTitle1: "在一半的时间内做出最佳招聘",
            protocolSectionTitle2: "简化您的招聘流程",
            protocolSectionTitle3: "改善候选人体验",
            protocolSectionTitle4: "以数据为驱动的招聘决策",
            protocolSectionContent1: "使用自动化安排面试和审批等手动任务的招聘平台，加快流程。",
            protocolSectionContent2: "集中管理候选人数据，简化工作流，并与团队实时协作。",
            protocolSectionContent3: "提供流畅专业的体验，借助自动化沟通和个性化触点。",
            protocolSectionContent4: "使用分析和报告工具优化招聘策略并缩短招聘时间。",

            CTAThirdSectionTitle: "一起成长",
            CTAThirdSectioncontent:
                "探索我们完整的招聘平台，享受 15 天免费试用，无需信用卡。发布职位、获取候选人并集中管理应聘者。",

            faqSectionTitle0: "常见问题",
            faqSectionTitle1: "是否提供免费试用？",
            faqSectionTitle2: "计费和定价如何运作？",
            faqSectionTitle3: "我可以取消订阅吗？",
            faqSectionTitle4: "有哪些支持选项？",
            faqSectionContent0: "关于 jahedin 的所有必要信息",
            faqSectionContent1:
                "是 — 我们提供 14 天免费试用，可完全访问所有功能。无需信用卡，您可随时升级而不丢失数据。",
            faqSectionContent2:
                "我们提供按月和按年计划。年订阅通常包含折扣（约 20%）。计费在每个周期开始时发生，您可在帐户设置中更改计划；更改时可能会按比例调整费用。",
            faqSectionContent3:
                "是 — 您可以随时在帐户中取消。取消会立即停止后续收费，但您将保留对当前已付周期结束前的访问权限。如返回，不会收取重新激活费用。",
            faqSectionContent4:
                "支持包括电子邮件（工作日内 24 小时响应）、付费计划的在线聊天以及包含指南和教程的可搜索帮助中心，以快速解决常见问题。",

            linksFormDataTitle1: "产品",
            linksFormDataTitle2: "公司",
            linksFormDataTitle3: "资源",
            linksFormDataTitle4: "功能",
            linksFormDataTitle5: "关于我们",

            linkFormDataLabel1: "概述",
            linkFormDataLabel2: "价格",
            linkFormDataLabel3: "集成",
            linkFormDataLabel4: "演示",
            linkFormDataLabel5: "企业版",
            linkFormDataLabel6: "关于我们",
            linkFormDataLabel7: "团队",
            linkFormDataLabel8: "招聘",
            linkFormDataLabel9: "媒体",
            linkFormDataLabel10: "投资者",
            linkFormDataLabel11: "文档",
            linkFormDataLabel12: "博客",
            linkFormDataLabel13: "帮助中心",
            linkFormDataLabel14: "教程",
            linkFormDataLabel15: "API 参考",
            linkFormDataLabel16: "日程安排",
            linkFormDataLabel17: "分析",
            linkFormDataLabel18: "协作",
            linkFormDataLabel19: "自动化",
            linkFormDataLabel20: "安全",
            linkFormDataLabel21: "联系方式",
            linkFormDataLabel22: "位置",
            linkFormDataLabel23: "服务条款",
            linkFormDataLabel24: "隐私政策",
            linkFormDataLabel25: "常见问题",

            registerFooterText: "版权所有。",
            noTextFound: "未找到文本",
        },
    };

    return (
        <LanguageContext value={{ lang, TEXTS, languages, getText, handleLang }}>{children}</LanguageContext>
    );
};
