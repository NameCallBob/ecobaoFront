import React from 'react'
import { Container, Row, Col, Form, Image, Button } from 'react-bootstrap'
import useFetch from '../../../hooks/useFetch'


/*** 
 * 使用者的個人頁面-過敏原管理
 ***/
function MyAllergen() {
  const {data: allergen} = useFetch("http://localhost:8002/foodAllergen")

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
                        />
                    ))
                    }
                    <Button variant="primary" type="submit">
                        儲存
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default MyAllergen