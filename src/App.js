import './Styles/App.css';
import './Styles/reset.css';

import React from 'react';
import CritereComponent from './Components/Critere';

function App() {


    return (
        <div className="App">
            <CritereComponent className = "critere"Titre="Le fonctionnement" id="critère1" />
            <CritereComponent className = "critere" Titre="Le design" id="critère2" />
            <CritereComponent className = "critere" Titre="Le fils de pute" id="ceritueyr" />
            <CritereComponent className = "critere" Titre="Le fils de opjpo" id="cerororo" />
            <CritereComponent className = "critere" Titre="Le fils hue opjpo" id="pje" />
            <CritereComponent className = "critere" Titre="Le kjbjbe hue opjpo" id="rpje" />

            <CritereComponent className = "critere" Titre="La note finale" id="critère3"  />
        </div>
    );
}

export default App;


