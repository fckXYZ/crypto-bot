import React from "react";
import './index.css';
import image from '../../assets/images/profit.png';
import iconOne from '../../assets/images/profitIconOne.svg';
import iconTwo from '../../assets/images/profitIconTwo.svg';
import rightArrow from '../../assets/images/rightArrow.svg';
import {Tr} from "../../components/Tr";

export const Profit = (props) => {

	return (
		<section className='profit'>
			<figure className='profit-figure'>
				<div className='image-560'>
					<img className='profit-img' src={image}/>
				</div>
				<figcaption className='profit-caption'>
					<p className='profit-subtitle'>
						<Tr lang={props.lang} string='Affiliate Program'/>
					</p>
					<h2 className='profit-title'>Robot Profit Team</h2>
					<p className='profit-text'>
						<Tr lang={props.lang} string='Earn 2 types of bonuses to a depth of 8 lines of the affiliate network.'/>
					</p>
					<div className='attributes'>
						<figure className='profit-small-figure'>
							<img className='profit-small-icon' src={iconOne}/>
							<figcaption className='profit-small-caption first'>
								<p className='small-caption-text'>
									<Tr lang={props.lang} string='Bonuses for the purchase of licenses for the robot by partners of your structure.'/>
								</p>
							</figcaption>
						</figure>
						<figure className='profit-small-figure'>
							<img className='profit-small-icon' src={iconTwo}/>
							<figcaption className='profit-small-caption'>
								<p className='small-caption-text'>
									<Tr lang={props.lang} string='Percentage of the profit received by your partners from the profitability of their robots.'/>
								</p>
							</figcaption>
						</figure>
					</div>
					<div className='profit-link-container link-container'>
						<a className='profit-link link' href='https://antares.trade/robot-profit-team/#about' target='_blank'>
							<Tr lang={props.lang} string='More about the affiliate program'/>
						</a>
						<img className='link-arrow' src={rightArrow}/>
					</div>
				</figcaption>
			</figure>
			<div className='cylinder'/>
			<div className='cube'/>
			<div className='ellipsis-18-profit'/>
			<div className='ellipsis-10-profit'/>
			<div className='ellipsis-18-2-profit'/>
			<div className='triangle'/>
		</section>
	)
}
