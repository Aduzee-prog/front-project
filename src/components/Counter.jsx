import React, { useState, useEffect } from 'react'

const Counter = ({ target, duration = 2000, suffix = '', prefix = '', format = null }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let currentCount = 0
    let timer

    const startCounting = () => {
      currentCount = 0
      const increment = target / (duration / 50)
      timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(currentCount))
        }
      }, 50)
    }

    startCounting()

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [target, duration])

  const formatNumber = (num) => {
    if (format === 'M') {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(0) + 'M'
      }
      return num.toLocaleString()
    }
    return num.toLocaleString()
  }

  return (
    <span>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export default Counter
