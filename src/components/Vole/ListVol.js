import React from "react";
import { Card,ListGroup,ListGroupItem } from "react-bootstrap";
import Navbar from "../../loyout/navbar"
const ListVol = () => {
  return (
      <div>
      <Navbar/>
    <div style={{ display: "flex", justifyContent: "space-around" ,marginTop:"10%"}}>
    
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
        <Card.Body>
          <Card.Title>mp45</Card.Title>
          <Card.Text>description</Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>date depart</ListGroupItem>
          <ListGroupItem>date arriver</ListGroupItem>
          <ListGroupItem>prix</ListGroupItem>
          <ListGroupItem>prix</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href='#'>Card Link</Card.Link>
          <Card.Link href='#'>Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
        <Card.Body>
          <Card.Title>mp45</Card.Title>
          <Card.Text>description</Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>date depart</ListGroupItem>
          <ListGroupItem>date arriver</ListGroupItem>
          <ListGroupItem>prix</ListGroupItem>
          <ListGroupItem>prix</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href='#'>Card Link</Card.Link>
          <Card.Link href='#'>Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
        <Card.Body>
          <Card.Title>mp45</Card.Title>
          <Card.Text>description</Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>date depart</ListGroupItem>
          <ListGroupItem>date arriver</ListGroupItem>
          <ListGroupItem>prix</ListGroupItem>
          <ListGroupItem>prix</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href='#'>Card Link</Card.Link>
          <Card.Link href='#'>Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};

export default ListVol;
