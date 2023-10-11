import React, { useEffect, useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { Space, Table, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import useFetch from '../../hooks/useFetch'
import CartItem from '../../components/cart/CartItem'
import KanBan from '../../components/KanBan'
import CartCoupon from '../../components/cart/CartCoupon'
import CartCounter from '../../components/cart/CartCounter';
import CartDelete from '../../components/cart/CartDelete';

/*** 
 *購物車-未完成
 ***/
function Cart() {
    const {data: dataSource} = useFetch("http://localhost:8002/CartdataSource")

    const [unitPrice, setUnitPrice] = useState(0)
    const [discount, setDiscount] = useState(1)
    const [total, setTotal] = useState(0)
    const [itemTotal, setItemTotal] = useState(100)

    const columns = [
        {
            title: '品名',
            dataIndex: 'item',
            key: 'item',
        },
        {
            title: '店家',
            dataIndex: 'store',
            key: 'store',
        },
        {
            title: '單價',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '數量',
            dataIndex: 'amount',
            key: 'amount',
        }
    ];
    
  return (
    <>
    <KanBan/>
    <div className='cart'>
    <Container fluid>
        <h1>購物車</h1>
        <Table dataSource={dataSource}>
            {/* <Column title="#" dataIndex="key" key="key"/> */}
            <Column title="品名" dataIndex="item" key="item"/>
            <Column title="店家" dataIndex="store" key="store"/>
            <Column title="單價" dataIndex="price" key="price"/>
            <Column 
            title="數量"
            key="amount"
            render={()=>(
                <CartCounter />
            )}
            />
            <Column 
            title="總計"
            key="itemTotal"
            render={()=>{
                <span>{itemTotal}</span>
            }}
            />
            <Column 
                title="刪除" 
                key="isDelete"
                render={()=>(
                    <CartDelete />
                )}
            />
        </Table>
        <div>
            {/* 折價券 error */}
            <Form className='coupon-select'>
                <Form.Select onChange={(e)=>setDiscount(e.target.value)} defaultValue={1}>
                    <CartCoupon/>
                </Form.Select>
            </Form>
            <span className='cart-total'>總金額：＄ {total}</span>
            <Button variant='success' size='lg' className='cart-buy-button'>購買</Button>
        </div>
    </Container>
    </div>
    </>
  )
}

export default Cart