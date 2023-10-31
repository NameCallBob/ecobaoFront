import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap'
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6"
import { Link, useLocation } from "react-router-dom";
import { Divider, Space, Tag } from 'antd';
import Meal from './Meal';
import KanBan from '../../components/KanBan';
import Axios from '../../components/Axios';
import Comment from '../../components/Comment';
import useFetch from '../../hooks/useFetch';


function Store() {
    const [serverUrl, setServerUrl] = useState(null)
    const { data: serverURL } = useFetch("http://localhost:8002/serverURL")
    const [modalShow, setModalShow] = useState(false)
    const [storeInfo, setStoreInfo] = useState(null)
    const [rating, setRating] = useState(null)
    const [goods, setGoods] = useState(null)
    const [goodinfo, setGoodinfo] = useState(null)
    const [commit, setCommit] = useState(null)

    
    // 取得目前url位置
    const location = useLocation()
    const currentUrl = location.pathname;
    const parts = currentUrl.split('/')[2]
    // 取得店家資料 
    const getDataFromBack = () =>{
        const action = '/store_sch/id/'
        Axios().get(action, {params:{sid:parts}})
        .then((res)=>{
            setStoreInfo(res.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    // 取得店家rating
    const getRatingFromBack = () =>{
        const action = '/store_sch/score/'
        Axios().get(action, {params:{sid:parts}})
        .then((res)=>{
            setRating(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    // 取得產品資料
    const getGoodsFromBack = () =>{
        const action = '/Goods/store/'
        Axios().get(action, {params:{sid:parts}})
        .then((res)=>{
            setGoods(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    // 取得商家評論資料
    const getCommitFromBack = () =>{
        const action = 'Evaluate/store/'
        Axios().get(action, {params:{sid:parts}})
        .then((res)=>{
            setCommit(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    // 點擊查看後會再將該商品資訊傳至Ｍeal
    const goodsInfoToMeal = (item) =>{
        setModalShow(true)
        setGoodinfo(item)
    }

    useEffect(()=>{
        getDataFromBack()
        getGoodsFromBack()
        getCommitFromBack()
        getRatingFromBack()
    },[])
    useEffect(() => {
        if (serverURL && serverURL.length > 0) {
          const firstServerURL = serverURL[0].serverurl
          setServerUrl(firstServerURL)
        }
      }, [serverURL])


  return (
    <>
    <KanBan/>
    <div className='store'>
        <Container fluid>
            {storeInfo &&
            storeInfo.map((item)=>(
                <Row key={item.sid}>
                    <Col>
                        <Image rounded fulid src={`${serverUrl}${item.pic}`} alt={item.name} className='store-img'/>
                    </Col>
                    <Col>
                        <h1>{item.name}</h1>
                        <Container>
                            {rating &&
                                <Rating name="read-only" value={rating['rating']} readOnly size='large'/>
                            }
                            
                        </Container>
                        <Container>
                            <Link to={item.link_fb} className='store-link'><FaSquareFacebook size={30}/></Link>
                            <Link to={item.link_ig} className='store-link'><FaInstagram size={30}/></Link>
                        </Container>
                        <Container>
                            <p>{item.intro}</p>
                        </Container>
                    </Col>
                </Row>
            ))
            }
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='mt-3 mb-5'>🍴本店餐點🍴</h2>
                    <Container fluid>
                        <Row xs={1} md={5} className="g-4">
                            {goods &&
                            goods.map((item)=>(
                                <Col key={item.gid}>
                                <Card className="food-card">
                                    <Card.Img variant="top" src={`${serverUrl}${item.food_pic}`} className='food-card-img'/>
                                    <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Subtitle>剩餘數量：{item.quantity}</Card.Subtitle>
                                    <Card.Text>
                                        <Space size={[0, 10]} wrap>
                                            <Tag color="red">{item.allergen}</Tag>
                                        </Space>
                                        <br/>
                                        ${item.price}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => goodsInfoToMeal(item)}>查看</Button>
                                    </Card.Body>
                                </Card>
                                </Col>
                            ))
                            }
                        </Row>
                        <Meal show={modalShow} goodinfo={goodinfo} onHide={() => setModalShow(false)}/>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>來自google評論</h2>
                    <p>這個ＡＰＩ需要＄，但我沒＄</p>
                </Col>
                <Col>
                    <h2>本平台評論</h2>
                    {commit && commit.map((item)=>(
                        <Comment id={item.evaid} name={item.name} star={item.star} explain={item.explain} date={item.date} />
                    ))}
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Store