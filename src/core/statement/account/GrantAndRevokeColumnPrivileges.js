class ColumnPrivileges {

	#privileges;			
	#username;
	#databaseName;	
	#tableName;
	#host;

	/**
     * 
     * @param {String} username 
     * @param {String} host 
     * @param {String} databaseName 
     * @param {String} tableName
     * @returns {String}
     */    
	constructor(username, host, databaseName, tableName) {
		if (!username || !host || !databaseName || !tableName) {
			throw new Error("username, host, databaseName and tableName cannot be empty");
		}

		this.#privileges = "";
		this.#username = username;
		this.#databaseName = databaseName;
		this.#tableName = tableName;
		this.#host = host;
	}

	addInsertColumnPermission(...columnList) {
		if (this.#privileges) {
			this.#privileges += `,INSERT(${columnList.join(",")})`;
        
		} else {
			this.#privileges += `INSERT(${columnList.join(",")})`;
		}
        
		return this;
	}

	addSelectColumnPermission(...columnList) {
		if (this.#privileges) {
			this.#privileges += `,SELECT(${columnList.join(",")})`;
        
		} else {
			this.#privileges += `SELECT(${columnList.join(",")})`;
		}
        
		return this;
	}

	addUpdateColumnPermission(...columnList) {
		if (this.#privileges) {
			this.#privileges += `,UPDATE(${columnList.join(",")})`;
        
		} else {
			this.#privileges += `UPDATE(${columnList.join(",")})`;
		}
        
		return this;
	}

	builderGrantStatement() {			
		return `GRANT ${this.#privileges} ON ${this.#databaseName}.${this.#tableName} TO ${this.#username}@${this.#host};`;
	}

	builderRevokeStatement() {		
		return `REVOKE ${this.#privileges} ON ${this.#databaseName}.${this.#tableName} FROM ${this.#username}@${this.#host};`;
	}

}

module.exports = ColumnPrivileges;