import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ImageContainer } from "./ImageContainer";

import logo from "../assets/logo.png";

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
        <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-sm">
            {NAV_LINKS.map((link) => (
                <li key={link.to}>
                    <NavLink to={link.to} className={(state) => getNavLinksClasses(state)}>
                        {link.label}
                    </NavLink>
                </li>
            ))}
            {userActive?.id && (
                <>
                    <li>
                        <NavLink to={"/user"}>{getText("userNavLabel")}</NavLink>
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

    useEffect(() => {
        setOpenMobileNav(false);
    }, [pathname]);

    const handleClick = () => setOpenMobileNav((prevValue) => !prevValue);

    return (
        <nav className="flex flex-col py-2.5 px-5 bg-white border-b border-b-neutral-600">
            <div className="flex items-center justify-between">
                <Link to={"/"} className="text-xl font-bold">
                    <ImageContainer className={"w-16"}>
                        <img className="w-full" src={logo} alt="Logo" />
                    </ImageContainer>
                </Link>

                <div className="hidden md:block">
                    <NavbarLinks />
                </div>

                <div className="hidden md:flex md:gap-2">
                    {!userActive?.id && (
                        <>
                            <Link to={"/register"}>SIGN UP</Link>
                            <Link to={"/login"}>LOG IN</Link>
                        </>
                    )}
                    {userActive?.id && <button onClick={logout}>LOG OUT</button>}
                </div>

                <BurgerButton openMobileNav={openMobileNav} handleClick={handleClick} />
            </div>

            <div id="mobile-nav" className={cn("md:hidden", openMobileNav ? "block" : "hidden")}>
                <div className="flex">
                    <NavbarLinks />
                </div>
                <div className="flex flex-col bg-red-500">
                    {!userActive?.id && (
                        <>
                            <Link to={"/register"}>SIGN UP</Link>
                            <Link to={"/login"}>LOG IN</Link>
                        </>
                    )}
                    {userActive?.id && <button onClick={logout}>LOG OUT</button>}
                </div>
            </div>
        </nav>
    );
};
