class DB {
	constructor() {
		this.data = []
	}

	db_set ( { _uuid, _url, _time } ) {
		this.data.push({
			_uuid,
			_url,
			_time,
		})

		return {
			status: 'Ok'
		}	
	}

	db_update ( { _uuid, _url, _time } ) {
		let obj = this.data.find( item => item._uuid === _uuid )
		if ( obj ) {
			obj._url = _url
			obj._time = _time

			return {
				status: 'Ok'
			}		
		} else {
			return {
				status: 401
			}
		}
	}

	db_delete ( _uuid ) {
		let obj = this.data.find( item => item._uuid === _uuid )
		if ( obj ) {
			let newData = this.data.filter(item => item._uuid !== _uuid)
			this.data = newData

			return {
				status: 'Ok'
			}	
		} else {
			return {
				status: 401
			}
		}
	}

	db_get () {
		return this.data
	}
}

const DB_DATA = new DB()

export default DB_DATA