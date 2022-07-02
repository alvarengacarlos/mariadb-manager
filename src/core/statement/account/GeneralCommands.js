class GeneralCommands {

	showDatabases() {
		return "SHOW DATABASES;";
	}

	/**
     * 
     * @param {String} databaseName 
     * @returns {String}
     */
	showTables(databaseName) {
		if (!databaseName) {
			throw new Error("databaseName cannot be empty");
		}

		return `USE ${databaseName}; SHOW TABLES;`;
	}
     
	/**
     * 
     * @param {String} username 
     * @param {String} host 
     * @returns {String}
     */
	showCreateUser(username, host) {
		if (!username && !host) {
			throw new Error("username and host cannot be empty");
		}

		return `SHOW CREATE USER ${username}@${host};`;
	}

	showGrants() {
		return "SHOW GRANTS;";
	}

}

module.exports = GeneralCommands;