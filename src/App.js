

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import PasswordReset from './Components/Login/PasswordReset';
import Romance from './Components/Romance/Romance';
import Horror from './Components/Horror/Horror';
import GenrePage from './Components/Genree/GenrePage'; // Correct path
import Fantasy from './Components/Fantasy/Fantasy';
import Mystery from './Components/Mystery/Mystery';
import GreekMythology from './Components/GreekMythology/GreekMythology';
import Adventure from './Components/Adventure/Adventure';
import SciFi from './Components/SciFi/SciFi';
import HistoricalFiction from './Components/Historical/HistoricalFiction';
import Poetry from './Components/Poetry/Poetry';
import Children from './Components/Children/Children';
import NonFiction from './Components/NonFiction/NonFiction';
import GraphicNovels from './Components/Graphic/Graphic';
import PrivateRoute from './Components/PrivateRoute'; // Import PrivateRoute
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
    return (
        
        <Router>
            <div className='App'>
                <Routes>
                    {/* Default Route */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs/>}/>
                    {/* Auth Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/password-reset" element={<PasswordReset />} />

                    {/* Main Content Routes */}
                    <Route path="/romance" element={<Romance />} />
                    <Route path="/horror" element={<Horror />} />
                    <Route path="/fantasy" element={<Fantasy />} />
                    <Route path="/mystery" element={<Mystery />} />
                    <Route path="/greek-mythology" element={<GreekMythology />} />
                    <Route path="/adventure" element={<Adventure />} />
                    <Route path="/sci-fi" element={<SciFi />} />
                    <Route path="/historical-fiction" element={<HistoricalFiction />} />
                    <Route path="/poetry" element={<Poetry />} />
                    <Route path="/children-books-" element={<Children />} />
                    <Route path="/non-fiction" element={<NonFiction />} />
                    <Route path="/graphic-novels" element={<GraphicNovels />} />
                    

                    {/* Protected Routes */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/genres" element={<GenrePage />} />
                        
                    </Route>
                </Routes>
            </div>
        </Router>
        
    );
}

export default App;