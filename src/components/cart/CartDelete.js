import React from 'react'
import { Button } from 'react-bootstrap'


/**
 * 廢棄中
 * @returns 
 */
function CartDelete() {
  const deleteHandler = () =>{
    console.log('delete')
  }
  
  return (
    <>
      <Button variant='outline-danger' onClick={()=>deleteHandler()}>刪除</Button>
    </>
  )
}

export default CartDelete