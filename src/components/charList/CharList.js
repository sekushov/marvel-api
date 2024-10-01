import { useState, useEffect } from "react";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../error/Error';
import useMarvelService from "../../services/MarvelService";
import PropTypes from 'prop-types';

import './charList.scss';


const CharList = (props) => {
    const {loading, error, getAllCharacters} = useMarvelService();

    const [newItemLoading, setNewItemLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [charsEnded, setCharsEnded] = useState(false);
    // const [error, setError] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect (() => {
        onRequest(false)
    }, [])

    const onCharsLoaded = (newCharacters) => {
        let charsEnded = false;
        if (newCharacters.length < 9) charsEnded = true
        setCharacters(characters => [...characters, ...newCharacters]);
        // setLoading(false);
        setNewItemLoading(false);
        setCharsEnded(charsEnded);
    }

    // const onError = () => {
    //     setLoading(false);
    //     setError(true);
    // }

    const onRequest = (isNotFirst) => {
        setNewItemLoading(isNotFirst)
        getAllCharacters(offset)
            .then(onCharsLoaded)
            // .catch(onError);
        setOffset(offset => offset + 9);
    }

    const onCharInfo = (id) => {
        props.setCharInfo(id);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = (loading && !newItemLoading) ? <Spinner/> : null;
    const content = !(error) ? <View characters={characters} onCharInfo={onCharInfo}/> : null;
    const button = (content) 
        ? <button 
            className="button button__main button__long" 
            onClick={() => onRequest(true)}
            disabled={newItemLoading}
            style={{'display': charsEnded ? 'none' : 'block'}}>
                <div className="inner">Показать больше</div>
        </button>
        : null;


    return (
        <div className="char-list">
            {content}
            {spinner}
            {errorMessage}
            {button}
        </div>
    )
}

const View = (props) => {

    const charItem = () => {
        return props.characters.map(item => {
            const {id, name, thumbnail} = item;
            let imgStyle = {'objectFit' : 'cover'};
            if (thumbnail === 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'contain'};
            }
            return(
                <li className="char__item" 
                    key={id}
                    onClick={(e) => {
                        props.onCharInfo(id);
                        if (document.querySelector('.char__item_selected')) document.querySelector('.char__item_selected').classList.remove('char__item_selected');
                        e.currentTarget.classList.add("char__item_selected");
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            props.onCharInfo(id);
                            if (document.querySelector('.char__item_selected')) document.querySelector('.char__item_selected').classList.remove('char__item_selected');
                            e.currentTarget.classList.add("char__item_selected");
                        }
                    }}
                    role="button"
                    tabIndex="0">
                    <img src={thumbnail} alt={name} style={imgStyle}/>
                    <div className="char__name">{name}</div>
                </li>
            )
        })
    }
    return (
        <ul className="char__grid">
            {charItem()}
        </ul>
    )
}

CharList.propTypes = {
    setCharInfo: PropTypes.func
}

export default CharList;