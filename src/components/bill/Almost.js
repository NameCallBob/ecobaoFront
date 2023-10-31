import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Axios from '../../components/Axios'

function Almost({data, payment}) {
    const [memberName, setMemberName] = useState(null)
    const [memberPhone, setMemberPhone] = useState(null)
    const [order, setOrder] = useState(null)
    const [storeName, setStoreName] = useState(null)
    const [storePhone, setStorePhone] = useState(null)
    const [storeAddress, setStoreAddress] = useState(null)



    const GetFromBack = () =>{
        Axios().get('member/account/')
        .then((res)=>{
            let data = res.data
            if(data){
            setMemberName(data.name)
            setMemberPhone(data.phone)                
            }

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        GetFromBack()
    },[])
    useEffect(()=>{
        setOrder(data)
        setStoreName(data[0].store_name)
        setStorePhone(data.store_phone)
        setStoreAddress(data.store_address)            
    },[data])

  return (
    <>
    <Card>
        <Card.Header>
        <Card.Title>確認您的訂單</Card.Title>
        </Card.Header>
      <Card.Body>
        <Card.Text>訂購人：{memberName}</Card.Text>
        <Card.Text>電話：{memberPhone}</Card.Text>            
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Card.Body>
          <Card.Text>店家：{storeName}</Card.Text>
          <Card.Text>店家電話：{'wait a minute'}</Card.Text>
          <Card.Text>店家地址：{'wait a minute'}</Card.Text>    
        </Card.Body>
      </ListGroup>
      <Card.Body>
        <Card.Title>餐點明細</Card.Title>
        <ListGroup className="list-group-flush">
            {order &&
             order.map((item)=>(
            <ListGroup.Item>
              <Card.Text>{item.goods_name} ${item.price}</Card.Text>
              <Card.Text>數量：{item.quantity}</Card.Text>
              <Card.Text>小計：{`$${item.subtotal}`}</Card.Text>
            </ListGroup.Item>                
             )) 
            }
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Card.Title>{`總金額：$${123}`}</Card.Title>
        <Card.Subtitle className='mt-3'>支付方式：{payment}</Card.Subtitle>
      </Card.Footer>
    </Card>
    </>
  )
}

export default Almost