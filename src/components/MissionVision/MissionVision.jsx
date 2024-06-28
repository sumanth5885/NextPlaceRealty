import { useEffect, useRef } from 'react'
import './MissionVision.css'

const MissionVision = () => {
  const missionRef = useRef()
  const visionRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
        
      })
    }, {threshold: 0.1})

    if (missionRef.current) {
      observer.observe(missionRef.current)
    }
    if (visionRef.current) {
      observer.observe(visionRef.current)
    }
  }, [])

  return (
    <div className='mission-vision' id='mission-vision'>
      <h2>Mission & Vision</h2>
      <div className="mission-vision-cards">
        <div className="mission-vision-card mission" ref={missionRef}>
          <h3>Mission</h3>
        Bangalore is a city brimming with opportunity, and owning a piece of it can feel like a dream. At Nexplace reality, we understand that dream, and we're passionate about making it a reality. We don't just sell houses; we connect you with the perfect place to call home in Bangalore, a place that reflects your aspirations and ignites the spark of joy in everyday life. Let us be your trusted guide on this exciting journey.
        </div>
        <div className="mission-vision-card vision" ref={visionRef}>
          <h3>Vision</h3>
        Our vision is not just a goal; it's a heartfelt commitment to adapt and evolve, surpassing expectations with service and results. This journey is guided by the flames of creative thinking, leadership, respect, and passion. Our unwavering focus on you, our cherished customer, drives us to continually evaluate, develop everything we do, ensuring that your experience is nothing short of exceptional, without compromise.
        </div>
      </div>
      
    </div>
  )
}

export default MissionVision
