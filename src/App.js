import React, {useState} from 'react';

import './App.css';
import {MainScreen} from "./containers/MainScreen";
import {Description} from "./containers/Description";
import {Profit} from "./containers/Profit";
import {Licenses} from "./containers/Licenses";
import {GetBot} from "./containers/GetBot";
import Header from "./components/Header";

function App() {
	const [lang, setLang] = useState('EN');

    return (
        <div className="root">
            <Header lang={lang} onChange={(lang) => setLang(lang)}/>
            <div className='main'>
                <MainScreen lang={lang}/>
                <Description lang={lang}/>
                <Profit lang={lang}/>
                <Licenses lang={lang}/>
                <GetBot lang={lang}/>
            </div>
        </div>
    );
}

export default App;
