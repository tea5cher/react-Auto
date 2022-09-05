import './header.scss'
import { Outlet, Link } from 'react-router-dom'

import logoIcon from './Logo.png'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className='logo'>
                    <img className='logo__img' src={logoIcon}></img>
                </div>
                <Link className='button-on-main' to='/'>На главную</Link>
            </header>
            <Outlet/>
        </>
        
    )
}


export default Header