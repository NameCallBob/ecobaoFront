import React, { useEffect, useState } from 'react'
import KanBan from '../../../components/KanBan'
import { Container, Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import Axios from '../../../components/Axios';

function ActivityPage() {
  const [data, setData] = useState(null)
  const location = useLocation();
  const currentUrl = location.pathname;
  const parts = currentUrl.split('/')[2]
  const getActivityPage = () =>{
    const action = '/news/one/'
    Axios().get(action, {params:{actid:parts}})
    .then((res)=>{
      return setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getActivityPage()
  },[])
  
  return (
    <div>
        <KanBan/>
        <div className='activity-item'>
          <Container fulid>
        {data &&
        data.map((item)=>(
          <div key={item.actid}>
            <h1>{item.title}</h1>
            <p className='activity-annotation'>{item.author} | {item.upload_date}</p>
            <hr />
            <Image rounded fulid className='activity-item-img' src={`https://dd38-61-216-112-120.ngrok-free.app${item.pic1}`}/>
            <Image rounded fulid className='activity-item-img' src={`https://dd38-61-216-112-120.ngrok-free.app${item.pic2}`}/>
            <p className='activity-item-p'>{item.content}</p>
          </div>
        ))
        }
          </Container>
        </div>
        
    </div>
  )
}

export default ActivityPage