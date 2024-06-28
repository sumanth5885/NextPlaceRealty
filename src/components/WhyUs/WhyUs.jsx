import "./WhyUs.css";
import why_us from "../../assets/why_us.jpg";
import { useEffect, useRef } from "react";

const WhyUs = () => {
  const whyUsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, {threshold: 0.5})

    if (whyUsRef.current) {
      observer.observe(whyUsRef.current)
    }
  }, [])
  return (
    <div className="why-us" id="why-us" ref={whyUsRef}>
      <h2>Why Us?</h2>
      <div className="why-us-content">
        <ul>
          <li>
            <b>Expand Your Reach:</b> Leverage our network to connect with a wider pool
            of qualified buyers.
          </li>
          <li>
            <b>Faster Sales Cycles:</b> Streamline your sales process through our
            expertise and resources.
          </li>
          <li>
            <b>Increased Credibility:</b> Benefit from our established reputation in
            the market.
          </li>
          <li>
            <b>Cost-Effective Solutions:</b> Reduce marketing and sales overhead with
            our partnership model.
          </li>
          <li>
            <b>Local Market Insights:</b> Gain valuable data and trends to optimize
            your sales strategy.
          </li>
          <li>
            <b>Streamlined Communication:</b> Enjoy a single point of contact for all
            your channel partner needs.
          </li>
        </ul>
        <img src={why_us} alt="" />
      </div>
    </div>
  );
};

export default WhyUs;
