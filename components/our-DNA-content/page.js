"use client";
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
import GVHmob from "../../public/images/our-DNA/gertrude-van-horn mob.webp";
import Pav from "../../public/images/our-DNA/pavan.jpg";
import Pri from "../../public/images/our-DNA/priyanka.jpg";
// import Micheal from "../../public/images/our-DNA/Micheal.webp";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import link1 from "../../public/images/home/link.webp";
import linkedin1 from "../../public/images/home/linkedin.webp";
import { ChartNetwork, GitCompareArrows, Monitor, UserRoundCheck } from "lucide-react";

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
      imgurl: "/images/our-DNA/goldne.webp",
      title: "Golden Rule",
      desc: (
        <text>
          "Treat others as you wish to be treated." This principle of kindness,
          respect, and consideration fosters healthy relationships, ethical
          behavior, and constructive communication
        </text>
      ),
    },
  ];

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const isSmallDevice = window.matchMedia("(max-width: 500px)").matches;

    const timers = [
      setTimeout(() => setShowFirstLine(true), isSmallDevice ? 0 : 2000),
      setTimeout(() => setShowSecondLine(true), isSmallDevice ? 0 : 4000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div className={`${styles.homevideo1}`}>
              <Suspense fallback={<Loading />}>
                <video
                  className={`${styles.video1}`}
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source
                    src="/images/our-DNA/ourDNA-video2.mp4"
                    type="video/mp4"
                  />
                </video>
              </Suspense>
              <div className="container d-none d-md-block">
                <div className={`${styles.homeContents} ps-2 ps-md-0`}>
                  <h1
                    className={`${styles.carouselheading} ${styles.typewriter} mb-0 mx-3`}
                  >
                    Passion Fuels Us
                  </h1>
                  {showFirstLine && (
                    <h1
                      className={`${styles.carouselheading} ${styles.typewriter} mx-3 mb-0`}
                    >
                      Innovation Drives Us
                    </h1>
                  )}
                  {showSecondLine && (
                    <h1
                      className={`${styles.carouselheading} ${styles.typewriter} mx-3`}
                    >
                      Service Defines Us
                    </h1>
                  )}
                </div>
              </div>
              {/* Mobile Device */}
              <div className="container d-block d-md-none">
                <div className={`${styles.homeContents} ps-2 ps-md-0`}>
                  <h1 className={`${styles.carouselheading} mb-0 mx-3`}>
                    Passion Fuels Us
                  </h1>
                  <h1
                    className={`${styles.carouselheading} mx-3 mb-0`}
                    data-aos="fade-up"
                  >
                    Innovation Drives Us
                  </h1>
                  <h1
                    className={`${styles.carouselheading} mx-3`}
                    data-aos="fade-up"
                  >
                    Service Defines Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-0 py-sm-5">
        <div className="row mb-5">
          <div className="col-12 col-lg-6 py-2 ps-sm-0 ps-4">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>
                The Minds That Move i11labs
              </h2>
              <p className={`${styles.subheading} ps-4 mb-0`}>
                They bend reality so tech bends with them
              </p>
            </div>
          </div>
        </div>

        <div
          className="row text-center text-lg-start"
          style={{ backgroundColor: "#F0F4F7" }}
        >
          <div className="col-xl-3 col-lg-4 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-block d-none">
            {/* <Link href="#" onClick={handleClick}> */}
            <Image
              src={Pav}
              alt=""
              title=""
              className="img-fluid pt-5 float-lg-end"
              width={234}
              height={290}
            />
            {/* </Link> */}
          </div>

          <div className="col-lg-4 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-none d-block">
            <Image src={Pav} alt="" title="" className="img-fluid" />
          </div>

          <div className="col-lg-8 col-12 p-5 ">
            <div className="row">
              <div className="col-10">
                {/* <Link href="#" onClick={handleClick} className="text-decoration-none"> */}
                <p className={`${styles.para5} mb-0`}>Pavan Ekshwakula</p>
                {/* </Link> */}
                <p className={`${styles.subheading} mb-0`}>
                  Co-Founder and CEO @i11Labs
                </p>

                {/* <p className="mb-0 text-start" >
                              <Image className='d-inline' src={link1} width={16} height={16}/>
                              <span className={`${styles.subheading} ps-2`}><u>www.bijunair.me</u></span>
                             </p> */}
              </div>
              <div
                className="col-2"
                style={{ textAlign: "center", marginTop: "23px" }}
              >
                <Link
                  href="https://www.linkedin.com/in/pavan-ekshwakula-5162aa125"
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    title="LinkedIn"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>

            <hr></hr>

            <p className={`${styles.para3} pt-3`}>
              Over the past 20+ years, Pavan Ekshwakula has been trusted by
              Fortune 100 companies including Charles Schwab, JP Morgan Chase,
              Walmart, Wells Fargo, Intuit, and Harley Davidson Financial
              Services to lead the design and development of enterprise
              platforms that power mission-critical operations. His career is
              marked by a relentless drive to innovate and deliver solutions
              that stand the test of scale, security, and speed. <br />
              <br />
              From transforming legacy systems to architecting next-generation
              platforms, Pavan’s leadership has consistently enabled enterprises
              to stay ahead in rapidly evolving markets.
            </p>
          </div>
          <div id="gvh"></div>
        </div>

        <div className="py-5">
          <div
            className="row text-center text-lg-start"
            style={{ backgroundColor: "#F0F4F7" }}
          >
            <div className="col-lg-3 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-block d-none">
              {/* <Link href="#" onClick={handleClick}> */}
              <Image
                src={Pri}
                alt=""
                title=""
                className="img-fluid pt-5 float-lg-end"
                width={234}
                height={290}
              />
              {/* </Link> */}
            </div>

            <div className="col-lg-4 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-none d-block">
              <Image src={Pri} alt="" title="" className="img-fluid" />
            </div>
            <div className="col-lg-8 col-12 p-4">
              <div className="row">
                <div className="col-10 pt-4 px-0 px-sm-3">
                  {/* <Link href="#" onClick={handleClick} className="text-decoration-none"> */}
                  <p className={`${styles.para5} mb-0`}>Priyanka Agarwal</p>
                  {/* </Link> */}
                  {/* <p className={`${styles.para6}`}>Executive Vice President</p> */}
                  <p className={`${styles.subheading} mb-0`}>
                    Co-Founder and COO @i11Labs
                  </p>
                  {/* <p className="mb-0 text-start" >
                              <Image className='d-inline' src={link1} width={16} height={16}/>
                              <span className={`${styles.subheading} ps-2`}><u>www.gertrudevanhorn.com</u></span>
                             </p> */}
                </div>
                <div
                  className="col-2"
                  style={{ textAlign: "center", marginTop: "42px" }}
                >
                  <Link
                    href="https://www.linkedin.com/in/priyankaagarwal7/"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      alt="LinkedIn"
                      title="LinkedIn"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
              <hr></hr>
              <p className={`${styles.para3} pt-3`}>
                With a strong professional services background, Priyanka has
                partnered with industry leaders like Verizon, CBRE, 7-Eleven,
                Marathon Petroleum, and Assurant. In her previous role, she
                didn’t just lead — she built a commercial business practice from
                scratch. That practice went on to generate $39M+ in recurring
                revenue, setting new benchmarks for growth. Her career reflects
                entrepreneurial grit, customer obsession, and execution at
                scale. At i11Labs, she drives growth strategies that turn
                partnerships into long-term success stories.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-0 py-sm-5">
        <div className="row mb-5">
          <div className="col-12 col-lg-6 py-2 ps-sm-0 ps-4">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>Our Advisors</h2>
              <p className={`${styles.subheading} ps-4 mb-0`}>
                Experts Driving Technological Innovation
              </p>
            </div>
          </div>
        </div>

        <div
          className="row text-center text-lg-start"
          style={{ backgroundColor: "#F0F4F7" }}
        >
          <div className="col-xl-3 col-lg-4 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-block d-none">
            {/* <Link href="#" onClick={handleClick}> */}
            <Image
              src={Biju}
              alt=""
              title=""
              className="img-fluid pt-5 float-lg-end"
              width={234}
              height={290}
            />
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
                <p className={`${styles.subheading} mb-0`}>
                  EVP & President at Assurant
                </p>

                {/* <p className="mb-0 text-start" >
                              <Image className='d-inline' src={link1} width={16} height={16}/>
                              <span className={`${styles.subheading} ps-2`}><u>www.bijunair.me</u></span>
                             </p> */}
              </div>
              <div
                className="col-2"
                style={{ textAlign: "center", marginTop: "23px" }}
              >
                <Link
                  href="https://www.linkedin.com/in/bijunair2000"
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    title="LinkedIn"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>

            <hr></hr>

            <p className={`${styles.para3} pt-3`}>
              Biju Nair's entrepreneurial and innovation leadership spans over
              25 years. Currently, he serves as EVP & President of Assurant’s
              Global Connected Living business unit and is a member of the
              company's Management Committee. He also oversees Assurant’s
              International operations. <br />
              <br />
              Biju has been at the helm of numerous tech startups in the
              telecommunications software domain, all of which have exited
              through successful acquisition and integration into public
              companies, creating tremendous returns for its employees and
              shareholders. <br />
              <br />
              Biju holds several patents in wireless technology and is a
              frequent speaker at major conferences. He has been a finalist for
              Ernst & Young's Entrepreneur of the Year and received the IEEE
              Chairman’s Award for Communications Quality and Reliability.
            </p>
          </div>
          <div id="gvh"></div>
        </div>

        <div className="py-5">
          <div
            className="row text-center text-lg-start"
            style={{ backgroundColor: "#F0F4F7" }}
          >
            <div className="col-lg-3 col-12 ps-lg-0 pt-lg-0 pt-5 d-md-block d-none">
              {/* <Link href="#" onClick={handleClick}> */}
              <Image
                src={GVH}
                alt=""
                title=""
                className="img-fluid pt-5 float-lg-end"
                width={234}
                height={290}
              />
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
                  <p className={`${styles.subheading} mb-0`}>
                    CIO & Technology Executive at Rimini Street
                  </p>
                  {/* <p className="mb-0 text-start" >
                              <Image className='d-inline' src={link1} width={16} height={16}/>
                              <span className={`${styles.subheading} ps-2`}><u>www.gertrudevanhorn.com</u></span>
                             </p> */}
                </div>
                <div
                  className="col-2"
                  style={{ textAlign: "center", marginTop: "42px" }}
                >
                  <Link
                    href="https://www.linkedin.com/in/gertrudevanhorn"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      alt="LinkedIn"
                      title="LinkedIn"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
              <hr></hr>
              <p className={`${styles.para3} pt-3`}>
                Gertrude Van Horn, aka Trude, a seasoned Global CIO with
                extensive IT experience in Banking, Credit Card, Insurance,
                Retail, and Manufacturing. She builds trust-based partnerships,
                advising strategic decisions. Known for cost-effective
                technology transformations aligned with business goals, Trude
                leads with transparency and empowers teams to excel, fostering
                an inspiring work environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#ffffffff" }}>
        <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg-6 py-3 py-sm-2">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>
                  Industry-Driven
                </h2>
                <h2 className={`${styles.heading} ps-4`}>Expertise</h2>
              </div>
            </div>

            <div className="col-12 col-lg-5 py-2 pt-md-3 pt-2 pt-lg-0">
              <p className={`${styles.para} pt-md-4 pt-2`}>
                Our team has years of experience across industries such as
                Finance, Banking, Construction, Retail, Logistics, Services, and
                Telecom. Here's how i11Labs brings your vision to life:
              </p>
            </div>
          </div>

          <div className="row gy-4 py-5">
            {/* Card 1 */}
            <div className="col-12 col-md-6">
              <div className="p-4 h-100" style={{ backgroundColor: "#F0F4F7" }}>
                <Monitor size={58} color="#F71735" style={{ backgroundColor: "#ffffff", margin: "12px 0px", padding: "12px", borderRadius: "4px" }} />
                <p className={`${styles.para5} mb-0`}>Real-world Solutions</p>
                <p className={`${styles.para3} pt-3`}>
                  We deliver practical solutions that address your specific
                  challenges and opportunities. Our approach offers pragmatic
                  strategies and actionable plans for tangible results in the
                  shortest time frame.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6">
              <div className="p-4 h-100" style={{ backgroundColor: "#F0F4F7" }}>
                <UserRoundCheck size={58} color="#F71735" style={{ backgroundColor: "#ffffff", margin: "12px 0px", padding: "12px", borderRadius: "4px" }} />
                <p className={`${styles.para5} mb-0`}>
                  Client-Centric Approach
                </p>
                <p className={`${styles.para3} pt-3`}>
                  We put you at the center of everything we do, building strong
                  relationships based on trust, transparency, and open
                  communication. Together, we develop tailor-made solutions to
                  fit your unique requirements.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6">
              <div className="p-4 h-100" style={{ backgroundColor: "#F0F4F7" }}>
                <ChartNetwork size={58} color="#F71735" style={{ backgroundColor: "#ffffff", margin: "12px 0px", padding: "12px", borderRadius: "4px" }} />
                <p className={`${styles.para5} mb-0`}>Results-Oriented</p>
                <p className={`${styles.para3} pt-3`}>
                  Our goal is to deliver results that drive business growth and
                  success. Whether improving efficiency, increasing revenue, or
                  enhancing customer satisfaction, we measure our success by the
                  impact we create for you.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-md-6">
              <div className="p-4 h-100" style={{ backgroundColor: "#F0F4F7" }}>
                <GitCompareArrows size={58} color="#F71735" style={{ backgroundColor: "#ffffff", margin: "12px 0px", padding: "12px", borderRadius: "4px" }} />
                <p className={`${styles.para5} mb-0`}>
                  Flexibility and Adaptability
                </p>
                <p className={`${styles.para3} pt-3`}>
                  In a world of constant disruption, flexibility and
                  adaptability are imperative. These qualities are our ethos,
                  allowing us to thrive in unpredictable circumstances. We
                  embrace feedback, iterate relentlessly, and remain agile in
                  our pursuit of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#ffffffff" }}>
        <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg- py-3 py-sm-2">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>Our Guiding</h2>
                <h2 className={`${styles.heading} ps-4`}>Principles</h2>
              </div>
            </div>

            <div className="col-12 col-lg-5 py-2 pt-md-3 pt-2 pt-lg-0">
              <p className={`${styles.para} pt-md-4 pt-2`}>
                <span style={{ color: "#F71735" }}>i</span>11Labs was formed by
                a group of like-minded individuals from diverse industries,
                united by a passion to make a difference.
              </p>
            </div>
          </div>

          <div
            className="container pt-md-3 pt-2 mx-auto pb-5"
            data-aos="fade-up"
          >
            {stage.map((item, index) => (
              <div className="col-12 col-lg-9 mx-lg-auto mt-2" key={index}>
                <Image
                  src={item.imgurl}
                  className="img-fluid mt-2"
                  width={96}
                  height={96}
                />
                <div className={`${styles.para5} pt-4`}>{item.title}</div>
                <div className={`${styles.para3} py-2`}>{item.desc}</div>
                <hr></hr>
              </div>
            ))}
          </div>

          <div id="biju"></div>
        </div>
      </div>
    </>
  );
}
