import DB_DATA from './../db/db.js'
import state from './../db/state.js'

import _alert_errs from './_validate_form.js'

import { _toggle } from "./_global_funct.js"
import
	{ 
		_toggle_pause_play,
		_toggle_favs,
		_delete_link,
	}
from './_links_actions.js'

const _click_trigger = () => {
	document.body.addEventListener('click', e => {
		let { name } = e.target
		let _parent_name = e.target.parentNode.name
		let _gt_url = e.target.parentNode.parentNode.parentNode
		let _gt_url_icon = _gt_url.parentNode

		if (name) {
			switch (name) {
				case "_add":
					e.preventDefault()
					_alert_errs()
					break;
				case "_options-open":
					_toggle(_gt_url)
					break;
				case "_options-close":
					_toggle(_gt_url)
					break;
			// Opciones para el link
				case "_option-delete":
					_delete_link(e.target)
					_gt_url.remove()
					break;
				case "_option-edit":
					console.log("Editar link")
					console.log("state", state)

					break;
				case "_option-pause-play":
					_toggle_pause_play(e.target, "parent")
					break;
				case "_option-save":
					_toggle_favs(e.target, "parent")
					break;
			}
		} else if (_parent_name) {
			switch (_parent_name) {
				case "_add":
					e.preventDefault()
					_alert_errs()
					break;
				case "_options-open":
					_toggle(_gt_url_icon)
					break;
				case "_options-close":
					_toggle(_gt_url_icon)
					break;
			// Opciones para el link
				case "_option-delete":
					_delete_link(e.target)
					_gt_url_icon.remove()
					break;
				case "_option-pause-play":
					_toggle_pause_play(e.target, "child")
					break;
				case "_option-edit":
					console.log("Editar link")
					console.log("state", state)
					break;
				case "_option-save":
					_toggle_favs(e.target, "child")
					break;
			}
		}
	} )
}

export default _click_trigger
