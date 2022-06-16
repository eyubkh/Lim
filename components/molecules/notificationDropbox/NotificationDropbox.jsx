import { useLazyQuery, useQuery } from '@apollo/client'
import Icon from '@components/atoms/icon/Icon'
import { GET_NOTIFICATION, RESET_NOTIFICATION } from '@graphql/client/queries'
import styled from 'styled-components'

const Component = styled.div`
  position: relative;
  label {
    cursor: pointer;
  }
  .counter {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    font-size: x-small;
    color: #f3f3f3;
    background-color: #f25252;
  }
  input {
    position: absolute;
    left: 9999px;
  }
  .dropdown-content {
    position: absolute;
    display: none;
    padding: 7px;
    width: 300px;
    min-height: 30px;
    left: 0px;
    top: 30px;
    background-color: #333;
    border-radius: 4px;
    color: #f3f3f3;
    z-index: 999;
  }

  .dropdown-content button {
    color: #f25252;
  }

  input:checked ~ .dropdown-content {
    display: grid;
    text-align: center;
  }
  .dropdown-content::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #333;
    left: 3px;
    top: -6px;
  }
`

export default function NotifiacationDropbox() {
  const { data, loading, error } = useQuery(GET_NOTIFICATION)
  const [reset] = useLazyQuery(RESET_NOTIFICATION)

  if (loading || error) return null

  const { notifi, notifiCount } = data?.userNotification
  const resetNotificationHandler = () => {
    reset()
    notifiCount = 10
  }
  return (
    <Component onClick={resetNotificationHandler}>
      <input type={'checkbox'} id={'notification'} name={'notification'} />
      <label htmlFor={'notification'}>
        <Icon icon={'like'} />
        {notifiCount ? <span className="counter">{notifiCount}</span> : null}
      </label>
      <dir className="dropdown-content">
        {notifi.map((userNotifi, i) => (
          <p key={i}>{userNotifi.username + ' ' + userNotifi.message}</p>
        ))}
      </dir>
    </Component>
  )
}
