import _url_template from "./_url_template.js"

// Funcion para agregar URLS
const _add = () => {
	let _input_url = document.querySelector("#_gt-input-add")
	let _input_time = document.querySelector("#_gt-input-time")
	let _url = _input_url.value
	let _timer_prop = _input_time.value
	// Funcion para lanzar nuevo link
	const _new_url = new _url_template({ _url, _timer_prop })
	_new_url._new_template()
	// Limpiar los input despues de recibir los datos
	_input_url.value = ""
	_input_time.value = ""
}

// Abrir / Cerrar Opciones de URLS
const _toggle = _url => {
	_url.classList.toggle("_open")
}

const _toggle_pause_play = (_item, _type) => {
	switch(_type) {
		case "parent":
			_item.target.children[0].classList.toggle("fa-pause")
			_item.target.children[0].classList.toggle("fa-play")
			break;
		case "child":
			_item.target.classList.toggle("fa-pause")
			_item.target.classList.toggle("fa-play")
			break;
	}
}

export { _add, _toggle, _toggle_pause_play }
