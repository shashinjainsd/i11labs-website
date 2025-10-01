'use client'
import React, { Suspense } from "react";
import Image from "next/image";
// import DNA from "../../public/images/our-DNA/dna@2x.webp";
import styles from "../../app/page.module.css";
import Adapt from "../../public/images/our-DNA/adapt.webp";
import Happy from "../../public/images/our-DNA/happy.webp";
import Integrity from "../../public/images/our-DNA/integrity.webp";
import Silver from "../../public/images/our-DNA/silver.webp";
import Goldne from "../../public/images/our-DNA/goldne.webp";
import linkedin from "../../public/images/our-DNA/linkedin.webp";
import Biju from "../../public/images/our-DNA/Biju Nair.webp";
import GVH from "../../public/images/our-DNA/gertrude-van-horn.webp";
import Bijumob from "../../public/images/our-DNA/Biju Nair mob.webp";
import GVHmob from "../../public/images/our-DNA/gertrude-van-horn mob.webp"
// import Micheal from "../../public/images/our-DNA/Micheal.webp";
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from "next/link";
import link1 from "../../public/images/home/link.webp";
import linkedin1 from "../../public/images/home/linkedin.webp";

export default function ourDNA() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
  };
  const stage = [
    {
      imgurl: "/images/our-DNA/adapt.webp",
      title: "Adaptability & Flexibility",
      desc: "We embrace feedback, iterate relentlessly, and remain agile in our pursuit of excellence, always striving to exceed expectations and deliver unparalleled value to our clients.",
    },
    {
      imgurl: "/images/our-DNA/integrity.webp",
      title: "Integrity",
      desc: "Integrity is the foundation of our trust and credibility. We always do the right thing, fostering a culture of honesty, respect, and accountability.",
    },
    {
      imgurl: "/images/our-DNA/happy.webp",
      title: "Happy Team Equals Happy Customer",
      desc: " Employee satisfaction drives customer loyalty. When our team feels valued and supported, they deliver exceptional service, enhancing the overall customer experience. We provide a work environment that promotes a balanced lifestyle.",
    },
    {
      imgurl: "/images/our-DNA/silver.webp",
      title: "Silver Rule",
      desc: " Don’t do to others what you don’t want them to do to you.",
    },
    {
      imgurl: "/images/our-DNA/goldne.webp",
      title: "Golden Rule",
      desc: <text>"Treat others as you wish to be treated." This principle of kindness, respect, and consideration fosters healthy relationships, ethical behavior, and constructive communication</text>,
    },
  ];

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const isSmallDevice = window.matchMedia('(max-width: 500px)').matches;

    const timers = [
      setTimeout(() => setShowFirstLine(true), isSmallDevice ? 0 : 2000),
      setTimeout(() => setShowSecondLine(true), isSmallDevice ? 0 : 4000),
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
                <video className={`${styles.video1}`} playsInline autoPlay muted loop>
                  <source src="/images/our-DNA/ourDNA-video2.mp4" type="video/mp4" />
                </video>
              </Suspense>
              <div className="container d-none d-md-block">
                <div className={`${styles.homeContents} ps-2 ps-md-0`}>
                  <h1 className={`${styles.carouselheading} ${styles.typewriter} mb-0 mx-3`}>Passion Fuels Us</h1>
                  {showFirstLine && (
                    <h1 className={`${styles.carouselheading} ${styles.typewriter} mx-3 mb-0`}>Innovation Drives Us</h1>
                  )}
                  {showSecondLine && (
                    <h1 className={`${styles.carouselheading} ${styles.typewriter} mx-3`}>Service Defines Us</h1>
                  )}
                </div>
              </div>
              {/* Mobile Device */}
              <div className="container d-block d-md-none">
                <div className={`${styles.homeContents} ps-2 ps-md-0`}>
                  <h1 className={`${styles.carouselheading} mb-0 mx-3`}>Passion Fuels Us</h1>
                  <h1 className={`${styles.carouselheading} mx-3 mb-0`} data-aos="fade-up">Innovation Drives Us</h1>
                  <h1 className={`${styles.carouselheading} mx-3`} data-aos="fade-up">Service Defines Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid" style={{ backgroundColor: "#F0F4F7" }}>
        <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg-6 py-3 py-sm-2">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>Our Guiding</h2>
                <h2 className={`${styles.heading} ps-4`}>Principles</h2>
              </div>
            </div>

            <div className="col-12 col-lg-5 py-2 pt-md-3 pt-2 pt-lg-0">
              <p className={`${styles.para} pt-md-4 pt-2`}>
                <span style={{ color: "#F71735" }}>i</span>11Labs was formed by a group of like-minded individuals from diverse industries, united by a passion to make a difference.
              </p>
            </div>
          </div>

          <div className="container pt-md-3 pt-2 mx-auto pb-5" data-aos="fade-up" >
            {stage.map((item, index) => (
              <div className="col-12 col-lg-9 mx-lg-auto mt-2" key={index}>
                <Image src={item.imgurl} className="img-fluid mt-2" width={96} height={96} />
                <div className={`${styles.para5} pt-4`}>{item.title}</div>
                <div className={`${styles.para3} py-2`}>{item.desc}</div>
                <hr></hr>

              </div>
            ))}
          </div>

          <div id="biju"></div>
        </div>
      </div>


      {/* <div className="container-fluid d-xl-none d-block" style={{ backgroundColor: "#F0F4F7" }}>
        <div className="container py-5 mx-auto">
          <div className="row" data-aos="fade-up">
            <div className="col-12 col-lg-6 py-2">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>OUR GUIDING </h2>
                <h2 className={`${styles.heading} ps-4`}>HPRINCIPLES</h2>
              </div>
            </div>
            <div className="col-12 col-lg-5 py-2 pt-md-3 pt-2 pt-lg-0">
              <p className={`${styles.para} pt-md-4 pt-2`}>
                i11Labs was formed by a group of like-minded individuals from diverse industries, united by a passion to make a difference.
              </p>
            </div>
          </div>

          <div className="row py-xl-5 py-3">
            <div className="col-md-6 col-12 pt-md-5 pt-0" data-aos="fade-up">
              <div className="box p-4 h-100">
                <Image src={Adapt} alt="Adaptability" title="Adaptability" className="img-fluid" />
                <p className={`${styles.para5} pt-3`}>Adaptability & Flexibility</p>
                <p className={`${styles.para3} pt-3`}>We embrace feedback, iterate relentlessly, and remain agile in our pursuit of excellence, always striving to exceed expectations and deliver unparalleled value to our clients.</p>
              </div>
            </div>
            <div className="col-md-6 col-12 pt-5" data-aos="fade-up">
              <div className="box p-4 h-100">
                <Image src={Happy} alt="Happy Customer" title="Happy Customer" className="img-fluid" />
                <p className={`${styles.para5} pt-3`}>Happy Team Equals Happy Customer</p>
                <p className={`${styles.para3} pt-3`}>Employee satisfaction drives customer loyalty. When our team feels valued and supported, they deliver exceptional service, enhancing the overall customer experience. We provide a work environment that promotes a balanced lifestyle.</p>
              </div>
            </div>
            <div className="col-md-6 col-12 pt-5" data-aos="fade-up">
              <div className="box p-4 h-100">
                <Image src={Integrity} alt="Integrity" title="Integrity" className="img-fluid" />
                <p className={`${styles.para5} pt-3`}>Integrity</p>
                <p className={`${styles.para3} pt-3`}>Integrity is the foundation of our trust and credibility. We always do the right thing, fostering a culture of honesty, respect, and accountability.</p>
              </div>
            </div>
            <div className="col-md-6 col-12 pt-5" data-aos="fade-up">
              <div className="box p-4 h-100">
                <Image src={Silver} alt="Silver Rule" title="Silver Rule" className="img-fluid" />
                <p className={`${styles.para5} pt-3`}>Silver Rule</p>
                <p className={`${styles.para3} pt-3`}>Don’t do to others what you don’t want them to do to you.</p>
              </div>
            </div>
            <div className="col-md-6 col-12 pt-5" data-aos="fade-up">
              <div className="box p-4 h-100">
                <Image src={Goldne} alt="Golden Rule" title="Golden Rule" className="img-fluid" />
                <p className={`${styles.para5} pt-3`}>Golden Rule</p>
                <p className={`${styles.para3} pt-3`}>"Treat others as you wish to be treated." This principle of kindness, respect, and consideration fosters healthy relationships, ethical behavior, and constructive communication.</p>
              </div>
            </div>
          </div>

        </div>
      </div> */}


      <div className="container py-0 py-sm-5">
        <div className="row mb-5">
          <div className="col-12 col-lg-6 py-2 ps-sm-0 ps-4">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>Our Advisors</h2>
              <p className={`${styles.subheading} ps-4 mb-0`}>Experts Driving Technological Innovation</p>
            </div>
          </div>
        </div>

        <div className="row text-center text-lg-start" style={{ backgroundColor: "#F0F4F7" }}>
          <div className="col-xl-3 col-lg-4 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-block d-none">
            {/* <Link href="#" onClick={handleClick}> */}
            <Image src={Biju} alt="" title="" className="img-fluid pt-5 float-lg-end" width={234} height={290} />
            {/* </Link> */}
          </div>

          <div className="col-lg-4 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-none d-block">
            <Image src={Bijumob} alt="" title="" className="img-fluid" />
          </div>

          <div className="col-lg-8 col-12 p-5 ">
            <div className="row">
              <div className="col-10">
                {/* <Link href="#" onClick={handleClick} className="text-decoration-none"> */}
                <p className={`${styles.para5} mb-0`}>Biju Nair </p>
                {/* </Link> */}
                <p className={`${styles.subheading} mb-0`}>EVP & President at Assurant</p>

                {/* <p className="mb-0 text-start" >
                              <Image className='d-inline' src={link1} width={16} height={16}/>
                              <span className={`${styles.subheading} ps-2`}><u>www.bijunair.me</u></span>
                             </p> */}
              </div>
              <div className="col-2" style={{ textAlign: "center", marginTop: "23px" }}>
                <Link href="https://www.linkedin.com/in/bijunair2000" target="_blank">
                  <Image src={linkedin} alt="LinkedIn" title="LinkedIn" className="img-fluid" />
                </Link>
              </div>
            </div>

            <hr></hr>

            <p className={`${styles.para3} pt-3`}>Biju Nair's entrepreneurial and innovation leadership spans over 25 years. Currently, he serves as EVP & President of Assurant’s Global Connected Living business unit and is a member of the company's Management Committee. He also oversees Assurant’s International operations. <br /><br />Biju has been at the helm of numerous tech startups in the telecommunications software domain, all of which have exited through successful acquisition and integration into public companies, creating tremendous returns for its employees and shareholders. <br /><br />Biju holds several patents in wireless technology and is a frequent speaker at major conferences. He has been a finalist for Ernst & Young's Entrepreneur of the Year and received the IEEE Chairman’s Award for Communications Quality and Reliability.</p>
          </div>
          <div id="gvh"></div>
        </div>

        <div className="py-5">
          <div className="row text-center text-lg-start" style={{ backgroundColor: "#F0F4F7" }}>
            <div className="col-lg-3 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-block d-none">
              {/* <Link href="#" onClick={handleClick}> */}
              <Image src={GVH} alt="" title="" className="img-fluid pt-5 float-lg-end" width={234} height={290} />
              {/* </Link> */}
            </div>

            <div className="col-lg-4 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-none d-block">
              <Image src={GVHmob} alt="" title="" className="img-fluid" />
            </div>
            <div className="col-lg-8 col-12 p-4">
              <div className="row">
                <div className="col-10 pt-4 px-0 px-sm-3">
                  {/* <Link href="#" onClick={handleClick} className="text-decoration-none"> */}
                  <p className={`${styles.para5} mb-0`}>Gertrude Van Horn</p>
                  {/* </Link> */}
                  {/* <p className={`${styles.para6}`}>Executive Vice President</p> */}
                  <p className={`${styles.subheading} mb-0`}>CIO & Technology Executive at Rimini Street</p>
                  {/* <p className="mb-0 text-start" >
                              <Image className='d-inline' src={link1} width={16} height={16}/>
                              <span className={`${styles.subheading} ps-2`}><u>www.gertrudevanhorn.com</u></span>
                             </p> */}
                </div>
                <div className="col-2" style={{ textAlign: "center", marginTop: "42px" }}>
                  <Link href="https://www.linkedin.com/in/gertrudevanhorn" target="_blank">
                    <Image src={linkedin} alt="LinkedIn" title="LinkedIn" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <hr></hr>
              <p className={`${styles.para3} pt-3`}>Gertrude Van Horn, aka Trude, a seasoned Global CIO with extensive IT experience in Banking, Credit Card, Insurance, Retail, and Manufacturing. She builds trust-based partnerships, advising strategic decisions. Known for cost-effective technology transformations aligned with business goals, Trude leads with transparency and empowers teams to excel, fostering an inspiring work environment.</p>
            </div>
          </div>
        </div>

        {/* <div className="mb-5">
          <div className="row text-center text-lg-start" style={{ backgroundColor: "#F0F4F7" }}>
            <div className="col-lg-4 col-12 ps-lg-0 pt-lg-0 pt-5">
              <Image src={Micheal} alt="" title="" className="img-fluid" />
            </div>
            <div className="col-lg-8 col-12 p-5">
              <div className="row">
                <div className="col-10">
                  <p className={`${styles.para5} mb-0`}>Michael Chen</p>
                  <p className={`${styles.subheading}`}>CHIEF TECHNOLOGY OFFICER</p>
                </div>
                <div className="col-2" style={{ textAlign: "center", marginTop: "23px" }}>
                  <Link href="#" onClick={handleClick}>
                    <Image src={linkedin} alt="LinkedIn" title="LinkedIn" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <hr></hr>
              <p className={`${styles.para3} pt-3`}>Michael Chen, our Chief Technology Officer, leads with expertise in AI Integration, Meta Data Driven Applications, and Cloud Computing. His strategic vision and proficiency in Application Modernization and Custom Software Development enable organizations to innovate and excel in today’s dynamic digital landscape, ensuring robust technological solutions tailored to meet diverse business needs.</p>
            </div>
          </div>
        </div> */}


      </div>

    </>
  );
}
