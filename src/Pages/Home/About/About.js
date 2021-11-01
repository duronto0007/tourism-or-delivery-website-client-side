import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div id="about" className="about-section">
            <div>
            <Card className="our-values" border="light" style={{ width: '18rem' }}>
                
                <Card.Body>
                <Card.Title>Our Values</Card.Title>
                <Card.Text className="text">
                Since our foundation, Skyline has been the leading tour agency in Portugal, offering top-quality services. We take great pride in our diverse portfolio of tours in Portugal. We also offer high quality tours and experiences.
                </Card.Text>
                </Card.Body>
                <Button>READ MORE</Button>
            </Card>
            </div>
            <div>
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Destinations</Card.Title>

              <p className="progress">Lisbon</p>
                <hr className="pro-1"/>
                <p className="progress">Sintra</p>
                <hr className="pro-2"/>
                <p className="progress">Oporto</p>
                <hr className="pro-3"/>
                <p className="progress">Évora</p>
                <hr className="pro-4"/>
                <p className="progress">Óbidos</p>
                <hr className="pro-5"/>
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card border="light" style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>Partners</Card.Title>
                    <div className="brand-logo">
                    <Card.Img className="logo-savg" variant="top" src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" />
                    <Card.Img className="logo-savg" variant="top" src="https://www.logo.wine/a/logo/Plaid_(company)/Plaid_(company)-Logo.wine.svg" />
                    <Card.Img className="logo-savg mt-4 mr-3" variant="top" src="https://vectorlogoseek.com/wp-content/uploads/2019/09/the-we-company-vector-logo.jpg" />
                    <Card.Img className="logo-savg" variant="top" src="data:image/png;base64,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" />
                    </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default About;