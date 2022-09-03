import { _add } from './_global_funct.js'

const _saved_links = () => {
	const _saved = JSON.parse(localStorage.getItem("saved"))

	if (_saved.length) {
		// Recorrer lista de links guardados para activar
		_saved.forEach( ({ _url, _timer_prop }) => {
			_add(_url, parseInt(_timer_prop), true)
		})
	}
}

export default _saved_links