import state from './../db/state.js'
import _url_template from "./_url_template.js"

// Funcion para agregar URLS
const _add = ( _input_url, _input_time, _saved = false) => {
	let _uuid = uuidv4()
	let _timer_prop = _input_time
	let _url = _input_url.includes("http://", 0) ? _input_url : `https://${_input_url}`

	// Funcion para lanzar nuevo link
	state[_uuid] = new _url_template({ _uuid, _url, _timer_prop, _saved })
	state[_uuid]._new_template()
}

// Funcion para editar links
const _edit = () => {
	let _input_id = document.querySelector('#_gt-input-edit-link-id').value
	let _input_url = document.querySelector('#_gt-input-edit-url').value
	let _input_time = document.querySelector('#_gt-input-edit-time').value

	state[_input_id]._update_link( _input_id, _input_url, _input_time )

	document.querySelector('._gt-form-edit').classList.remove('_open')
}

// Abrir / Cerrar Opciones de URLS
const _toggle = _url => {
	_url.classList.toggle("_open")
}

export { _add, _edit, _toggle }
