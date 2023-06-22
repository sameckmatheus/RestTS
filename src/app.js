const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const mysql = require('mysql');
require('./config/connection');

class App {
    
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();

        const connection1 = mysql.createConnection({
            host: 'localhost',
            user: 'dbuser1',
            password: 'password1',
            database: 'database1'
        });

        const connection2 = mysql.createConnection({
            host: 'localhost',
            user: 'dbuser2',
            password: 'password2',
            database: 'database2'
        });
        
        connection1.connect();
        connection2.connect();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }

    routes() {
      this.app.use(routes);
    }
} 

module.exports = new App().app;
