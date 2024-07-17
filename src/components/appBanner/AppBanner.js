import './appBanner.scss';

function AppBanner() {
    return (
        <div className="app__banner">
            <img src="img/Avengers.png" alt="Avengers"/>
            <div className="app__banner-text">
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src="img/Avengers_logo.png" alt="Avengers logo"/>
        </div>
    )
}

export default AppBanner;