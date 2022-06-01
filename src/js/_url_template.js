class _url_template {
	constructor ({_url, _counter, _timer_prop}) {
		this.url_id = uuidv4()
		this._url = _url
		this._counter = _counter
		this._timer_prop = _timer_prop
		this._timer = this._timer_prop
		this._window 
		this._interval
		this._counter_open = 0
		this._counter_show = document.querySelectorAll("._counter")[this._counter]
	}

	_handle_open () {
		this._window = window.open(this._url, '_blank')
		this._counter_open++
	}

	_handle_close () {
		this._window.close()
		this._counter_show.innerHTML = this._counter_open
	}

	_open_link () {

		this._handle_open()

		this._interval = setInterval( () => {
			this._timer--
			if (this._timer < 0) {
				this._timer = this._timer_prop
				this._handle_close()
				this._reset_interval()
				clearInterval(this._interval)
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