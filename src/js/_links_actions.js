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

	const { _url, _timer_prop } = state[_parent_id]
	const _test_saved = _saved.find( _elm => _elm._url === _url ) 

	const _template = {
		_url,
		_timer_prop
	}

	if (!_test_saved) {
		const _to_save = JSON.stringify([ ..._saved, _template ])
		localStorage.setItem("saved", _to_save)
	} else {
		const _remove_link = JSON.stringify(_saved.filter(_elm => _elm._url !== _url))
		localStorage.setItem("saved", _remove_link)
	}
}

const _delete_link = _item => {
	const _parent_id = _item.attributes['parent-id'].value

	state[_parent_id]._handle_die()
}

const _edit_link = _item => {
	const _parent_id = _item.attributes['parent-id'].value

	const _update_form = document.querySelector('._gt-form-edit')
	const _update_form_link_id = document.querySelector('#_gt-input-edit-link-id')
	const _update_form_link = document.querySelector('#_gt-input-edit-url')
	const _update_form_time = document.querySelector('#_gt-input-edit-time')

	const { _url_id, _url, _timer_prop } = state[_parent_id]

	_update_form.classList.add('_open')

	_update_form_link_id.value = _url_id
	_update_form_link.value = _url
	_update_form_time.value = parseInt(_timer_prop)
}

export { _toggle_pause_play, _toggle_favs, _delete_link, _edit_link }
