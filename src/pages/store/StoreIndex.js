import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import StoreKanBan from '../../components/StoreKanBan'
//暫放一下
import storeimg from '../../img/storelog.png'


function StoreIndex() {
  const testData = {
    "name": "binbin炸雞店",
    "phone": "02-12345678",
    "address": "新北市三重區中正北路163號"
  }
  return (
    <>
    <StoreKanBan/>
    <div className='storeIndex'>
      <Container fulid>
        <Row>
          <Col xs={12} sm={6} md={6}>
            <Image src={storeimg} alt='暫放一下' rounded className='storeImg'/> 
          </Col>
          <Col xs={12} sm={6} md={6}>
            <h1>{testData.name}</h1>
            <p>電話：{testData.phone}</p>
            <p>地址：{testData.address}</p>
            <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>放入您的商家實照</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>FaceBook：</Form.Label>
                  <Form.Control type='url' placeholder='輸入您的fb網址'/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Instagram：</Form.Label>
                <Form.Control type='url' placeholder='輸入您的ig網址'/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>商店簡介：</Form.Label>
                <Form.Control as="textarea" placeholder='輸入您的簡介'/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>營業時段選擇：</Form.Label>
                <Form.Control as="textarea" placeholder='如何製作選擇營業時段呢？🤔'/>
              </Form.Group>
              <Button variant='success' type='submit' className='storeIndexButton'>儲存</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default StoreIndex