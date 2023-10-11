import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function CartCounter() {
    const [amount, setAmount] = useState(0)
    const amountHandler = (type) =>{
        if(type === 'plus'){
            setAmount((amount) => amount+1)
        }else{
            setAmount((amount) => amount-1)
        }
    }
  return (
    <>
        {amount === 0 ?
        <Button variant="outline-dark" disabled onClick={()=>amountHandler('minus')}>-</Button>
        :
        <Button variant="outline-dark" onClick={()=>amountHandler('minus')}>-</Button>
        }
        <span style={{margin: "3%"}}>{amount}</span>
        <Button variant="outline-dark" onClick={()=>amountHandler('plus')}>+</Button>
    </>
  )
}

export default CartCounter