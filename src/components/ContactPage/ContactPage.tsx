import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default class ContactPage extends React.Component {
    render() {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                        <FontAwesomeIcon icon={ faPhone } /> Contact details
                        </Card.Title>
                        <Card.Text>
                            Radno Vreme: Pon-Ned - 10:00 - 22:00 <br />
                            Adresa: Knjazevacka 36, 18000 Nis <br />
                            email: mladenvts@gmail.com <br />
                            Telefon: 018 156488
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
          );
    }
}
