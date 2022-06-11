import React, { useState } from 'react'

export const ErrorHandlerContext = React.createContext({
  error: null,
  addError: () => {},
  removeError: () => {},
})
export function ErrorHandlerProvider({ children }) {
  const [error, setError] = useState(null)

  const addError = (message) => setError(message)
  const removeError = () => setError(null)

  const contextValue = {
    error,
    addError,
    removeError,
  }

  return (
    <ErrorHandlerContext.Provider value={contextValue}>
      {children}
    </ErrorHandlerContext.Provider>
  )
}
