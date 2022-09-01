import state from './../db/state.js'
import _url_template from "./_url_template.js"

// Funcion para agregar URLS
const _add = ( _input_url, _input_time, _uuid_) => {
	let _uuid = _uuid_ ? _uuid_ : uuidv4()
	let _url = _input_url.value
	let _timer_prop = _input_time.value

	// Funcion para lanzar nuevo link
	state[_uuid] = new _url_template({ _uuid, _url, _timer_prop })
	state[_uuid]._new_template()

	// Limpiar los input despues de recibir los datos
	_input_url.value = ""
	_input_time.value = ""
}

// Abrir / Cerrar Opciones de URLS
const _toggle = _url => {
	_url.classList.toggle("_open")
}

export { _add, _toggle }
