import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Rockets = () => {
    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/dragons')
            .then(response => response.json())
            .then(data => setDragons(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="container" style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' ,width: '100%'}}>
            <h1>SpaceX Dragons</h1>
            {dragons.map(dragon => (
                <Card key={dragon.id} style={{ width: '70%', marginBottom: '20px' }}>
                    <Card.Body>
                        <Card.Title>{dragon.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{dragon.type}</Card.Subtitle>
                        <Card.Text>
                            {dragon.description}
                            <br />
                            <a href={dragon.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</a>
                        </Card.Text>
                    </Card.Body>
                    <Carousel>
                        {dragon.flickr_images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt={`${dragon.name} slide ${index + 1}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Card>
            ))}
        </div>
    );
};

export default Rockets;
