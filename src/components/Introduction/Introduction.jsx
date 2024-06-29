import { useEffect, useRef } from 'react'
import './Introduction.css'

const Introduction = () => {

  const intro = useRef()
  const paragraph = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('intro-animate')
        }
        
      })
    }, {threshold: 0.5})

    if (intro.current){
      observer.observe(intro.current)
    }
    if (paragraph.current){
      observer.observe(paragraph.current)
    }
  }, [])
  return (
    <div className='introduction' >
      <h2 ref={intro}>YOUR REAL ESTATE PARTNER FOR SUCCESS</h2>
      <p ref={paragraph}>At <span>Nexplace Realty</span> we’re more than just a real estate channel partner company.We’re a team of passionate and experienced professionals dedicated to exceeding expectations and propelling your success in the market </p>
    </div>
  )
}

export default Introduction
