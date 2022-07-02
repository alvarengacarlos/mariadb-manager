const {it, describe, beforeEach, before} = require("mocha");
const expect = require("chai").expect;

const DatabasePrivileges = require("./DatabasePrivileges");

describe("core/statement/account/DatabasePrivileges.js", () => {

	let username, host, databaseName;
	before(() => {
		username = "myusername";
		host = "localhost";
		databaseName = "db_test";        
	});

	let databasePrivileges;
	beforeEach(() => {
		databasePrivileges = new DatabasePrivileges(username, host, databaseName);
	});
    
	it("given a username, host and database name when executed the grant method then it must create statement to grant ALL PRIVILEGES to the user", () => {
		const statement = databasePrivileges
			.addAllPrivilegesDatabasePermission()
			.builder();

		expect(statement)
			.to.eql(`GRANT ALL PRIVILEGES ON ${databaseName}.* TO ${username}@${host};`);
        
		expect(statement).to.be.string;
	});
    
	it("given a username, host and database name when executed the grant method then it must create statement to grant CREATE to the user", () => {
		const statement = databasePrivileges
			.addCreateDatabasePermission()
			.builder();

		expect(statement)
			.to.eql(`GRANT CREATE ON ${databaseName}.* TO ${username}@${host};`);
        
		expect(statement).to.be.string;
	});

	it("given a username, host and database name when executed the grant method then it must create statement to grant CREATE, CREATE ROUTINE, CREATE TEMPORARY TABLES, DROP, EVENT, GRANT OPTION and LOCK TABLES to the user", () => {
		const statement = databasePrivileges
			.addCreateDatabasePermission()
			.addCreateRoutinePermission()
			.addCreateTemporaryTablesPermission()
			.addDropDatabasePermission()
			.addEventManagerPermission()
			.addGrantOptionPermission()
			.addLockTablesPermission()
			.builder();

		expect(statement)
			.to.eql(`GRANT CREATE,CREATE ROUTINE,CREATE TEMPORARY TABLES,DROP,EVENT,GRANT OPTION,LOCK TABLES ON ${databaseName}.* TO ${username}@${host};`);
        
		expect(statement).to.be.string;
	});
    
});
