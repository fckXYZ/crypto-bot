import React from "react";
import './index.css';
import imgEN from '../../assets/images/25-40EN.svg';
import imgRU from '../../assets/images/25-40RU.png';
import androidIcon from '../../assets/images/androidIcon.svg';
import {Tr} from "../../components/Tr";
import ellipsPic from '../../assets/images/25-40/Ellipse.svg';
import graphPic from '../../assets/images/25-40/graph.svg';
import graphicPic from '../../assets/images/25-40/graphic.png';
import star from '../../assets/images/25-40/star.svg';



export const Description = (props) => {

	return (
		<section className='description'>
			<figure className='figure'>
				<div className='img-wrapper'>
					<div className='figure-img'>
						<img className='ellipsPic' src={ellipsPic}/>
						<img className='graphicPic' src={graphicPic}/>
						<img className='graphPic' src={graphPic}/>
						<h4 className='percent'>
							25-40%
							<img className='percent-star' src={star}/>
						</h4>
						<p className={`img-text ${props.lang === 'RU' ? ' ru' : null}`}>
							<Tr lang={props.lang} string="Our robots provide high monthly returns"/>
						</p>
					</div>
					<p className='img-subtext'>
						<Tr lang={props.lang} string="* This is an average profit figure. It may change depending on the state of the cryptocurrency market."/>
					</p>
				</div>
					{/*<img className='figure-img' src={props.lang === 'EN' ? imgEN : imgRU}/>*/}

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
