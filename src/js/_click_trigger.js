// import _url_template from "./_url_template.js"
import { _add, _toggle } from "./_global_funct.js"

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
					_add()
					break;
				case "_options-open":
					_toggle(_gt_url)
					break;
				case "_options-close":
					_toggle(_gt_url)
					break;
				// Opciones para el link
				case "_option-delete":
					_gt_url.remove()
					console.log("Eliminar link")
					break;
				case "_option-edit":
					console.log("Editar link")
					break;
				case "_option-save":
					console.log("Guardar link")
					break;
			}
		} else if (_parent_name) {
			switch (_parent_name) {
				case "_add":
					e.preventDefault()
					_add()
					break;
				case "_options-open":
					_toggle(_gt_url_icon)
					break;
				case "_options-close":
					_toggle(_gt_url_icon)
					break;
				// Opciones para el link
				case "_option-delete":
					_gt_url_icon.remove()
					console.log("Eliminar link")
					break;
				case "_option-edit":
					console.log("Editar link")
					break;
				case "_option-save":
					console.log("Guardar link")
					break;
			}
		}
	} )
}

export default _click_trigger
