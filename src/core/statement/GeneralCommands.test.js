const {it, describe, beforeEach, before} = require("mocha");
const expect = require("chai").expect;

const GeneralCommands = require("./GeneralCommands");

describe("GeneralCommands.js", () => {

	let username, host, databaseName;
	before(() => {
		username = "myusername";
		host = "localhost";
		databaseName = "db_test";        
	});

	let generalCommands;
	beforeEach(() => {
		generalCommands = new GeneralCommands(username, host, databaseName);
	});
    
	it("given no parameters when the method is executed then it must create a SHOW DATABASES statement", () => {
		const statement = generalCommands.showDatabases();

		expect(statement).to.eql("SHOW DATABASES;");        
		expect().to.be.string;
	});

	it("given database name when the method is executed then it must create a SHOW TABLES statement", () => {
		const statement = generalCommands.showTables(databaseName);

		expect(statement).to.eql(`USE ${databaseName}; SHOW TABLES;`);        
		expect(statement).to.be.string;
	});
    
	it("given username and host when the method is executed then it must create a SHOW GRANTS statement", () => {
		const statement = generalCommands.showCreateUser(username, host);

		expect(statement).to.eql(`SHOW CREATE USER ${username}@${host};`);        
		expect(statement).to.be.string;
	});

	it("given nothing parameters when the method is executed then it must create a SHOW GRANTS statement", () => {
		const statement = generalCommands.showGrants();

		expect(statement).to.eql("SHOW GRANTS;");        
		expect(statement).to.be.string;
	});

});