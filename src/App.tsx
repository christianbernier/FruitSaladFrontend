import React, {FC} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HomePage} from "./pages/home.page";
import {PlayPage} from "./pages/play.page";
import {PlaygroundPage} from "./pages/playground.page";

import './styles/index.css'
import './styles/play-page.css'
import './styles/card.css'
import './styles/player.css'
import './styles/button.css'

export const App: FC = () =>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/play/:roomUid' element={<PlayPage/>} />
        <Route path='/playground' element={<PlaygroundPage/>} />
      </Routes>
    </Router>