import React from 'react'
import { Container } from 'react-bootstrap'
import { Space, Table, Tag } from 'antd';
import KanBan from '../../components/KanBan'
import useFetch from '../../hooks/useFetch'

/**
 * 消費者訂單
 **/
function UserOrder() {
  // columns: table-thead
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
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
      title: '價格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '數量',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '訂單狀態',
      dataIndex: 'isFinished',
      key: 'isFinished',
    }
  ];
  const {data: dataSource} = useFetch("http://localhost:8002/userOrderdataSource")

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
    </div>
    </>
  )
}

export default UserOrder