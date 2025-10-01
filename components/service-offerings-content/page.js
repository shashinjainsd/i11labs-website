'use client'
import React from 'react';
import Image from "next/image";
import styles from "../../app/page.module.css";
import styles1 from "../../app/service-offerings/styles.module.css";
import Style from "./page.module.css";
import duration from "../../public/images/serviceofferings/duration.png";
import teamsize from "../../public/images/serviceofferings/team size.png";
import AIIntegration from "../../public/images/serviceofferings/AI Integration@2x.webp";
import AIIntegrationmob from "../../public/images/serviceofferings/AI Integration-1@2x.webp";
import AppModernization from "../../public/images/serviceofferings/Application Modernization@2x.webp";
import AppModernizationmob from "../../public/images/serviceofferings/Application Modernization-1@2x.webp";
import MetaData from "../../public/images/serviceofferings/Meta Data Driven Applications@2x.webp";
import MetaDatamob from "../../public/images/serviceofferings/Meta Data Driven Applications-1@2x.webp";
import CloudComputing from "../../public/images/serviceofferings/Cloud Computing@2x.webp";
import CloudComputingmob from "../../public/images/serviceofferings/Cloud Computing-1@2x.webp";
import Strategy from "../../public/images/serviceofferings/Technology Consultation@2x.webp";
import Strategymob from "../../public/images/serviceofferings/Technology Consultation@2x.png";
import CustomSoftware from "../../public/images/serviceofferings/Custom Software Development@2x.webp";
import CustomSoftwaremob from "../../public/images/serviceofferings/Custom Software Development-1@2x.webp";
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function ServiceOfferings() {

    const Logistics = [
        {
            imgurl: "/images/serviceofferings/automate.png",
            desc: <text>Automated manual ticketing, <b>saving 40% of processing time</b> and reducing errors.</text>,
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/tracking.png",
            desc: <text>Enhanced <b>real-time tracking,</b> improving operational precision and driver monitoring.</text>,
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/analytics.png",
            desc: "Provided comprehensive analytics, identifying optimization opportunities and supporting growth.",
            verticalborder: "",
            horizontalborder: "horizontalcolor",
        },

    ];
    const bank = [
        {
            imgurl: "/images/serviceofferings/time to market.png",
            desc: <text>Time to market for software development and deployment <b>increased by 77%.</b></text>,
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/cost.png",
            desc: <text>Cost of infrastructure <b>reduced by 70%.</b></text>,
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/scalable.png",
            desc: <text>Easily <b>scalable and reliable.</b></text>,
            verticalborder: "",
            horizontalborder: "horizontalcolor",
        },

    ];
    const bank1 = [
        {
            imgurl: "/images/serviceofferings/time to market.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/cost.png",
            desc: "Lorem ipsum dolor sit amet, consectetur.",
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/scalable.png",
            desc: "Lorem ipsum dolor sit amet.",
            verticalborder: "",
            horizontalborder: "horizontalcolor",
        },

    ];

    const metadata = [
        {
            imgurl: "/images/serviceofferings/cost.png",
            desc: <text><b>Slashed $15M </b>in data and development costs with the new document data engine<b> (90% reductions in overall spend).</b></text>,
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/productivity.png",
            desc: <text><b>Increased development team&apos;s productivity by 320% </b>in demanding business contexts while keeping timelines and technical stewardship over platform applications.</text>,
            verticalborder: " ",
            horizontalborder: "horizontalcolor",

        },

    ];

    const metadatas = [
        {
            imgurl: "/images/serviceofferings/cost.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/productivity.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            verticalborder: " ",
            horizontalborder: "horizontalcolor",

        },

    ];
    const government = [
        {
            imgurl: "/images/serviceofferings/cost.png",
            desc: <text>Total<b> save of 50 Million Dollars </b>was achieved.</text>,
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/happy.png",
            desc: "Improved the self service functionality drastically.",
            verticalborder: " ",
            horizontalborder: "horizontalcolor",

        },

    ];
    const education = [
        {
            imgurl: "/images/serviceofferings/automate.png",
            desc: <text><b>Reduced manual work by 50%,</b> accelerating processing times.</text>,
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/accurate.png",
            desc: <text><b>Improved data accuracy by 30%, </b>minimizing errors and discrepancies.</text>,
            verticalborder: "verticalcolor",
            horizontalborder: "horizontalcolor",

        },
        {
            imgurl: "/images/serviceofferings/track.png",
            desc: <text>Enabled <b>real-time tracking </b>of applications, increasing transparency and speed.</text>,
            verticalborder: "",
            horizontalborder: "horizontalcolor",
        },

    ];


    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, width: "58px", right: "-50px", top: "20%" }}
                onClick={onClick}
            > <Image
                    src="/images/serviceofferings/right.png"
                    width={48}
                    height={48}
                    className="img-fluid arrow"
                    title="Next"
                    alt="Next arrow"

                /></div>
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, width: "58px", left: "-50px", top: "20%" }}
                onClick={onClick}
            >
                <Image
                    src="/images/serviceofferings/left.png"
                    width={48}
                    height={48}
                    className="img-fluid arrow"
                    title="Prev"
                    alt="Prev arrow"
                />
            </div>
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ],
    };

    useEffect(() => {

        const carouselElement = document.getElementById('carouselExampleFade');
        if (carouselElement) {
            new bootstrap.Carousel(carouselElement, {
                interval: 3000,
            });
        }
    }, []);

    const [checkLoader, setCheckLoader] = useState(false);
    useEffect(() => {
        requestAnimationFrame(animate)
    }, []);

    const animate = () => {
        if (checkLoader === false) {
            document.getElementById('carouselExampleFade').addEventListener('slide.bs.carousel', function () {
                const element = document.getElementById('carousel1');
                if (element) {
                    if (element.classList.contains("carousalSliderRight")) {
                        element.classList.remove("carousalSliderRight");
                    }
                    element.classList.add("carousalSliderleft");
                } else {
                    console.error("Element with ID 'carousel1' not found.");
                }

                const element1 = document.getElementById('carousel2')
                if (element1.classList.contains("carousalSliderRight")) {
                    element1.classList.remove("carousalSliderRight");
                }
                element1.classList.add("carousalSliderleft");


                const element2 = document.getElementById('carousel3')
                if (element2.classList.contains("carousalSliderRight")) {
                    element2.classList.remove("carousalSliderRight");
                }
                element2.classList.add("carousalSliderleft");


                const element3 = document.getElementById('carousel4')
                if (element3.classList.contains("carousalSliderRight")) {
                    element3.classList.remove("carousalSliderRight");
                }
                element3.classList.add("carousalSliderleft");

                const element4 = document.getElementById('carousel5')
                if (element4.classList.contains("carousalSliderRight")) {
                    element4.classList.remove("carousalSliderRight");
                }
                element4.classList.add("carousalSliderleft");

                const element5 = document.getElementById('carousel6')
                if (element5.classList.contains("carousalSliderRight")) {
                    element5.classList.remove("carousalSliderRight");
                }
                element5.classList.add("carousalSliderleft");
            });
        }
    };

    const handleclickRight = () => {
        setCheckLoader(true);
        const element = document.getElementById('carousel1');
        if (element.classList.contains("carousalSliderRight")) {
            element.classList.remove("carousalSliderRight");
        }
        element.classList.add("carousalSliderleft");

        const element1 = document.getElementById('carousel2');
        if (element1.classList.contains("carousalSliderRight")) {
            element1.classList.remove("carousalSliderRight");
        }
        element1.classList.add("carousalSliderleft");

        const element2 = document.getElementById('carousel3');
        if (element2.classList.contains("carousalSliderRight")) {
            element2.classList.remove("carousalSliderRight");
        }
        element.classList.add("carousalSliderleft");

        const element3 = document.getElementById('carousel4');
        if (element3.classList.contains("carousalSliderRight")) {
            element3.classList.remove("carousalSliderRight");
        }
        element3.classList.add("carousalSliderleft");

        const element4 = document.getElementById('carousel5');
        if (element4.classList.contains("carousalSliderRight")) {
            element4.classList.remove("carousalSliderRight");
        }
        element4.classList.add("carousalSliderleft");

        const element5 = document.getElementById('carousel6');
        if (element5.classList.contains("carousalSliderRight")) {
            element5.classList.remove("carousalSliderRight");
        }
        element5.classList.add("carousalSliderleft");
        setCheckLoader(false);
    }

    const handleclickLeft = () => {
        setCheckLoader(true);
        const element = document.getElementById('carousel1')
        if (element.classList.contains("carousalSliderleft")) {
            element.classList.remove("carousalSliderleft");
        }
        element.classList.add("carousalSliderRight");

        const element1 = document.getElementById('carousel2')
        if (element1.classList.contains("carousalSliderleft")) {
            element1.classList.remove("carousalSliderleft");
        }
        element1.classList.add("carousalSliderRight");

        const element2 = document.getElementById('carousel3')
        if (element2.classList.contains("carousalSliderleft")) {
            element2.classList.remove("carousalSliderleft");
        }
        element2.classList.add("carousalSliderRight");

        const element3 = document.getElementById('carousel4')
        if (element3.classList.contains("carousalSliderleft")) {
            element3.classList.remove("carousalSliderleft");
        }
        element3.classList.add("carousalSliderRight");

        const element4 = document.getElementById('carousel5')
        if (element4.classList.contains("carousalSliderleft")) {
            element4.classList.remove("carousalSliderleft");
        }
        element4.classList.add("carousalSliderRight");

        const element5 = document.getElementById('carousel6')
        if (element5.classList.contains("carousalSliderleft")) {
            element5.classList.remove("carousalSliderleft");
        }
        element5.classList.add("carousalSliderRight");
        setCheckLoader(false);
    }

    return (
        <>

            {/* carousel */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col p-0">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
                            <div className={`${styles.mobilehideindicator} carousel-indicators`}>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>

                            <div className="carousel-inner" id="carouselbodysection" style={{ backgroundColor: "#191E23", height: "max-contant" }}>

                                <div className="carousel-item active">
                                    <div className="d-none d-lg-block">
                                        <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                                            <Image src={AIIntegration} className="img-fluid" loading="eager" alt="AI Integration and Development" title='AI Integration and Development' />
                                        </div>
                                        <div className="carousel-captions p-5 carousalSliderleft" id="carousel1">
                                            <div className="leftborder">
                                                <h1 className={`${Style.banner_text} mx-4`}>AI Integration and Development</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card d-none d-md-block d-lg-none">
                                        <Image src={AIIntegration} className="img-fluid" loading="eager" alt="AI Integration and Development" title='AI Integration and Development' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>AI Integration and Development</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card d-block d-md-none">
                                        <Image src={AIIntegrationmob} className="img-fluid" loading="eager" alt="AI Integration and Development" title='AI Integration and Development' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>AI Integration and Development</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="d-none d-lg-block">
                                        <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                                            <Image src={AppModernization} className="img-fluid" loading="eager" alt="Application Modernization" title='Application Modernization' />
                                        </div>
                                        <div className="carousel-captions1 p-5 carousalSliderleft" id="carousel2">
                                            <div className="leftborder">
                                                <h1 className={`${Style.banner_text} mx-4`}>Application Modernization</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card d-none d-md-block d-lg-none">
                                        <Image src={AppModernization} className="img-fluid" loading="eager" alt="Application Modernization" title='Application Modernization' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>Application Modernization</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card d-block d-md-none">
                                        <Image src={AppModernizationmob} className="img-fluid w-100" loading="eager" alt="Application Modernization" title='Application Modernization' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>Application Modernization</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="carousel-item">

                                    <div className="d-none d-lg-block">
                                        <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                                            <Image src={MetaData} className="img-fluid" loading="eager" alt="Meta Data Driven Applications" title='Meta Data Driven Applications' />
                                        </div>
                                        <div className="carousel-captions2 p-5 carousalSliderleft" id="carousel3">
                                            <div className="leftborder">
                                                <h1 className={`${Style.banner_text} mx-4`}>Meta Data Driven Applications</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card d-none d-md-block d-lg-none">
                                        <Image src={MetaData} className="img-fluid" loading="eager" alt="Meta Data Driven Applications" title='Meta Data Driven Applications' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>Meta Data Driven Applications</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card d-block d-md-none">
                                        <Image src={MetaDatamob} className="img-fluid w-100" loading="eager" alt="Meta Data Driven Applications" title='Meta Data Driven Applications' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>Meta Data Driven Applications</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="carousel-item">

                                    <div className="d-none d-lg-block">
                                        <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                                            <Image src={CloudComputing} className="img-fluid" loading="eager" alt="Cloud Computing" title='Cloud Computing' />
                                        </div>
                                        <div className="carousel-captions3 p-5 carousalSliderleft" id="carousel4">
                                            <div className="leftborder">
                                                <h1 className={`${Style.banner_text} mx-4`}>Cloud Computing and Infrastructure Solutions</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="card d-none d-md-block d-lg-none">
                                        <Image src={CloudComputing} className="img-fluid" loading="eager" alt="Cloud Computing" title='Cloud Computing' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder pt-1 mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>Cloud Computing and Infrastructure Solutions</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card d-block d-md-none">
                                        <Image src={CloudComputingmob} className="img-fluid w-100" loading="eager" alt="Cloud Computing" title='Cloud Computing' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder pt-1 mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>Cloud Computing and Infrastructure Solutions</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">

                                    <div className="d-none d-lg-block">
                                        <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                                            <Image src={Strategy} className="img-fluid" loading="eager" alt="Technology Consultation and Strategy" title='Technology Consultation and Strategy' />
                                        </div>
                                        <div className="carousel-captions4 p-5 carousalSliderleft" id="carousel5">
                                            <div className="leftborder">
                                                <h1 className={`${Style.banner_text} mx-4`}>Technology Consultation and Strategy</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="card d-none d-md-block d-lg-none">
                                        <Image src={Strategy} className="img-fluid" loading="eager" alt="Technology Consultation and Strategy" title='Technology Consultation and Strategy' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder pt-1 mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}> Technology Consultation and Strategy</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card d-block d-md-none">
                                        <Image src={Strategymob} className="img-fluid w-100" loading="eager" alt="Technology Consultation and Strategy" title='Technology Consultation and Strategy' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder pt-1 mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}> Technology Consultation and Strategy</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">

                                    <div className="d-none d-lg-block">
                                        <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                                            <Image src={CustomSoftware} className="img-fluid" loading="eager" alt="Custom Software Development" title='Custom Software Development' />
                                        </div>
                                        <div className="carousel-captions5 p-5 carousalSliderleft" id="carousel6">
                                            <div className="leftborder">
                                                <h1 className={`${Style.banner_text} mx-4`}>Custom Software Development and Integration</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="card d-none d-md-block d-lg-none">
                                        <Image src={CustomSoftware} className="img-fluid" loading="eager" alt="Custom Software Development" title='Custom Software Development' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder pt-1 mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>Custom Software Development and Integration</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card d-block d-md-none">
                                        <Image src={CustomSoftwaremob} className="img-fluid w-100" loading="eager" alt="Custom Software Development" title='Custom Software Development' />
                                        <div className="card-bodys" style={{ backgroundColor: "#191E23" }}>
                                            <div className="mx-md-5 mx-sm-3 pt-3">
                                                <div className="leftborder pt-1 mx-2">
                                                    <h1 className={`${Style.banner_text} mx-4`}>Custom Software Development and Integration</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" onClick={() => { handleclickLeft() }}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" onClick={() => { handleclickRight() }}>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/* Service Offering */}
            <div className='container-fluid py-5' style={{ backgroundColor: "#F0F4F7" }}>
                <div className='container d-lg-block d-none py-3 py-md-5'>
                    <div className={`${styles.vr}`} data-aos="fade-up">
                        <h2 className={`${styles.heading} ps-4`}>Service Offerings</h2>
                    </div>
                    <div className='row'>

                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/ai-integration-development/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/ai integration and development.webp" alt='AI Integration and Development' className='img-fluid' height={469} width={378} title='AI Integration and Development' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">AI Integration and Development</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Custom AI solutions to enhance productivity, decision-making, and customer engagement.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/application-modernization/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/application modernization.webp" alt='Application Modernization' className='img-fluid' height={469} width={378} title='Application Modernization' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">Application Modernization</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Upgrade applications to meet current technological standards and demands.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/meta-data-driven-applications/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/Meta Data Driven Applications.webp" alt='Meta Data Driven Applications' className='img-fluid' height={469} width={378} title='Meta Data Driven Applications' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">Meta Data Driven Applications</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Harnessing metadata for dynamic and efficient software development.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/cloud-computing-infrastructure-solutions/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/cloud computing.webp" alt='Cloud Computing' className='img-fluid' height={469} width={378} title='Cloud Computing' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">Cloud Computing and Infrastructure Solutions</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Scalable, secure cloud services for optimal performance and flexibility.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/technology-consultation-strategy" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/technology consultation.webp" alt='Technology Consultation and Strategy' className='img-fluid' height={469} width={378} title='Technology Consultation and Strategy' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">Technology Consultation and Strategy</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Strategic guidance for leveraging cutting-edge technologies for business growth.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/custom-software-development-integration/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/custom software development.webp" alt='Custom Software Development' className='img-fluid' height={469} width={378} title='Custom Software Development' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-0">Custom Software Development and Integration</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Innovative software development and seamless technology integration.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className='container d-lg-none d-block py-3 py-md-5'>
                    <div className={`${styles.vr}`} data-aos="fade-up">
                        <h2 className={`${styles.heading} ps-4`}>Service Offerings</h2>
                    </div>
                    <div className='row'>
                        {/* <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}> */}
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/ai-integration-development/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/ai integration and development.webp" alt='AI Integration and Development' className='img-fluid w-100' height={469} width={378} title='AI Integration and Development' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">AI Integration and Development</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Custom AI solutions to enhance productivity, decision-making, and customer engagement.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/application-modernization/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/application modernization.webp" alt='Application Modernization' className='img-fluid w-100' height={469} width={378} title='Application Modernization' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">Application Modernization</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Upgrade applications to meet current technological standards and demands.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/meta-data-driven-applications/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/Meta Data Driven Applications.webp" alt='Meta Data Driven Applications' className='img-fluid w-100' height={469} width={378} title='Meta Data Driven Applications' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">Meta Data Driven Applications</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Harnessing metadata for dynamic and efficient software development.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/cloud-computing-infrastructure-solutions/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/cloud computing.webp" alt='Cloud Computing' className='img-fluid w-100' height={469} width={378} title='Cloud Computing' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">Cloud Computing and Infrastructure Solutions</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Scalable, secure cloud services for optimal performance and flexibility.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/technology-consultation-strategy" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/technology consultation.webp" alt='Technology Consultation and Strategy' className='img-fluid w-100' height={469} width={378} title='Technology Consultation and Strategy' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-xl-4 pt-0">Technology Consultation and Strategy</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Strategic guidance for leveraging cutting-edge technologies for business growth.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-5" data-aos="fade-up">
                            <Link href="/custom-software-development-integration/" className="text-decoration-none" >
                                <div className="cards">
                                    <Image src="/images/home/custom software development.webp" alt='Custom Software Development' className='img-fluid w-100' height={469} width={378} title='Custom Software Development' />
                                    <div className="intro">
                                        <h3 className="text-h1 pt-0">Custom Software Development and Integration</h3>
                                        <hr className="redline mx-2" />
                                        <p className="text-p mx-2">Innovative software development and seamless technology integration.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* </div> */}
                    </div>
                </div>
                <div id="logistic"></div>
            </div>

            {/* LOGISTICS */}
            <div className="container-fluid pt-3 mb-5 mb-md-0" >
                <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12  py-2 ">
                            <div className={`${styles.vr}`}>
                                <h2 className={`${styles.heading1} ps-3 mb-0`}>Logistics</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-4 py-4 mx-auto" data-aos="fade-up" style={{ backgroundColor: "#F0F4F7" }}>
                    <div className="row mx-auto">
                        <div className="col-lg-4 col-12 ps-3 mx-auto">
                            <div className={`${styles1.subheadbold} mb-0`}>CUSTOM SOFTWARE DEVELOPMENT AND INTEGRATION</div>
                            <div className={`${styles1.headbold} pt-2 mb-0`}>Logistics Management System</div>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>PROJECT DURATION</div>
                            <Image src={duration} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>4 months</span>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>TEAM SIZE</div>
                            <Image src={teamsize} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>7 members</span>
                        </div>
                        <div className="col-lg-8 col-12">
                            <p className={`${styles1.para} mb-0  pt-lg-0 pt-3 ps-xl-3`}>The ultimate product with seamless and non-clunky interface for dump truck operations.</p>
                            <div className="row py-3 justify-content-center">
                                {Logistics?.map((item, index) => (
                                    <>
                                        <div
                                            key={index}
                                            className="col-12 col-lg-4 "
                                            id={item.verticalborder}>
                                            <div className="h-100 mx-xl-3 mx-lg-1 pt-lg-0" >
                                                <Image
                                                    loading="lazy"
                                                    src={item.imgurl}
                                                    width={48}
                                                    height={48}
                                                    className="img-fluid pt-3 mb-md-2 mb-2"
                                                />
                                                <p className={`${styles1.para}  mb-md-3`}>{item.desc}</p>
                                                <div id={item.horizontalborder}></div>

                                            </div>
                                        </div>
                                    </>
                                ))}

                            </div>
                            <p className={`${styles1.para} mb-0 ps-xl-3`}>A centralized platform for real-time operations visibility, scalability, customization, and robust analytics.</p>

                        </div>

                    </div>

                </div>
                <div id="bank"></div>
            </div>


            {/* BANKING , FINANCE AND SECURITIES */}
            <div className="container-fluid pt-5 mb-5 mb-md-0" >
                <div className="container pt-md-4 pt-2 mx-auto" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12  py-2 ">
                            <div className={`${styles.vr}`}>
                                <h2 className={`${styles.heading1} ps-3 mb-0`}>Banking , Finance <br />and Securities</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Platform Modernization */}
                <div className="container mt-4 py-4 mx-auto" data-aos="fade-up" style={{ backgroundColor: "#F0F4F7" }}>
                    <div className="row mx-auto">
                        <div className=" col-lg-4 col-12 ps-3 mx-auto">
                            <div className={`${styles1.subheadbold} mb-0 pt-2`}>APPLICATION MODERNIZATION</div>
                            <div className={`${styles1.headbold} pt-2 mb-0`}>Platform Modernization</div>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>PROJECT DURATION</div>
                            <Image src={duration} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>24 months</span>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>TEAM SIZE</div>
                            <Image src={teamsize} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>25 members</span>
                        </div>
                        <div className="col-lg-8 col-12">
                            <p className={`${styles1.para} mb-0  pt-lg-0 pt-3 ps-xl-3`}>Migrated the 20+ year old legacy mainframe system to the core Platform Modernization distributed systems.</p>
                            <div className="row py-3 justify-content-center">
                                {bank?.map((item, index) => (
                                    <>
                                        <div
                                            key={index}
                                            className="col-12 col-lg-4 "
                                            id={item.verticalborder}>
                                            <div className="h-100 mx-xl-3 pt-lg-0" >
                                                <Image
                                                    loading="lazy"
                                                    src={item.imgurl}
                                                    width={48}
                                                    height={48}
                                                    className="img-fluid pt-3 mb-md-2 mb-2"
                                                />
                                                <p className={`${styles1.para} mb-md-3`}>{item.desc}</p>
                                                <div id={item.horizontalborder}></div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <p className={`${styles1.para} mb-0 ps-xl-3`}>Empathetically lead globally distributed software development teams with the culture of Can-Do attitude and ingrained &apos;OK&apos; to fail mentality to enforce creativity while delivering effectively and efficiently.</p>

                        </div>
                    </div>
                </div>
                {/* Metadata Driven Document Engine */}
                <div className="container mt-4 py-4 mx-auto" data-aos="fade-up" style={{ backgroundColor: "#F0F4F7" }}>
                    <div className="row mx-auto">
                        <div className=" col-lg-4 col-12 ps-3 mx-auto">
                            <div className={`${styles1.subheadbold} mb-0 pt-2`}>METADATA DRIVEN APPLICATIONS</div>
                            <div className={`${styles1.headbold} pt-2 mb-0`}>Metadata Driven Document Engine</div>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>PROJECT DURATION</div>
                            <Image src={duration} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>6 months</span>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>TEAM SIZE</div>
                            <Image src={teamsize} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>11 members</span>
                        </div>
                        <div className="col-lg-8 col-12">
                            <p className={`${styles1.para} mb-0  pt-lg-0 pt-3 ps-xl-3`}>Migrated 300 services for Home Foreclosures with 1 configurable and scalable Document Delivery System.</p>
                            <div className="row py-3 justify-content-center">
                                {metadata?.map((item, index) => (
                                    <>
                                        <div
                                            key={index}
                                            className="col-12 col-lg-6 "
                                            id={item.verticalborder}>
                                            <div className="h-100 mx-xl-3 pt-lg-0" >
                                                <Image
                                                    loading="lazy"
                                                    src={item.imgurl}
                                                    width={48}
                                                    height={48}
                                                    className="img-fluid pt-3 mb-md-2 mb-2"
                                                />
                                                <p className={`${styles1.para} mb-md-3`}>{item.desc}</p>
                                                <div id={item.horizontalborder}></div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <p className={`${styles1.para} mb-0 ps-xl-3`}>Scaled the Document Delivery system from over 1K Home Foreclosures and Default only communications to all of Home Lending to the document event manager for all of Chase Credit Card, Auto, Retail and Business Banking lines of businesses.</p>

                        </div>
                    </div>
                </div>

                {/* Customer Relationship Management */}
                <div className="container mt-4 py-4 mx-auto" data-aos="fade-up" style={{ backgroundColor: "#F0F4F7" }}>
                    <div className="row mx-auto">
                        <div className=" col-lg-4 col-12 ps-3 mx-auto">
                            <div className={`${styles1.subheadbold} mb-0 pt-2`}>ENTERPRISE SOLUTIONS AND SUPPORT</div>
                            <div className={`${styles1.headbold} pt-2 mb-0`}>Customer Relationship Management</div>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>PROJECT DURATION</div>
                            <Image src={duration} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>9 months</span>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>TEAM SIZE</div>
                            <Image src={teamsize} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>17 members</span>
                        </div>
                        <div className="col-lg-8 col-12">
                            <p className={`${styles1.para} mb-0  pt-lg-0 pt-3 ps-xl-3`}>Developed an Orchestration engine to migrate the Customer Relationship Management (CRM) System.</p>

                            <div className="row py-3">
                                <div className="col-lg-6 col-12">

                                    <div className="h-100 mx-xl-3 pt-lg-0" >

                                        <Image
                                            loading="lazy"
                                            src="/images/serviceofferings/happy.png"
                                            width={48}
                                            height={48}
                                            className="img-fluid pt-3 mb-md-2 mb-2"
                                        />
                                        <p className={`${styles1.para} mb-md-3`}>It helped the financial organization obtain <b>35% higher customer satisfaction</b> scores. One of the best in the industry.</p>

                                        <div id="horizontalcolor" className="mb-3"></div>

                                    </div>

                                </div>
                                <p className={`${styles1.para} mb-0 ps-xl-4`}>Implemented $55M of direct save by migrating to new infrastructure for financial products.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="retail"></div>
            </div>

            {/* RETAIL */}
            <div className="container-fluid pt-5 mb-5 mb-md-0">
                <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">

                    <div className="row">
                        <div className="col-12  py-2 ">
                            <div className={`${styles.vr}`}>
                                <h2 className={`${styles.heading1} ps-3 mb-0`}>Retail</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-4 py-4 mx-auto" data-aos="fade-up" style={{ backgroundColor: "#F0F4F7" }}>
                    <div className="row mx-auto">
                        <div className=" col-lg-4 col-12 ps-3 mx-auto">
                            <div className={`${styles1.subheadbold} mb-0 pt-2`}>CUSTOM SOFTWARE DEVELOPMENT AND INTEGRATION</div>
                            <div className={`${styles1.headbold} pt-2 mb-0`}>Mobile App Development</div>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>PROJECT DURATION</div>
                            <Image src={duration} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>3 months</span>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>TEAM SIZE</div>
                            <Image src={teamsize} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>7 members</span>
                        </div>
                        <div className="col-lg-8 col-12">
                            <p className={`${styles1.para} mb-0  pt-lg-0 pt-3 ps-xl-3`}>Launched the Mobile App Development within 3 months to track the customer orders.</p>
                            <div className="row py-3">
                                <div className="col-lg-6 col-12">
                                    <div className="h-100 mx-xl-3 pt-lg-0" >
                                        <Image
                                            loading="lazy"
                                            src="/images/serviceofferings/happy.png"
                                            width={48}
                                            height={48}
                                            className="img-fluid pt-3 mb-md-2 mb-2"
                                        />
                                        <p className={`${styles1.para} mb-md-3`}><b>Customer experience and satisfaction</b> was increased by <b>150%</b></p>
                                        <div id="horizontalcolor" className="mb-3"></div>
                                    </div>
                                </div>
                                <p className={`${styles1.para} mb-0 ps-xl-4`}>A new mobile app for order management of marketing materials was envisioned and executed in a short span of time.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="education"></div>
            </div>

            {/* EDUCATION */}
            <div className="container-fluid pt-5 mb-5" >
                <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12  py-2 ">
                            <div className={`${styles.vr}`}>
                                <h2 className={`${styles.heading1} ps-3 mb-0`}>Education</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-4 py-4 mx-auto" data-aos="fade-up" style={{ backgroundColor: "#F0F4F7" }}>
                    <div className="row mx-auto">
                        <div className="col-lg-4 col-12 ps-3 mx-auto">
                            <div className={`${styles1.subheadbold} mb-0`}>CUSTOM SOFTWARE DEVELOPMENT AND INTEGRATION</div>
                            <div className={`${styles1.headbold} pt-2 mb-0`}>Admission Management System</div>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>PROJECT DURATION</div>
                            <Image src={duration} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>4 months</span>
                            <div className={`${styles1.miniheadbold} pt-4 mb-0`}>TEAM SIZE</div>
                            <Image src={teamsize} className="img-fluid" width={18} height={18} /><span className={`${styles1.para} mb-0 ps-2`}>7 members</span>
                        </div>
                        <div className="col-lg-8 col-12">
                            <p className={`${styles1.para} mb-0  pt-lg-0 pt-3 ps-xl-3`}>Streamlined admission processes with software, enhancing efficiency and user experience.</p>
                            <div className="row py-3 justify-content-center">
                                {education?.map((item, index) => (
                                    <>
                                        <div
                                            key={index}
                                            className="col-12 col-lg-4 "
                                            id={item.verticalborder}>
                                            <div className="h-100 mx-xl-3 mx-lg-1 pt-lg-0" >
                                                <Image
                                                    loading="lazy"
                                                    src={item.imgurl}
                                                    width={48}
                                                    height={48}
                                                    className="img-fluid pt-3 mb-md-2 mb-2"
                                                />
                                                <p className={`${styles1.para} mb-md-3`}>{item.desc}</p>
                                                <div id={item.horizontalborder}></div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <p className={`${styles1.para} mb-0 ps-xl-3`}>Automated admissions, reduced manual errors, real-time tracking, improved efficiency, and enhanced user experience.</p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
