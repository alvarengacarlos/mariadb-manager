class GrantAndRevokeRoles {
	
	#username;	
	#host;
    #roleName

	/**
     * 
     * @param {String} username 
     * @param {String} host 
     * @param {String} databaseName 
     * @param {String} tableName
     * @returns {String}
     */    
	constructor(username, host, roleName) {
		if (!username || !host || !roleName) {
			throw new Error("username, host and roleName cannot be empty");
		}

		this.#username = username;
		this.#host = host;
        this.#roleName = roleName
	}

    builderGrantStatement() {			
		return `GRANT ${this.#roleName} TO ${this.#username}@${this.#host};`;
	}

    builderRevokeStatement() {			
		return `REVOKE ${this.#roleName} FROM ${this.#username}@${this.#host};`;
	}

}

module.exports = GrantAndRevokeRoles;