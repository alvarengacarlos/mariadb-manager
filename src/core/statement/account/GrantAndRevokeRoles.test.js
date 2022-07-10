const { it, describe, before } = require("mocha");
const expect = require("chai").expect;

const GrantAndRevokeRoles = require("./GrantAndRevokeRoles");

describe("GrantAndRevokeRoles.js", () => {

	let username, host, roleName;
	before(() => {
		username = "myusername";
		host = "localhost";
		roleName = "developer"
	});

	describe("constructor", () => {

		it("given no user name, no host and no role name when executed the function then it must throw Error", () => {
			expect(() => {
				new GrantAndRevokeRoles();
			
			}).to.throw(Error);

			expect(() => {
				new GrantAndRevokeRoles(undefined, host, roleName);
			
			}).to.throw(Error);
			
			expect(() => {
				new GrantAndRevokeRoles(username, undefined, roleName);
			
			}).to.throw(Error);

			expect(() => {
				new GrantAndRevokeRoles(host, host, undefined);
			
			}).to.throw(Error);
		});

	});

	
	/**
	 * Grant
	 */
	describe("builderGrantStatement", () => {
		
		it("given a username, host and role name when executing the builderGrantStatement method then it must create a correct statement", () => {
			const grantAndRevokeRoles = new GrantAndRevokeRoles(username, host, roleName);

			const statement = grantAndRevokeRoles.builderGrantStatement();

			expect(statement)
				.to.eql(`GRANT ${roleName} TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

    });


	/**
	 * Revoke
	 */
	 describe("builderRevokeStatement", () => {
		
		it("given a username, host and role name when executing the builderRevokeStatement method then it must create a correct statement", () => {
			const grantAndRevokeRoles = new GrantAndRevokeRoles(username, host, roleName);

			const statement = grantAndRevokeRoles.builderRevokeStatement();

			expect(statement)
				.to.eql(`REVOKE ${roleName} FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

    });

});