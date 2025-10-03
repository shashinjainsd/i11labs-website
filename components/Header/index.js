'use client'
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Navbar/i11 labs logo.svg";
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from "react";
import Arrow from "../../public/images/Navbar/arrow.webp";
import ActiveArrow from "../../public/images/Navbar/Activearrow.webp";
import Menublack from "../../public/images/Navbar/menu.webp";
import Close from "../../public/images/Navbar/close.webp";

export default function Header() {
    const currentRoute = usePathname();
    const [stickyClass, setStickyClass] = useState('');
    const [i11labsClass, seti11labsClass] = useState('headclass');
    const [isDropdownOpen, setIsDropdownOpen] = useState({ built: false, offerings: false });

    useEffect(() => {
        const stickNavbar = () => {
            const windowHeight = window.scrollY;
            setStickyClass(windowHeight > 1 ? 'sticky-nav' : 'headclass');
        };

        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const toggleDropdown = (type) => {
        setIsDropdownOpen(prev => ({
            built: type === 'built' ? !prev.built : false,
            offerings: type === 'offerings' ? !prev.offerings : false,
        }));
    };

    return (
        <div className={`${stickyClass} ${i11labsClass} container-fluid sticky-top w-100`} id="navhover" style={{ marginTop: "-5.5rem" }}>
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid py-3">
                        <Link href="/" className="mx-md-4 mx-2">
                            <Image src={Logo} className="img-fluid" height={42} width={125} alt="I11labs logo" title="i11labs" />
                        </Link>
                        <div className="d-block d-lg-none">
                            <Image src={Menublack} alt="Menu" height={20} width={29} className="cursorPointer" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" />
                            <div style={{ overflowY: 'scroll', scrollbarheight: 'none' }} className="border offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header justify-content-end">
                                    <Image src={Close} height={33} width={33} alt="Close" className="cursorPointer" aria-label="Close" data-bs-dismiss="offcanvas" />
                                </div>
                                <div className="col-12 offcanvas-body ps-4 ps-md-5">
                                    <ul className="navbar-nav header">
                                        <li className="nav-item navunderline py-2" data-bs-dismiss="offcanvas">
                                            <Link className={`${styles.headercontent1} nav-link pt-3`} aria-current="page" href="/">Home <span><Image src={Arrow} className="img-fluid float-end" alt="" /></span></Link>
                                        </li>
                                        <li className="nav-item navunderline py-2">
                                            <Link className={`${styles.headercontent1} nav-link pt-3`} aria-current="page" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={isDropdownOpen.built} href="/products" onClick={() => toggleDropdown('built')}>
                                                Products
                                                <Image src={Arrow} className={`img-fluid float-end ${!isDropdownOpen.built ? '' : 'd-none'}`} alt="" />
                                                <Image src={ActiveArrow} className={`img-fluid float-end ${isDropdownOpen.built ? '' : 'd-none'}`} alt="" />
                                            </Link>
                                            <ul className={`dropdown-menu ps-3 ${isDropdownOpen.built ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 mb-2 navunderline py-3`} href="/i11fleet" rel="noreferrer" style={{ borderBottom: "1px solid #C1D1E0" }}>i11Fleet – Fleet Management</Link>
                                                </li>
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 mb-2 navunderline py-3`} href="/feeds-to-leads" rel="noreferrer" style={{ borderBottom: "1px solid #C1D1E0" }}>FTL – Feeds To Leads</Link>
                                                </li>
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 mb-2 navunderline py-3`} href="/dti-dumptruckit" rel="noreferrer" style={{ borderBottom: "1px solid #C1D1E0" }}>DTI – Dump Truck It</Link>
                                                </li>
                                                {/* <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 pt-3`} href="/know-whereabouts-of-crew/" rel="noreferrer">KWC – Know Whereabout of Crew</Link>
                                                </li> */}
                                            </ul>
                                        </li>

                                        <li className="nav-item navunderline py-2">
                                            <Link className={`${styles.headercontent1} nav-link pt-3`} aria-current="page" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={isDropdownOpen.offerings} href="/service-offerings" onClick={() => toggleDropdown('offerings')}>
                                                Service Offerings
                                                <Image src={Arrow} className={`img-fluid float-end ${!isDropdownOpen.offerings ? '' : 'd-none'}`} alt="" />
                                                <Image src={ActiveArrow} className={`img-fluid float-end ${isDropdownOpen.offerings ? '' : 'd-none'}`} alt="" />
                                            </Link>
                                            <ul className={`dropdown-menu ps-md-3 ps-0 ${isDropdownOpen.offerings ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 mb-2 navunderline py-3`} href="/ai-integration-development/" rel="noreferrer" style={{ borderBottom: "1px solid #C1D1E0" }}>AI Integration and Development</Link>
                                                </li>
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 mb-2 navunderline py-3`} href="/application-modernization/" rel="noreferrer" style={{ borderBottom: "1px solid #C1D1E0" }}>Application Modernization</Link>
                                                </li>
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 mb-2 navunderline py-3`} href="/meta-data-driven-applications/" rel="noreferrer" style={{ borderBottom: "1px solid #C1D1E0" }}>Meta Data Driven Applications</Link>
                                                </li>
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 mb-2 navunderline py-3`} href="/cloud-computing-infrastructure-solutions/" rel="noreferrer" style={{ borderBottom: "1px solid #C1D1E0" }}>Cloud Computing and Infrastructure Solutions</Link>
                                                </li>
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 mb-2 navunderline py-3`} href="/technology-consultation-strategy" rel="noreferrer" style={{ borderBottom: "1px solid #C1D1E0" }}>Technology Consultation and Strategy</Link>
                                                </li>
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 mb-2 navunderline py-3`} href="/custom-software-development-integration/" rel="noreferrer" style={{ borderBottom: "1px solid #C1D1E0" }}>Custom Software Development and Integration</Link>
                                                </li>
                                                <li data-bs-dismiss="offcanvas" aria-current="page">
                                                    <Link className={`${styles.subheadercontent1} dropdown-item ms-2 pt-3`} href="/how-we-serve-you/" rel="noreferrer">How We Serve You</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <li className="nav-item navunderline py-2" data-bs-dismiss="offcanvas">
                                            <Link className={`${styles.headercontent1} nav-link pt-3`} aria-current="page" href="/how-we-serve/">Service Offerings<Image src={Arrow} className="img-fluid float-end" alt="Arrow" /></Link>
                                        </li> */}
                                        <li className="nav-item navunderline py-2" data-bs-dismiss="offcanvas">
                                            <Link className={`${styles.headercontent1} nav-link pt-3`} aria-current="page" href="/our-dna">Our DNA<Image src={Arrow} className="img-fluid float-end" alt="" /></Link>
                                        </li>
                                    </ul>
                                    <div className="d-block d-lg-none py-5" data-bs-dismiss="offcanvas">
                                        <Link href="/contact">
                                            <button className={`${styles.btn}`} type="submit">Let&apos;s Connect</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse justify-content-xl-end justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={`${styles.headercontent} nav-link mx-lg-1 mx-xl-2 ${currentRoute === "/" ? styles.active : ""}`} aria-current="page" href="/">Home</Link>
                                </li>

                                <li className="nav-item dropdown" style={{ position: "initial" }}
                                    onMouseEnter={() => toggleDropdown('built')}
                                    onMouseLeave={() => toggleDropdown('built')}
                                >
                                    <Link className={`${styles.headercontent} nav-link mx-lg-1 mx-xl-2 ${currentRoute === "/dti-dumptruckit/" || currentRoute === "/feeds-to-leads/" || currentRoute === "/know-whereabouts-of-crew/"  || currentRoute === "/products/"? styles.active : ""}`}
                                        id="navbarDropdown"
                                        role="button"
                                        aria-expanded={isDropdownOpen.built}
                                        href="/products"
                                    >
                                        Products
                                    </Link>
                                    <ul className={`dropdown-menu ${isDropdownOpen.built ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/i11fleet" ? styles.activeLink : ""}`} href="/i11fleet">i11Fleet – Fleet Management</Link>
                                        </li>
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/feeds-to-leads" ? styles.activeLink : ""}`} href="/feeds-to-leads">FTL – Feeds To Leads</Link>
                                        </li>
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/dti-dumptruckit" ? styles.activeLink : ""}`} href="/dti-dumptruckit">DTI – Dump Truck It</Link>
                                        </li>
                                        {/* <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/know-whereabouts-of-crew/" ? styles.activeLink : ""}`} href="/know-whereabouts-of-crew/">KWC – Know Whereabout of Crew</Link>
                                        </li> */}
                                    </ul>
                                </li>

                                <li className="nav-item dropdown" style={{ position: "initial" }}
                                    onMouseEnter={() => toggleDropdown('offerings')}
                                    onMouseLeave={() => toggleDropdown('offerings')}
                                >
                                    <Link className={`${styles.headercontent} nav-link mx-lg-1 mx-xl-2 ${currentRoute === "/how-we-serve-you/" || currentRoute === "/ai-integration-development/" || currentRoute === "/application-modernization/" || currentRoute === "/custom-software-development-integration/" || currentRoute === "/meta-data-driven-applications/" || currentRoute === "/cloud-computing-infrastructure-solutions/" || currentRoute === "/technology-consultation-strategy/" || currentRoute === "/service-offerings/" ? styles.active : ""}`}
                                        id="navbarDropdown"
                                        role="button"
                                        aria-expanded={isDropdownOpen.offerings}
                                        href="/service-offerings"
                                    >
                                        Service Offerings
                                    </Link>
                                    <ul className={`dropdown-menu ${isDropdownOpen.offerings ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/ai-integration-development/" ? styles.activeLink : ""}`} href="/ai-integration-development/">AI Integration and Development</Link>
                                        </li>
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/application-modernization/" ? styles.activeLink : ""}`} href="/application-modernization/">Application Modernization</Link>
                                        </li>
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/meta-data-driven-applications/" ? styles.activeLink : ""}`} href="/meta-data-driven-applications/">Meta Data Driven Applications</Link>
                                        </li>
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/cloud-computing-infrastructure-solutions/" ? styles.activeLink : ""}`} href="/cloud-computing-infrastructure-solutions/">Cloud Computing and Infrastructure Solutions</Link>
                                        </li>
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/technology-consultation-strategy/" ? styles.activeLink : ""}`} href="/technology-consultation-strategy/">Technology Consultation and Strategy</Link>
                                        </li>
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/custom-software-development-integration/" ? styles.activeLink : ""}`} href="/custom-software-development-integration/">Custom Software Development and Integration</Link>
                                        </li>
                                        <li className="centerheader">
                                            <Link className={`${styles.subheadercontent} dropdown-item py-2 mx-lg-3 mx-xl-4 ${currentRoute === "/how-we-serve-you/" ? styles.activeLink : ""}`} href="/how-we-serve-you/">How We Serve You</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className={`${styles.headercontent} nav-link mx-lg-1 mx-xl-2 ${currentRoute === "/our-dna/" ? styles.active : ""}`}
                                        aria-current="page"
                                        href="/our-dna/"
                                    >
                                        Our DNA
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="d-none d-lg-block pe-xl-5 ps-2 ">
                            <Link href="/contact">
                                <button className={`${styles.btn}`} type="submit">Let&apos;s Connect</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
