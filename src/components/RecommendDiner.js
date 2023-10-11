import React from 'react'
import useFetch from '../hooks/useFetch';
import { ListGroup } from 'react-bootstrap';

/** 
 * 推薦商家 
 * 目前取消此功能QQ
 * 爛掉QQ
 **/
function RecommendDiner() {
    const {data: recommendGroup} = useFetch("http://localhost:8002/recommendStore")
  return (
    <>
        <h4>推薦店家</h4>
        <ListGroup>
            {recommendGroup &&
            recommendGroup.map((store)=>(
                <ListGroup.Item action href="" variant="light" key={store.id}>{store.name}</ListGroup.Item>
            ))
            }
        </ListGroup>
    </>
  )
}

export default RecommendDiner