import React from 'react'
import { Modal, Button, Form, Container, Row, Col, Image } from 'react-bootstrap'
import logo from '../../img/logo.png'


/*** 
 * 餐點彈出視窗
 ***/
function Meal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Form>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                店名
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <h4>產品名稱</h4>
                            <p>過敏原</p>
                            <p>介紹</p>
                        </Col>
                        <Col>
                            <Image src={logo} alt={logo}/>
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit'>加到購物車</Button>
            </Modal.Footer>
        </Form>
    </Modal>
  )
}

export default Meal