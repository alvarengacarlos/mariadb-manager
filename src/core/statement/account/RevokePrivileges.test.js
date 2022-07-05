const { it, describe, beforeEach, before } = require("mocha");
const expect = require("chai").expect;

const RevokePrivileges = require("./RevokePrivileges");

describe("core/statement/account/RevokePrivileges.js", () => {

	let username, host, databaseName, tableName;
	before(() => {
		username = "myusername";
		host = "localhost";
		databaseName = "db_test";
		tableName = "tb_test";
	});
	
	describe("constructor", () => {
	
		it("given username, host, database name and no table name when creating the instance then the tableName property must receive an asterisk", () => {
			const revokePrivileges1 = new RevokePrivileges(username, host, databaseName, null);
			const statement1 = revokePrivileges1.builder();
			
			const revokePrivileges2 = new RevokePrivileges(username, host, databaseName, undefined);
			const statement2 = revokePrivileges2.builder();
	
			const revokePrivileges3 = new RevokePrivileges(username, host, databaseName);
			const statement3 = revokePrivileges3.builder();
			
			expect(statement1).to.include("*");			
			expect(statement2).to.include("*");			
			expect(statement3).to.include("*");

			expect(statement1).to.be.string;
			expect(statement2).to.be.string;
			expect(statement3).to.be.string;
		});

		it("given username, host, database name and table name when creating the instance then the tableName property must receive the table name", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
			const statement = revokePrivileges.builder();
			
			expect(statement).to.include(tableName);
			expect(statement).to.be.string;
		});        
		
	});

    describe("addRevokeCreatePermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeCreatePermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeCreatePermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE CREATE ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeCreatePermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeCreatePermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE CREATE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeAlterPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeAlterPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeAlterPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE ALTER ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeAlterPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeAlterPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE ALTER ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeCreateViewPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeCreateViewPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeCreateViewPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE CREATE VIEW ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeCreateViewPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeCreateViewPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE CREATE VIEW ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeDropPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeDropPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeDropPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE DROP ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeDropPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeDropPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE DROP ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeDeleteHistoryPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeDeleteHistoryPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeDeleteHistoryPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE DELETE HISTORY ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeDeleteHistoryPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeDeleteHistoryPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE DELETE HISTORY ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeGrantOptionPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeRevokeOptionPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeGrantOptionPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE GRANT OPTION ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeRevokeOptionPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeGrantOptionPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE GRANT OPTION ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeIndexPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeIndexPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeIndexPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE INDEX ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeIndexPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeIndexPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE INDEX ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeShowViewPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeShowViewPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeShowViewPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE SHOW VIEW ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeShowViewPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeShowViewPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE SHOW VIEW ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeTriggerPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeTriggerPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeTriggerPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE TRIGGER ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeTriggerPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeTriggerPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE TRIGGER ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeDeletePermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeDeletePermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeDeletePermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE DELETE ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeDeletePermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeDeletePermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE DELETE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeInsertPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeInsertPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeInsertPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE INSERT ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeInsertPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeInsertPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE INSERT ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeSelectPermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeSelectPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeSelectPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE SELECT ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeSelectPermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeSelectPermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE SELECT ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("addRevokeUpdatePermission", () => {

		it("given username, host, database name and no table name when executing the addRevokeUpdatePermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, null);
	
			const statement = revokePrivileges
				.addRevokeUpdatePermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE UPDATE ON ${databaseName}.* FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addRevokeUpdatePermission method then it must create a correct statement", () => {
			const revokePrivileges = new RevokePrivileges(username, host, databaseName, tableName);
	
			const statement = revokePrivileges
				.addRevokeUpdatePermission()
				.builder();
	
			expect(statement).to.eql(`REVOKE UPDATE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

    describe("all chain methods", () => {
		
		it("given a username, host, database name and no table name when executing all methods then it must create a correct statement", () => {
			const grantPrivileges = new RevokePrivileges(username, host, databaseName, null);

			const statement = grantPrivileges
				.addRevokeCreatePermission()
				.addRevokeAlterPermission()
				.addRevokeCreateViewPermission()
				.addRevokeDropPermission()
				.addRevokeDeleteHistoryPermission()
				.addRevokeGrantOptionPermission()
				.addRevokeIndexPermission()
				.addRevokeShowViewPermission()
				.addRevokeTriggerPermission()
				.addRevokeDeletePermission()
				.addRevokeInsertPermission()
				.addRevokeSelectPermission()
				.addRevokeUpdatePermission()
				.builder();
	
			expect(statement)
				.to.eql(`REVOKE CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.* FROM ${username}@${host};`);
	
			expect(statement).to.be.string;
		});

		it("given a username, host, database name and table name when executed the grant method then it must create a correct statement", () => {
			const grantPrivileges = new RevokePrivileges(username, host, databaseName, tableName);

			const statement = grantPrivileges
				.addRevokeCreatePermission()
				.addRevokeAlterPermission()
				.addRevokeCreateViewPermission()
				.addRevokeDropPermission()
				.addRevokeDeleteHistoryPermission()
				.addRevokeGrantOptionPermission()
				.addRevokeIndexPermission()
				.addRevokeShowViewPermission()
				.addRevokeTriggerPermission()
				.addRevokeDeletePermission()
				.addRevokeInsertPermission()
				.addRevokeSelectPermission()
				.addRevokeUpdatePermission()
				.builder();
	
			expect(statement)
				.to.eql(`REVOKE CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.${tableName} FROM ${username}@${host};`);
	
			expect(statement).to.be.string;
		});

	});	

});