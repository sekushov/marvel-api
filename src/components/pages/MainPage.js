import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import {useState} from 'react';

function MainPage () {
    const [charInfoId, setCharInfoId] = useState(null);
  
    const setCharInfo = (charInfoId) => {
      setCharInfoId(charInfoId)
    }
    return (
        <>
            <RandomChar/>
            <div className="char__content">
                <CharList setCharInfo={setCharInfo}/>
                <CharInfo id={charInfoId}/>
            </div>
        </>
    )
}

export default MainPage