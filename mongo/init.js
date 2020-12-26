const { db } = require("../models/todo");

db.createUser({
    user: "nodesquash",
    pwd: "nodesquash",
    roles: [
        {
            role: "readWrite",
            db: "nodesquash"
        }
    ]
});