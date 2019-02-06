const connection = require("../config/connection.js");

const tableName = "burgers";

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("What?");
    }
    return arr.toString();
  }
  
  insertOne: (tableName, cols, vals, callback) => {

    let queryStatement = `INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;

    connection.query(queryStatement, vals, (err, result) => {
      if (err) throw err;
      console.log("Success!");
      callback(result);
    });

  };
