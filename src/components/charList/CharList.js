import { Component } from "react";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../error/Error';
import MarvelService from "../../services/MarvelService";
import PropTypes from 'prop-types';

import './charList.scss';

class CharList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
            error: false,
            newItemLoading: false,
            offset: 10,
            charsEnded: false
        }
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onCharsLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharsLoaded = (newCharacters) => {
        let charsEnded = false;
        if (newCharacters.length < 9) charsEnded = true
        
        this.setState(({characters}) => ({
            characters: [...characters, ...newCharacters], 
            loading: false,
            newItemLoading: false,
            charsEnded
        }))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onRequest = (offset) => {
        this.onCharsLoading();
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharsLoaded)
            .catch(this.onError);
        this.setState(({offset}) => ({
            offset: offset + 9
        }))
    }
    
    onCharInfo = (id) => {
        this.props.setCharInfo(id);
        if (document.querySelector('.char__item_selected')) document.querySelector('.char__item_selected').classList.remove('char__item_selected');
    }
    
    render() {

        const {characters, loading, error, offset, newItemLoading, charsEnded} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View characters={characters} onCharInfo={this.onCharInfo}/> : null;
        const button = (content) 
            ? <button 
                className="button button__main button__long" 
                onClick={() => this.onRequest(offset)}
                disabled={newItemLoading}
                style={{'display': charsEnded ? 'none' : 'block'}}>
                    <div className="inner">Показать больше</div>
            </button>
            : null;

        return(
            <div className="char-list">
                {errorMessage}
                {spinner}
                {content}
                {button}
            </div>
        )
    }
}

class View extends Component {

    charItem = () => {
        return this.props.characters.map(item => {
            const {id, name, thumbnail} = item;
            let imgStyle = {'objectFit' : 'cover'};
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'contain'};
            }
            return(
                <li className="char__item" 
                    key={id}
                    onClick={(e) => {
                        this.props.onCharInfo(id);
                        e.currentTarget.classList.add("char__item_selected");
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            this.props.onCharInfo(id);
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
    render() {
        return (
            <ul className="char__grid">
                {this.charItem()}
            </ul>
        )
    }
}

CharList.propTypes = {
    setCharInfo: PropTypes.func
}

export default CharList;