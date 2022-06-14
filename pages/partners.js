import Image from "next/image"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import styles from "../styles/partners.module.css"
export default function Partners() {
  return(
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <Row>
          <Col sm={2} >
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item> 
                <Nav.Link eventKey="first" className={styles.font}>Партнер 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className={styles.font}>Партнер 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className={styles.font}>Партнер 3</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" className={styles.font}>Партнер 4</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Image 
                src="https://www.figma.com/community/plugin/906950256777348534/thumbnail" 
                alt="partner picture"
                width="1200px"
                height="600px"
                />
                <p>
                  about partnergd dbsdbhaen sdefbadefbaebaerb aewrbgaerbaerb
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Image 
                src="https://www.figma.com/community/plugin/906950256777348534/thumbnail" 
                alt="partner picture"
                width="1200px"
                height="600px"
                />
                <p>
                  about partneraerb raeba erbaerb aerb raebaesb
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Image 
                src="https://www.figma.com/community/plugin/906950256777348534/thumbnail" 
                alt="partner picture"
                width="1200px"
                height="600px"
                />
                <p>
                  about partner aesbaesbraebhsrtn ryndrndrfgnsretnaest aethsethsrethnrthn sthnsrtnhnyhnyhn ethsabhtaehse aesthnsretnrs
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Image 
                src="https://www.figma.com/community/plugin/906950256777348534/thumbnail" 
                alt="partner picture"
                width="1200px"
                height="600px"
                />
                <p>
                  about partner
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}
