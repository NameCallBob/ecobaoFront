import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { VscAccount } from 'react-icons/vsc'
import { Link, useNavigate } from 'react-router-dom'
import Axios from './Axios'

/***
*就只是一個NavBar而已
***/
function KanBan() {
  const navigate = useNavigate()
  const isValid = (url) =>{
    const action = 'api/token/verify/'
    Axios().post(action, JSON.stringify({
      token: window.localStorage.getItem('jwt'),
    }))
    .then((res)=>{
      if (res.status === 200) {
        navigate('/UserProfile')
      }
    })
    .catch((err)=>{
      alert('請先登入喔～');
      navigate('/LoginPage')
    })
  }

  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light" fixed='top'>
      <Container>
        <Navbar.Brand href="/" className='nav-brand'>
            <img
              alt=""
              src="/logo.png"
              width="85"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            環飽EcoBǎo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* 中間留白 */}
          </Nav>
          <Nav>
            <Nav.Link href="/">主頁</Nav.Link>
            <Nav.Link href='/activity'>活動專區</Nav.Link>
            <Nav.Link href="/about">關於我們</Nav.Link>
            <Nav.Link href="/commonQA">常見問題</Nav.Link>
            <Nav.Link href="/menu">查看美食</Nav.Link>
            <Nav.Link onClick={()=>isValid("/cart")}>購物車</Nav.Link>
            <Nav.Link onClick={()=>isValid("/orders")}>我的訂單</Nav.Link>
            <Link className='nav-to-profile' onClick={()=>isValid("/UserProfile")}><VscAccount size={40}/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='navbar-div'></div>
    </div>
  )
}

export default KanBan