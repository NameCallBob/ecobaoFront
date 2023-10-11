import { Rating } from '@mui/material'
import React from 'react'
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap'
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6"
import { Link } from "react-router-dom";
import Meal from './Meal';
import KanBan from '../../components/KanBan';

function Store() {
    const sotreInfo = {
        "id": 1,
        "sotreName": "binbin炸雞店",
        "rating":4,
        "intro": "仿肯德基仿肯德基仿肯德基仿肯德基仿肯德基仿肯德基仿肯德基仿肯德基",
        "img": "https://i.imgur.com/QaWfl9j.png",
        "ig": "https://www.instagram.com/0625.squafaccce/",
        "fb": "https://www.facebook.com/profile.php?id=100092980359814"
    }
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <KanBan/>
    <div className='store'>
        <Container fluid>
            <Row>
                <Col>
                    <Image src={sotreInfo.img} alt={sotreInfo.sotreName} />
                    
                    
                </Col>
                <Col>
                    <h1>{sotreInfo.sotreName}</h1>
                    <Container>
                        <Rating name="read-only" value={sotreInfo.rating} readOnly size='large'/>
                    </Container>
                    <Container>
                        <Link to={sotreInfo.fb} className='store-link'><FaSquareFacebook size={30}/></Link>
                        <Link to={sotreInfo.ig} className='store-link'><FaInstagram size={30}/></Link>
                    </Container>
                    <Container>
                        <p>{sotreInfo.intro}</p>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>本店餐點</h2>
                    <Container fluid>
                        <Row xs={1} md={5} className="g-4">
                            {Array.from({ length: 13 }).map((_, idx) => (
                                <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src={sotreInfo.img} />
                                    <Card.Body>
                                    <Card.Title>產品名稱</Card.Title>
                                    <Card.Text>
                                        過敏原
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>查看</Button>
                                    </Card.Body>
                                </Card>
                                </Col>
                            ))}
                        </Row>
                        <Meal show={modalShow} onHide={() => setModalShow(false)}/>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>來自google評論</h2>
                    <p>這個ＡＰＩ好像要錢</p>
                </Col>
                <Col>
                    <h2>本平台評論</h2>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Store