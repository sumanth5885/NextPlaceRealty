import'./Hero.css'
import next_place_hero from '../../assets/next_place_hero.jpg'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const heroRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, {threshold: 0.5})

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
  }, [])
  return (
    <div className='hero' id='home' ref={heroRef}>
      <img src={next_place_hero} alt="" />
    </div>
  )
}

export default Hero
