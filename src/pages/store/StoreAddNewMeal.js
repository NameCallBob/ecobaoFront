import React from 'react'
import StoreKanBan from '../../components/StoreKanBan'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'


/*** 
 * 商家新增產品頁面
 ***/
function StoreAddNewMeal() {
  const {data: allergen} = useFetch("http://localhost:8002/foodAllergen")

  return (
    <>
    <StoreKanBan/>
    <div className='store-add-new-product'>
    <Container fluid>
        <h1>新增產品</h1>
        <Row>
            <Col>
            <Form>
                <Form.Group className='mt-3'>
                    <Form.Label>輸入產品名：</Form.Label>
                    <Form.Control placeholder='產品名'/>
                </Form.Group>
                <Form.Group controlId="form-food-type" className="mt-3">
                    <Form.Label>選擇您的產品類型</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>選擇產品類型</option>
                    <option value="1">速食</option>
                    <option value="2">日式</option>
                    <option value="3">美式</option>
                    <option value="4">中式</option>
                    <option value="5">台式</option>
                    <option value="6">素食</option>
                    <option value="7">手搖飲</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>選擇產品數量</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>選擇剩食數量</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>輸入產品簡介：</Form.Label>
                    <Form.Control as="textarea" placeholder='產品簡介'/>
                </Form.Group>
                <Form.Group controlId="formFile" className="mt-3">
                    <Form.Label>放入您的產品實照</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>過敏原</Form.Label>
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
                </Form.Group>
                <div className="d-grid gap-2 mt-5">
                    <Button variant="outline-success" size="lg">
                        新增產品
                    </Button>
                </div>
            </Form>
            </Col>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default StoreAddNewMeal