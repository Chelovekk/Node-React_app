import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Image, Row} from 'react-bootstrap'

export default function Gallery({drives}){
    if(!drives.length){
        console.log(drives)
        
        return <p className="center">Enougth</p>
    }
    return(
        <Container>
        <Row  xs = {2}md={3} className="mt-5 justify-content-center" >
            {drives.map((drive)=>{
                return(
                    <Col className="mt-2" style={{width:'100%'}}>
                        <a href={drive.drive}>
                        <Image src={drive.drive} className="image" thumbnail  />
                        </a>
                        
                    </Col>
                )
            })}
        </Row>
        </Container>
        // <p>frfe</p>
    )
}