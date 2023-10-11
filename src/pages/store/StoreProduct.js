import React from 'react'
import StoreKanBan from '../../components/StoreKanBan'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap'
//
import logo from '../../img/logo.png'
import StoreMealEdit from './StoreMealEdit';

/*** 
 * 商家管理產品的彈出視窗
 ***/
function StoreProduct() {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <StoreKanBan/>
    <div className='storeIndex'>
      <Container>
        <Row>
          <Col>
            <h1>商品管理</h1>
          </Col>
        </Row>
        <Row>
            <Col>
                <div className='store-product-div'>
                    <Container fluid>
                        <Row xs={1} md={4} className="g-4">
                            {Array.from({ length: 10 }).map((_, idx) => (
                                <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src={logo} />
                                    <Card.Body>
                                    <Card.Title>產品名稱</Card.Title>
                                    <Card.Text>
                                        數量
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Container>
                                            <Row>
                                                <Col>
                                                <Button variant="outline-primary" className='store-product-buttons' onClick={() => setModalShow(true)}>編輯</Button>
                                                </Col>
                                                <Col>
                                                <Button variant='outline-danger' className='store-product-buttons'>下架</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            ))}
                        <StoreMealEdit show={modalShow} onHide={() => setModalShow(false)}/>
                        </Row>
                    </Container>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default StoreProduct