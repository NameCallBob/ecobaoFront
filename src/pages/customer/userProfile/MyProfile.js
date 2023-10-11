import React from 'react'
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap'


/*** 
 * 使用者的個人頁面-我的檔案
 ***/
function MyProfile() {
    const testData = {
        "id": 1,
        "name": "Amy",
        "email": "amy123@gmail.com",
        "phone":"0912345678",
        "birth":"2003-02-26",
        "addr":"新北市新北區新北路1號"
    }
  return (
    <Container fluid className='myprofile'>
        <Row>
            <Col xs={1} md={1}>
                {/* <Image src={logo} alt={logo} roundedCircle className='profile-img'/> */}
            </Col>
            <Col xs={8} md={8}>
                <h2>我的檔案</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>姓名</Form.Label>
                        <Form.Control type="text" defaultValue={testData.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>生日</Form.Label>
                        <Form.Control type="date" defaultValue={testData.birth} pattern='yyyy-MM-DD'/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" defaultValue={testData.email}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>電話</Form.Label>
                        <Form.Control type="number" defaultValue={testData.phone}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>通訊地址</Form.Label>
                        <Form.Control type="text" defaultValue={testData.addr}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        儲存
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default MyProfile