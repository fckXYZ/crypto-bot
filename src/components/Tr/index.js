import React from "react";
import RU from '../../lang/ru.json'
import EN from '../../lang/en.json'

export const Tr = (props) => {
	const { lang, string } = props;

	const langs = {
		RU,
		EN,
	}
	const translate = (text) => {
		const neededLang = langs[lang];
		if (text in neededLang) {
			return neededLang[text];
		}
		return text;
	}

	return (
		<React.Fragment>
			{translate(string)}
		</React.Fragment>
	)
}
