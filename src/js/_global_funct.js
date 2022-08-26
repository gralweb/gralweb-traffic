import _url_template from "./_url_template.js"

// Funcion para agregar URLS
const _add = (_input_url, _input_time) => {
	let _url = _input_url.value
	let _timer_prop = _input_time.value
	// Funcion para lanzar nuevo link
	const _new_url = new _url_template({ _url, _timer_prop })
	_new_url._new_template()
	// Limpiar los input despues de recibir los datos
	_input_url.value = ""
	_input_time.value = ""
}

// Validacion de formulario
const _validate_form = (_input_url, _input_time) => {
	let _errors = []

	if (_input_url.value === "") {
		_errors.push("url")
	}

	if (_input_time.value === "") {
		_errors.push("time")
	}

	return _errors
}

// Alertando errores
const _alert_errs = () => {
	let _input_url = document.querySelector("#_gt-input-add")
	let _input_time = document.querySelector("#_gt-input-time")

	_input_url.onfocus = () => {
		if (_input_url.classList.contains("_gt-error")) {
			_input_url.classList.remove("_gt-error")
		}
	}

	_input_time.onfocus = () => {
		if (_input_time.classList.contains("_gt-error")) {
			_input_time.classList.remove("_gt-error")
		}
	}
	
	let _err = _validate_form(_input_url, _input_time)

	if (_err.length) {		
		if (_err.includes("url")) {
			_input_url.classList.add("_gt-error")
		}

		if (_err.includes("time")) {
			_input_time.classList.add("_gt-error")
		}
	} else {
		_add(_input_url, _input_time)
	}
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

export { _alert_errs, _toggle, _toggle_pause_play }
