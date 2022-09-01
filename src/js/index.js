import _click_trigger from './_click_trigger.js'

// let _data = [{_uuid: "idPredeterminada", _url: "https://gralweb.web.app", _time: 15} ]
// let _data_string = JSON.stringify(_data)
// window.localStorage.setItem( "_data" ,_data_string)
// let _data_saved = JSON.parse(window.localStorage._data)

const _saved_data = () => {
	let _saved = localStorage.getItem("saved")
	let _data = JSON.stringify([])

	if (_saved === null) {
		localStorage.setItem("saved", _data)
	}
}

window.onload = () => {
	// _global({ _url: 'http://adfoc.us/7616461', _counter: 0, _timer_prop: 15  })
	// let test_uid = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
	_saved_data()

	_click_trigger()
}
