class AccountManagement {
    
	/**
     * 
     * @param {String} username 
     * @param {String} password 
     * @param {String} host
     * @returns {String}
     */
	createUser(username, password, host) {
		if (!username || !password || !host) {
			throw new Error("username, password and host cannot be empty");
		}

		return `CREATE USER IF NOT EXISTS ${username}@${host} IDENTIFIED BY '${password}';`;
	}

	/**
     * 
     * @param {String} username 
     * @param {String} password 
     * @param {String} host
     * @returns {String}
     */
	alterUser(username, password, host) {
		if (!username || !password || !host) {
			throw new Error("username, password and host cannot be empty");
		}

		return `ALTER USER IF EXISTS ${username}@${host} IDENTIFIED BY '${password}';`;
	}

	/**
     * 
     * @param {String} username 
     * @returns {String}
     */
	dropUser(username) {
		if (!username) {
			throw new Error("username cannot be empty");
		}

		return `DROP USER IF EXISTS ${username};`;
	}

	/**
     * 
     * @param {String} oldUsername 
     * @param {String} oldHost 
     * @param {String} newUsername 
     * @param {String} newHost 
     * @returns {String}
     */
	renameUser(oldUsername, oldHost, newUsername, newHost) {
		if (!oldUsername || !oldHost || !newUsername || !newHost) {
			throw new Error("oldUsername, oldHost, newUsername and newHost cannot be empty");
		}

		return `RENAME USER ${oldUsername}@${oldHost} TO ${newUsername}@${newHost};`;
	}

	revoke() {}
	createRole() {}
	dropRole() {}
	showGrants() {}
}

module.exports = AccountManagement;