import { useEffect, useRef } from "react";
import "./AboutUs.css";
import { GiBullets } from "react-icons/gi";

const AboutUs = () => {

  const abouRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, {threshold: 0.5})

    if (abouRef.current) {
      observer.observe(abouRef.current)
    }
  }, [])

  return (
    <div className="about-us" id="about" ref={abouRef}>
      <h2>ABOUT US REALTY</h2>
      <div className="content">
        <p>
          <span>About Us:</span> Your Real Estate Partner for Success At
          NEXPLACE REALTY, we're more than just a real estate channel partner
          company. We're a team of passionate and experienced professionals
          dedicated to exceeding expectations and propelling your success in the
          market.
        </p>
        <p>
          <span style={{ display: 'inline-block',marginBottom:'10px'}}>What Sets Us Apart:</span> <br />
          <GiBullets style={{marginRight:'10px'}}/>
          Unmatched Expertise: Our team possesses a deep understanding of the
          local market and a proven track record of success. <br />
          <GiBullets style={{marginRight:'10px'}}/> Innovative Strategies: We leverage cutting-edge technology and
          data-driven insights to maximize your listings' visibility and
          generate qualified leads. <br />
          <GiBullets style={{marginRight:'10px'}}/> Unwavering Support: We provide comprehensive training, marketing
          tools, and ongoing guidance to empower you throughout the entire
          process. <br />
          <GiBullets style={{marginRight:'10px'}}/> Commitment to You: Your success is our top priority. We are
          dedicated to exceeding your expectations and building a long-term,
          mutually beneficial partnership. Partnering with NEXPLACE REALTY
          means: <br />
          <GiBullets style={{marginRight:'10px'}}/> Increased Efficiency: Streamline your workflow and focus on what you
          do best – closing deals. <br />
          <GiBullets style={{marginRight:'10px'}}/> Enhanced Visibility: Gain access to a wider audience of potential
          buyers and sellers. <br />
          <GiBullets style={{marginRight:'10px'}}/> Profitable Growth: Maximize your earning potential by expanding your
          reach and closing more deals. <br />
          <GiBullets style={{marginRight:'10px'}}/> Peace of Mind: Gain the support
          and expertise of a trusted real estate partner. Ready to unlock your
          full potential in the real estate market? Contact us today and let's
          discuss how we can help you achieve your goals! We look forward to
          partnering with you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
