class GrantPrivilegesAllTables {

	#privileges;
	#username;
	#host;
	#databaseName;

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
		this.#username = username;
		this.#host = host;
		this.#databaseName = databaseName;
	}

	/**
	 * DDL (Data Definition Language) permissions
	 * DCL (Data Control Language) permissions
	 */
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

	addEventPermission() {
		if (this.#privileges) {
			this.#privileges += ",EVENT";

		} else {
			this.#privileges += "EVENT";
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

	builderGrantStatement() {			
		return `GRANT ${this.#privileges} ON ${this.#databaseName}.* TO ${this.#username}@${this.#host};`;
	}

	builderRevokeStatement() {		
		return `REVOKE ${this.#privileges} ON ${this.#databaseName}.* FROM ${this.#username}@${this.#host};`;
	}
}

module.exports = GrantPrivilegesAllTables;