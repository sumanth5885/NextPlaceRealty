import { useEffect, useRef } from 'react'
import './Strengths.css'

const Strengths = () => {
  const str_card1 = useRef()
  const str_card2 = useRef()
  const str_card3 = useRef()
  const str_card4 = useRef()
  const str_card5 = useRef()

  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          entry.target.classList.add('animate')
        }
        
      })
    }, {threshold: 0.5})

    if (str_card1.current) {
      observer.observe(str_card1.current)
    }
    if (str_card2.current) {
      observer.observe(str_card2.current)
    }
    if (str_card3.current) {
      observer.observe(str_card3.current)
    }
    if (str_card4.current) {
      observer.observe(str_card4.current)
    }
    if (str_card5.current) {
      observer.observe(str_card5.current)
    }

  }, [])
  return (
    <div className='strengths' id='strengths'>
      <h2>Our Strengths</h2>
      <div className="strengths-content"> 
        <div className="strength-card" ref={str_card1}>
        Emphasize the size and reach of your partner network. This connects builders to a wider pool of qualified buyers and investors
        </div>
        <div className="strength-card" ref={str_card2}>
        Highlight how your network offers efficient support in 
        marketing and selling builder projects, saving them time and resources..
        </div>
        <div className="strength-card" ref={str_card3}>
        Demonstrate access to valuable data and market trends, allowing builders 
        to make informed decisions regarding project planning and pricing.
        </div>
        <div className="strength-card" ref={str_card4}>
        Emphasize the network's experience in negotiating favorable deals with buyers and other stakeholders, maximizing benefits for builders.
        </div>
        <div className="strength-card" ref={str_card5}>
        Showcase successful outcomes achieved through past partnerships
        with builders.
        </div>
      </div>
      
    </div>
  )
}

export default Strengths
