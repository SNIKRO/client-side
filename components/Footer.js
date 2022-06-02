import { Container } from "react-bootstrap"
import style from "../styles/footer.module.css"

export default function Footer() {
  return (
    <Container fluid className= {style.allContainer}>
      <Container className= {style.container}>
        <p>IVT SITE</p>
      </Container>
    </Container>
  )
}
