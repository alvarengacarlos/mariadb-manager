const { it, describe, beforeEach, before } = require("mocha");
const expect = require("chai").expect;

const ColumnPrivileges = require("./ColumnPrivileges");

describe("core/statement/account/ColumnPrivileges.js", () => {

	let username, host, databaseName, tableName;
	before(() => {
		username = "myusername";
		host = "localhost";
		databaseName = "db_test";
		tableName = "tb_test";
	});

	let columnPrivileges;
	beforeEach(() => {
		columnPrivileges = new ColumnPrivileges(username, host, databaseName, tableName);
	});

	it("given a username, host and database name when executed the grant method then it must create statement to grant INSERT to the user", () => {
		const statement = columnPrivileges
			.addInsertColumnPermission("id", "name")
			.builder();
        
        expect(statement)
            .to.eql(`GRANT INSERT (id,name) ON ${databaseName}.${tableName} TO ${username}@${host};`);
        
        expect(statement).to.be.string;
	});

    it("given a username, host and database name when executed the grant method then it must create statement to grant INSERT, SELECT and UPDATE to the user", () => {
		const statement = columnPrivileges
			.addInsertColumnPermission("id", "name")
            .addSelectColumnPermission("id", "name", "age")
            .addUpdateColumnPermission("id", "name")
			.builder();
        
        expect(statement)
            .to.eql(`GRANT INSERT (id,name),SELECT (id,name,age),UPDATE (id,name) ON ${databaseName}.${tableName} TO ${username}@${host};`);
        
        expect(statement).to.be.string;
	});
});