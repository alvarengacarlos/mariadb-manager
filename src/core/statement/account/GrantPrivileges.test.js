const { it, describe, beforeEach, before } = require("mocha");
const expect = require("chai").expect;

const GrantPrivileges = require("./GrantPrivileges");

describe("core/statement/account/GrantPrivileges.js", () => {

	let username, host, databaseName, tableName;
	before(() => {
		username = "myusername";
		host = "localhost";
		databaseName = "db_test";
		tableName = "tb_test";
	});
	
	describe("constructor", () => {
	
		it("given username, host, database name and no table name when creating the instance then the tableName property must receive an asterisk", () => {
			const tablePrivileges1 = new GrantPrivileges(username, host, databaseName, null);
			const statement1 = tablePrivileges1.builder();
			
			const tablePrivileges2 = new GrantPrivileges(username, host, databaseName, undefined);
			const statement2 = tablePrivileges2.builder();
	
			const tablePrivileges3 = new GrantPrivileges(username, host, databaseName);
			const statement3 = tablePrivileges3.builder();
			
			expect(statement1).to.include("*");			
			expect(statement2).to.include("*");			
			expect(statement3).to.include("*");

			expect(statement1).to.be.string;
			expect(statement2).to.be.string;
			expect(statement3).to.be.string;
		});

		it("given username, host, database name and table name when creating the instance then the tableName property must receive the table name", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
			const statement = tablePrivileges.builder();
			
			expect(statement).to.include(tableName);
			expect(statement).to.be.string;
		});
		
	});
	
	describe("addCreatePermission", () => {
		
		it("given username, host, database name and no table name when executing the addCreateDatabasePermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addCreatePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT CREATE ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addCreateDatabasePermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addCreatePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT CREATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});
		
	});
	
	describe("addAlterPermission", () => {

		it("given username, host, database name and no table name when executing the addAlterPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addAlterPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT ALTER ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addAlterPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addAlterPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT ALTER ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});
	
	describe("addCreateViewPermission", () => {
		
		it("given username, host, database name and no table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addCreateViewPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT CREATE VIEW ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addCreateViewPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addCreateViewPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT CREATE VIEW ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addDropPermission", () => {
		
		it("given username, host, database name and no table name when executing the addDropPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addDropPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DROP ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addDropPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addDropPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DROP ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addDeleteHistoryPermission", () => {
		
		it("given username, host, database name and no table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addDeleteHistoryPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DELETE HISTORY ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addDeleteHistoryPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DELETE HISTORY ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantOptionPermission", () => {
		
		it("given username, host, database name and no table name when executing the addDeleteHistoryPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addGrantOptionPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT GRANT OPTION ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantOptionPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addGrantOptionPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT GRANT OPTION ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addIndexPermission", () => {
		
		it("given username, host, database name and no table name when executing the addIndexPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addIndexPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT INDEX ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addIndexPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addIndexPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT INDEX ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addShowViewPermission", () => {
		
		it("given username, host, database name and no table name when executing the addShowViewPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addShowViewPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT SHOW VIEW ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addShowViewPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addShowViewPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT SHOW VIEW ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addTriggerPermission", () => {
		
		it("given username, host, database name and no table name when executing the addTriggerPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addTriggerPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT TRIGGER ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addTriggerPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addTriggerPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT TRIGGER ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addDeletePermission", () => {
		
		it("given username, host, database name and no table name when executing the addDeletePermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addDeletePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DELETE ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addDeletePermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addDeletePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DELETE ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addInsertPermission", () => {
		
		it("given username, host, database name and no table name when executing the addInsertPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addInsertPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT INSERT ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addInsertPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addInsertPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT INSERT ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addSelectPermission", () => {
		
		it("given username, host, database name and no table name when executing the addSelectPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addSelectPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT SELECT ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addSelectPermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addSelectPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT SELECT ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addUpdatePermission", () => {
		
		it("given username, host, database name and no table name when executing the addUpdatePermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = tablePrivileges
				.addUpdatePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT UPDATE ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addUpdatePermission method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = tablePrivileges
				.addUpdatePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT UPDATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("all chain methods", () => {
		
		it("given a username, host, database name and no table name when executing all methods then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, null);

			const statement = tablePrivileges
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
				.builder();
	
			expect(statement)
				.to.eql(`GRANT CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.* TO ${username}@${host};`);
	
			expect(statement).to.be.string;
		});

		it("given a username, host, database name and table name when executed the grant method then it must create a correct statement", () => {
			const tablePrivileges = new GrantPrivileges(username, host, databaseName, tableName);

			const statement = tablePrivileges
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
				.builder();
	
			expect(statement)
				.to.eql(`GRANT CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
	
			expect(statement).to.be.string;
		});

	});	

});
