import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className='navbar'>
            <div className='navbar-conteudo'>
                {/*logo/titulo*/}
                <Link to= '/' className='navbar-logo'>renda fixa</Link>

                {/* navegação */}
                <nav className='navbar-links'>
                <Link to='/' className='navbar-link'>calculadora</Link>
                <Link to='/sobre' className='navbar-link'>sobre</Link>
                </nav>
            </div>
        </header>
    )
}