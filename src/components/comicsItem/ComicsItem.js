import './comicsItem.scss';

function ComicsItem({link, src, alt, name, price}) {
    return (
        <li className="comics__item">
            <a href={link}>
                <img src={src} alt={alt} className="comics__item-img"/>
                <div className="comics__item-name">{name}</div>
                <div className="comics__item-price">{price}</div>
            </a>
        </li>
    )
}

export default ComicsItem;