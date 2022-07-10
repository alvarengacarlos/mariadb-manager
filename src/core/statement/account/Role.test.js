const { it, describe, before } = require("mocha");
const expect = require("chai").expect;

const Role = require("./Role");

describe("Role.js", () => {

	let username, host, roleName;
	before(() => {
		username = "myusername";
		host = "localhost";
		roleName = "developer"
		
	});

	describe("createRole", () => {

		it("given a role name, admin user of role and role admin user host when executing the createRole method then it must create a correct statement", () => {
			const adminUserOfRole = "root";
			const roleAdminUserHost = "localhost";
			
			const role = new Role();
			const statement = role.createRole(roleName, adminUserOfRole, roleAdminUserHost);
			
			expect(statement).to.eql(`CREATE ROLE IF NOT EXISTS ${roleName} WITH ADMIN ${adminUserOfRole}@${roleAdminUserHost};`);
			expect(statement).to.string;
		});

		it("given a role name, no admin user of role and no role admin user host when executing the createRole method then it must create a correct statement", () => {
			const role = new Role();

			const statement = role.createRole(roleName);
			
			expect(statement).to.eql(`CREATE ROLE IF NOT EXISTS ${roleName};`);
			expect(statement).to.string;
		});

	});

	describe("dropRole", () => {

		it("given a role name when executing the dropRole method then it must create a correct statement", () => {
			const role = new Role();

			const statement = role.dropRole(roleName);
			
			expect(statement).to.eql(`DROP ROLE ${roleName};`);
			expect(statement).to.string;
		});

	});
	
	describe("grantRole", () => {
		
		it("given a username, host and role name when executing the grantRole method then it must create a correct statement", () => {
			const role = new Role();

			const statement = role.grantRole(username, host, roleName);

			expect(statement)
				.to.eql(`GRANT ${roleName} TO ${username}@${host};`);

			expect(statement).to.be.string;
		});

    });

	describe("revokeRole", () => {
		
		it("given a username, host and role name when executing the revokeRole method then it must create a correct statement", () => {
			const role = new Role();

			const statement = role.revokeRole(username, host, roleName);

			expect(statement)
				.to.eql(`REVOKE ${roleName} FROM ${username}@${host};`);

			expect(statement).to.be.string;
		});

    });

});