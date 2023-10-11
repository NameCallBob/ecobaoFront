import React from 'react'
import { Card, Button } from 'react-bootstrap'
import userLog from '../img/userlog.png'
import storeLog from '../img/storelog.png'

/***
 *登入Card
 ***/
function LoginCard({isConsumer}) {

    const CustomerClickHandler = (e) =>{
        // const w=window.open('_self')
        // w.location.href="/LoginPage"
        const w=window.open("/LoginPage",'_self')

    }
    const StoreclickHandler = (e)=>{
        // const w=window.open('_self');
        // w.location.href="/StoreLoginPage"
        const w=window.open("/StoreLoginPage",'_self')
        
    }

    // 切換使用者與商家
    const consumer = () =>{
      return(
        <>
          <Card.Img variant="top" src={userLog} />
          <Card.Body>
            <Card.Title className='login-card-title'>使用者登入/註冊</Card.Title>
            <div className="d-grid gap-2">
              <Button variant="success" size="lg" onClick={CustomerClickHandler}>使用者按我！</Button>
            </div>
          </Card.Body>
        </>
      )
    }

    const store = () =>{
      return(
        <>
          <Card.Img variant="top" src={storeLog} />
          <Card.Body>
            <Card.Title className='login-card-title'>商家登入/註冊</Card.Title>
            <div className="d-grid gap-2">
              <Button variant="success" size="lg" onClick={StoreclickHandler}>商家按我！</Button>
            </div>
          </Card.Body>
        </>
      )
    }


  return (
    <Card>
        {isConsumer ? consumer() : store()}
    </Card>
  )
}

export default LoginCard