const { it, describe, before } = require("mocha");
const expect = require("chai").expect;

const GrantAndRevokeColumnPrivileges = require("./GrantAndRevokeColumnPrivileges");

describe("core/statement/account/ColumnPrivileges.js", () => {

	let username, host, databaseName, tableName;
	before(() => {
		username = "myusername";
		host = "localhost";
		databaseName = "db_test";
		tableName = "tb_test";
	});

	describe("constructor", () => {

		it("given no user name, no host, no database name and no table name when executed the function then it must throw Error", () => {
			expect(() => {
				new GrantAndRevokeColumnPrivileges(null, host, databaseName, tableName);
			
			}).to.throw(Error);

			expect(() => {
				new GrantAndRevokeColumnPrivileges(username, null, databaseName, tableName);
			
			}).to.throw(Error);

			expect(() => {
				new GrantAndRevokeColumnPrivileges(username, host, null, tableName);
			
			}).to.throw(Error);

			expect(() => {
				new GrantAndRevokeColumnPrivileges(username, host, databaseName, null);
			
			}).to.throw(Error);
		});

		it("given user name, host, database name and table name when executed the function then it must create instance", () => {
			expect(() => {
				new GrantAndRevokeColumnPrivileges(username, host, databaseName, tableName);
			
			}).to.not.throw(Error);
		});

	});

	/**
	 * Grant
	 */
	describe("builderGrantStatement", () => {
		
		it("given a username, host and database name when executing the addInsertColumnPermission method then it must create a correct statement", () => {
			const grantAndRevokeColumnPrivileges = new GrantAndRevokeColumnPrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokeColumnPrivileges
				.addInsertColumnPermission("id", "name")
				.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT INSERT(id,name) ON ${databaseName}.${tableName} TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addSelectColumnPermission method then it must create a correct statement", () => {
			const grantAndRevokeColumnPrivileges = new GrantAndRevokeColumnPrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokeColumnPrivileges
				.addSelectColumnPermission("id", "name")
				.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT SELECT(id,name) ON ${databaseName}.${tableName} TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addUpdateColumnPermission method then it must create a correct statement", () => {
			const grantAndRevokeColumnPrivileges = new GrantAndRevokeColumnPrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokeColumnPrivileges
				.addUpdateColumnPermission("id", "name")
				.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT UPDATE(id,name) ON ${databaseName}.${tableName} TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host, database name and table name when executed the all methods then it must create a correct statement", () => {
			const grantAndRevokeColumnPrivileges = new GrantAndRevokeColumnPrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokeColumnPrivileges				
				.addInsertColumnPermission("id", "name")
				.addSelectColumnPermission("id", "name")
				.addUpdateColumnPermission("id", "name")
				.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT INSERT(id,name),SELECT(id,name),UPDATE(id,name) ON ${databaseName}.${tableName} TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

	});

	/**
	 * Revoke
	 */
	describe("builderRevokeStatement", () => {
		it("given a username, host and database name when executing the addInsertColumnPermission method then it must create a correct statement", () => {
			const grantAndRevokeColumnPrivileges = new GrantAndRevokeColumnPrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokeColumnPrivileges
				.addInsertColumnPermission("id", "name")
				.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE INSERT(id,name) ON ${databaseName}.${tableName} FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addSelectColumnPermission method then it must create a correct statement", () => {
			const grantAndRevokeColumnPrivileges = new GrantAndRevokeColumnPrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokeColumnPrivileges
				.addSelectColumnPermission("id", "name")
				.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE SELECT(id,name) ON ${databaseName}.${tableName} FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host and database name when executing the addUpdateColumnPermission method then it must create a correct statement", () => {
			const grantAndRevokeColumnPrivileges = new GrantAndRevokeColumnPrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokeColumnPrivileges
				.addUpdateColumnPermission("id", "name")
				.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE UPDATE(id,name) ON ${databaseName}.${tableName} FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

		it("given a username, host, database name and table name when executed the all methods then it must create a correct statement", () => {
			const grantAndRevokeColumnPrivileges = new GrantAndRevokeColumnPrivileges(username, host, databaseName, tableName);

			const statement = grantAndRevokeColumnPrivileges				
				.addInsertColumnPermission("id", "name")
				.addSelectColumnPermission("id", "name")
				.addUpdateColumnPermission("id", "name")
				.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE INSERT(id,name),SELECT(id,name),UPDATE(id,name) ON ${databaseName}.${tableName} FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});
		
	});
	
});