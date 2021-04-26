import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import SignUp from './SignUp';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Container
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: '100vh' }}
                >
                    <div className="w-100" style={{ maxWidth: '400px' }}>
                        <Switch>
                            <Route path="/signup" component={SignUp} />
                        </Switch>
                    </div>
                </Container>
            </AuthProvider>
        </Router>
    );
}

export default App;
