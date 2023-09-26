import './Menu.css';
import {Link} from 'react-router-dom'

const Menu = props => (
    <>
    <aside className='Menu'>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/param/analaura">Parâmetros01</Link></li>
                <li><Link to="/param/0410">Parâmetros02</Link></li>
                <li><Link to="/cep">Listagem Cep</Link></li>
            </ul>
        </nav>
    </aside>
    </>
)
export default Menu;