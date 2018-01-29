const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  port:　3306,
  database: 'stu',
  user: 'root',
  password: ''
});

pool.getConnection(function (errr, connection) {
  if (errr) {
    console.log('ERR');
  } else {
    const add = function (data, callback) {
      const addsql = "insert into users(id, name, sex, class, direction, phone, email, words, state) value(?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const addData = [
        data.userid,
        data.username,
        data.sex,
        data.class,
        data.direction,
        data.phone,
        data.email,
        data.words,
        data.state
      ];
      connection.query(addsql, addData, function (err, rows) {
        if (err) {
          callback(false, err);
        } else {
          callback(true, rows);
        }
      })
    }

    const find = function (data, callback) {
      const findData = [data];
      const sqlFind = 'select * from users where id=?';
      connection.query(sqlFind, findData, function (err, result) {
        if(err) {
          console.log(err);
          callback(false, err);
        } else {
          callback(true, result);
        }
      })
    }

    const findAll = function (callback) {
      const sqlALL = 'SELECT * FROM users';
      connection.query(sqlALL, function(err, result) {
        if(err) {
          callback(false, err);
        } else {
          callback(true, result);
        }
      })
    }

    const change = function (data, callback) {
      const changeSql = "UPDATE users SET state = ? WHERE id = ?";
      const changeData = [
        data.state,
        data.id
      ];
      connection.query(changeSql, changeData, function (err, result) {
        if (err) {
          callback(false, err);
        } else {
          callback(true, result);
        }
      });
    };

    const Delete = function (data, callback) {
      const sqlDelete = 'DELETE FROM users WHERE id = ?';
      const deleteData = [data];
      connection.query(sqlDelete, deleteData, function (err, result) {
        if(err) {
          callback(false, err);
        } else {
          callback(true, result);
        }
      })
    }
     
    exports.sqlAdd = add;
    exports.sqlFind = find;
    exports.sqlFindAll = findAll;
    exports.sqlChange = change;
    exports.sqlDelete = Delete;
  }
})
