import _Template from "./_template.js"

class _url_template {
	constructor ({ _uuid_, _url, _timer_prop }) {
		this._url_id =  _uuid_ ? _uuid_ : uuidv4()
		this._url = _url
		this._timer_prop = _timer_prop
		this._timer = this._timer_prop
		this._window 
		this._interval
		this._timer_show
		this._counter_show
		this._counter_open = 0
	}

	_new_template () {
		const _instance = new _Template({_uuid : this._url_id, _url : this._url})
		_instance._template()
		this._reset_interval()
	}

	_handle_open () {
		this._window = window.open(this._url, '_blank')
		this._counter_open++
	}

	_handle_close () {
		this._counter_show = document.querySelector(`#${this._url_id} ._gt-url-counter`)
		this._window.close()
		this._counter_show.innerHTML = this._counter_open
	}

	_open_link () {
		this._timer_show = document.querySelector(`#${this._url_id} ._gt-url-time`)

		this._handle_open()

		this._interval = setInterval( () => {
			this._timer--
			if (this._timer < 0) {
				this._timer = this._timer_prop
				this._handle_close()
				this._reset_interval()
				clearInterval(this._interval)
			} else {
				this._timer_show.innerHTML = +this._timer.toString( )
			}
		}, 1000 )
	}

	_reset_interval () {
		if (this._timer === this._timer_prop) {
			setTimeout(() => {
				this._open_link()
			}, 5000)
		}
	}
}

export default _url_template
