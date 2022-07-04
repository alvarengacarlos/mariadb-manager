class GrantPrivileges {
    
	#privileges;
	#baseStatement;

	/**
     * 
     * @param {String} username 
     * @param {String} host 
     * @param {String} databaseName 
     * @param {String} tableName 
     * @returns {String}
     */    
	constructor(username, host, databaseName, tableName) {
		if (!username || !host || !databaseName) {
			throw new Error("username, host and databaseName cannot be empty");
		}

		if (!tableName) {
			tableName = "*";
		}

		this.#privileges = "";
		this.#baseStatement = `ON ${databaseName}.${tableName} TO ${username}@${host};`;
	}

	/**
	 * DDL (Data Definition Language) permissions
	 * DCL (Data Control Language) permissions
	 */
	addCreatePermission() {
		if (this.#privileges) {            
			this.#privileges += ",CREATE";    

		} else {
			this.#privileges += "CREATE";
		}

		return this;
	}

	addAlterPermission() {
		if (this.#privileges) {
			this.#privileges += ",ALTER";

		} else {
			this.#privileges += "ALTER";
		}        
        
		return this;
	}

	addCreateViewPermission() {
		if (this.#privileges) {
			this.#privileges += ",CREATE VIEW";

		} else {
			this.#privileges += "CREATE VIEW";
		}        
        
		return this;
	}

	addDropPermission() {
		if (this.#privileges) {
			this.#privileges += ",DROP";

		} else {
			this.#privileges += "DROP";
		}        
        
		return this;
	}

	addDeleteHistoryPermission() {
		if (this.#privileges) {
			this.#privileges += ",DELETE HISTORY";

		} else {
			this.#privileges += "DELETE HISTORY";
		}        
        
		return this;
	}

	addGrantOptionPermission() {
		if (this.#privileges) {
			this.#privileges += ",GRANT OPTION";

		} else {
			this.#privileges += "GRANT OPTION";
		}        
        
		return this;
	}

	addIndexPermission() {
		if (this.#privileges) {
			this.#privileges += ",INDEX";

		} else {
			this.#privileges += "INDEX";
		}        
        
		return this;
	}

	addShowViewPermission() {
		if (this.#privileges) {
			this.#privileges += ",SHOW VIEW";

		} else {
			this.#privileges += "SHOW VIEW";
		}        
        
		return this;
	}

	addTriggerPermission() {
		if (this.#privileges) {
			this.#privileges += ",TRIGGER";

		} else {
			this.#privileges += "TRIGGER";
		}        
        
		return this;
	}
	
	/**
	 * DQL (Data Query Language) permissions
	 * DML (Data Manipulation Language) permissions
	 */
	addDeletePermission() {
		if (this.#privileges) {
			this.#privileges += ",DELETE";

		} else {
			this.#privileges += "DELETE";
		}        
        
		return this;
	}

	addInsertPermission() {
		if (this.#privileges) {
			this.#privileges += ",INSERT";

		} else {
			this.#privileges += "INSERT";
		}        
        
		return this;
	}

	addSelectPermission() {
		if (this.#privileges) {
			this.#privileges += ",SELECT";

		} else {
			this.#privileges += "SELECT";
		}        
        
		return this;
	}

	addUpdatePermission() {
		if (this.#privileges) {
			this.#privileges += ",UPDATE";

		} else {
			this.#privileges += "UPDATE";
		}        
        
		return this;
	}

	builder() {
		return `GRANT ${this.#privileges} ${this.#baseStatement}`;
	}

}

module.exports = GrantPrivileges;