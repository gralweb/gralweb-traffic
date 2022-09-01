import { _add } from './_global_funct.js'

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

export default _alert_errs
