class ColumnPrivileges {

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
		if (!username || !host || !databaseName || !tableName) {
			throw new Error("username, host, databaseName and tableName cannot be empty");
		}

		this.#privileges = "";
		this.#baseStatement = `ON ${databaseName}.${tableName} TO ${username}@${host};`;
	}

	addInsertColumnPermission(...columnList) {
		if (this.#privileges) {
			this.#privileges += `,INSERT (${columnList.join(",")})`;
        
		} else {
			this.#privileges += `INSERT (${columnList.join(",")})`;
		}
        
		return this;
	}

	addSelectColumnPermission(...columnList) {
		if (this.#privileges) {
			this.#privileges += `,SELECT (${columnList.join(",")})`;
        
		} else {
			this.#privileges += `SELECT (${columnList.join(",")})`;
		}
        
		return this;
	}

	addUpdateColumnPermission(...columnList) {
		if (this.#privileges) {
			this.#privileges += `,UPDATE (${columnList.join(",")})`;
        
		} else {
			this.#privileges += `UPDATE (${columnList.join(",")})`;
		}
        
		return this;
	}

	builder() {	
		return `GRANT ${this.#privileges} ${this.#baseStatement}`;
	}

}

module.exports = ColumnPrivileges;