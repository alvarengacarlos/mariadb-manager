class RevokePrivileges {

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
		this.#baseStatement = `ON ${databaseName}.${tableName} FROM ${username}@${host};`;
	}

    /**
	 * DDL (Data Definition Language) permissions
	 * DCL (Data Control Language) permissions
	 */
    addRevokeCreatePermission() {
		if (this.#privileges) {            
			this.#privileges += ",CREATE";    

		} else {
			this.#privileges += "CREATE";
		}

		return this;
	}

	addRevokeAlterPermission() {
		if (this.#privileges) {
			this.#privileges += ",ALTER";

		} else {
			this.#privileges += "ALTER";
		}        
        
		return this;
	}

    addRevokeCreateViewPermission() {
		if (this.#privileges) {
			this.#privileges += ",CREATE VIEW";

		} else {
			this.#privileges += "CREATE VIEW";
		}        
        
		return this;
	}

    addRevokeDropPermission() {
		if (this.#privileges) {
			this.#privileges += ",DROP";

		} else {
			this.#privileges += "DROP";
		}
        
		return this;
	}

	addRevokeDeleteHistoryPermission() {
		if (this.#privileges) {
			this.#privileges += ",DELETE HISTORY";

		} else {
			this.#privileges += "DELETE HISTORY";
		}        
        
		return this;
	}

	addRevokeGrantOptionPermission() {
		if (this.#privileges) {
			this.#privileges += ",GRANT OPTION";
        
		} else {
			this.#privileges += "GRANT OPTION";
		}

		return this;
	}
    
	addRevokeIndexPermission() {
		if (this.#privileges) {
			this.#privileges += ",INDEX";

		} else {
			this.#privileges += "INDEX";
		}        
        
		return this;
	}

    addRevokeShowViewPermission() {
		if (this.#privileges) {
			this.#privileges += ",SHOW VIEW";

		} else {
			this.#privileges += "SHOW VIEW";
		}        
        
		return this;
	}

	addRevokeTriggerPermission() {
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
	addRevokeDeletePermission() {
		if (this.#privileges) {
			this.#privileges += ",DELETE";

		} else {
			this.#privileges += "DELETE";
		}        
        
		return this;
	}

	addRevokeInsertPermission() {
		if (this.#privileges) {
			this.#privileges += ",INSERT";

		} else {
			this.#privileges += "INSERT";
		}        
        
		return this;
	}

	addRevokeSelectPermission() {
		if (this.#privileges) {
			this.#privileges += ",SELECT";

		} else {
			this.#privileges += "SELECT";
		}        
        
		return this;
	}

	addRevokeUpdatePermission() {
		if (this.#privileges) {
			this.#privileges += ",UPDATE";

		} else {
			this.#privileges += "UPDATE";
		}        
        
		return this;
	}

    builder() {	
		return `REVOKE ${this.#privileges} ${this.#baseStatement}`;
	}

}

module.exports = RevokePrivileges;