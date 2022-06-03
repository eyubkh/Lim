import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    background-color: blue;
    width: 44px;
    height: 44px;
    border-radius: 17px;
  }
`

export default function HistoryAvatar({ text }) {
  return (
    <Component>
      <div />
      <p>{text}</p>
    </Component>
  )
}
