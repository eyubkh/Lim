import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import { CREATE_POST, GET_USER } from '../../../utils/queries'
import Icon from '../../atoms/icon/Icon'

const Component = styled.form`
  background-color: #f3f3f3;
  border-radius: 4px;
  padding: 26px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
  }
`

export default function CreatePost({}) {
  const [createPost] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: GET_USER }, 'getUserData'],
  })
  const sumbitHandler = (event) => {
    event.preventDefault()
    createPost({ variables: { text: event.target[0].value } })
    event.target[0].value = ''
  }

  return (
    <Component onSubmit={sumbitHandler}>
      <input placeholder="What's happening?" />
      <button>
        <Icon icon={'add'} />
      </button>
    </Component>
  )
}
