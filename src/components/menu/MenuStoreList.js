import React, { useEffect, useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


function MenuStoreList({object}) {
  const [sid, setSid] = useState(null)
  const [name, setName] = useState(null)
  const [intro, setIntro] = useState(null)
  const [pic, setPic] = useState(null)
  // url
  const [serverUrl, setServerUrl] = useState(null)
  const { data: serverURL } = useFetch("http://localhost:8002/serverURL")
  // url
  useEffect(() => {
    if (serverURL && serverURL.length > 0) {
      const firstServerURL = serverURL[0].serverurl
      setServerUrl(firstServerURL)
    }
  }, [serverURL])

  useEffect(()=>{
    setSid(object.sid)
    setName(object.name)
    setIntro(object.intro)
    setPic(object.pic)
  },[sid])
  
  return (
    <Col>
        <Link to={`/store/${sid}`} className='menu-link-to-store'>
            <Card className='menu-store-list'>
                <Card.Img variant="top" src={`${serverUrl}${pic}`} />
                <Card.Body>
                  <Card.Title className='menu-card-title'>{name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{intro}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Link>
    </Col>
  )
}

export default MenuStoreList