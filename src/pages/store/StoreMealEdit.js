import React, { useEffect, useState } from 'react'
import { Modal, Button, Form, Container, Row, Col, Image } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'
//
import logo from '../../img/logo.png'

/*** 
 * 商家編輯餐點的彈出視窗
 ***/
function StoreMealEdit(props) {
  const {data: allergen} = useFetch("http://localhost:8002/foodAllergen")
    const [piece, setPiece] = useState(0);
    const pieceHandler = (type) =>{
        if(type === 'plus'){
            setPiece((piece) => piece + 1)
            console.log(piece)
        }else{
            setPiece((piece) => piece - 1)
            console.log(piece)
        }
    }
    useEffect(()=>{
        console.log(piece)
    },[piece])

    // useEffect(
    //     console.log(piece)
    //     ,[piece]
    //     )

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    店名
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Image src={logo} alt={logo}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>產品名稱</h4>
                                <Form>
                                    <Form.Group>
                                        <Form.Label><h5>過敏原</h5></Form.Label>
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
                                    <Form.Group>
                                        <Form.Label><h5>產品數量</h5></Form.Label>
                                        <div>
                                            {piece === 0 ? <Button size="lg" onClick={() => pieceHandler('minus')} disabled>-</Button> : <Button size="lg" onClick={() => pieceHandler('minus')}>-</Button>}
                                            <Form.Label className='piece' name='pieceLabel'>{piece}</Form.Label>
                                            <Button size="lg" onClick={() => pieceHandler('plus')}>+</Button>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label><h5>產品簡介</h5></Form.Label>
                                        <Form.Control as="textarea" placeholder='填寫產品簡介'/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
    
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit'>儲存</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default StoreMealEdit