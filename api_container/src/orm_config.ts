export const ProdConnection = {
    "type": "mysql",
    "host": "h_db",
    "port": 3306,
    "username": "root",
    "password": "password",
    "database": "nextinterfaces_db",
    "synchronize": true,
    "entities": [
        __dirname + "/entity/*.js"
    ],
    "subscribers": [
        __dirname + "/subscriber/*.js"
    ],
    "migrations": [
        __dirname + "/migration/*.js"
    ],
    "cli": {
        "entitiesDir": __dirname + "/entity",
        "migrationsDir": __dirname + "/migration",
        "subscribersDir": __dirname + "/subscriber"
    }
}

export const LocalConnection = {
    "type": "mysql",
    "host": "127.0.0.1",
    "port": 9306,
    "username": "root",
    "password": "password",
    "database": "nextinterfaces_db",
    "synchronize": true,
    "entities": [
        __dirname + "/entity/*.js"
    ],
    "subscribers": [
        __dirname + "/subscriber/*.js"
    ],
    "migrations": [
        __dirname + "/migration/*.js"
    ],
    "cli": {
        "entitiesDir": __dirname + "/entity",
        "migrationsDir": __dirname + "/migration",
        "subscribersDir": __dirname + "/subscriber"
    }
}