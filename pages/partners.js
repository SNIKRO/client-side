import Image from "next/image"
import { SSRProvider } from "react-bootstrap"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import styles from "../styles/partners.module.css"
import COD from "../images/COD.png"
import ISSArt from '../images/partners1.png'
import Sigma from "../images/sigma.png"
export default function Partners() {
  return(
    <SSRProvider>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
          <Row>
            <Col sm={2} >
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item> 
                  <Nav.Link eventKey="first" className="font">Центр обработки данных</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className={styles.font}>ISS Art</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className={styles.font}>SIGMA Академая</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Image 
                  src={COD} 
                  alt="partner picture"
                  width="1200px"
                  height="800px"
                  />
                  <p>
                    about partnergd dbsdbhaen sdefbadefbaebaerb aewrbgaerbaerb
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Image 
                  src={ISSArt} 
                  alt="partner picture"
                  width="1200px"
                  height="900px"
                  />
                  <p>
                    about partneraerb raeba erbaerb aerb raebaesb
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Image 
                  src={Sigma}
                  alt="partner picture"
                  width="1200px"
                  height="1000px"
                  />
                  <p>
                    about partner aesbaesbraebhsrtn ryndrndrfgnsretnaest aethsethsrethnrthn sthnsrtnhnyhnyhn ethsabhtaehse aesthnsretnrs
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </SSRProvider>
  )
}
