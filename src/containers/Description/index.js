import React from "react";
import './index.css';
import imgEN from '../../assets/images/25-40EN.png';
import imgRU from '../../assets/images/25-40RU.png';
import androidIcon from '../../assets/images/androidIcon.svg';
import {Tr} from "../../components/Tr";

export const Description = (props) => {

	return (
		<section className='description'>
			<figure className='figure'>
				<div className='img-wrapper'>
					<img className='figure-img' src={props.lang === 'EN' ? imgEN : imgRU}/>
				</div>

				<figcaption className='figure-caption'>
					<img className='caption-img' src={androidIcon}/>
					<p className='figure-text'>
						<Tr lang={props.lang} string='The robots use high-frequency trading, so they are available only on our own exchange platform—'/>
						<span className='to-exchange' onClick={() => window.open('https://antares.exchange/', '_blank')}>Antares Exchange</span>
						<Tr lang={props.lang} string="—which gives an advantage in signal processing speed, increases the number of trades and allows you to unlock 100% of Antares Crypto Bot's potential."/>
					</p>
				</figcaption>
			</figure>
			<div className='coin-one'/>
			<div className='coin-two'/>
			<div className='dots-from-right'/>
			<div className='ellipsis'/>
		</section>
	)
}
