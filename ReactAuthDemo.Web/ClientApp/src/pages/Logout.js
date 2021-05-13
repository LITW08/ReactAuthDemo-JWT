import React, { useEffect } from 'react';
import { useAuthContext } from '../AuthContext';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const { logout } = useAuthContext();
    const history = useHistory();

    useEffect(() => {
        const doLogout = async () => {
            logout();
            history.push('/');
        }
        doLogout();
    }, []);

    return (<></>);
}
export default Logout;