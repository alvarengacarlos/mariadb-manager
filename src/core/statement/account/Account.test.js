const {it, describe, before, beforeEach} = require("mocha");
const expect = require("chai").expect;

const Account = require("./Account");

describe("Account.js", () => {

	let username, password, host;
	before(() => {
		username = "myusername";
		password = "mypassword";
		host = "localhost";
	});

	let account;
	beforeEach(() => {
		account = new Account();
	});
	describe("createUser", () => {

		it("given a username, a password and a host when executed the createUser method then it must create statement to create user", () => {
			const statement = account.createUser(username, password, host);
	
			expect(statement)
				.to.eql(`CREATE USER IF NOT EXISTS ${username}@${host} IDENTIFIED BY '${password}';`);
			
			expect(statement).to.be.string;
		});

	});
	
	describe("alterUser", () => {
		
		it("given a username and password when executed the alterUser method then it must create statement to alter user", () => {
			const statement = account.alterUser(username, password, host);
	
			expect(statement)
				.to.eql(`ALTER USER IF EXISTS ${username}@${host} IDENTIFIED BY '${password}';`);
	
			expect(statement).to.be.string;
		});

	});

	describe("dropUser", () => {
		
		it("given a username when executed the dropUser method then it must create statement to drop a user", () => {
			const statement = account.dropUser(username);
	
			expect(statement)
				.to.eql(`DROP USER IF EXISTS ${username};`);
			
			expect(statement).to.be.string;
		});

	});

	describe("renameUser", () => {

		it("given a old username, old password, new username and new password when executed the renameUser method then it must create statement to rename the account", () => {
			const oldUsername = "pascal";
			const oldPassword = "pascalpw";
			const newUsername = "java";
			const newPassword = "javapw";
	
			const statement = account.renameUser(oldUsername, oldPassword, newUsername, newPassword);
	
			expect(statement)
				.to.eql(`RENAME USER ${oldUsername}@${oldPassword} TO ${newUsername}@${newPassword};`);
			
			expect(statement).to.be.string;
		});

	});

});