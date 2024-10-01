import './appHeader.scss';
import {Link} from 'react-router-dom';

function AppHeader() {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="marvel-api/">
                    <span>Marvel </span>
                    Информационный ресурс
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><Link to="/marvel-api/build/">Персонажи</Link></li>
                    /
                    <li><Link to="/marvel-api/build/comics">Комиксы</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default AppHeader;