'use client'
import { useRef, useEffect, useState } from 'react';
import styles from "./page.module.css";
import Image from "next/image"
import Link from "next/link"
import Right from "../public/images/home/right.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DTI from "../public/images/home/new/DumpTruckIt.png";
import FTL from "../public/images/home/new/FeedsToLeads_1.png";
import KWC from "../public/images/home/new/Know Whereabouts of Crew.png";
import React, { createRef, Suspense } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import link from "../public/images/home/link.webp";
import linkedin from "../public/images/home/linkedin.webp";


export default function Home() {

  const customSlider2 = createRef();

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };

  const Power = [
    {
      img: "/images/home/DTI.webp",
      title1: "DTI",
      title2: <text><b>D</b>ump<b>T</b>ruck<b>I</b>t</text>,
      title3: "The ultimate product with seamless and non-clunky interface for dump truck operations.",
      position1: 'order-first',
      position2: 'order-last'
    },
    {
      img: "/images/home/FTL.webp",
      title1: "FTL",
      title2: <text><b>F</b>eeds <b>T</b>o <b>L</b>eads</text>,
      title3: "Automate lead generation with AI for targeted prospect identification and improved sales efficiency.",
      position1: 'order-last',
      position2: 'order-first',
      class: 'wrap',
    },

    {
      img: "/images/home/KWC.webp",
      title1: "KWC",
      title2: <text><b>K</b>now <b>W</b>hereabouts of <b>C</b>rew</text>,
      title3: "Efficient delivery routes to facilitate optimized scheduling",
      position1: 'order-first',
      position2: 'order-last'
    },


  ];

  const items = [
    {
      title: 'Biju Nair',
      description: 'EVP & President at Assurant',
      img: "/images/home/new/Biju Nair mob.webp",
      mail: "www.bijunair.me",
      url: "/our-dna#biju",
      url2: "https://www.linkedin.com/in/bijunair2000"
    },
    {
      title: 'Gertrude Van Horn',
      description: 'CIO & Technology Executive at Rimini Street',
      img: "/images/home/new/gertrude-van-horn mob.webp",
      mail: "www.gertrudevanhorn.com",
      url: "/our-dna#gvh",
      url2: "https://www.linkedin.com/in/gertrudevanhorn"
    }

  ];

  const service = [
    { link: "/service-offerings#logistic", content: "LOGISTICS", Image: Right },
    { link: "/service-offerings", content: "TELECOMS", Image: Right },
    { link: "/service-offerings#bank", content: "BANKING, FINANCE & SECURITIES", Image: Right },
    { link: "/service-offerings#retail", content: "RETAIL", Image: Right },
    { link: "/service-offerings#education", content: "EDUCATION", Image: Right }
  ]
  const Howweserveyou = [
    {
      imgurl: "/images/home/new/product oriented delivery.webp",
      title: "Product Oriented Delivery",
      desc: "Execute Product Vision and Strategy",
      verticalborder: "verticalcolor",
      flag: true
    },
    {
      imgurl: "/images/home/new/end to end.webp",
      title: "End to End",
      desc: "Deliverable based model",
      verticalborder: "verticalcolor",
      flag: true
    },
    {
      imgurl: "/images/home/new/tag team.webp",
      title: "Tag Team",
      desc: "Co-development team",
      verticalborder: "",
      flag: false
    },

  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  
  useEffect(() => {
    const isSmallDevice = window.matchMedia('(max-width: 500px)').matches;

    const timers = [
      setTimeout(() => setShowFirstLine(true), isSmallDevice ? 0 : 0),
      setTimeout(() => setShowSecondLine(true), isSmallDevice ? 0 : 3000),
    ];
  
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <>


      <div className='container-fluid'>
        <div className='row'>
          <div className='col p-0'>
            <div className={`${styles.homevideo1}`}>
              <Suspense fallback={<Loading />}>
                <video className={`${styles.video1}`} playsInline autoPlay muted loop preload="auto">
                  <source src="/images/home/Home-video2.mp4" type="video/mp4" />
                </video>
              </Suspense>
              <div className="container">
                <div className={`${styles.homeContent1} ps-2 ps-md-0`}>
                  <div className={`${styles.vr}`}>
                  {showFirstLine && (
                    <h1 className={`${styles.carouselheading} ${styles.typewriter} mb-0 mx-3`}>We Turn Ideas into Products</h1>
                  )}
                    <h1 className={`${styles.carouselheading} ${styles.typewriters} mx-3 pt-2 pt-md-0 d-none d-md-block`} style={{ visibility: showSecondLine ? 'visible' : 'hidden' }}>
                      We Build Expert IT Teams that Deliver
                    </h1>
                    <h1 className={`${styles.carouselheading} mx-3 pt-2 pt-md-0 d-block d-md-none`} data-aos="fade-up">
                      We Build Expert IT Teams that Deliver
                    </h1>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>

      {/* Powered by intelligence */}
      <div className="container-fluid py-3 py-md-5 py-xl-0" style={{ background: "transparent linear-gradient(0deg, #F0F4F7 0%, #F0F4F700 100%) 0% 0% no-repeat padding-box" }} data-aos="fade-up">
        <div className="text-center">
          <h1 className={`${styles.head} mb-0`}>Powered by <span style={{ color: "#F71735" }}>i</span>ntelligence</h1>
        </div>
      </div>


      <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-lg-6 py-2 ">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>What We </h2>
              <h2 className={`${styles.heading} ps-4`}>Have Built</h2>
              <p className={`${styles.subheading} ps-4 mb-0`}>Our Products</p>
            </div>
          </div>
          <div className="col-12 col-lg-5 py-2 pt-md-3 pt-2 pt-lg-0">
            <p className={`${styles.para} pt-md-4 pt-2`}>
              Discover our innovative products designed to drive efficiency, enhance performance, and transform your business operations in the digital age.
            </p>
          </div>
        </div>
      </div>

      <div className='container py-lg-5 py-3 d-lg-block d-none'>
        <div className='row' data-aos="fade-up">
          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div style={{ borderRight: "1px solid  #C1D1E0" }}>
              <p className={`${styles.para1}`}>DTI</p>
              <p className={`${styles.para2}`}><b>D</b>ump<b>T</b>ruck<b>I</b>t</p>
              <p className={`${styles.para3}`}>Seamless Fleet Management- Powered by AI</p>
              <div className="pt-xl-5 pt-0"><button className="viewall ps-0"><Link href="/dti-dumptruckit" className="viewallvoiletlink">Know More</Link></button></div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div style={{ borderRight: "1px solid  #C1D1E0" }}>
              <p className={`${styles.para1}`}>FTL</p>
              <p className={`${styles.para2}`}><b>F</b>eeds <b>T</b>o <b>L</b>eads</p>
              <p className={`${styles.para3}`}>Effortless Lead Generation- AI for Smarter Prospecting</p>
              <div className="pt-xl-3 pt-0"><button className="viewall ps-0"><Link href="/feeds-to-leads" className="viewallvoiletlink">Know More</Link></button></div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <p className={`${styles.para1}`}>KWC</p>
            <p className={`${styles.para2}`}><b>K</b>now <b>W</b>hereabouts of <b>C</b>rew</p>
            <p className={`${styles.para3}`}>Monitor Your Crew's Whereabouts in Real Time</p>
            <div className="pt-xl-5 pt-4"><button className="viewall ps-0"><Link href="/know-whereabouts-of-crew" className="viewallvoiletlink">Know More</Link></button></div>
          </div>
        </div>

        <div className='row py-lg-5 py-3' data-aos="fade-up">
          <div className='col-lg-4 col-md-6 col-12 text-end'>
            <Link href="/dti-dumptruckit">
              <Image src={DTI} className='img-fluid' width={278} height={268} alt='DumpTruckIt' title='DumpTruckIt' />
            </Link>
          </div>

          <div className='col-lg-4 col-md-6 col-12 text-end'>
            <Link href="/feeds-to-leads">
              <Image src={FTL} className='img-fluid' width={278} height={268} alt='Feeds To Leads' title='Feeds To Leads' />
            </Link>
          </div>

          <div className='col-lg-4 col-md-6 col-12 text-end'>
            <Link href="/know-whereabouts-of-crew">
              <Image src={KWC} className='img-fluid' width={278} height={268} alt='Know Whereabouts of Crew' title='Know Whereabouts of Crew' />
            </Link>
          </div>
        </div>
      </div>

      <div className='container py-lg-5 py-4 d-block d-lg-none' data-aos="fade-up">
        <div className='row'>
          <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>

            <div className='col-lg-4 col-md-6 col-11 h-100 me-3'>
              <div className="card">
                <div className="card-bodyies">
                  <p className={`${styles.para1}`}>DTI</p>
                  <p className={`${styles.para2}`}><b>D</b>ump<b>T</b>ruck<b>I</b>t</p>
                  <p className={`${styles.para3}`}>Seamless Fleet Management- Powered by AI</p>
                  <div className="pt-md-2 pt-2"><button className="viewall ps-0"><Link href="/dti-dumptruckit" className="viewallvoiletlink">Know More</Link></button></div>
                </div>
                <Link href="/dti-dumptruckit">
                  <Image src={DTI} className='pt-md-5 pt-4' width={278} height={268} alt='DumpTruckIt' title='DumpTruckIt' />
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-11 h-100 me-3'>
              <div className="card">
                <div className="card-bodyies">
                  <p className={`${styles.para1}`}>FTL</p>
                  <p className={`${styles.para2}`}><b>F</b>eeds <b>T</b>o <b>L</b>eads</p>
                  <p className={`${styles.para3}`}>Effortless Lead Generation- AI for Smarter Prospecting</p>
                  <div className="pt-md-2 pt-2"><button className="viewall ps-0"><Link href="/feeds-to-leads" className="viewallvoiletlink">Know More</Link></button></div>
                </div>
                <Link href="/feeds-to-leads">
                  <Image src={FTL} className='pt-md-5 pt-4' width={278} height={268} alt='Feeds To Leads' title='Feeds To Leads' />
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-11 h-100 me-3'>
              <div className="card">
                <div className="card-bodyies">
                  <p className={`${styles.para1}`}>KWC</p>
                  <p className={`${styles.para2}`}><b>K</b>now <b>W</b>hereabouts of <b>C</b>rew</p>
                  <p className={`${styles.para3}`}>Monitor Your Crew's Whereabouts in Real Time</p>
                  <div className="pt-md-5 pt-4"><button className="viewall ps-0"><Link href="/know-whereabouts-of-crew" className="viewallvoiletlink">Know More</Link></button></div>
                </div>
                <Link href="/know-whereabouts-of-crew">
                  <Image src={KWC} className='pt-md-5 pt-4' width={278} height={268} alt='Know Whereabouts of Crew' title='Know Whereabouts of Crew' />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* OUR SERVICE OFFERING */}
      <div className={`${styles.desktopbg} container-fluid py-3`}>
        <div className="container py-md-5 py-4 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg-5 py-2 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4`}>What We Can Do For You</h2>
              </div>
              <p className={`${styles.para} py-md-4 py-2 mb-2 mb-md-auto`}>
                Discover how our expertise intersects with a multitude of industries, and how our range of services can empower your organization to thrive in today's dynamic business landscape.
              </p>
              {/* <div className="pt-3"><button className="viewall ps-0"><Link href="/service-offerings" className="viewallvoiletlink">Know More</Link></button></div> */}
            </div>

            <div className="col-lg-6 col-md-10 col-9 py-2  pt-4 pt-lg-0">
              {service.map((item, index) => (
                <div className="col-12 col-md-10 col-xl-9 mx-lg-auto" key={index}>
                  <Link href={item.link} className="text-decoration-none">
                    <div className={`${styles.movingleft} row py-2 px-4 py-md-3`}>
                      <div>
                        <div className="col-10"><p className={`${styles.subheading} ${styles.overflowtext1} mb-0 mb-md-5`} id={`${styles.mobilemedia}`}>{item.content}</p></div>

                        <Image src={item.Image} className={`${styles.arrow} col-1 img-fluid float-end pt-md-2`} width="24px" height="24px" alt="" />

                      </div>
                    </div>
                  </Link>
                  <hr className="mt-lg-5 mt-md-4 mt-5" style={{ opacity: "1", color: "#C1D1E0" }} />
                </div>
              ))}
            </div>

            <div className='col-lg-1 col-md-2 col-3 pt-3'>
              <Link href="/service-offerings" style={{ textDecoration: "none" }}>
                <div className='text-center' style={{ border: "1px solid #191E23" }}>
                  <p className={`${styles.subheading} text-center pt-3`}>I</p>
                  <p className={`${styles.subheading} text-center`}>N</p>
                  <p className={`${styles.subheading} text-center`}>D</p>
                  <p className={`${styles.subheading} text-center`}>U</p>
                  <p className={`${styles.subheading} text-center`}>S</p>
                  <p className={`${styles.subheading} text-center`}>T</p>
                  <p className={`${styles.subheading} text-center`}>R</p>
                  <p className={`${styles.subheading} text-center`}>I</p>
                  <p className={`${styles.subheading} text-center`}>E</p>
                  <p className={`${styles.subheading} text-center`}>S</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='container d-lg-block d-none'>
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

        <div className='container d-lg-none d-block'>
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


      </div>

      {/* HOW WE SERVE YOU */}
      <div className="container-fluid py-md-3 py-1">
        <div className="container py-md-3 py-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg-5 py-2 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>Your Vision,</h2>
                <h2 className={`${styles.heading} ps-4`}>Our Execution</h2>
                <p className={`${styles.subheading} ps-4 mb-0`}>How We Serve You</p>
              </div>
            </div>
            <div className="col-12 col-lg-5 py-2 mx-lg-5 pt-md-3 pt-2 pt-lg-0">
              <p className={`${styles.para} pt-md-4 pt-2`}>
                We deliver customized solutions that align with your business process and goals.
              </p>
              <div className="pt-3"><button className="viewall ps-0"><Link href="/how-we-serve-you" className="viewallvoiletlink">Know More</Link></button></div>
            </div>
          </div>
        </div>

        <div className="container-fluid justify-content-center" data-aos="fade-up">
          <div className='row pt-2 pt-lg-3 mb-lg-3'>
            <div className='col'>
              <div className="container py-md-5">
                <div className="row text-center gx-0">
                  {Howweserveyou?.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="col-12 col-lg-4 col-md-6 py-xl-5"
                        id={item.verticalborder}>
                        <div className="h-100 mx-xl-4 mx-md-3 pt-lg-0 pt-md-3" >
                          <Image
                            loading="lazy"
                            src={item.imgurl}
                            alt={item.title}
                            width={128}
                            height={128}
                            className="img-fluid"
                          />
                          <p className={`${styles.imghead} mb-0 mt-3 py-xl-3 text-center`}>{item.title}</p>
                          <p className={`${styles.imgdesc} text-center pt-xl-1 text-center mb-2 mb-md-auto`}>{item.desc}</p>
                        </div>
                      </div>
                      {item.flag && <hr className='d-md-none d-block' style={{ opacity: "1", color: "#C1D1E0" }}></hr>}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <main className="d-none d-lg-block py-5" data-aos="fade-up">
        <div className={`${styles.bgimage} container-fluid py-5 `}
          style={{ backgroundImage: "url('/images/home/quote bg.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}     >
          <p className={`${styles.bgtext2} text-center  mt-5`}> 'IDEAS ARE EASY, <br />EXECUTION IS EVERYTHING.'</p>
          <p className={`${styles.para3} text-center text-white mb-5`}> - John Doerr </p>
        </div>
      </main>

      {/* mobile screen */}
      <main className="d-block d-lg-none py-3" data-aos="fade-up">
        <div className={`${styles.bgimage} container-fluid py-5 `}
          style={{ backgroundImage: "url('/images/home/quote bg-sm.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}     >
          <p className={`${styles.bgtext2} text-center  mt-5`}> 'IDEAS ARE EASY, <br />EXECUTION IS EVERYTHING.'</p>
          <p className={`${styles.para3} text-center text-white mb-5`}> - John Doerr </p>
        </div>
      </main>

      {/* FRESH READS */}
      <div className="container py-3 py-lg-5 d-md-block d-none" data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-xl-4 col-lg-3 py-3 px-4 px-lg-2">
            <div style={{ borderLeft: "4px solid #F71735" }} >
              <p className={`${styles.para4} ps-4  mb-0`}>Our</p>
              <p className={`${styles.para4} ps-4  `}>Advisors</p>
            </div>
            {/* <div className="ps-4"><button className="viewall ps-0"><Link href="/our-DNA" className="viewallvoiletlink">Know More</Link></button></div> */}
          </div>
          <div className="col-12 col-xl-8 col-lg-9 h-100 p-4 p-lg-1">
            <div className="row secondcard">

              <Slider {...settings} ref={customSlider2} >
                {items.map((item, index) => (
                  <div key={index}>
                    <div className="card p-1 p-md-2">
                      <div className="card-body">
                        <div className="card">
                          <div className={`${styles.hashborder}`} style={{ height: "100px" }} >
                            <Link href={item.url} className='text-decoration-none'>
                              <p className={`${styles.para5} ${styles.overflowtext} pe-md-1 pe-lg-3`}>{item.title}</p>
                            </Link>
                            {/* <p className={`${styles.para6} mb-0`}>{item.description1}</p> */}
                            <p className={`${styles.para6}`} >
                              {/* <Image
                                src="/images/home/read time.webp"
                                width={18}
                                height={18}
                                className="img-fluid"
                                title="Next"
                                alt="Next arrow"
                              /> */}
                              <span className="">{item.description}</span>
                              <Link href={item.url2} target='_blank'>
                                <Image className="float-end me-4" alt='linkedin' src={linkedin} width={27} height={27} />
                              </Link></p>
                            {/* <div className="mb-0 " >
                              <Image className='d-inline' src={link} width={16} height={16}/>
                              <span className={`${styles.subheading} ps-2`}><u>{item.mail}</u></span>
                              <Image className= "d-inline float-end me-2" src={linkedin} width={27} height={27}/>
                             </div>  */}
                          </div>
                          <Link href={item.url} className='text-decoration-none'>
                            <div className="col-12 pt-3 pt-lg-4 h-100">
                              <Image
                                src={item.img}
                                width={276}
                                height={276}
                                className="img-fluid float-end"
                                alt="WHAT'S TRENDING"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
              </Slider>

            </div>
          </div>

        </div>
      </div>

      {/* MObile Device */}
      <div className='container pt-0 pt-sm-5 d-md-none d-block' data-aos="fade-up">
        <div className='row'>
          <div className="col-11 col-md-4 col-lg-3 py-3 px-4">
            <div style={{ borderLeft: "4px solid #F71735" }} >
              <p className={`${styles.para4} ps-4 mb-0`}>Our</p>
              <p className={`${styles.para4} ps-4 `}>Advisors</p>
            </div>
            {/* <div className="pt-3 mb-3"><button className="viewall ps-0"><Link href="/our-DNA" className="viewallvoiletlink">Know More</Link></button></div> */}
          </div>
        </div>
        <div className="row mb-3 mb-md-5">
          <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>

            {items.map((item, index) => (
              <div className="col-10 col-md-5 col-lg-9 h-100 me-3">
                <div key={index}>
                  <div className="card p-1 p-md-4">
                    <div className="card-body">
                      <div className="card">
                        <div style={{ height: "100px" }}>
                          <Link href={item.url} className='text-decoration-none'>
                            <p className={`${styles.para5} ${styles.overflowtext} pe-md-1 pe-lg-3`}>{item.title}</p>
                          </Link>
                          {/* <p className={`${styles.para6} mb-0`}>{item.description1}</p> */}
                          <p className={`${styles.para6} mb-0 `} >
                            {/* <Image
                              src="/images/home/read time.webp"
                              width={18}
                              height={18}
                              className="img-fluid"
                              title="Next"
                              alt="Next arrow"
                            /> */}
                            <span className="">{item.description}</span>
                            <Link href={item.url2} target='_blank'>
                              <Image className="float-end me-4" alt='linkedin' src={linkedin} width={27} height={27} /></Link></p>
                          {/* <Image src={link} width={16} height={16}/><span className="ps-2 ">{item.mail}</span><Image className="float-end" src={linkedin} width={27} height={27}/> */}
                        </div>
                        <Link href={item.url} className='text-decoration-none'>
                          <div className="col-12 pt-3 pt-lg-4 ">
                            <Image
                              src={item.img}
                              width={276}
                              height={276}
                              className="img-fluid float-end w-100"
                              alt="WHAT'S TRENDING"
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

    </>
  );
}
