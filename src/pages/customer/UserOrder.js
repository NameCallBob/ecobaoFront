import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Table } from 'antd';
import KanBan from '../../components/KanBan'
import Axios from '../../components/Axios';
import ReviewModal from '../../components/OrderReviewModal';

/**
 * 消費者訂單
 **/

function UserOrder() {
  const [dataSource, setDataSource] = useState(null)
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState('');

  console.log(dataSource)
  const handleReviewClick = (order) => {
    setSelectedOrder(order);
    setIsReviewModalVisible(true);
  };
  const handleReviewSubmit = () => {
    setIsReviewModalVisible(false);
  };
  
  const handleReviewCancel = () => {
    setIsReviewModalVisible(false);
  };
  const getOrder = () =>{
    Axios().get('/orderv/all/')
  .then((res)=>{
    let data = res.data
    setDataSource(data)
  })
  .catch((err)=>{
    console.log(err)
  })
  }
  
  const columns = [
    {
      title: '#',
      dataIndex: 'oid',
      key: 'oid',
    },
    {
      title: '店家',
      dataIndex: 'orderfoods',
      key: 'orderfoods',
      render: (orderfoods) => (
        <p>{orderfoods[0].store_name}</p>
      )
    },
    {
      title: '品名',
      dataIndex: 'orderfoods',
      key: 'orderfoods',
      render: (orderfoods) => (
        <>
          {orderfoods.map((item, index) => (
            <p key={index}>{item.goods_name}</p>
          ))}
        </>
      ),
    },
    {
      title: '價格',
      dataIndex: 'orderfoods',
      key: 'orderfoods',
      render: (orderfoods) => (
        <>
          {orderfoods.map((item, index) => (
            <p key={index}>{item.subtotal}</p>
          ))}
        </>
      )
    },
    {
      title: '數量',
      dataIndex: 'orderfoods',
      key: 'orderfoods',
      render: (orderfoods) => (
        <>
          {orderfoods.map((item, index) => (
            <p key={index}>{item.quantity}</p>
          ))}
        </>
      )
    },
    {
      title: '付款方式',
      dataIndex: 'orderpayments',
      key: 'orderpayments',
      render: (orderpayments) => (
        <span>{orderpayments[0].method}</span>
      )
    },
    {
      title: '總金額',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: '訂單狀態',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '評論',
      key: 'common',
      render: (order) => (
        <Button onClick={() => handleReviewClick(order)}>撰寫</Button>
      )
    },
  ];

  useEffect(()=>{
    getOrder()
  },[])

  return (
    <>
    <KanBan/>
    <div className='userOrder'>
    <Container fulid>
      <h1>我的訂單</h1>
      <div className='order-div'>
      {dataSource &&
      <Table dataSource={dataSource} columns={columns} />
      }
      </div>
    </Container>
    <ReviewModal
      visible={isReviewModalVisible}
      onOk={handleReviewSubmit}
      onCancel={handleReviewCancel}
      onRateChange={(value) => setReviewRating(value)}
      onCommentChange={(e) => setReviewComment(e.target.value)}
      orderId={dataSource && dataSource[0]?.oid}
    />
    </div>
    </>
  )
}

export default UserOrder