import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
         <h1>This is Home Page{user && <span>{user.display}</span>}</h1>
        </div>
    );
};

export default Home;