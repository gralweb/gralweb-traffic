class _Template {
	constructor({ _uuid, _url, _saved }) {
		this._uuid = _uuid
		this._url = _url
		this._saved = _saved
		this._li_options = [
			{
				"name": "close", "classNames": ["_gt-url-option", "_gt-url-options-close"],
				"button": {
					"attr": ["type", "name", "parent-id"],
					"type": "button",
					"name": "_options-close",
					"parent-id": this._uuid
				},
				"icon": {
					"attr": ["parent-id"],
					"classNames": ["fa-solid", "fa-angle-left"],
					"parent-id": this._uuid
				}
			},
			{
				"name": "pause_play", "classNames": ["_gt-url-option"],
				"button": {
					"attr": ["type", "name", "parent-id"],
					"type": "button",
					"name": "_option-pause-play",
					"parent-id": this._uuid
				},
				"icon": {
					"attr": ["parent-id"],
					"classNames": ["fa-solid", "fa-pause"],
					"parent-id": this._uuid
				}
			},
			{
				"name": "delete", "classNames": ["_gt-url-option"],
				"button": {
					"attr": ["type", "name", "parent-id"],
					"type": "button",
					"name": "_option-delete",
					"parent-id": this._uuid
				},
				"icon": {
					"attr": ["parent-id"],
					"classNames": ["fa-solid", "fa-trash"],
					"parent-id": this._uuid
				}
			},
			{
				"name": "edit", "classNames": ["_gt-url-option"],
				"button": {
					"attr": ["type", "name", "parent-id"],
					"type": "button",
					"name": "_option-edit",
					"parent-id": this._uuid
				},
				"icon": {
					"attr": ["parent-id"],
					"classNames": ["fa-solid", "fa-gear"],
					"parent-id": this._uuid
				}
			},
			{
				"name": "save", "classNames": ["_gt-url-option"],
				"button": {
					"attr": ["type", "name", "parent-id"],
					"type": "button",
					"name": "_option-save",
					"parent-id": this._uuid
				},
				"icon": {
					"attr": ["parent-id"],
					"classNames": [this._saved ? "fa-solid" : "fa-regular", "fa-bookmark"],
					"parent-id": this._uuid
				}
			},
		]
	}

	_generate_options (_parent) {
		this._li_options.forEach((_li) => {
			const _li_element = document.createElement("li")
				// Agregando clases al elemento li
				_li.classNames.forEach(_clss => _li_element.classList.add(_clss))
				// Creamos el elemento Button
				const _button = document.createElement("button")
					// Agregamos los atributos del elemento Button
					_li.button.attr.forEach(_attr => _button.setAttribute(_attr, _li.button[_attr]))
					const _icon = document.createElement("i")
						// Agregamos las clases y atributos del icono
						_li.icon.classNames.forEach(_clss => _icon.classList.add(_clss))
						_li.icon.attr.forEach(_attr => _icon.setAttribute(_attr, _li.icon[_attr]))
					// Agregando icono al boton
					_button.appendChild(_icon)
				// Agregando el boton al LI
				_li_element.appendChild(_button)
			// Agregando el LI al elemento UL (Padre)
			_parent.appendChild(_li_element)
		})
	}

	_template () {
		// Contenedor de la lista de links activos
		const _article_container = document.querySelector("._gt-container-urls")
		// Creacion de Articulo
		const _article = document.createElement("article")
			// Atributos del articulo - ID para las opciones
			_article.setAttribute("id", this._uuid)
			_article.classList.add("_gt-url")

			// Creacion de la lista desordenada
			const _ul = document.createElement("ul")
				// Atributos
				_ul.classList.add("_gt-url-options")
				// Creacion de cada item de la lista (opciones)
				this._generate_options(_ul)
			// Creacion de la seccion para la informacion del enlace
			const _section = document.createElement("section")
				// Atributos
				_section.classList.add("_gt-url-content")
				// Contenedor de boton de abrir opciones
				const _options_open = document.createElement("div")
					// Atributos
					_options_open.classList.add("_gt-url-options-open")
					// Boton
					const _button_open = document.createElement("button")
						// Atributos
						_button_open.setAttribute("type", "button")
						_button_open.setAttribute("name", "_options-open")
						// Icono de boton
						const _i_open = document.createElement("i")
							// Atributos
							_i_open.classList.add("fa-solid")
							_i_open.classList.add("fa-angle-right")
						// Agregando icono al boton
						_button_open.appendChild(_i_open)
					// Agregando boton al contenedor
					_options_open.appendChild(_button_open)
				// Contenedor enlace
				const _url_content = document.createElement("p")
					// Atributos
					_url_content.classList.add("_gt-url-content-link")
					// Enlace
					const _url_a = document.createElement("a")
						// Atributos
						_url_a.setAttribute("href", this._url)
						_url_a.setAttribute("target", "_blank")
						_url_a.innerText = this._url
					// Agregando enlace al contenedor
					_url_content.appendChild(_url_a)
				// Contenedor Timer - Counter Views
				const _url_content_data = document.createElement("summary")
					// Atributos
					_url_content_data.classList.add("_gt-url-content-data")
					// Contenedor Timer
					const _url_timer = document.createElement("p")
						// Atributos
						_url_timer.classList.add("_gt-url-timer-content")
						// Span icon Timer
						const _span_icon = document.createElement("span")
							// Icon Timer
							const _span_i = document.createElement("i")
								// Atributos
								_span_i.classList.add("fa-regular")
								_span_i.classList.add("fa-clock")
							// Agregando icono al span
							_span_icon.appendChild(_span_i)
						// Span texto Timer
						const _span_timer = document.createElement("span")
							// Atributos
							_span_timer.classList.add("_gt-url-time")
							_span_timer.innerText = "0"
						// Span Abrebiacion de tiempo
						const _span_secons = document.createElement("span")
							// Atributos
							_span_secons.innerText = "s"
						// Agregando Contenido - Span al contenedor
						_url_timer.appendChild(_span_icon)
						_url_timer.appendChild(_span_timer)
						_url_timer.appendChild(_span_secons)
					// Contenedor Counter Views
					const _url_counter_opens = document.createElement("p")
						// Atributos
						_url_counter_opens.classList.add("_gt-url-counter-content")
						// Span icon counter
						const _span_counter_icon = document.createElement("span")
							// Icon counter
							const _span_counter_icon_i = document.createElement("i")
								// Atributos 
								_span_counter_icon_i.classList.add("fa-solid")
								_span_counter_icon_i.classList.add("fa-chart-line")
							// Agregando icono al span
							_span_counter_icon.appendChild(_span_counter_icon_i)
						// Span Texto Counter Views
						const _span_counter = document.createElement("span")
							// Atributos
							_span_counter.classList.add("_gt-url-counter")
							_span_counter.innerText = "0"
						// Agregando Contenido al Contenedor
						_url_counter_opens.appendChild(_span_counter_icon)
						_url_counter_opens.appendChild(_span_counter)
				// Agregando Items (Timer - Counter) al contenedor
				_url_content_data.appendChild(_url_timer)
				_url_content_data.appendChild(_url_counter_opens)
			// Agregando Items ( Boton - Enlace - Info ) al contenedor SECTION
			_section.appendChild(_options_open)
			_section.appendChild(_url_content)
			_section.appendChild(_url_content_data)
		// Agregando items ( UL - SECTION ) al article
		_article.appendChild(_ul)
		_article.appendChild(_section)
		
		// Devolvemos el articulo completo para implementar en el dom
		// return _article
		// Insertamos el articulo al dom
		_article_container.appendChild(_article)
	}
}
 
export default _Template;
