const http = require('http');
const path = require('path');
const express = require('express');

const mainRouter = require('./routes/main');
const helloRouter = require('./routes/hello');
const userRouter = require('./routes/user');
//const { nextTick } = require('process');

const port = 9090;

//Application SetUp
const application = express()
      //1. static resources
      .use(express.static(path.join(__dirname + "assets")))
      //2. request body parser
      .use(express.urlencoded({extended : true})) // application/x-www-form-urlencoded
      .use(express.json())                        // application/json
      //3. view engine
      .set('views', path.join(__dirname,"views"))
      .set('view engine','ejs')
      //4. request router
      .all('*', function(req,res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();
      })
      .use('/', mainRouter)
      .use('/user', userRouter)
      .use('/hello',helloRouter);

// Server Setup
http
    .createServer(application)
    .on('listening', function(){
        console.log("http server runs on "+port);
    })
    .on('error',function(error){
        console.error(error);
    })
    .listen(port)
