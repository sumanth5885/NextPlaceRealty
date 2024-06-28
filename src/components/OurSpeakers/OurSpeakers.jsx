import "./OurSpeakers.css";
import chairman from "../../assets/chairman.jpg";
import ceo from "../../assets/ceo.jpg";
import { useEffect, useRef } from "react";

const OurSpeakers = () => {
  const speaker_title = useRef();
  const speaker_card1 = useRef();
  const speaker_card2 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } 
        });
      },
      { threshold: 0.5 }
    );

    if (speaker_title.current) {
      observer.observe(speaker_title.current);
    }
    if (speaker_card1.current) {
      observer.observe(speaker_card1.current);
    }
    if (speaker_card2.current) {
      observer.observe(speaker_card2.current);
    }
  }, []);

  return (
    <div className="our-speakers">
      <h1 className="title" ref={speaker_title}>
        OUR SPEAKERS
      </h1>
      <div className="card" >
        <img src={chairman} alt="" ref={speaker_card1} />
        <p>
          <h1>Chairman: Ramoji Gowda</h1>
          Ramoji Gowda serves as the Chairman and
          Managing Director at Nexplace Info Private Limited, an IT and non-IT
          recruitment company. He is also associated with Nexplace Realty as a
          real estate channel partner.He is MLC for the Bangalore Graduates'
          Constituency.Ramoji Gowda is an influential leader known for his bold
          and positive approach, which has been instrumental in driving the
          success of Nexplace Info Pvt Ltd and Nexplace Realty. He has been
          actively involved in organizing numerous job fairs, which have
          resulted in the successful facilitation of employment for thousands of
          individuals across various sectors and companies. Ramoji Gowda's
          relentless dedication and positive outlook have been pivotal in
          driving job creation initiatives and conducting successful job fairs,
          ultimately contributing to the empowerment and progress of numerous
          individuals and the community as a whole.
        </p>
      </div>
      <div className="card">
        <img src={ceo} alt="" ref={speaker_card2}/>
        <p>
          <h1>CEO: Harshitha R Gowda</h1>
          Harshitha R Gowda is the CEO of Nexplace Info Pvt Ltd, an IT and
          non-IT recruitment company. She has a strong background in the
          recruitment industry, with significant experience in both IT and
          non-IT sectors.She is known for her strong leadership skills and
          strategic vision, which have contributed to the success and growth of
          Nexplace Info Pvt Ltd.Harshitha R Gowda's leadership and expertise
          have been instrumental in shaping the success and reputation of
          Nexplace Info Pvt Ltd in the competitive recruitment landscape. Her
          strategic approach and commitment to excellence continue to drive the
          company's growth and influence in the IT and non-IT recruitment sector
        </p>
      </div>
    </div>
  );
};

export default OurSpeakers;
