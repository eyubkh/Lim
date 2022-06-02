import { gql } from '@apollo/client'
import { MockedProvider } from '@apollo/client/testing'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Login from './Login'

const TEST = gql`
  mutation Test($username: String) {
    user(username: $username) {
      username
    }
  }
`

const mocks = [
  {
    request: {
      query: TEST,
      variables: { username: 'ayub' },
    },
    result: {
      data: {
        user: { username: 'ayob' },
      },
    },
  },
]

describe('<Login />', () => {
  test('mocking test pass', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Login />
      </MockedProvider>
    )

    expect(component.container).toHaveTextContent('Your social network.')
  })
})
