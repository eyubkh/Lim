import { useMutation } from '@apollo/client'
import Icon from '@components/atoms/icon/Icon'
import { ADD_COMMENT } from '@graphql/client/mutation'
import { GET_USER } from '@graphql/client/queries'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'

const Component = styled.form`
  display: flex;
  border-radius: 0px 0px 4px 4px;
  gap: 17px;
  border: solid 1px #33333344;
  padding: 17px 26px;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  textarea {
    width: 100%;
    background-color: transparent;
    border: none;
    resize: none;
    outline: none;
  }
`

export default function CommentTextField({ id }) {
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [{ query: GET_USER }, 'userData'],
  })

  const addCommentHandler = (event) => {
    event.preventDefault()
    addComment({ variables: { text: event.target[0].value, postId: id } })
    event.target[0].value = ''
  }
  return (
    <Component onSubmit={addCommentHandler}>
      <TextareaAutosize placeholder={'Add a comment...'} />
      <button>
        <Icon icon={'send'} />
      </button>
    </Component>
  )
}
