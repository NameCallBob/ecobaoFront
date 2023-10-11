import React from 'react'
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap'
import * as formik from 'formik';
import * as yup from 'yup';

function MyPassword() {
    const { Formik } = formik
    const schema = yup.object({
        newPasswd: yup.string().min(8,"長度不得小於8碼").required("欄位不得為空"),
        confirmNewPasswd: yup.string().oneOf([yup.ref("newPasswd")], "密碼匹配不一致"),
    });

  return (
    <Container fluid className='myprofile'>
        <Row>
            <Col xs={1} md={1}>
                {/* <Image src={logo} alt={logo} roundedCircle className='profile-img'/> */}
            </Col>
            <Col xs={8} md={8}>
                <h2>密碼設置</h2>
                <Formik
                 validationSchema={schema}
                 onSubmit={(values) => {
                    console.log(values)
                  }}
                  initialValues={{
                    passwd: '12345678',
                    newPasswd: '',
                    confirmNewPasswd: '',
                  }}
                >
                {({handleSubmit, handleChange, values, touched, errors})=>(
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>原密碼</Form.Label>
                            <Form.Control 
                             type="text" 
                             name= 'passwd'
                             defaultValue={values.passwd}
                             readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>新密碼</Form.Label>
                            <Form.Control 
                             type="password" 
                             name='newPasswd'
                             placeholder='需8位數' 
                             value={values.newPasswd}
                             onChange={handleChange}
                             isInvalid={!!errors.newPasswd}
                             required
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.newPasswd}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>再輸入一次新密碼</Form.Label>
                            <Form.Control 
                             type="password" 
                             name='confirmNewPasswd' 
                             placeholder='請再輸入一次新密碼' 
                             value={values.confirmNewPasswd}
                             onChange={handleChange}
                             isInvalid={!!errors.confirmNewPasswd}
                             required
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.confirmNewPasswd}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            設置
                        </Button>
                    </Form>
                )}
                </Formik>
            </Col>
        </Row>
    </Container>
  )
}

export default MyPassword