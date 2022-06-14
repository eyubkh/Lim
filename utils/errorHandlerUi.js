import React, { useState } from 'react'

export const ErrorHandlerContext = React.createContext({
  error: null,
  addError: () => {},
  removeError: () => {},
})
export function ErrorHandlerProvider({ children, test }) {
  const [error, setError] = useState(null)

  const addError = (message) => setError(message)
  const removeError = () => setError(null)

  const contextValue = {
    error,
    addError,
    removeError,
  }

  return (
    <ErrorHandlerContext.Provider value={test ? test : contextValue}>
      {children}
    </ErrorHandlerContext.Provider>
  )
}
