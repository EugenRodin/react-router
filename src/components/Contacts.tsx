import { useNavigate } from "react-router-dom"
const Contacts = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }
  
  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={goToHome}>Home</button>
    </div>
  )
}

export default Contacts