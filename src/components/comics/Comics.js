import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../error/Error';
import ComicsItem from '../comicsItem/ComicsItem';

import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';

import './comics.scss';

const Comics = () => {
    const {loading, error, getAllComics} = useMarvelService();

    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comics, setComics] = useState([]);
    const [comicsEnded, setComicsEnded] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect (() => {
        onRequest(false)
    }, [])

    const onComicsLoaded = (newComics) => {
        let comicsEnded = false;
        if (newComics.length < 8) comicsEnded = true
        setComics(comics => [...comics, ...newComics]);
        setNewItemLoading(false);
        setComicsEnded(comicsEnded);
    }

    const onRequest = (isNotFirst) => {
        setNewItemLoading(isNotFirst)
        getAllComics(offset)
            .then(onComicsLoaded)
        setOffset(offset => offset + 8);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = (loading && !newItemLoading) ? <Spinner/> : null;
    const content = !(error) ? <View comics={comics}/> : null;
    const button = (content) 
        ? <button 
            className="button button__main button__long"
            onClick={() => onRequest(true)}
            disabled={newItemLoading}
            style={{'display': comicsEnded ? 'none' : 'block'}}>
                <div className="inner">Показать больше</div>
        </button>
        : null;

    return (
        <div className="comics-list">
            {content}
            {spinner}
            {errorMessage}
            {button}
        </div>
    )
}

const View = (props) => {
    const comicItem = () => {
        return props.comics.map((item, i) => {
            return(
                <ComicsItem item={item} key={item.id + i}/>
            )
        })
    }
    return (
        <ul className="comics__grid">
            {comicItem()}
        </ul>
    )
}

export default Comics