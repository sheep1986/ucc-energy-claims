import { useEffect } from 'react'

const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const fadeElements = document.querySelectorAll('.fade-up')
    const slideElements = document.querySelectorAll('.slide-in')
    const scaleElements = document.querySelectorAll('.scale-in')
    const staggerElements = document.querySelectorAll('.stagger-in')
    const counterElements = document.querySelectorAll('.counter-animation')

    fadeElements.forEach(el => observer.observe(el))
    slideElements.forEach(el => observer.observe(el))
    scaleElements.forEach(el => observer.observe(el))
    
    // Special handling for staggered animations
    staggerElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 100}ms`
      observer.observe(el)
    })

    // Special handling for counter animations
    const animateCounter = (element) => {
      const target = parseInt(element.dataset.target)
      const text = element.textContent
      let start = 0
      
      // Extract prefix and suffix from original text
      const prefix = text.match(/^[^\d]*/)[0]
      const suffix = text.match(/[^\d]*$/)[0]
      
      const duration = 2000
      let startTime = null
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const current = Math.floor(progress * target)
        const formattedNumber = current.toLocaleString()
        element.textContent = `${prefix}${formattedNumber}${suffix}`
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }

    // Enhanced observer for counter elements
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted')
          entry.target.classList.add('animate-in')
          animateCounter(entry.target)
        }
      })
    }, observerOptions)

    counterElements.forEach(el => counterObserver.observe(el))

    return () => {
      fadeElements.forEach(el => observer.unobserve(el))
      slideElements.forEach(el => observer.unobserve(el))
      scaleElements.forEach(el => observer.unobserve(el))
      staggerElements.forEach(el => observer.unobserve(el))
      counterElements.forEach(el => counterObserver.unobserve(el))
    }
  }, [])
}

export default useScrollAnimation