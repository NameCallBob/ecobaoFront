import React from 'react'
import StoreKanBan from '../../components/StoreKanBan'
import { Container, Card } from 'react-bootstrap'
import { Rating } from '@mui/material'


function StoreCustomerFeedback() {
  return (
    <>
    <StoreKanBan/>
    <div className='storeIndex'>
        <Container fluid>
            <h1>商家評價查詢</h1>
            <div className='customer-feedback'>
                <Card>
                    <Card.Body>
                        <Card.Title>楊兆彬</Card.Title>
                        <Card.Text>把你骨灰給揚摟</Card.Text>
                        <Rating name="read-only" value={1} readOnly size='large'/>
                    </Card.Body>
                    <Card.Footer>撰寫時間：2023/09/03 18:30</Card.Footer>
                </Card>
            </div>
        </Container>
    </div>
    </>
  )
}

export default StoreCustomerFeedback