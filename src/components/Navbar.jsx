import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { ImageContainer } from "./ImageContainer";

import logo from "../assets/logo.png";
import { Container } from "./Container";
import { Button } from "./UI/Button";
import { LinkButton } from "./UI/LinkButton";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const BurgerButton = ({ openMobileNav, handleClick }) => {
    return (
        <button
            type="button"
            className="relative md:hidden block w-[24px] h-[24px] cursor-pointer"
            onClick={handleClick}
            aria-label="Open Menu"
            aria-expanded={openMobileNav}
            aria-controls="mobile-nav"
        >
            <span
                className="absolute top-0 left-0 w-[24px] h-[2px] bg-black rounded-full transition-all duration-300 ease-in-out"
                style={{
                    transform: openMobileNav ? "rotate(45deg)" : "rotate(0deg)",
                    transformOrigin: "top left",
                    width: openMobileNav ? "32px" : "24px",
                }}
            />
            <span
                className="absolute left-0 w-[24px] h-[2px] bg-black rounded-full transition-all duration-300 ease-in-out"
                style={{
                    top: "11px",
                    transform: openMobileNav ? "translateX(-20px)" : "translateX(0px)",
                    opacity: openMobileNav ? 0 : 1,
                    transitionDuration: "0.5s",
                }}
            />
            <span
                className="absolute left-0 bottom-0 w-[24px] h-[2px] bg-black rounded-full transition-all duration-300 ease-in-out"
                style={{
                    transform: openMobileNav ? "rotate(-45deg)" : "rotate(0deg)",
                    transformOrigin: "bottom left",
                    width: openMobileNav ? "32px" : "24px",
                    boxShadow: openMobileNav ? "0 0 10px #000000" : "none",
                }}
            />
        </button>
    );
};

const getNavLinksClasses = ({ isActive, isPending, isTransitioning }) => {
    const base = "BASE STYLE";
    const normal = "NORMAL STYLE";
    const active = "ACTIVE STYLE";
    const pending = "PENDING STYLE";
    const transitioning = "TRANSITIONING STYLE";

    if (isActive) return cn(base, active);
    if (isPending) return cn(base, pending);
    if (isTransitioning) return cn(base, transitioning);
    return cn(base, normal);
};

const NavbarLinks = () => {
    const { userActive, logout } = useContext(AuthContext);
    const { getText } = useContext(LanguageContext);

    const NAV_LINKS = [
        { to: "/home", label: getText("homePageNavLabel") },
        { to: "/products", label: getText("productsPageNavLabel") },
        { to: "/features", label: getText("featuresPageNavLabel") },
        { to: "/Pricing", label: getText("pricingPageNavLabel") },
    ];

    return (
        <ul className="flex flex-col gap-xs md:flex-row md:items-center md:gap-sm">
            {NAV_LINKS.map((link) => (
                <li key={link.to}>
                    <NavLink to={link.to} className={(state) => getNavLinksClasses(state)}>
                        <p className="group relative w-max">
                            <span>{link.label}</span>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gray-400 group-hover:w-full"></span>
                        </p>
                    </NavLink>
                </li>
            ))}
            {userActive?.id && (
                <>
                    <li>
                        <NavLink to={"/user"}>
                            <p className="group relative w-max">
                                <span>{getText("userNavLabel")}</span>
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                            </p>
                        </NavLink>
                    </li>
                </>
            )}
        </ul>
    );
};

export const NavBar = () => {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const { userActive, logout } = useContext(AuthContext);
    const { pathname } = useLocation();
    const { getText } = useContext(LanguageContext);

    useEffect(() => {
        setOpenMobileNav(false);
    }, [pathname]);

    const handleClick = () => setOpenMobileNav((prevValue) => !prevValue);

    return (
        <nav className={"border-b border-b-neutral-400 bg-white"}>
            <Container className={`flex flex-col py-2.5 px-5 ${openMobileNav ? "gap-xs" : "gap-0"}`}>
                <div className="flex items-center justify-between">
                    <Link to={"/"} className="text-xl font-bold">
                        <ImageContainer className={"w-16 md:w-20"}>
                            <img className="w-full" src={logo} alt="Logo" />
                        </ImageContainer>
                    </Link>

                    <div className="hidden md:block">
                        <NavbarLinks />
                    </div>

                    <div className="hidden md:flex md:items-center md:gap-2">
                        {!userActive?.id && (
                            <>
                                <LinkButton to={"/register"} className={"active:bg-gray-200"}>
                                    {getText("btnSignIn")}
                                </LinkButton>
                                <LinkButton to={"/login"} className={"bg-blue-500 active:bg-blue-700"}>
                                    {getText("btnLogIn")}
                                </LinkButton>
                            </>
                        )}
                        {userActive?.id && (
                            <Button
                                className={"bg-blue-500 border-blue-500 hover:bg-blue-700"}
                                onClick={logout}
                            >
                                {getText("btnLogOut")}
                            </Button>
                        )}
                    </div>

                    <BurgerButton openMobileNav={openMobileNav} handleClick={handleClick} />
                </div>

                <div
                    id="mobile-nav"
                    className={cn(
                        "md:hidden",
                        "md:h-0",
                        openMobileNav ? "h-auto" : "h-0",
                        `flex flex-col gap-sm overflow-y-hidden h-0`
                    )}
                >
                    <div className="flex">
                        <NavbarLinks />
                    </div>
                    <div className="flex flex-col justify-center gap-sm">
                        {!userActive?.id && (
                            <>
                                <LinkButton
                                    to={"/register"}
                                    className={"py-xs px-10 rounded-lg border elevation active:bg-gray-200"}
                                >
                                    {getText("btnSignIn")}
                                </LinkButton>
                                <LinkButton
                                    to={"/login"}
                                    className={
                                        "py-xs px-10 rounded-lg border elevation bg-blue-500 active:bg-blue-700"
                                    }
                                >
                                    {getText("btnLogIn")}
                                </LinkButton>
                            </>
                        )}
                        {userActive?.id && (
                            <Button
                                className={"bg-blue-500 border-blue-500 active:bg-blue-700"}
                                onClick={logout}
                            >
                                {getText("btnLogOut")}
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
};
