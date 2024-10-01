import { useState, useEffect } from "react";
import Skeleton from "../skeleton/Skeleton";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../error/Error";
import Spinner from "../spinner/Spinner";
import PropTypes from 'prop-types';

import './charInfo.scss';

const CharInfo = (props) => {

    const {loading, error, clearError, getCharacter} = useMarvelService();
    
    const [char, setChar] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    // componentDidUpdate(prevProps) {
    //     if (this.props.id !== prevProps.id) this.updateChar(this.props.id); 
    // }
    useEffect(() => {
        updateChar(props.id); 
    }, [props.id])

    const onCharLoaded = (char) => {
        setChar(char);
        // setLoading(false);
    }

    // const onCharLoading = () => {
    //     setLoading(true)
    // }

    // const onError = () => {
    //     setLoading(false);
    //     setError(true);
    // }

    const updateChar = (id) => {
        clearError();
        if (!id) return;
        // onCharLoading();
        getCharacter(id)
            .then(onCharLoaded)
            // .catch(onError);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const skeleton = !(loading || error || char) ? <Skeleton/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <div className="char__info">
            {errorMessage}
            {spinner}
            {skeleton}
            {content}
        </div>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit' : 'contain'};
        }
    return(
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a /* href={homepage} */ className="button button__main">
                            <div className="inner">К персонажу</div>
                        </a>
                        <a /* href={wiki} */ className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>

            <div className="char__comics">Комиксы:</div>
            <ul className="char__comics-list">
                    {comics.length === 0 ? "Нет комиксов с этим персонажем" : null}
                    {comics.map((item, i) => {
                        if (i > 8) return null;
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })}
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    id: PropTypes.number
}

export default CharInfo;