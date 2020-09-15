import React from "react";
import './index.css';
import {Tr} from "../../components/Tr";

export const GetBot = (props) => {
	return(
		<section className='getBot'>
			<h2 className='title-sm getBot-title'>
				<Tr lang={props.lang} string='Robots have been an upward trend in the investment market '/>
				<span className='white'>
					<Tr lang={props.lang} string='for two years,'/>
				</span>
			</h2>
			<p className='getBot-subtitle'>
				<Tr lang={props.lang} string='therefore, very soon you will see a new type of crypto trading bot from the '/>
			</p>
			<a className='getBot-link link' href='https://antares.trade/' target='_blank'>
				<Tr lang={props.lang} string='Antares platform.'/>
			</a>
			<div className='getBot-btnBlock'>
				<h2 className='title-sm getBot-title-left'>
					<Tr lang={props.lang} string='Start earning with Antares Crypto Bot '/>
					{/*<br className='sm-break'/>*/}
					<span><Tr lang={props.lang} string='today'/></span>
				</h2>
				<button className='button getBot-btn' onClick={() => window.open('https://antares.trade/personal/robot/', '_blank')}>
					<Tr lang={props.lang} string='Start the robot'/>
				</button>
			</div>
			<div className='sphere'/>
			<div className='bottom-triangle'/>
			<div className='cylinder-red'/>
			<div className='ellipsis-18-getBot'/>
			<div className='ellipsis-10-getBot'/>
			<div className='ellipsis-18-2-getBot'/>
		</section>
	)
};
