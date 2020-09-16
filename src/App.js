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
            <div className='top-bg'/>
            <Header lang={lang} onChange={(lang) => setLang(lang)}/>
            <div className='main'>
                <MainScreen lang={lang}/>
                <Description lang={lang}/>
                <Profit lang={lang}/>
                <Licenses lang={lang}/>
                <GetBot lang={lang}/>
            </div>
            <div className='bg-obj-triangle-top-right'/>
            <div className='bg-obj-triangle-top-left'/>
            <div className='bg-obj-triangle-bottom-left'/>
            <div className='bg-obj-triangle-bottom-right'/>
            <div className='bottom-bg'/>
        </div>
    );
}

export default App;
