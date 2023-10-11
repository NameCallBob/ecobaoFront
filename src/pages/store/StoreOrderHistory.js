import React from 'react'
import StoreKanBan from '../../components/StoreKanBan'
import { Container, Table } from 'react-bootstrap'
import { Rating } from '@mui/material'


/*** 
 * 商家歷史訂單記錄頁面
 ***/
function StoreOrderHistory() {
  const testData = {
    id: "A001",
    item: "炸雞桶",
    customer: "楊兆彬",
    price: 100,
    amount: 1,
  }
  const testData2 = {
    id: "A000",
    item: "炸雞腿",
    customer: "binbin",
    price: 200,
    amount: 1,
  }
  return (
    <>
    <StoreKanBan/>
    <div className='storeIndex'>
      <Container fulid>
        <h1>歷史訂單</h1>
        <Table bordered hover striped size="sm">
          <thead className='cart-th'>
            <tr>
              <th>訂單編號</th>
              <th>訂購產品</th>
              <th>訂購人</th>
              <th>數量</th>
              <th>金額</th>
              <th>成立時間</th>
              <th>訂單狀況</th>
              <th>評等</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{testData2.id}</td>
              <td>{testData2.item}</td>
              <td>{testData2.customer}</td>
              <td>{testData2.amount}</td>
              <td>{testData2.price}</td>
              <td>08/31 15:00</td>
              <td>完成</td>
              <td><Rating name="read-only" value={5} readOnly size='medium'/></td>
            </tr>
            <tr>
              <td>{testData.id}</td>
              <td>{testData.item}</td>
              <td>{testData.customer}</td>
              <td>{testData.amount}</td>
              <td>{testData.price}</td>
              <td>08/31 14:30</td>
              <td>完成</td>
              <td><Rating name="read-only" value={3} readOnly size='medium'/></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
    </>
  )
}

export default StoreOrderHistory