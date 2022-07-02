class TablePrivileges {
    
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
	constructor(username, host, databaseName, tableName = "*") {
		if (!username || !host || !databaseName) {
			throw new Error("username, host and databaseName cannot be empty");
		}

		this.#privileges = "";
		this.#baseStatement = `ON ${databaseName}.${tableName} TO ${username}@${host};`;
	}

	addAllPrivilegesTablePermission() {		
		this.#privileges += "ALL PRIVILEGES";

		return this;
	}

	addAlterTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",ALTER";

		} else {
			this.#privileges += "ALTER";
		}        
        
		return this;
	}

	addCreateTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",CREATE";

		} else {
			this.#privileges += "CREATE";
		}        
        
		return this;
	}

	addCreateViewTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",CREATE VIEW";

		} else {
			this.#privileges += "CREATE VIEW";
		}        
        
		return this;
	}

	addDeleteTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",DELETE";

		} else {
			this.#privileges += "DELETE";
		}        
        
		return this;
	}

	addDeleteHistoryTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",DELETE HISTORY";

		} else {
			this.#privileges += "DELETE HISTORY";
		}        
        
		return this;
	}

	addDropTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",DROP";

		} else {
			this.#privileges += "DROP";
		}        
        
		return this;
	}

	addGrantOptionTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",GRANT OPTION";

		} else {
			this.#privileges += "GRANT OPTION";
		}        
        
		return this;
	}

	addIndexTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",INDEX";

		} else {
			this.#privileges += "INDEX";
		}        
        
		return this;
	}

	addInsertTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",INSERT";

		} else {
			this.#privileges += "INSERT";
		}        
        
		return this;
	}

	addSelectTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",SELECT";

		} else {
			this.#privileges += "SELECT";
		}        
        
		return this;
	}

	addShowViewTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",SHOW VIEW";

		} else {
			this.#privileges += "SHOW VIEW";
		}        
        
		return this;
	}

	addTriggerTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",TRIGGER";

		} else {
			this.#privileges += "TRIGGER";
		}        
        
		return this;
	}

	addUpdateTablePermission() {
		if (this.#privileges) {
			this.#privileges += ",UPDATE";

		} else {
			this.#privileges += "UPDATE";
		}        
        
		return this;
	}

	builder() {
		if (this.#privileges.includes("ALL PRIVILEGES") && this.#privileges.split(",").length >= 2) {
			throw new Error("if ALL PRIVILEGES is set, then only it is allowed");
		}

		return `GRANT ${this.#privileges} ${this.#baseStatement}`;
	}

}

module.exports = TablePrivileges;