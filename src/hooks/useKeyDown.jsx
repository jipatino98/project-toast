import React from 'react'

export const useKeyDown = (key, callback) => {
    return (
        React.useEffect(() => {
          const handleKeyDown = (event) => {
            if (event.code === key) {
              callback(event)
            }
          }
      
          window.addEventListener('keydown', handleKeyDown)
      
          return () => {
            window.removeEventListener('keydown', handleKeyDown)
          }
        }, [key, callback])
    )
}