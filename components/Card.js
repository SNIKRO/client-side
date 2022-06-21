import { Card  } from "react-bootstrap"
import Image from "next/image"


export default function MyCard(props) {
  
  return(
    <Card style={{ width:"18rem", marginBottom:'10px'}}>
      <Card.Img variant="center" src={props.src} />
      <Card.Body className="text-center">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.title}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
