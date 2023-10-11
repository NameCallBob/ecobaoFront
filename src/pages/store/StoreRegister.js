import React, { useState } from 'react'
import { Card, Col, Container, Form, Row, Button, Image, Alert } from 'react-bootstrap'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import StoreKanBan from '../../components/StoreKanBan'

function StoreRegister() {
    const {data: allergen} = useFetch("http://localhost:8002/foodAllergen")

  return (
    <>
    <StoreKanBan/>
    <Container fluid>
        <Card className='store-signIn-card'>
            <Row className='signIn-row'>
                <Col xs={12} sm={6} md={6}>
                    <h2>共同為地球盡一份心力！</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="SignInName">
                            <Form.Label>商家店名</Form.Label>
                            <Form.Control type="name" placeholder="Enter name"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>電話</Form.Label>
                            <Form.Control type="phone" placeholder="Enter phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>地址</Form.Label>
                            <Form.Control type="address" placeholder="Enter address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="SignInEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="SignInPassword">
                            <Form.Label>密碼</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="SignInCheckPassword">
                            <Form.Label>再輸入一次密碼</Form.Label>
                            <Form.Control type="password" placeholder="checkPassword" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            提交
                        </Button>
                    </Form>
                    <div className='signIn-back-login'>
                        已經註冊了？返回登入頁面吧！ 
                        <Link to="/StoreLoginPage">
                            <Button variant="outline-dark" type="submit" className='sign-up'>
                                登入
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6}>
                    <Image src={logo} rounded className='register-img'/>
                </Col>
            </Row>
        </Card>
    </Container>
    </>
  )
}

export default StoreRegister