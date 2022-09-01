import state from './../db/state.js'

const _toggle_pause_play = (_item, _type) => {
	const _parent_id = _item.attributes['parent-id'].value

	switch(_type) {
		case "parent":
			_item.children[0].classList.toggle("fa-pause")
			_item.children[0].classList.toggle("fa-play")
			break;
		case "child":
			_item.classList.toggle("fa-pause")
			_item.classList.toggle("fa-play")
			break;
	}

	state[_parent_id]._handle_pause()
}

const _toggle_favs = (_item, _type) => {
	let _saved = JSON.parse(localStorage.getItem("saved"))

	const _parent_id = _item.attributes['parent-id'].value

	switch(_type) {
		case "parent":
			_item.children[0].classList.toggle("fa-regular")
			_item.children[0].classList.toggle("fa-solid")
			break;
		case "child":
			_item.classList.toggle("fa-regular")
			_item.classList.toggle("fa-solid")
			break;
	}

	const { _url_id, _url, _timer_prop } = state[_parent_id]
	const _test_saved = _saved.find( _elm => _elm._uuid === _url_id ) 

	const _template = {
		"_uuid": _url_id,
		_url,
		_timer_prop
	}

	if (!_test_saved) {
		const _to_save = JSON.stringify([ ..._saved, _template ])	
		localStorage.setItem("saved", _to_save)	
	} else {
		const _remove_link = JSON.stringify(_saved.filter(_elm => _elm._uuid !== _url_id))
		localStorage.setItem("saved", _remove_link)
	}
}

const _delete_link = _item => {
	const _parent_id = _item.attributes['parent-id'].value

	state[_parent_id]._handle_pause()
}

const _edit_link = _item => {
	const _parent_id = _item.attributes['parent-id'].value

	// Buscar Formulario de edicion

	const { _url_id, _url, _timer_prop } = state[_parent_id]

	const _old_date = {
		"_uuid": _url_id,
		_url,
		_timer_prop
	}
}

export { _toggle_pause_play, _toggle_favs, _delete_link, _edit_link }
