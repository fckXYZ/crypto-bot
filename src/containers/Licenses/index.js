import React from "react";
import './index.css';
import license from '../../assets/images/licenses.png';
import robotShadow from '../../assets/images/robotShadow.png';
import rightArrow from "../../assets/images/rightArrow.svg";
import {Tr} from "../../components/Tr";

export const Licenses = (props) => {
	return (
		<section className='licenses'>
			<figure className='licenses-figure'>
				<div className='licenses-pic-wrapper'>
					<div className='pic-card-president'>
						<div className='top-block'>
							<div className='top-left'>
								<h5 className='card-title'>22 000 USDT</h5>
								<p className='card-subtitle'>Лимит на объем депозита ACB</p>
							</div>
							<div className='top-right'>
								<h5 className='card-title'>6%</h5>
								<p className='card-subtitle'>Комиссия на полученную прибыль</p>
							</div>
						</div>
						<div className='middle-block'>
							<h5 className='card-title'>7</h5>
							<p className='card-subtitle'>Количество уровней по реферальной программе за покупку лиценции партнёрами</p>
						</div>
						<div className='card-footer'>
							<p className='card-subtitle'>Стоимость</p>
						</div>
						<p className='card-buy'>Купить</p>
					</div>
					<div className='pic-card-emperor'>
						<div className='top-block'>
							<div className='top-left'>
								<h5 className='card-title'>60 000 USDT</h5>
								<p className='card-subtitle'>Лимит на объем депозита ACB</p>
							</div>
							<div className='top-right'>
								<h5 className='card-title'>6%</h5>
								<p className='card-subtitle'>Комиссия на полученную прибыль</p>
							</div>
						</div>
						<div className='middle-block'>
							<h5 className='card-title'>8</h5>
							<p className='card-subtitle'>Количество уровней по реферальной программе за покупку лиценции партнёрами</p>
						</div>
						<div className='card-footer'>
							<p className='card-subtitle'>Стоимость</p>
						</div>
						<p className='card-buy'>Купить</p>
					</div>
					<div className='pic-card-premium'>
						<div className='top-block'>
							<div className='top-left'>
								<h5 className='card-title'>60 000 USDT</h5>
								<p className='card-subtitle'>Лимит на объем депозита ACB</p>
							</div>
							<div className='top-right'>
								<h5 className='card-title'>10%</h5>
								<p className='card-subtitle'>Комиссия на полученную прибыль</p>
							</div>
						</div>
						<div className='middle-block'>
							<h5 className='card-title'>8</h5>
							<p className='card-subtitle'>Количество уровней по реферальной программе за покупку лиценции партнёрами</p>
						</div>
						<div className='card-footer'>
							<p className='card-subtitle'>Стоимость</p>
						</div>
						<p className='card-buy'>Купить</p>
					</div>
					{/*<img className='licenses-figure-image' src={license}/>*/}
				</div>
				<figcaption className='licenses-caption'>
					<h2 className='licenses-title title-sm'>
						<Tr lang={props.lang} string='Licenses'/>
					</h2>
					<p className='licenses-text'>
						<Tr lang={props.lang} string='To activate the robot and start receiving daily yield, you need to purchase one of 8 licenses. The higher the cost of the license and its level, the more opportunities the investor gets.'/>
					</p>
					<div className='licenses-link-container link-container'>
						<a className='licenses-link link' href='https://antares.trade/robot-profit-team/#invest' target='_blank'>
							<Tr lang={props.lang} string='View all licenses'/>
						</a>
						<img className='link-arrow' src={rightArrow}/>
					</div>
				</figcaption>
			</figure>
			<img className='licenses-image' src={robotShadow} />
			<div className='sphere-pink' />
			<div className='triangle-licenses-left'/>
			<div className='ellipsis-10-licenses'/>
			<div className='ellipsis-10-2-licenses'/>
			<div className='ellipsis-8'/>
		</section>
	)
}
