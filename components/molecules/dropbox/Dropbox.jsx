import { useMutation } from '@apollo/client'
import { DELETE_FRIEND } from '@graphql/client/mutation'
import { GET_USER } from '@graphql/client/queries'
import styled from 'styled-components'

const Component = styled.div`
  position: relative;
  label {
    cursor: pointer;
  }
  input {
    position: absolute;
    left: 9999px;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    padding: 7px;
    width: auto;
    right: -7px;
    bottom: 30px;
    background-color: #333;
    border-radius: 4px;
    color: #f25252;
    text-align: center;
  }

  .dropdown-content button {
    color: #f25252;
  }

  ${(props) => '#' + props.target}:checked ~ .dropdown-content {
    display: block;
  }
  .dropdown-content::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #333;
    right: 3px;
    bottom: -7px;
  }
`

export default function Dropbox({ id, children }) {
  const [delet] = useMutation(DELETE_FRIEND, {
    refetchQueries: [{ query: GET_USER }, 'getUserData'],
  })
  let target = id.substring(3)

  const deleteFriendHandler = (event) => {
    event.preventDefault()
    delet({ variables: { deleteId: id } })
  }

  return (
    <Component target={target}>
      <input type={'checkbox'} id={target} name={target} />
      <label htmlFor={target}>{children}</label>
      <dir className="dropdown-content">
        <button onClick={deleteFriendHandler}>delete</button>
      </dir>
    </Component>
  )
}
