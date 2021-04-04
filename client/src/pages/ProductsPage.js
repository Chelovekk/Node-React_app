import React, { useState } from 'react'
import {Container, Card, Button, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useHistory} from 'react-router-dom'


export default function ProductsPage(){

    const types = [
        {product:'odinarni', button:'Одинарные памятники'},
        {product:'dvoini', button:'Двойные памятники'},
        {product:'kompleks', button:'Комплексы'},
        {product:'plitka', button:'Плитка'},
        {product:'podokonniki', button:'Подоконники'},
        {product:'stoleshni', button:'Столешницы'},
        {product:'balyasini', button:'Балясины'}


    ]

    const history = useHistory()

    const pressHendler = async event => {
            history.push(`/pruducts/${event.target.name}`)
    }
    return(
        <Container fluid className="w-75">
            <Row className="justify-content-between" xs = {2} md={4}>
                {types.map((products)=>{
                    return(
                    <Col>
                        <Card >
                        <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1aCXIXoBCENNFfvp3iXnbIqGvpmwPN-8T" />
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Button variant="dark" name={products.product} onClick={pressHendler}>{products.button}</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
                
                </Row>
            </Container>
        /* <Container fluid className="w-100">
            <Row className="justify-content-between" xs = {2} md={6}>
                <Col>
                    <Card >
                    <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1aCXIXoBCENNFfvp3iXnbIqGvpmwPN-8T" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        
                        <Button variant="primary" name="balyasini" onClick={pressHendler}>Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                    <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1aCXIXoBCENNFfvp3iXnbIqGvpmwPN-8T" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        
                        <Button variant="primary" name="odinarni" onClick={pressHendler}>Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                    <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1aCXIXoBCENNFfvp3iXnbIqGvpmwPN-8T" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        
                        <Button variant="primary" name="odinarni" onClick={pressHendler}>Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                    <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1aCXIXoBCENNFfvp3iXnbIqGvpmwPN-8T" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        
                        <Button variant="primary" name="odinarni" onClick={pressHendler}>Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" name="dvoini" onClick={pressHendler}>Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container> */
    )
}