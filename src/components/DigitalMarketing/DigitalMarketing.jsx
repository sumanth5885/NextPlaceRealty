import "./DigitalMarketing.css";
import digital_marketing from "../../assets/digital_marketing.jpg";
import { useEffect, useRef } from "react";

const DigitalMarketing = () => {
  const digitalRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, {threshold: 0.5})

    if (digitalRef.current) {
      observer.observe(digitalRef.current)
    }
  }, [])

  return (
    <div className="digital-marketing" id="digital-marketing" ref={digitalRef}>
      <h2>Digital Marketing</h2>
      <div className="digital-marketing-content">
        <img src={digital_marketing} alt="" />
        <p>
          Run targeted social media ads to reach potential homebuyers in your
          area. Partner with local influencers for sponsored content showcasing
          the benefits of working with your company and the builders you
          represent. Host live Q&A sessions with builders or real estate experts
          to answer audience questions. Run contests and giveaways to generate
          excitement and engagement. Include high-quality photos and videos of
          properties from your builder partners.
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketing;
