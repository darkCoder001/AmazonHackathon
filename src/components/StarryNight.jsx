import React, { useEffect, useRef } from 'react'

function StarryNight({ starCount = 200 }) {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    const createStars = () => {
      return Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      }))
    }
    
    let stars = createStars()
    
    const drawStar = (star) => {
      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fill()
    }
    
    const updateStar = (star) => {
      star.x += star.speedX
      star.y += star.speedY
      
      if (star.x < 0) star.x = canvas.width
      if (star.x > canvas.width) star.x = 0
      if (star.y < 0) star.y = canvas.height
      if (star.y > canvas.height) star.y = 0
    }
    
    const animate = () => {
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach((star) => {
        drawStar(star)
        updateStar(star)
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    resizeCanvas()
    animate()
    
    window.addEventListener('resize', () => {
      resizeCanvas()
      stars = createStars()
    })
    
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [starCount])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-full w-full"
      style={{ backgroundColor: 'black' }}
      aria-hidden="true"
    />
  )
}

export default StarryNight