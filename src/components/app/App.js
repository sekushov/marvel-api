import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

class App extends Component {
  state = {
    charInfoId: null
  }

  setCharInfo = (charInfoId) => {
    this.setState({charInfoId})
  }

  render() {
    return (
      <div className="app">
        <AppHeader/>
        <main>
          <RandomChar/>
          <div className="char__content">
              <CharList setCharInfo={this.setCharInfo}/>
              <CharInfo id={this.state.charInfoId}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
