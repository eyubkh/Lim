import styled from 'styled-components'
import Icon from '../../atoms/icon/Icon'

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  height: 44px;
  input {
    border: none;
    padding: 5px 0px;
    outline: none;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export default function FriendSearch({ setSearch, search, handler }) {
  const onSearch = (event) => {
    event.preventDefault()
    setSearch(!search)
  }
  return (
    <Component>
      {search ? (
        <input
          onChange={handler}
          type={'text'}
          placeholder="Seach friend's name"
        />
      ) : (
        <h3>Friends</h3>
      )}
      <button onClick={onSearch}>
        <Icon icon={search ? 'add' : 'search'} />
      </button>
    </Component>
  )
}
