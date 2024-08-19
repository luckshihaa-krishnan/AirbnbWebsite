import React from "react";
import Card from 'react-bootstrap/Card';

export default function PageHeader(prop){
    const {text} = prop
    return(<>
            <Card style={{ width: '67.5rem' }} className="bg-light">
            <Card.Img variant="top"/>
            <Card.Body>
            <Card.Text>
              {prop.text}
            </Card.Text>
            </Card.Body>
          </Card>
           <br/>
        </>)
}