const _global ( ) => {
	let
	_ads_frame_links = document.querySelectorAll("._ads_frame_links"),
	_one_timer_container = document.querySelector("#timer-one div span"),
	_two_timer_container = document.querySelector("#timer-two div span"),
	_tree_timer_container = document.querySelector("#timer-tree div span"),
	_timer_count_page = 60,
	_timer_count_view_ads = 50,
	_interval_one,
	_interval_two,
	_new_window_one,
	_new_window_two

	const _handle_open = () => {
		_new_window_one = window.open('http://usheethe.com/V7wI', '_blank')
		_new_window_two = window.open('http://usheethe.com/V7wI', '_blank')
	}

	const _handle_close = () => {
		_new_window_one.close()
		_new_window_two.close()
	}

	_handle_open()

	_interval_one = setInterval( () => {
		_timer_count_page--
		if (_timer_count_page < 0) {
			// window.location.reload()
			window.location.href = 'https://gralweb-btnadsterra.netlify.app'

			clearInterval( _interval_one )
		} else {
			_one_timer_container.innerHTML = +_timer_count_page.toString( )
		}
	}, 1000 )

	_interval_two = setInterval( () => {
		_timer_count_view_ads--
		if (_timer_count_view_ads < 0) {
			_handle_close()

			clearInterval( _interval_two )
		} else {
			_two_timer_container.innerHTML = +_timer_count_view_ads.toString( )
		}
	}, 1000 )

	let _open_ads_banner = () => {
		let _ads_terra_iframe = document.querySelectorAll("._ads-terra-iframe iframe")
		_ads_terra_iframe.forEach( _iframe => {
			if (_iframe.contentDocument) {
				let
				_interval_count = 50,
				_interval_,
				_url = _iframe.contentDocument.body.children[1].children[0].href,
				_new_,
				_handle__open = () => {
					_new_ = window.open(_url, '_blank')
				},
				_handle__close = () => {
					_new_.close()
				}

				_handle__open()

				_interval_ = setInterval( () => {
					_interval_count--
					if (_interval_count < 0) {
						_handle__close()

						clearInterval( _interval_ )
					} else {
						_tree_timer_container.innerHTML = +_interval_count.toString( )
					}
				}, 1000 )
			}
		})
	}

	setTimeout(() => {
		_ads_frame_links.forEach( _link => {
			_link.click()
		})

		_open_ads_banner()
	}, 5000)
}

window.onload = () => {
	_global()
}
