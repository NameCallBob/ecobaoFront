import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import useFetch from '../../../hooks/useFetch'
import Axios from '../../../components/Axios'


/*** 
 * 使用者的個人頁面-過敏原管理
 ***/
function MyAllergen() {
  const {data: allergen} = useFetch("http://localhost:8002/foodAllergen")
  const [res_allergen,setAllergen] = useState([])
  const [switchState, setSwitchState] = useState(false)

  // 從後端抓取allergen資料
  const [defaultAllergen, setDefaultAllergen] = useState(null)
  useEffect(()=>{
    Axios().get('member/account/')
    .then((res)=>{
      let data = res.data
      setDefaultAllergen(data.allergen)
      console.log(defaultAllergen)
    })
    .catch((err)=>{
      console.log(err)
      alert('取得資料錯誤')
    })
  },[defaultAllergen])


  // 將過敏原修改資料傳送至後端
  const allergenToBack = () =>{
    Axios().post('member/update_allergen/',JSON.stringify({
        allergen: res_allergen,
      }))
    .then((res)=>{
      alert('修改成功')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  // 更改allergen按鈕事件
  const handleAllergenChange=(e)=>{
    setAllergen([e, ...res_allergen])
    const newArr = res_allergen.filter(function(ele, pos){
        return res_allergen.indexOf(ele) === pos
    })
    console.log(newArr)
    setSwitchState(!switchState)         
 }


  return (
    <Container fulid className='myprofile'>
      <Row>
            <Col xs={1} md={1}>
                {/* <Image src={logo} alt={logo} roundedCircle className='profile-img'/> */}
            </Col>
            <Col xs={8} md={8}>
                <h2>過敏原管理</h2>
                <Form>
                  {/* 這邊過敏原只是先展示畫面，到時候還要再想怎麼做 */}
                    {allergen &&
                    allergen.map((item)=>(
                        <Form.Check
                            type="switch"
                            id={item.id}
                            label={item.label}
                            value={item.id}
                            // 從後端抓allergen，用value===value找出相同的，相同的添加屬性(checked)
                            onChange={(e)=>handleAllergenChange(e.target.value)}
                        />
                    ))
                    }
                    <Button variant="primary" type="submit" onClick={(e)=>(allergenToBack(e))} >
                        儲存
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default MyAllergen