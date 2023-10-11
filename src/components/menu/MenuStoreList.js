import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'


function MenuStoreList({object}) {
  return (
    <Col>
        <Link to="/store" className='menu-link-to-store'>
            <Card className='menu-store-list'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                  <Card.Title className='menu-card-title'>{object.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{object.intro}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Link>
    </Col>
  )
}

export default MenuStoreList