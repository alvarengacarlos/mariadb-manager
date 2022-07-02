const { it, describe, beforeEach, before } = require("mocha");
const expect = require("chai").expect;

const TablePrivileges = require("./TablePrivileges");

describe("core/statement/account/TablePrivileges.js", () => {

	let username, host, databaseName, tableName;
	before(() => {
		username = "myusername";
		host = "localhost";
		databaseName = "db_test";
		tableName = "tb_test";
	});

	let tablePrivileges;
	beforeEach(() => {
		tablePrivileges = new TablePrivileges(username, host, databaseName, tableName);
	});

	it("given a username, host and database name when executed the grant method then it must throw error because ALL PRIVILEGES is set and another statement too", () => {
		tablePrivileges = new TablePrivileges(username, host, databaseName, undefined);

		expect(() => {
			tablePrivileges
				.addAllPrivilegesTablePermission()
				.addAlterTablePermission()
				.builder();
		}).to.throw(Error);
	});

	it("given a username, host and database name when executed the grant method then it must create statement to grant ALL PRIVILEGES to the user", () => {
		tablePrivileges = new TablePrivileges(username, host, databaseName, undefined);

		const statement = tablePrivileges
			.addAllPrivilegesTablePermission()
			.builder();

		expect(statement)
			.to.eql(`GRANT ALL PRIVILEGES ON ${databaseName}.* TO ${username}@${host};`);

		expect(statement).to.be.string;
	});

	it("given a username, host, database name and table name when executed the grant method then it must throw error because ALL PRIVILEGES is set and another statement too", () => {
		expect(() => {
			tablePrivileges
				.addAllPrivilegesTablePermission()
				.addAlterTablePermission()
				.builder();
		}).to.throw(Error);
	});

	it("given a username, host, database name and table name when executed the grant method then it must create statement to grant ALL PRIVILEGES to the user", () => {
		const statement = tablePrivileges
			.addAllPrivilegesTablePermission()
			.builder();

		expect(statement)
			.to.eql(`GRANT ALL PRIVILEGES ON ${databaseName}.${tableName} TO ${username}@${host};`);

		expect(statement).to.be.string;
	});

	it("given a username, host, database name and table name when executed the grant method then it must create statement to grant ALTER to the user", () => {
		const statement = tablePrivileges
			.addAlterTablePermission()
			.builder();

		expect(statement)
			.to.eql(`GRANT ALTER ON ${databaseName}.${tableName} TO ${username}@${host};`);

		expect(statement).to.be.string;
	});

	it("given a username, host, database name and table name when executed the grant method then it must create statement to grant ALTER, CREATE, CREATE VIEW, DELETE, DELETE HISTORY, DROP, GRANT OPTION, INDEX, INSERT, SELECT, SHOW VIEW, TRIGGER and UPDATE to the user", () => {
		const statement = tablePrivileges
			.addAlterTablePermission()
			.addCreateTablePermission()
			.addCreateViewTablePermission()
			.addDeleteTablePermission()
			.addDeleteHistoryTablePermission()
			.addDropTablePermission()
			.addGrantOptionTablePermission()
			.addIndexTablePermission()
			.addInsertTablePermission()
			.addSelectTablePermission()
			.addShowViewTablePermission()
			.addTriggerTablePermission()
			.addUpdateTablePermission()
			.builder();

		expect(statement)
			.to.eql(`GRANT ALTER,CREATE,CREATE VIEW,DELETE,DELETE HISTORY,DROP,GRANT OPTION,INDEX,INSERT,SELECT,SHOW VIEW,TRIGGER,UPDATE ON ${databaseName}.${tableName} TO ${username}@${host};`);

		expect(statement).to.be.string;
	});

});
