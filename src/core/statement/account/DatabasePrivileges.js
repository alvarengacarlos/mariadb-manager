class DatabasePrivileges {

    #privileges;
    #baseStatement;

    /**
     * 
     * @param {String} username 
     * @param {String} hostname 
     * @param {String} databaseName 
     * @param {String} tableName 
     * @returns {String}
     */    
    constructor(username, hostname, databaseName) {
        if (!username || !hostname || !databaseName) {
            throw new Error("username, hostname and databaseName cannot be empty");
        }

        this.#privileges = "";
        this.#baseStatement = `ON ${databaseName}.* TO ${username}@${hostname};`
    }

    addAllPrivilegesDatabasePermission() {
        if (this.#privileges) {
            this.#privileges += ", ALL PRIVILEGES";

        } else {
            this.#privileges += "ALL PRIVILEGES";
        }        
        
        return this;
    }

    addCreateDatabasePermission() {
        if (this.#privileges) {            
            this.#privileges += ",CREATE";    

        } else {
            this.#privileges += "CREATE";
        }

        return this;
    }

    addCreateRoutinePermission() {
        if (this.#privileges) {
            this.#privileges += ",CREATE ROUTINE";

        } else {
            this.#privileges += "CREATE ROUTINE";
        }
        
        return this;
    }

    addCreateTemporaryTablesPermission() {
        if (this.#privileges) {
            this.#privileges += ",CREATE TEMPORARY TABLES";

        } else {
            this.#privileges += "CREATE TEMPORARY TABLES";
        }
        
        return this;        
    }

    addDropDatabasePermission() {
        if (this.#privileges) {
            this.#privileges += ",DROP";

        } else {
            this.#privileges += "DROP";
        }
        
        return this;
    }

    addEventManagerPermission() {
        if (this.#privileges) {
            this.#privileges += ",EVENT";

        } else {
            this.#privileges += "EVENT";
        }

        return this;
    }

    addGrantOptionPermission() {
        if (this.#privileges) {
            this.#privileges += ",GRANT OPTION";
        
        } else {
            this.#privileges += "GRANT OPTION";
        }

        return this;
    }

    addLockTablesPermission() {
        if (this.#privileges) {
            this.#privileges += ",LOCK TABLES";
        
        } else {
            this.#privileges += "LOCK TABLES";
        }
        
        return this;
    }

    builder() {
        return `GRANT ${this.#privileges} ${this.#baseStatement}`;
    }
}

module.exports = DatabasePrivileges;