const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  port:　3306,
  database: 'stu',
  user: 'root',
  password: ''
});

pool.getConnection(function (err, connection) {
  if (err) {
    console.log('ERR');
  } else {
    const add = function (data) {
      const addsql = "insert into users(id, name, sex, class, direction, phone, email, words) value(?, ?, ?, ?, ?, ?, ?, ?)";
      const addData = [
        data.id,
        data.name,
        data.sex,
        data.class,
        data.direction,
        data.phone,
        data.email,
        data.words
      ];
      connection.query(addsql, addData, function (err, rows) {
        if (err) {
          console.log(err);
        } else {
          console.log(2);
        }
      })
    }

    const find = function (data, callback) {
      const findData = [data];
      const sqlFind = 'select * from users where id=?';
      connection.query(sqlFind, findData, function (err, result) {
        if(err) {
          callback(false, err);
        } else {
          callback(true, result);
        }
      })
    }

    const findAll = function () {
      const sqlALL = 'SELECT * FROM users';
      connection.query(sqlALL, function(err, result) {
        if(err) {
          console.log(err);
        } else {
          console.log(result);
        }
      })
    }

    const change = function (data) {
      const changeSql = "UPDATE users SET state = ? WHERE id = ?";
      const changeData = [
        data.state,
        data.id
      ];
      connection.query(changeSql, changeData, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
    };

    const Delete = function (data) {
      const sqlDelete = 'DELETE FROM users WHERE id = ?';
      const deleteData = [data];
      connection.query(sqlDelete, deleteData, function (result) {
        if(err) {
          console.log(err);
        } else {
          console.log(result);
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
