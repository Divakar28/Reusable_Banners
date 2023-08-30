// Write your code here.
import './index.css'

const UserProfile = props => {
  const {userList} = props
  const {headerText, description} = userList
  return (
    <li>
      <h1 className="heading">{headerText}</h1>
      <p className="descrption">{description}</p>
    </li>
  )
}
export default UserProfile
