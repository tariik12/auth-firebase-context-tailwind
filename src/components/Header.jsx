import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOUt =() =>{
        logOut()
        .then(() =>{})
        .catch(error =>console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Auth Context</a>
            <Link className="btn btn-ghost normal-case text-xl"  to='/' >Home</Link>
            <Link className="btn btn-ghost normal-case text-xl"  to='/order' >Order</Link>
            {user &&
            <Link className="btn btn-ghost normal-case text-xl"  to='/profile' >Orders</Link>

            }
            <Link className="btn btn-ghost normal-case text-xl" to='/login' >Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register' >Register</Link>
            {
                user? <>{user.email}
                <button onClick={handleLogOUt} className="btn btn-warning ms-2">Sign out</button>
                </>
                :<Link to='/login'>Login</Link>
            }
            </div>

        </div>
    );
};

export default Header;