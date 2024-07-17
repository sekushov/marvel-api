import ComicsItem from "../comicsItem/ComicsItem";

import './comicsList.scss';

function ComicsList() {
    return(
        <div className="comics__list">
            <ul className="comics__grid">
                <ComicsItem 
                    link="./#" src="img/UW.png" 
                    alt="ultimate war" 
                    name="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB"
                    price="9.99$"
                />
                {/* <li class="comics__item">
                    <a href="./#">
                        <img src="img/UW.png" alt="ultimate war" class="comics__item-img"/>
                        <div class="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div class="comics__item-price">9.99$</div>
                    </a>
                </li> */}
                <li className="comics__item">
                    <a href="./#">
                        <img src="img/x-men.png" alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="./#">
                        <img src="img/UW.png" alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="./#">
                        <img src="img/x-men.png" alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="./#">
                        <img src="img/UW.png" alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="./#">
                        <img src="img/x-men.png" alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="./#">
                        <img src="img/UW.png" alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="./#">
                        <img src="img/x-men.png" alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;