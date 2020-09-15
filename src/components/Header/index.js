import React from "react";
import './index.css';
import logo from '../../assets/images/logo.svg';
import languageIcon from '../../assets/images/language-icon.svg';
import languageIconActive from '../../assets/images/language-icon-pink.svg';
import downArrow from '../../assets/images/downArrow.svg';
import downArrowActive from '../../assets/images/down-arrow-active.svg';

class Header extends React.Component {
	state = {
		is_opened: false,
		list: [
			{key: 'RU', value: 'Русский'},
			{key: 'EN', value: 'English'},
		],
		active_lang: this.props.lang,
	}

	toggleDropdown = () => {
		this.setState({
			is_opened: !this.state.is_opened,
		})
	}

	setActiveLang = (e) => {
		const newLang = this.state.list.find((lang) => lang.value === e.target.textContent).key;
		this.setState({
			active_lang: newLang,
		})
		this.props.onChange(newLang)
	}

	render () {
		const languages = this.state.list;
		return (
			<div className="header-wrapper">
				<img alt="Cryptobot Logo" className='logo' src={logo}/>
				<div className='dropdown-wrapper' onClick={(e) => this.toggleDropdown(e)}>
					<div className={`dropdown-title-wrapper ${this.state.is_opened ? 'is_opened' : null}`}>
						<img className='langIcon' alt="Select Language" src={this.state.is_opened ? languageIconActive : languageIcon} />
						<div className='header-dropdown'>
							<p className='dropdown-title'>
								{languages.find((lang) => lang.key === this.state.active_lang).value}
							</p>
							<img className='dropdown-icon' src={this.state.is_opened ? downArrowActive : downArrow}/>
						</div>
					</div>
					<ul className={`dropdown-list ${this.state.is_opened ? 'is_opened' : null}`}>
						{languages.map((lang) => {
							return (
								<li className='dropdown-lang' key={lang.key} onClick={(e) => this.setActiveLang(e)}>{lang.value}</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}

}

export default Header;
