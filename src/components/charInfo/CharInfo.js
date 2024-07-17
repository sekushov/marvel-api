import { Component } from "react";
import Skeleton from "../skeleton/Skeleton";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../error/Error";
import Spinner from "../spinner/Spinner";
import PropTypes from 'prop-types';

import './charInfo.scss';

class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            char: null,
            loading: false,
            error: false
        }
    }

    marvelService = new MarvelService();
    
    componentDidMount() {
        this.updateChar(this.props.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) this.updateChar(this.props.id); 
    }

    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = (id) => {
        if (!this.props.id) return;
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state;
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
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>

            <div className="char__comics">Comics:</div>
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