/*import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Login/Register.jsx';
function App() {
  return (
    <Router>
    <div className='App'>
      
          <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          </Routes>
          </div>
      </Router>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Romance from './Components/Romance/Romance';
import Horror from './Components/Horror/Horror';
import GenrePage from './Components/Genree/GenrePage';
import Fantasy from './Components/Fantasy/Fantasy';
import Mystery from './Components/Mystery/Mystery';
import GreekMythology from './Components/GreekMythology/GreekMythology'
import Adventure from './Components/Adventure/Adventure';
import SciFi from './Components/SciFi/SciFi';
import HistoricalFiction from './Components/Historical/HistoricalFiction';
import Poetry from './Components/Poetry/Poetry';
import Children from './Components/Children/Children';
import NonFiction from './Components/NonFiction/NonFiction';
import GraphicNovels from './Components/Graphic/Graphic';

import HomePage from './Components/Home/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/romance" element={<Romance />} />
          <Route path="/horror" element={<Horror/>}/>
          <Route path="/genres" element={<GenrePage />} />
          <Route path="/fantasy" element={<Fantasy/>}/>
          <Route path="/mystery" element={<Mystery/>}/>
          <Route path="/greek-mythology" element={<GreekMythology/>}/>
          <Route path="/adventure" element={<Adventure/>}/>
          <Route path="/sci-fi" element={<SciFi/>}/>

          <Route path="/historical-fiction" element={<HistoricalFiction/>}/>
          <Route path="/poetry" element={<Poetry/>}/>

          <Route path="/children-books-" element={<Children/>}/>
          <Route path="/non-fiction" element={<NonFiction/>}/>
          <Route path="/graphic-novels" element={<GraphicNovels/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

