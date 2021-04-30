import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [error, serError] = useState('');
    const [loading, serLoading] = useState(false);

    const { signup, currentUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return serError('Password do not match');
        }

        try {
            serError('');
            serLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            serError('Failed to Create an Account');
        }

        serLoading(false);
    };

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {currentUser.email}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                                placeholder="Enter Password"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Password Confirmation: </Form.Label>
                            <Form.Control
                                type="password"
                                ref={confirmPasswordRef}
                                placeholder="Enter Password Agin"
                                required
                            />
                        </Form.Group>
                        <Button
                            disabled={loading}
                            type="submit"
                            className="w-100"
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="text-center w-100 mt-2">
                Already have an account? Log In
            </div>
        </div>
    );
};

export default SignUp;
