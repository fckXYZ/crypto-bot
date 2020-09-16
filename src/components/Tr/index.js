import React from "react";
import RU from '../../lang/ru.json'
import EN from '../../lang/en.json'
import ES from '../../lang/es.json'
import IT from '../../lang/it.json'
import ML from '../../lang/ml.json'
import CN from '../../lang/cn.json'


export const Tr = (props) => {
	const { lang, string } = props;

	const langs = {
		RU,
		EN,
		ES,
		IT,
		ML,
		CN,
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
