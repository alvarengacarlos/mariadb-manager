const { it, describe, before } = require("mocha");
const expect = require("chai").expect;

const GrantAndRevokePrivileges = require("./GrantAndRevokePrivileges");

describe("GrantAndRevokePrivileges.js", () => {

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
			const statement1 = grantAndRevokePrivileges1.builderGrantStatement();

			const grantAndRevokePrivileges2 = new GrantAndRevokePrivileges(username, host, databaseName, undefined);
			const statement2 = grantAndRevokePrivileges2.builderGrantStatement();

			const grantAndRevokePrivileges3 = new GrantAndRevokePrivileges(username, host, databaseName);
			const statement3 = grantAndRevokePrivileges3.builderGrantStatement();

			expect(statement1).to.include("*");
			expect(statement2).to.include("*");
			expect(statement3).to.include("*");

			expect(statement1).to.be.string;
			expect(statement2).to.be.string;
			expect(statement3).to.be.string;
		});

		it("given username, host, database name and table name when creating the instance then the tableName property must receive the table name", () => {
			const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);
			const statement = grantAndRevokePrivileges.builderGrantStatement();

			expect(statement).to.include(tableName);
			expect(statement).to.be.string;
		});

	});

	describe("Grant", () => {

		describe("addDeletePermission", () => {

			it("given username, host, database name and no table name when executing the addDeletePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addDeletePermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT DELETE ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addDeletePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addDeletePermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT DELETE ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addInsertPermission", () => {

			it("given username, host, database name and no table name when executing the addInsertPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addInsertPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT INSERT ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addInsertPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addInsertPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT INSERT ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addSelectPermission", () => {

			it("given username, host, database name and no table name when executing the addSelectPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addSelectPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT SELECT ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addSelectPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addSelectPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT SELECT ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addUpdatePermission", () => {

			it("given username, host, database name and no table name when executing the addUpdatePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addUpdatePermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT UPDATE ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addUpdatePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addUpdatePermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT UPDATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addCreatePermission", () => {

			it("given username, host, database name and no table name when executing the addCreateDatabasePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addCreatePermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT CREATE ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addCreateDatabasePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addCreatePermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT CREATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addAlterPermission", () => {

			it("given username, host, database name and no table name when executing the addAlterPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addAlterPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT ALTER ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addAlterPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addAlterPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT ALTER ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addCreateViewPermission", () => {

			it("given username, host, database name and no table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addCreateViewPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT CREATE VIEW ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addCreateViewPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT CREATE VIEW ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addDropPermission", () => {

			it("given username, host, database name and no table name when executing the addDropPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addDropPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT DROP ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addDropPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addDropPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT DROP ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addDeleteHistoryPermission", () => {

			it("given username, host, database name and no table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addDeleteHistoryPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT DELETE HISTORY ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addDeleteHistoryPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT DELETE HISTORY ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addGrantOptionPermission", () => {

			it("given username, host, database name and no table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addGrantOptionPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT GRANT OPTION ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addGrantOptionPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addGrantOptionPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT GRANT OPTION ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addIndexPermission", () => {

			it("given username, host, database name and no table name when executing the addIndexPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addIndexPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT INDEX ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addIndexPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addIndexPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT INDEX ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addShowViewPermission", () => {

			it("given username, host, database name and no table name when executing the addShowViewPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addShowViewPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT SHOW VIEW ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addShowViewPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addShowViewPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT SHOW VIEW ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addTriggerPermission", () => {

			it("given username, host, database name and no table name when executing the addTriggerPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addTriggerPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT TRIGGER ON ${databaseName}.* TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addTriggerPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addTriggerPermission()
					.builderGrantStatement();

				expect(statement).to.eql(`GRANT TRIGGER ON ${databaseName}.${tableName} TO ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		/**
		 * The four describe below accept just asterisk in constructor tableName parameter
		 */
		describe("addCreateRoutinePermission", () => {

			it("given a username, host and database name when executing the addCreateRoutinePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivileges(username, host, databaseName);

				const statement = grantAndRevokePrivilegesAllTables
					.addCreateRoutinePermission()
					.builderGrantStatement();

				expect(statement)
					.to.eql(`GRANT CREATE ROUTINE ON ${databaseName}.* TO ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});

		describe("addCreateTemporaryTablesPermission", () => {

			it("given a username, host and database name when executing the addCreateTemporaryTablesPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivileges(username, host, databaseName);

				const statement = grantAndRevokePrivilegesAllTables
					.addCreateTemporaryTablesPermission()
					.builderGrantStatement();

				expect(statement)
					.to.eql(`GRANT CREATE TEMPORARY TABLES ON ${databaseName}.* TO ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});

		describe("addEventPermission", () => {

			it("given a username, host and database name when executing the addEventPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivileges(username, host, databaseName);

				const statement = grantAndRevokePrivilegesAllTables
					.addEventPermission()
					.builderGrantStatement();

				expect(statement)
					.to.eql(`GRANT EVENT ON ${databaseName}.* TO ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});

		describe("addLockTablesPermission", () => {

			it("given a username, host and database name when executing the addLockTablesPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivileges(username, host, databaseName);

				const statement = grantAndRevokePrivilegesAllTables
					.addLockTablesPermission()
					.builderGrantStatement();

				expect(statement)
					.to.eql(`GRANT LOCK TABLES ON ${databaseName}.* TO ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});


		describe("all methods", () => {

			it("given a username, host, database name and no table name when executing all methods then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addDeletePermission()
					.addInsertPermission()
					.addSelectPermission()
					.addUpdatePermission()
					.addCreatePermission()
					.addAlterPermission()
					.addCreateViewPermission()
					.addDropPermission()
					.addDeleteHistoryPermission()
					.addGrantOptionPermission()
					.addIndexPermission()
					.addShowViewPermission()
					.addTriggerPermission()
					.addCreateRoutinePermission()
					.addCreateTemporaryTablesPermission()
					.addEventPermission()
					.addLockTablesPermission()
					.builderGrantStatement();

				expect(statement)
					.to.eql(`GRANT DELETE,INSERT,SELECT,UPDATE,CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,CREATE ROUTINE,CREATE TEMPORARY TABLES,EVENT,LOCK TABLES ON ${databaseName}.* TO ${username}@${host};`);

				expect(statement).to.be.string;
			});

			it("given a username, host, database name and table name when executed the all methods then it must throw Error because the syntax is incorrect for the some permissions", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);
				expect(() => {
					grantAndRevokePrivileges
						.addDeletePermission()
						.addInsertPermission()
						.addSelectPermission()
						.addUpdatePermission()
						.addCreatePermission()
						.addAlterPermission()
						.addCreateViewPermission()
						.addDropPermission()
						.addDeleteHistoryPermission()
						.addGrantOptionPermission()
						.addIndexPermission()
						.addShowViewPermission()
						.addTriggerPermission()
						.addCreateRoutinePermission()
						.addCreateTemporaryTablesPermission()
						.addEventPermission()
						.addLockTablesPermission()
						.builderGrantStatement();

				}).to.throw(Error);
			});

			it("given a username, host, database name and table name when executed the all methods then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addDeletePermission()
					.addInsertPermission()
					.addSelectPermission()
					.addUpdatePermission()
					.addCreatePermission()
					.addAlterPermission()
					.addCreateViewPermission()
					.addDropPermission()
					.addDeleteHistoryPermission()
					.addGrantOptionPermission()
					.addIndexPermission()
					.addShowViewPermission()
					.addTriggerPermission()
					.builderGrantStatement();

				expect(statement)
					.to.eql(`GRANT DELETE,INSERT,SELECT,UPDATE,CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER ON ${databaseName}.${tableName} TO ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});

	});

	describe("Revoke", () => {

		describe("addDeletePermission", () => {

			it("given username, host, database name and no table name when executing the addDeletePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addDeletePermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE DELETE ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addDeletePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addDeletePermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE DELETE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addInsertPermission", () => {

			it("given username, host, database name and no table name when executing the addInsertPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addInsertPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE INSERT ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addInsertPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addInsertPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE INSERT ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addSelectPermission", () => {

			it("given username, host, database name and no table name when executing the addSelectPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addSelectPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE SELECT ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addSelectPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addSelectPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE SELECT ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addUpdatePermission", () => {

			it("given username, host, database name and no table name when executing the addUpdatePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addUpdatePermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE UPDATE ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addUpdatePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addUpdatePermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE UPDATE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addCreatePermission", () => {

			it("given username, host, database name and no table name when executing the addCreatePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addCreatePermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE CREATE ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addCreatePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addCreatePermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE CREATE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addAlterPermission", () => {

			it("given username, host, database name and no table name when executing the addAlterPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addAlterPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE ALTER ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addAlterPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addAlterPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE ALTER ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addCreateViewPermission", () => {

			it("given username, host, database name and no table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addCreateViewPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE CREATE VIEW ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addCreateViewPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE CREATE VIEW ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addDropPermission", () => {

			it("given username, host, database name and no table name when executing the addDropPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addDropPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE DROP ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addDropPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addDropPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE DROP ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addDeleteHistoryPermission", () => {

			it("given username, host, database name and no table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addDeleteHistoryPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE DELETE HISTORY ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addDeleteHistoryPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE DELETE HISTORY ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addGrantOptionPermission", () => {

			it("given username, host, database name and no table name when executing the addRevokeOptionPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addGrantOptionPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE GRANT OPTION ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addRevokeOptionPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addGrantOptionPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE GRANT OPTION ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addIndexPermission", () => {

			it("given username, host, database name and no table name when executing the addIndexPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addIndexPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE INDEX ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addIndexPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addIndexPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE INDEX ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addShowViewPermission", () => {

			it("given username, host, database name and no table name when executing the addShowViewPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addShowViewPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE SHOW VIEW ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addShowViewPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addShowViewPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE SHOW VIEW ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		describe("addTriggerPermission", () => {

			it("given username, host, database name and no table name when executing the addTriggerPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, null);

				const statement = grantAndRevokePrivileges
					.addTriggerPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE TRIGGER ON ${databaseName}.* FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

			it("given username, host, database name and table name when executing the addTriggerPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addTriggerPermission()
					.builderRevokeStatement();

				expect(statement).to.eql(`REVOKE TRIGGER ON ${databaseName}.${tableName} FROM ${username}@${host};`);
				expect(statement).to.be.string;
			});

		});

		/**
		   * The four describe below accept just asterisk in constructor tableName parameter
		   */
		describe("addCreateRoutinePermission", () => {

			it("given a username, host and database name when executing the addCreateRoutinePermission method then it must create a correct statement", () => {
				const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivileges(username, host, databaseName);

				const statement = grantAndRevokePrivilegesAllTables
					.addCreateRoutinePermission()
					.builderRevokeStatement();

				expect(statement)
					.to.eql(`REVOKE CREATE ROUTINE ON ${databaseName}.* FROM ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});

		describe("addCreateTemporaryTablesPermission", () => {

			it("given a username, host and database name when executing the addCreateTemporaryTablesPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivileges(username, host, databaseName);

				const statement = grantAndRevokePrivilegesAllTables
					.addCreateTemporaryTablesPermission()
					.builderRevokeStatement();

				expect(statement)
					.to.eql(`REVOKE CREATE TEMPORARY TABLES ON ${databaseName}.* FROM ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});

		describe("addEventPermission", () => {

			it("given a username, host and database name when executing the addEventPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivileges(username, host, databaseName);

				const statement = grantAndRevokePrivilegesAllTables
					.addEventPermission()
					.builderRevokeStatement();

				expect(statement)
					.to.eql(`REVOKE EVENT ON ${databaseName}.* FROM ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});

		describe("addLockTablesPermission", () => {

			it("given a username, host and database name when executing the addLockTablesPermission method then it must create a correct statement", () => {
				const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivileges(username, host, databaseName);

				const statement = grantAndRevokePrivilegesAllTables
					.addLockTablesPermission()
					.builderRevokeStatement();

				expect(statement)
					.to.eql(`REVOKE LOCK TABLES ON ${databaseName}.* FROM ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});


		describe("all methods", () => {

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
					.addCreateRoutinePermission()
					.addCreateTemporaryTablesPermission()
					.addEventPermission()
					.addLockTablesPermission()
					.builderRevokeStatement();

				expect(statement)
					.to.eql(`REVOKE CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE,CREATE ROUTINE,CREATE TEMPORARY TABLES,EVENT,LOCK TABLES ON ${databaseName}.* FROM ${username}@${host};`);

				expect(statement).to.be.string;
			});

			it("given a username, host, database name and table name when executed the all methods then it must throw Error because the syntax is incorrect for the some permissions", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);
				expect(() => {
					grantAndRevokePrivileges
						.addDeletePermission()
						.addInsertPermission()
						.addSelectPermission()
						.addUpdatePermission()
						.addCreatePermission()
						.addAlterPermission()
						.addCreateViewPermission()
						.addDropPermission()
						.addDeleteHistoryPermission()
						.addGrantOptionPermission()
						.addIndexPermission()
						.addShowViewPermission()
						.addTriggerPermission()
						.addCreateRoutinePermission()
						.addCreateTemporaryTablesPermission()
						.addEventPermission()
						.addLockTablesPermission()
						.builderRevokeStatement();

				}).to.throw(Error);
			});

			it("given a username, host, database name and table name when executed the all methods then it must create a correct statement", () => {
				const grantAndRevokePrivileges = new GrantAndRevokePrivileges(username, host, databaseName, tableName);

				const statement = grantAndRevokePrivileges
					.addDeletePermission()
					.addInsertPermission()
					.addSelectPermission()
					.addUpdatePermission()
					.addCreatePermission()
					.addAlterPermission()
					.addCreateViewPermission()
					.addDropPermission()
					.addDeleteHistoryPermission()
					.addGrantOptionPermission()
					.addIndexPermission()
					.addShowViewPermission()
					.addTriggerPermission()
					.builderRevokeStatement();

				expect(statement)
					.to.eql(`REVOKE DELETE,INSERT,SELECT,UPDATE,CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER ON ${databaseName}.${tableName} FROM ${username}@${host};`);

				expect(statement).to.be.string;
			});

		});
	});

});