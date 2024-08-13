import './appHeader.scss';

function AppHeader() {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="./#">
                    <span>Marvel </span>
                    Информационный ресурс
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="./#">Персонажи</a></li>
                    /
                    <li><a href="./#">Комиксы</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default AppHeader;