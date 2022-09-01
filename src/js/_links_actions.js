import state from './../db/state.js'

const _toggle_pause_play = (_item, _type) => {
	let _parent_id = _item.attributes['parent-id'].value

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

export { _toggle_pause_play }
