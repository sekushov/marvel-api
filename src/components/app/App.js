import {MainPage, ComicsPage, Page404} from "../pages";
import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <main>
          <Routes>
            <Route path="/marvel-api/build/" element={<MainPage />} />
            <Route path="/marvel-api/build/comics" element={<ComicsPage />} />
            <Route path="/marvel-api/build/*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
