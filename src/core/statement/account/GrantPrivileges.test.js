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
			const grantPrivileges1 = new GrantPrivileges(username, host, databaseName, null);
			const statement1 = grantPrivileges1.builder();
			
			const grantPrivileges2 = new GrantPrivileges(username, host, databaseName, undefined);
			const statement2 = grantPrivileges2.builder();
	
			const grantPrivileges3 = new GrantPrivileges(username, host, databaseName);
			const statement3 = grantPrivileges3.builder();
			
			expect(statement1).to.include("*");			
			expect(statement2).to.include("*");			
			expect(statement3).to.include("*");

			expect(statement1).to.be.string;
			expect(statement2).to.be.string;
			expect(statement3).to.be.string;
		});

		it("given username, host, database name and table name when creating the instance then the tableName property must receive the table name", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
			const statement = grantPrivileges.builder();
			
			expect(statement).to.include(tableName);
			expect(statement).to.be.string;
		});
		
	});
	
	describe("addGrantCreatePermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantCreateDatabasePermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantCreatePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT CREATE ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantCreateDatabasePermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantCreatePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT CREATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});
		
	});
	
	describe("addGrantAlterPermission", () => {

		it("given username, host, database name and no table name when executing the addGrantAlterPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantAlterPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT ALTER ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantAlterPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantAlterPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT ALTER ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});
	
	describe("addGrantCreateViewPermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantCreateViewPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantCreateViewPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT CREATE VIEW ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantCreateViewPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantCreateViewPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT CREATE VIEW ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantDropPermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantDropPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantDropPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DROP ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantDropPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantDropPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DROP ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantDeleteHistoryPermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantDeleteHistoryPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantDeleteHistoryPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DELETE HISTORY ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantDeleteHistoryPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantDeleteHistoryPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DELETE HISTORY ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantGrantOptionPermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantDeleteHistoryPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantGrantOptionPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT GRANT OPTION ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantGrantOptionPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantGrantOptionPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT GRANT OPTION ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantIndexPermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantIndexPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantIndexPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT INDEX ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantIndexPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantIndexPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT INDEX ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantShowViewPermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantShowViewPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantShowViewPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT SHOW VIEW ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantShowViewPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantShowViewPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT SHOW VIEW ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantTriggerPermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantTriggerPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantTriggerPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT TRIGGER ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantTriggerPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantTriggerPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT TRIGGER ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantDeletePermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantDeletePermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantDeletePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DELETE ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantDeletePermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantDeletePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT DELETE ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantInsertPermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantInsertPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantInsertPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT INSERT ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantInsertPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantInsertPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT INSERT ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantSelectPermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantSelectPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantSelectPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT SELECT ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantSelectPermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantSelectPermission()
				.builder();
	
			expect(statement).to.eql(`GRANT SELECT ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("addGrantUpdatePermission", () => {
		
		it("given username, host, database name and no table name when executing the addGrantUpdatePermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);
	
			const statement = grantPrivileges
				.addGrantUpdatePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT UPDATE ON ${databaseName}.* TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

		it("given username, host, database name and table name when executing the addGrantUpdatePermission method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);
	
			const statement = grantPrivileges
				.addGrantUpdatePermission()
				.builder();
	
			expect(statement).to.eql(`GRANT UPDATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
			expect(statement).to.be.string;
		});

	});

	describe("all chain methods", () => {
		
		it("given a username, host, database name and no table name when executing all methods then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, null);

			const statement = grantPrivileges
				.addGrantCreatePermission()
				.addGrantAlterPermission()
				.addGrantCreateViewPermission()
				.addGrantDropPermission()
				.addGrantDeleteHistoryPermission()
				.addGrantGrantOptionPermission()
				.addGrantIndexPermission()
				.addGrantShowViewPermission()
				.addGrantTriggerPermission()
				.addGrantDeletePermission()
				.addGrantInsertPermission()
				.addGrantSelectPermission()
				.addGrantUpdatePermission()
				.builder();
	
			expect(statement)
				.to.eql(`GRANT CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.* TO ${username}@${host};`);
	
			expect(statement).to.be.string;
		});

		it("given a username, host, database name and table name when executed the grant method then it must create a correct statement", () => {
			const grantPrivileges = new GrantPrivileges(username, host, databaseName, tableName);

			const statement = grantPrivileges
				.addGrantCreatePermission()
				.addGrantAlterPermission()
				.addGrantCreateViewPermission()
				.addGrantDropPermission()
				.addGrantDeleteHistoryPermission()
				.addGrantGrantOptionPermission()
				.addGrantIndexPermission()
				.addGrantShowViewPermission()
				.addGrantTriggerPermission()
				.addGrantDeletePermission()
				.addGrantInsertPermission()
				.addGrantSelectPermission()
				.addGrantUpdatePermission()
				.builder();
	
			expect(statement)
				.to.eql(`GRANT CREATE,ALTER,CREATE VIEW,DROP,DELETE HISTORY,GRANT OPTION,INDEX,SHOW VIEW,TRIGGER,DELETE,INSERT,SELECT,UPDATE ON ${databaseName}.${tableName} TO ${username}@${host};`);
	
			expect(statement).to.be.string;
		});

	});	

});
