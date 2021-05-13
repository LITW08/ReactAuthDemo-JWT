import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { AuthContextComponent } from './AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SecretPage from './pages/Secret';
import PrivateRoute from './PrivateRoute';
import Logout from './pages/Logout';



const App = () => {
    return (
        <AuthContextComponent>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
                <PrivateRoute exact path='/secret' component={SecretPage} />
            </Layout>
        </AuthContextComponent>

    );
}

export default App;