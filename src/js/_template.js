class _Template {
	constructor({ _uuid, _url }) {
		this._uuid = _uuid
		this._url = _url
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
				const _li_close = document.createElement("li")
					// Atributos
					_li_close.classList.add("_gt-url-option")
					_li_close.classList.add("_gt-url-options-close")
					// Boton de sera handler para la opcion
					const _button_close = document.createElement("button")
						// Atributos 
						_button_close.setAttribute("type", "button")
						_button_close.setAttribute("name", "_options-close")
						// Icono del boton - opcion
						const _i_close = document.createElement("i")
							// Atributos
							_i_close.classList.add("fa-solid")
							_i_close.classList.add("fa-angle-left")
						// Agregando icono al boton
						_button_close.appendChild(_i_close)
					// Agregando boton al item
					_li_close.appendChild(_button_close)
				// Creacion de cada item de la lista (opciones)
				const _li_delete = document.createElement("li")
					// Atributos
					_li_delete.classList.add("_gt-url-option")
					// Boton de sera handler para la opcion
					const _button_delete = document.createElement("button")
						// Atributos 
						_button_delete.setAttribute("type", "button")
						_button_delete.setAttribute("name", "_option-delete")
						// Icono del boton - opcion
						const _i_delete = document.createElement("i")
							// Atributos
							_i_delete.classList.add("fa-solid")
							_i_delete.classList.add("fa-trash")
						// Agregando icono al boton
						_button_delete.appendChild(_i_delete)
					// Agregando boton al item
					_li_delete.appendChild(_button_delete)	
				// Creacion de cada item de la lista (opciones)
				const _li_edit = document.createElement("li")
					// Atributos
					_li_edit.classList.add("_gt-url-option")
					// Boton de sera handler para la opcion
					const _button_edit = document.createElement("button")
						// Atributos 
						_button_edit.setAttribute("type", "button")
						_button_edit.setAttribute("name", "_option-edit")
						
						// Icono del boton - opcion
						const _i_edit = document.createElement("i")
							// Atributos
							_i_edit.classList.add("fa-solid")
							_i_edit.classList.add("fa-gear")
						// Agregando icono al boton
						_button_edit.appendChild(_i_edit)
					// Agregando boton al item
					_li_edit.appendChild(_button_edit)
				// Creacion de cada item de la lista (opciones)
				const _li_save = document.createElement("li")
					// Atributos
					_li_save.classList.add("_gt-url-option")
					// Boton de sera handler para la opcion
					const _button_save = document.createElement("button")
					// Atributos 
					_button_save.setAttribute("type", "button")
					_button_save.setAttribute("name", "_option-save")
						// Icono del boton - opcion
						const _i_save = document.createElement("i")
							// Atributos
							_i_save.classList.add("fa-regular")
							_i_save.classList.add("fa-bookmark")
						// Agregando icono al boton
						_button_save.appendChild(_i_save)
					// Agregando boton al item
					_li_save.appendChild(_button_save)
				// Agregando items a la lista
				_ul.appendChild(_li_close)
				_ul.appendChild(_li_delete)
				_ul.appendChild(_li_edit)
				_ul.appendChild(_li_save)
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
