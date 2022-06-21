import { Col, Container, Row } from "react-bootstrap"
import MyCard from "../components/Card"
import { infoLoader } from "../src/loader"

export default function About(data) {
  return(
      <Container>
        <Row>
              {
                data.employee.map(item => (
                  <Col className="col-3 d-flex align-items-stretch" key={item.id}>
                    <MyCard key={item.id} name={item.name} title={item.title} src = {item.img} />
                  </Col>
                ))
              }
        </Row>
      </Container>
  )
}


About.getInitialProps = async (ctx) => {
  const employee = await infoLoader("employee")
  return {
    employee
  }
}