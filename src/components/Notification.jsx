import React, { useEffect } from 'react'
import '../styles/Notification.css'

const Notification = ({ message, type = 'success', onClose, duration = 5000 }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [message, onClose, duration])

  if (!message) return null

  return (
    <div className={`notification notification-${type}`}>
      <span>{message}</span>
      <button className="notification-close" onClick={onClose}>×</button>
    </div>
  )
}

export default Notification
