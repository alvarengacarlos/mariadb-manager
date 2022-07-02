class DatabasePrivileges {

	#privileges;
	#baseStatement;

	/**
     * 
     * @param {String} username 
     * @param {String} host 
     * @param {String} databaseName 
     * @returns {String}
     */    
	constructor(username, host, databaseName) {
		if (!username || !host || !databaseName) {
			throw new Error("username, host and databaseName cannot be empty");
		}

		this.#privileges = "";
		this.#baseStatement = `ON ${databaseName} TO ${username}@${host};`;
	}

	addAllPrivilegesDatabasePermission() {		
		this.#privileges += "ALL PRIVILEGES";		
        
		return this;
	}

	addCreateDatabasePermission() {
		if (this.#privileges) {            
			this.#privileges += ",CREATE";    

		} else {
			this.#privileges += "CREATE";
		}

		return this;
	}

	addCreateRoutinePermission() {
		if (this.#privileges) {
			this.#privileges += ",CREATE ROUTINE";

		} else {
			this.#privileges += "CREATE ROUTINE";
		}
        
		return this;
	}

	addCreateTemporaryTablesPermission() {
		if (this.#privileges) {
			this.#privileges += ",CREATE TEMPORARY TABLES";

		} else {
			this.#privileges += "CREATE TEMPORARY TABLES";
		}
        
		return this;        
	}

	addDropDatabasePermission() {
		if (this.#privileges) {
			this.#privileges += ",DROP";

		} else {
			this.#privileges += "DROP";
		}
        
		return this;
	}

	addEventManagerPermission() {
		if (this.#privileges) {
			this.#privileges += ",EVENT";

		} else {
			this.#privileges += "EVENT";
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

	addLockTablesPermission() {
		if (this.#privileges) {
			this.#privileges += ",LOCK TABLES";
        
		} else {
			this.#privileges += "LOCK TABLES";
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

module.exports = DatabasePrivileges;