import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default class UserLoginPage extends React.Component {
    render() {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                        <FontAwesomeIcon icon={ faSignInAlt } /> User Login
                        </Card.Title>
                        <Card.Text>
                            Formural ce biti ovde ...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}
