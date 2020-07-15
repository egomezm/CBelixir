class User {
	constructor(name) {
		// invokes the setter
		this.name = name;
	}
	talk(message){
		// message = "This is a Text string from a custom function";
		// return "" + message + "( " + Now() + " )";
		let dateTimeStamp = new Date().toLocaleString();
		return message + " ( Processed on " + dateTimeStamp + " )";
	}



	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}
}

export default User;