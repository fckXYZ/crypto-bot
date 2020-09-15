import React from "react";
import './index.css';
import robot from '../../assets/images/robot.png';
import {Tr} from '../../components/Tr';

export const MainScreen = (props) => {
	return (
		<div className="mainPage-wrapper">
			{/*<img className="bg-main" src={bgMain} />*/}
			{/*<img className="bg-grafics" src={bgGrafics}/>*/}
			{/*<Header />*/}
			<section className='main-page'>
				<div className='main-caption'>
					<p className='subtitle'><Tr lang={props.lang} string='Our in-house development'/></p>
					<h1 className='title'>Antares <span>Crypto Bot</span></h1>
					<p className='text'><Tr lang={props.lang} string='A software algorithm capable of earning 30-40% of profit per month on cryptocurrency trading.'/></p>
					<button className='start-button button' onClick={() => window.open('https://antares.trade/personal/robot/', '_blank')}><Tr lang={props.lang} string='Start the robot'/></button>
				</div>
				<div className='image-560 robot'>
					<img src={robot} className='main-image'/>
				</div>
			</section>
			<div className='triangle-top-right'/>
			<div className='triangle-top-left'/>
			<div className='ellipsis-18'/>
			<div className='ellipsis-13'/>
			<div className='ellipsis-8'/>
		</div>
	)
}
