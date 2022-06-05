import _Template from "./_template.js"

class _url_template {
	constructor ({ _uuid_, _url, _timer_prop }) {
		this._pause = false
		// this._die = false
		this._url_id =  _uuid_ ? _uuid_ : uuidv4()
		this._url = _url
		this._timer_prop = _timer_prop
		this._timer = this._timer_prop
		this._window 
		this._interval
		this._data_parent
		this._timer_show
		this._counter_show
		this._counter_open = 0
	}

	_handle_pause () {
		this._pause = !this._pause
	}

	_new_template () {
		const _instance = new _Template({_uuid : this._url_id, _url : this._url})
		_instance._template()
		setTimeout(() => {
			this._reset_interval()
		}, 2000)
	}

	_handle_open () {
		this._window = window.open(this._url, '_blank')
		this._counter_open++
	}

	_handle_close () {
		this._counter_show = this._data_parent ? this._data_parent.querySelector("._gt-url-counter") : null

		this._window.close()
		if (this._counter_show !== null) {
			this._counter_show.innerHTML = this._counter_open
		}
	}

	_open_link () {
		if (!this._data_parent) {
			this._data_parent = document.getElementById(`${this._url_id}`)
		}
		this._timer_show =  this._data_parent ? this._data_parent.querySelector("._gt-url-time") : null

		this._handle_open()

		this._interval = setInterval( () => {
			if (this._pause) {
				return
			} else {
				this._timer--
				if (this._timer < 0) {
					this._timer = this._timer_prop
					this._handle_close()
					this._reset_interval()
					clearInterval(this._interval)
				} else {
					if (this._timer_show !== null) {
						this._timer_show.innerHTML = +this._timer.toString( )
					}
				}
			}
		}, 1000 )
	}

	_reset_interval () {
		if (this._pause) {
			return
		} else  {
			if (this._timer === this._timer_prop) {
				setTimeout(() => {
					this._open_link()
				}, 5000)
			}			
		}
	}
}

export default _url_template
