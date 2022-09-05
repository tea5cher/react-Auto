
import './App.css';
import MainPage from './pages/mainPage/MainPage';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import DetailPage from './pages/detailPage/DetailPage';
import Header from './components/header/Header';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Header/>}>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/:productId' element={<DetailPage/>}/>
          </Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
