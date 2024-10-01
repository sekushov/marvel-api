import './comicsItem.scss';

function ComicsItem({item}) {
    const {thumbnail, title, price} = item;
    return (
        <li className="comics__item"
            onClick={(e) => {
                if (document.querySelector('.comics__item_selected')) document.querySelector('.comics__item_selected').classList.remove('comics__item_selected');
                e.currentTarget.classList.add("comics__item_selected");
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    if (document.querySelector('.comics__item_selected')) document.querySelector('.comics__item_selected').classList.remove('comics__item_selected');
                    e.currentTarget.classList.add("comics__item_selected");
                }
            }}
            role="button"
            tabIndex="0">
            <img src={thumbnail} alt={title}/>
            <div className="comics__name">{title}</div>
            <div className="comics__price">{price}</div>
        </li>
    )
}

export default ComicsItem;