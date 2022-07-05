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
	addGrantCreatePermission() {
		if (this.#privileges) {            
			this.#privileges += ",CREATE";    

		} else {
			this.#privileges += "CREATE";
		}

		return this;
	}

	addGrantAlterPermission() {
		if (this.#privileges) {
			this.#privileges += ",ALTER";

		} else {
			this.#privileges += "ALTER";
		}        
        
		return this;
	}

	addGrantCreateViewPermission() {
		if (this.#privileges) {
			this.#privileges += ",CREATE VIEW";

		} else {
			this.#privileges += "CREATE VIEW";
		}        
        
		return this;
	}

	addGrantDropPermission() {
		if (this.#privileges) {
			this.#privileges += ",DROP";

		} else {
			this.#privileges += "DROP";
		}        
        
		return this;
	}

	addGrantDeleteHistoryPermission() {
		if (this.#privileges) {
			this.#privileges += ",DELETE HISTORY";

		} else {
			this.#privileges += "DELETE HISTORY";
		}        
        
		return this;
	}

	addGrantGrantOptionPermission() {
		if (this.#privileges) {
			this.#privileges += ",GRANT OPTION";

		} else {
			this.#privileges += "GRANT OPTION";
		}        
        
		return this;
	}

	addGrantIndexPermission() {
		if (this.#privileges) {
			this.#privileges += ",INDEX";

		} else {
			this.#privileges += "INDEX";
		}        
        
		return this;
	}

	addGrantShowViewPermission() {
		if (this.#privileges) {
			this.#privileges += ",SHOW VIEW";

		} else {
			this.#privileges += "SHOW VIEW";
		}        
        
		return this;
	}

	addGrantTriggerPermission() {
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
	addGrantDeletePermission() {
		if (this.#privileges) {
			this.#privileges += ",DELETE";

		} else {
			this.#privileges += "DELETE";
		}        
        
		return this;
	}

	addGrantInsertPermission() {
		if (this.#privileges) {
			this.#privileges += ",INSERT";

		} else {
			this.#privileges += "INSERT";
		}        
        
		return this;
	}

	addGrantSelectPermission() {
		if (this.#privileges) {
			this.#privileges += ",SELECT";

		} else {
			this.#privileges += "SELECT";
		}        
        
		return this;
	}

	addGrantUpdatePermission() {
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