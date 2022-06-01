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
					let _gt_input_add_val = document.querySelector("#_gt-input-add").value
					console.log(_gt_input_add_val)
					// Crear funcion para lanzar nuevo link
					break;
				case "_options-open":
					_gt_url.classList.add("_open")
					break;
				case "_options-close":
					_gt_url.classList.remove("_open")
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
					let _gt_input_add_val = document.querySelector("#_gt-input-add").value
					console.log(_gt_input_add_val)
					// Crear funcion para lanzar nuevo link
					break;
				case "_options-open":
					_gt_url_icon.classList.add("_open")
					break;
				case "_options-close":
					_gt_url_icon.classList.remove("_open")
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