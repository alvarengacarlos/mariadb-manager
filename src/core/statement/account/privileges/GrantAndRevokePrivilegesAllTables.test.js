const { it, describe, before } = require("mocha");
const expect = require("chai").expect;

const GrantAndRevokePrivilegesAllTables = require("./GrantAndRevokePrivilegesAllTables");

describe("GrantPrivilegesAllTables.js", () => {

	let username, host, databaseName;
	before(() => {
		username = "myusername";
		host = "localhost";
		databaseName = "db_test";
	});

	describe("constructor", () => {

		it("given no user name, no host and no database name when executed the function then it must throw Error", () => {
			expect(() => {
				new GrantAndRevokePrivilegesAllTables();
			
			}).to.throw(Error);
		});

	});

	/**
	 * Grant
	 */
	describe("builderGrantStatement", () => {
		
		it("given a username, host and database name when executing the addCreateRoutinePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables
				.addCreateRoutinePermission()
				.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT CREATE ROUTINE ON ${databaseName}.* TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addCreateTemporaryTablesPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables
				.addCreateTemporaryTablesPermission()
				.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT CREATE TEMPORARY TABLES ON ${databaseName}.* TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addEventPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables
				.addEventPermission()
				.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT EVENT ON ${databaseName}.* TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addLockTablesPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables
				.addLockTablesPermission()
				.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT LOCK TABLES ON ${databaseName}.* TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executed the all methods then it must create a correct statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables				
				.addCreateRoutinePermission()
				.addCreateTemporaryTablesPermission()
				.addEventPermission()
				.addLockTablesPermission()
				.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT CREATE ROUTINE,CREATE TEMPORARY TABLES,EVENT,LOCK TABLES ON ${databaseName}.* TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

	});

	/**
	 * Revoke
	 */
	describe("builderRevokeStatement", () => {
		
		it("given a username, host and database name when executing the addCreateRoutinePermission method then it must create a correct statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables
				.addCreateRoutinePermission()
				.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE CREATE ROUTINE ON ${databaseName}.* FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addCreateTemporaryTablesPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables
				.addCreateTemporaryTablesPermission()
				.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE CREATE TEMPORARY TABLES ON ${databaseName}.* FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addEventPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables
				.addEventPermission()
				.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE EVENT ON ${databaseName}.* FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addLockTablesPermission method then it must create a correct statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables
				.addLockTablesPermission()
				.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE LOCK TABLES ON ${databaseName}.* FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executed the all methods then it must create a corrrect statement", () => {
			const grantAndRevokePrivilegesAllTables = new GrantAndRevokePrivilegesAllTables(username, host, databaseName);

			const statement = grantAndRevokePrivilegesAllTables				
				.addCreateRoutinePermission()
				.addCreateTemporaryTablesPermission()
				.addEventPermission()
				.addLockTablesPermission()
				.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE CREATE ROUTINE,CREATE TEMPORARY TABLES,EVENT,LOCK TABLES ON ${databaseName}.* FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

	});
});
