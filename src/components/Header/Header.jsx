import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {user && <>
                    <span className='text-white'>{user.email}</span>
                    <button onClick={handleSignOut}>Sign Out</button>
                </>}
            </div>
        </nav>
    );
};

export default Header;