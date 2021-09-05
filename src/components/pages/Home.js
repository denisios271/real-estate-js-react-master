import React from 'react'
import house from '../images/house.jpg'
import { Jumbotron } from '../common/Jumbotron'
import { Container,Row , Col ,Card , Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from 'react';
import { array } from 'yargs';
import { useState } from 'react';


export default function Home(){
 const [apartments, setApartments] = useState([]);

    const commonStore = useSelector(state => state.CommonStore)

    const fetchLastFourAds = () => {  
        fetch(`${commonStore.basename}/apartment/last`
        ).then((response) => {
            return response.json()
        }).then(response => {
            if(response){
                if (response.status === 'success') {
                    setApartments(JSON.parse(
                        decodeURIComponent(
                            JSON.stringify(response.data)
                                .replace(/(%2E)/ig, "%20")
                        )))
                }
            }
        }).catch((error) => {
            throw error
        })
    }

    useEffect(() => {
        fetchLastFourAds();
    }, []);

     

    return(

        <>
             <img style={{'height':'500px'}}
                className="d-block w-100"
                src={house}
                alt="Main img"
            />

<Container style = {{paddingTop:'2rem',paddingBottom:'2rem'}}>
            <Row >
                {
                    apartments.map(apartment => {
                        return(
                    <Col>
                        <Card style = {{width :'14rem'}}>
                            <Card.Img variant="top" src = {house}/>
                            <Card.Body>
                                <Card.Title>{apartment.Title}</Card.Title>
                                    
                                <Button variants ="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                    })
                }
                
               
            </Row>
        </Container>
        <Jumbotron/>
        </>
    ) 

 
}