import { useContext } from 'react'
import styled from 'styled-components'
import { ErrorHandlerContext } from '../../../utils/errorHandlerUi'

const Component = styled.div`
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  padding: 17px;
  align-items: center;
  color: #f3f3f3;
  background-color: #f25252;
  border-radius: 4px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`

export default function ErrorHandlerComponent() {
  const { error, removeError } = useContext(ErrorHandlerContext)
  if (!error) return null
  setTimeout(() => {
    removeError()
  }, 2000)

  return <Component>{error}</Component>
}
