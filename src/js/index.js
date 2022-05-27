const _global = ({_url, _counter, _timer_prop}) => {
	let _window, _interval, _timer = _timer_prop, _counter_open = 0;
	let _counter_show = document.querySelectorAll("._counter")[_counter]

	const _handle_open = () => {
		_window = window.open(_url, '_blank')
		_counter_open++
	}

	const _handle_close = () => {
		_window.close()
		_counter_show.innerHTML = _counter_open
	}

	let _open_link = () => {

		_handle_open()

		_interval = setInterval( () => {
			_timer--
			if (_timer < 0) {
				_timer = _timer_prop
				_handle_close()
				_reset_interval()
				clearInterval(_interval)
			}
		}, 1000 )
	}

	let _reset_interval = () => {
		if (_timer === _timer_prop) {
			setTimeout(() => {
				_open_link()
			}, 5000)
		}
	}

	_reset_interval()
}

window.onload = () => {
	_global({ _url: 'http://adfoc.us/7616461', _counter: 0, _timer_prop: 15  })
	_global({ _url: 'http://usheethe.com/V7wI', _counter: 1, _timer_prop: 15  })
}
