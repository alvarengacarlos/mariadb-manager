const { it, describe, before } = require("mocha");
const expect = require("chai").expect;

const GrantAndRevokePrivileges = require("./GrantAndRevokePrivileges");

describe("core/statement/account/GrantAndRevokePrivileges.js", () => {

	let username, host, databaseName, tableName;
	before(() => {
		username = "myusername";
		host = "localhost";
		databaseName = "db_test";
		tableName = "tb_test";
	});

	describe("constructor", () => {

		it("given username, host, database name and no table name when creating the instance then the tableName property must receive an asterisk", () => {
			const grantAndRevokePrivileges1 = new GrantAndRevokePrivileges(username, host, databaseName, null);
			const statement1 = grantAndRevokePrivileges1.buildGrantStatement();

			const grantAndRevokePrivileges2 = new GrantAndRevokePrivileges(username, host, databaseName, undefined);
			const statement2 = grantAndRevokePrivileges2.buildGrantStatement();

			const grantAndRevokePrivileges3 = new GrantAndRevokePrivileges(username, host, databaseName);
			const statement3 = grantAndRevokePrivileges3.buildGrantStatement();

			expect(statement1).to.include("*");
			expect(statement2).to.include("*");
			expect(statement3).to.include("*");

			expect(statement1).to.be.string;
			expect(statement2).to.be.string;
			expect(statement3).to.be.string;
		});

		it("given username, host, database name and table name when creating the instance then the tableName property must receive the table name", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);
			const statement = grantAndRevokePrivileges.buildGrantStatement();

			expect(statement).to.include(tableName);
			expect(statement).to.be.string;
		});

	});

	/**
	 * Grant
	 */
	describe("buildGrantStatement", () => {

		it("given username, host, database name and no table name when executing the addCreateDatabasePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addCreatePermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT CREATE ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addCreateDatabasePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addCreatePermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT CREATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addAlterPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addAlterPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT ALTER ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addAlterPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addAlterPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT ALTER ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addCreateViewPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT CREATE VIEW ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addCreateViewPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT CREATE VIEW ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addDropPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addDropPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT DROP ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addDropPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addDropPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT DROP ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addDeleteHistoryPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT DELETE HISTORY ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addDeleteHistoryPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT DELETE HISTORY ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addGrantOptionPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT GRANT OPTION ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantOptionPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addGrantOptionPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT GRANT OPTION ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addIndexPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addIndexPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT INDEX ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addIndexPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addIndexPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT INDEX ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addShowViewPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addShowViewPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT SHOW VIEW ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addShowViewPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addShowViewPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT SHOW VIEW ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addTriggerPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addTriggerPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT TRIGGER ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addTriggerPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addTriggerPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT TRIGGER ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addDeletePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addDeletePermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT DELETE ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addDeletePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addDeletePermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT DELETE ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addInsertPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addInsertPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT INSERT ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addInsertPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addInsertPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT INSERT ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addSelectPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addSelectPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT SELECT ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addSelectPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addSelectPermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT SELECT ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addUpdatePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addUpdatePermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT UPDATE ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addUpdatePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addUpdatePermission()
				.buildGrantStatement();

			expect(statement).to.eql(`GRANT UPDATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given a username, host, database name and no table name when executing all methods then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addCreatePermission()
				.addAlterPermission()
				.addCreateViewPermission()
				.addDropPermission()
				.addDeleteHistoryPermission()
				.addGrantOptionPermission()
				.addIndexPermission()
				.addShowViewPermission()
				.addTriggerPermission()
				.addDeletePermission()
				.addInsertPermission()
				.addSelectPermission()
				.addUpdatePermission()
				.buildGrantStatement();

			expect(statement)
				.to.eql(`GRANT CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.* TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host, database name and table name when executed the all methods then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addCreatePermission()
				.addAlterPermission()
				.addCreateViewPermission()
				.addDropPermission()
				.addDeleteHistoryPermission()
				.addGrantOptionPermission()
				.addIndexPermission()
				.addShowViewPermission()
				.addTriggerPermission()
				.addDeletePermission()
				.addInsertPermission()
				.addSelectPermission()
				.addUpdatePermission()
				.buildGrantStatement();

			expect(statement)
				.to.eql(`GRANT CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.${tableName} TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

	});

	/**
	 * Revoke
	 */

	describe("buildRevokeStatement", () => {

		it("given username, host, database name and no table name when executing the addCreatePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addCreatePermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE CREATE ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addCreatePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addCreatePermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE CREATE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addAlterPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addAlterPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE ALTER ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addAlterPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addAlterPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE ALTER ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addCreateViewPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE CREATE VIEW ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addCreateViewPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE CREATE VIEW ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addDropPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addDropPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE DROP ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addDropPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addDropPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE DROP ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addDeleteHistoryPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE DELETE HISTORY ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addDeleteHistoryPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE DELETE HISTORY ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addRevokeOptionPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addGrantOptionPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE GRANT OPTION ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeOptionPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addGrantOptionPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE GRANT OPTION ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addIndexPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addIndexPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE INDEX ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addIndexPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addIndexPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE INDEX ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addShowViewPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addShowViewPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE SHOW VIEW ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addShowViewPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addShowViewPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE SHOW VIEW ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addTriggerPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addTriggerPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE TRIGGER ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addTriggerPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addTriggerPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE TRIGGER ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addDeletePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addDeletePermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE DELETE ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addDeletePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addDeletePermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE DELETE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addInsertPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addInsertPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE INSERT ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addInsertPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addInsertPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE INSERT ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addSelectPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addSelectPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE SELECT ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addSelectPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addSelectPermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE SELECT ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and no table name when executing the addUpdatePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addUpdatePermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE UPDATE ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addUpdatePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addUpdatePermission()
				.buildRevokeStatement();

			expect(statement).to.eql(`REVOKE UPDATE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given a username, host, database name and no table name when executing all methods then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

			const statement = grantAndRevokePrivileges
				.addCreatePermission()
				.addAlterPermission()
				.addCreateViewPermission()
				.addDropPermission()
				.addDeleteHistoryPermission()
				.addGrantOptionPermission()
				.addIndexPermission()
				.addShowViewPermission()
				.addTriggerPermission()
				.addDeletePermission()
				.addInsertPermission()
				.addSelectPermission()
				.addUpdatePermission()
				.buildRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.* FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host, database name and table name when executed the all methods then it must create a correct statement", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokePrivileges
				.addCreatePermission()
				.addAlterPermission()
				.addCreateViewPermission()
				.addDropPermission()
				.addDeleteHistoryPermission()
				.addGrantOptionPermission()
				.addIndexPermission()
				.addShowViewPermission()
				.addTriggerPermission()
				.addDeletePermission()
				.addInsertPermission()
				.addSelectPermission()
				.addUpdatePermission()
				.buildRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.${tableName} FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

	});


});