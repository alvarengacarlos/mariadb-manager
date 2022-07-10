class Role {
	
	/**
	 * 
	 * @param {String} roleName 
	 * @param {String} adminUserOfRole 
	 * @param {String} roleAdminUserHost 
	 * @returns 
	 */
	createRole(roleName, adminUserOfRole, roleAdminUserHost) {
		if (!roleName) {
			throw new Error("roleName cannot be empty");
		}
		
		if (adminUserOfRole && !roleAdminUserHost || roleAdminUserHost && !adminUserOfRole) {
			throw new Error("adminUserOfRole and roleAdminUserHost must be set together");
		}
		
		if (adminUserOfRole && roleAdminUserHost) {
			return `CREATE ROLE IF NOT EXISTS ${roleName} WITH ADMIN ${adminUserOfRole}@${roleAdminUserHost};`
		}

		return `CREATE ROLE IF NOT EXISTS ${roleName};`
	}

	/**
	 * 
	 * @param {String} roleName 
	 * @returns {String}
	 */
	dropRole(roleName) {
		if (!roleName) {
			throw new Error("roleName cannot be empty");
		}

		return `DROP ROLE ${roleName};`;
	}

	/**
     * 
     * @param {String} username 
     * @param {String} host 
     * @param {String} databaseName 
     * @param {String} tableName
     * @returns {String}
     */    
    grantRole(username, host, roleName) {			
		if (!username || !host || !roleName) {
			throw new Error("username, host and roleName cannot be empty");
		}

		return `GRANT ${roleName} TO ${username}@${host};`;
	}

	/**
     * 
     * @param {String} username 
     * @param {String} host 
     * @param {String} databaseName 
     * @param {String} tableName
     * @returns {String}
     */    
    revokeRole(username, host, roleName) {	
		if (!username || !host || !roleName) {
			throw new Error("username, host and roleName cannot be empty");
		}

		return `REVOKE ${roleName} FROM ${username}@${host};`;
	}

}

module.exports = Role;