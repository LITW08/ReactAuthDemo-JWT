import React, { useState, useEffect } from 'react';
import getAxios from '../AuthAxios';
import {useAuthContext} from '../AuthContext';

const SecretPage = () => {
    const [randomNumber, setRandomNumber] = useState('');
    const { user } = useAuthContext();

    useEffect(() => {
        const getRandomNumber = async () => {
            const { data } = await getAxios().get('/api/secretdata/get');
            setRandomNumber(data.randomNumber);
        }

        getRandomNumber();
    }, []);

    return (
        <>
            <h1>Welcome {user.firstName} {user.lastName} to the secret page that only logged in users can see!</h1>
            {randomNumber && <h3>The random number is: {randomNumber}</h3>}
        </>
    )
}


export default SecretPage;
