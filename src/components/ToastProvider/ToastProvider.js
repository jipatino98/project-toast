import React from 'react';
import { useKeyDown } from '../../hooks/useKeyDown';

export const ToastContext = React.createContext()

function ToastProvider({children}) {
 
  const [toasts, setToasts] = React.useState([])

  const createToast = (message, radioVariant) => {
    const newToast = {
      message: message,
      variant: radioVariant,
      id: crypto.randomUUID(),
    }

    const nextToast = [...toasts, newToast]
    setToasts(nextToast)
  }

  const dismissToast = (id) => {
    const newToast = toasts.filter((toast) => {
      return toast.id !== id
    })

    setToasts(newToast)
  }
  
  const handleKeyDown = React.useCallback(() => {
    setToasts([])
  }, [])

  useKeyDown("Escape", handleKeyDown)

const values = React.useMemo(() => {
  return {
    toasts,
    setToasts,
    createToast,
    dismissToast,
  }
}, [toasts])


  return (
    <ToastContext.Provider value={values}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
