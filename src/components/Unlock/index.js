// Write your code here
import {useState}from "react"
import {Container, Image, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [isClicked,setisClicked]=useState(false)
  const clicktolockUnlock=()=>{
    setisClicked(prevState=>!prevState)
  }
  return (
    <Container>
      <Image
        src={isClicked ?"https://assets.ccbp.in/frontend/hooks/unlock-img.png":"https://assets.ccbp.in/frontend/hooks/lock-img.png"}
        alt={isClicked ? "unlock":"lock"}
      ></Image>
      <Paragraph>{isClicked ? "Your Device is Unlocked" : "Your Device is Locked"}</Paragraph>
      <Button onClick={clicktolockUnlock}>{isClicked ?"Lock": "Unlock"}</Button>
    </Container>
  )
}
export default Unlock
