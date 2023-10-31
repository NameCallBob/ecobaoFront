import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import Axios from '../components/Axios';

/**
 * getAllergenURL:從後端抓取 allergen，若無需則傳遞
 * putAllergenUrl:將修改後的allergen，存至後端
 */
function Allergen({getAllergenURL, putAllergenUrl}) {
    const { data: allergen } = useFetch("http://localhost:8002/foodAllergen");
    const [res_allergen, setResAllergen] = useState([]);
    const [defaultAllergen, setDefaultAllergen] = useState([]);
  
    // 從後端抓取 allergen
    useEffect(() => {
      Axios().get(getAllergenURL)
        .then((res) => {
          let data = res.data;
          setDefaultAllergen(data.allergen);
        })
        .catch((err) => {
          console.log(err);
          alert('獲取數據錯誤');
        });
    }, []);
  
    // 將過敏原傳至後端
    const allergenToBack = () => {
      Axios().post(putAllergenUrl, JSON.stringify({
        allergen: res_allergen,
      }))
        .then((res) => {
          alert('修改成功');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    // 更改 allergen 狀態
    const handleAllergenChange = (id) => {
      const updatedAllergen = [...res_allergen];
      const index = updatedAllergen.indexOf(id);
  
      if (index !== -1) {
        updatedAllergen.splice(index, 1);
      } else {
        updatedAllergen.push(id);
      }
  
      setResAllergen(updatedAllergen);
    }

  return (
        <Form>
        {allergen &&
            allergen.map((item) => (
            <Form.Check
                type="switch"
                key={item.id}
                id={item.id}
                label={item.label}
                value={item.id}
                checked={defaultAllergen.includes(item.id) || res_allergen.includes(item.id)}
                onChange={() => handleAllergenChange(item.id)}
            />
            ))
        }
        <Button variant="primary" type="button" onClick={()=>allergenToBack()}>
            儲存
        </Button>
        </Form>
  )
}

export default Allergen