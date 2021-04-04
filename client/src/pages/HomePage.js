import {React, useCallback, useEffect, useState} from 'react'

import { Carousel, Container, Row, Col, Image} from 'react-bootstrap'
import useHttp from '../hooks/http.hook'
import Loader from '../components/Loader'
import HomePhotos from '../components/HomePhotos'
import LightPhotos from '../components/LightPhotos'




export default function HomePage() {
  const {request, loading} = useHttp()
  const[images,setImages] = useState([])
  const getLight = useCallback(async () => {
        try {
          const fetched = await request(`/api/razr/lightbox`, 'GET', null,{
            tip:'LightHome'
          })
          setImages(fetched)
          
        } catch (e) {}
      }, [request])
    
      useEffect(() => {
        getLight()
      }, [getLight])

  
  // /
    const [drives, setDrives] = useState('')


    const getPhoto = useCallback(async () => {
        try {
          const fetched = await request(`/api/razr/photo`, 'GET', null,{
            tip:'Dvoini'
          })
          
          setDrives(fetched)
          
        } catch (e) {}
      }, [request])
    
      useEffect(() => {
        getPhoto()
      }, [getPhoto])

    if (loading) {
    return <Loader />
  }
    return (
      
    <div className="container-fluid mt-5 w-75 ">
      {/* <button onClick={setIsOpen}>frfr</button> */}
    {!loading && <LightPhotos images={images}/>}
      
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://drive.google.com/uc?export=view&id=1g3kKVyZ_IH9h6EQEiUc2vOkzYpvch0It"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://drive.google.com/uc?export=view&id=1xTQJZE_8AD0zchXgqLSU56gmNXsbD1tP"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://drive.google.com/uc?export=view&id=1X2bnygsZFF7Kn83p90YYKRi27sViNR7Z"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel> 
    {!loading && <HomePhotos drives={drives}/>}
    </div>
  )
}
