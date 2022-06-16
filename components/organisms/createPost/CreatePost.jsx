import { useMutation } from '@apollo/client'
import Icon from '@components/atoms/icon/Icon'
import { CREATE_POST } from '@graphql/client/mutation'
import { GET_USER } from '@graphql/client/queries'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'

const Component = styled.form`
  background-color: #f3f3f3;
  border: solid 1px #33333344;
  border-radius: 4px;
  padding: 26px 26px;
  display: flex;
  gap: 17px;
  align-items: center;
  height: max-content;
  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
  textarea {
    background-color: transparent;
    resize: none;
    border: none;
    width: 100%;
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
      <TextareaAutosize placeholder="What's happening?" />
      <button>
        <Icon icon={'add'} />
      </button>
    </Component>
  )
}
