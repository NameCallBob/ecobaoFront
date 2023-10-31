import React, { useEffect, useState } from 'react';
import KanBan from '../../components/KanBan';
import { Button, Container } from 'react-bootstrap';
import { message, Steps, Modal } from 'antd';
import Bill from '../../components/bill/Bill';
import Pay from '../../components/bill/Pay';
import Almost from '../../components/bill/Almost';
import Axios from '../../components/Axios';
import { ExclamationCircleFilled } from '@ant-design/icons';

function CheckOutPage() {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(null);
  const [payment, setPayment] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  console.log(data)

  const getToBack = () => {
    Axios()
      .get('/cart/get/')
      .then((res) => {
        if (res.status === 200) {
          let data = res.data;
          setData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const submitHandler = () =>{
    const cartIds = data.map(item => item.cart_id);
    console.log(cartIds)
    Axios().post('/order/add/', JSON.stringify({
      cart_list : cartIds,
      payment_method: payment,
    }))
    .then(response => {
      if (response.status === 200) {
        message.success('訂單已送出！');
        
      } else {
        message.error('送出訂單失敗');
      }
    })
    .catch(error => {
      console.error('送出訂單失敗', error);
    });
  }

  const steps = [
    {
      title: '確認訂單',
      content: <Bill data={data} />,
    },
    {
      title: '支付方式',
      content: <Pay setPayment={setPayment} />,
    },
    {
      title: '確認完成',
      content: <Almost data={data} payment={payment} />,
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const nextClick = () => {
    setCurrent(current + 1);
  };
  const prevClick = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    getToBack();
  }, []);

  return (
    <>
      <KanBan />
      <div className='checkout-page'>
        <Container fulid>
          <h1>結帳</h1>
          <div className='checkout-steps'>
            <Steps current={current} items={items} />
          </div>
          <div className='checkout-content'>
            {steps[current].content}
          </div>
          <div>
            {current < steps.length - 1 && (
              <Button type='primary' onClick={() => nextClick()}>
                下一步
              </Button>
            )}
            {current === steps.length - 1 && (
              <>
                <Button type='primary' onClick={() => setOpenModal(true)}>
                  確認送出訂單！
                </Button>
                <Modal
                  title={<><ExclamationCircleFilled /> 確認送出</>}
                  centered
                  open={openModal}
                  onOk={() => submitHandler()}
                  onCancel={() => setOpenModal(false)}
                  width={500}
                >
                  <p>確認要送出訂單嗎？送出後即無法更改</p>
                </Modal>
              </>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prevClick()}>
                上一步
              </Button>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default CheckOutPage;
