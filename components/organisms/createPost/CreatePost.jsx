import { gql, useMutation } from '@apollo/client'
import styled from 'styled-components'
import { GET_USER } from '../../../pages/home'
import Icon from '../../atoms/icon/Icon'
const CREATE_POST = gql`
  mutation createPost($text: String) {
    createPost(text: $text) {
      text
    }
  }
`

const Component = styled.form`
  background-color: #f3f3f3;
  border-radius: 26px;
  padding: 26px 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    outline: none;
    background-color: #f3f3f3;
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
    refetchQueries: [{ query: GET_USER }, 'user'],
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
