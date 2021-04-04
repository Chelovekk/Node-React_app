import {React, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image} from 'react-bootstrap'
import Lightbox from 'react-spring-lightbox';



export default function LightPhotos({images}){

    var photo=[];
    for(let i=0;i<53;i++){
        photo.push({src:`../images/imgForLight/${i}.JPG`, number:i})
        // photo[i].number = i
    }
    photo.shift()
    console.log(photo)
    
    const [currentImageIndex, setCurrentIndex] = useState(0);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
    
    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);
    const [isopen,setIsOpen] = useState(false)
    const handleClose = () =>{
      setIsOpen(false)
  
    if(!images.length){
        console.log(images)
        return <p className="center">Enougth</p>
    }
    
    }
    return(     
        
        <Container>
            <Lightbox
                isOpen={isopen}
                onClose={handleClose}
                onPrev={gotoPrevious}
                onNext={gotoNext}
                images={photo}
                currentIndex={currentImageIndex}
            />
        <Row  xs = {2}md={3} className="mt-5 justify-content-center" >
            {photo.map((drive)=>{
                return(
            <Col>
                <Image src={drive.src} number={drive.number} onClick={()=>{setCurrentIndex(drive.number);setIsOpen(true)}}  thumbnail/>
            </Col>
                )
            })}
        </Row>
        </Container>
        // <p>frfe</p>
    )
}