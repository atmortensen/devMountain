var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
//Need to enter username and password for your database
var connString = "postgres://postgres:morty4545@localhost/assessbox";

var app = express();

app.use(bodyParser.json());
app.use(cors());

//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
var db = massive.connect({connectionString : connString},
  function(err, localdb){
    db = localdb;
    app.set('db', db);
    
    app.get('/api/users', function(req, res){
        db.users.find(function(err, users){
            res.status(200).json(users);
        });
    });

    app.get('/api/vehicles', function(req, res){
        db.vehicles.find(function(err, users){
            res.status(200).json(users);
        });
    });

    app.post('/api/users', function(req, res){
        db.users.insert(req.body, function(){
            res.send('done');
        });
    });

    app.post('/api/vehicles', function(req, res){
        req.body.ownerid = req.body.ownerId;
        delete req.body.ownerId;
        db.vehicles.insert(req.body, function(){
            res.send('done');
        });
    });

    app.get('/api/user/:userId/vehiclecount', function(req, res){
        db.run("SELECT COUNT(*) FROM vehicles WHERE ownerid = $1", [req.params.userId], function(err, count){
            res.status(200).json(count[0]);
        });
    });

    app.get('/api/user/:userId/vehicle', function(req, res){
        db.vehicles.find({ownerid: req.params.userId}, function(err, vehicles){
            res.status(200).json(vehicles);
        });
    });

    app.get('/api/vehicle', function(req, res){
        if(req.query.UserEmail){
            db.run("SELECT * FROM users JOIN vehicles ON vehicles.ownerid=users.id WHERE users.email=$1",
            [req.query.UserEmail], function(err, vehicles){
                res.status(200).json(vehicles);
            });
        } else if(req.query.userFirstStart){
            db.run("SELECT * FROM users INNER JOIN vehicles ON vehicles.ownerid=users.id WHERE users.firstname LIKE $1",
                 [req.query.userFirstStart + '%'], function(err, vehicles){
                     res.status(200).json(vehicles);
                 }
            );
        } else{
            res.send('ERROR');
        }
    });

    app.get('/api/newervehiclesbyyear', function(req, res){
        db.run("SELECT * FROM vehicles INNER JOIN users ON vehicles.ownerid=users.id WHERE vehicles.year>2000ORDER BY vehicles.year DESC", 
            function(err, vehicles){
            res.status(200).json(vehicles);
        });
    });

    app.put('/api/vehicle/:vehicleId/user/:userId', function(req, res){
        db.update_owner([req.params.vehicleId, req.params.userId], function(err){
            res.send('done');
        });
    });

    app.delete('/api/user/:userId/vehicle/:vehicleId', function(req, res){
        db.delete_owner([req.params.vehicleId], function(err){
            res.send('done');
        });
    });

    app.delete('/api/vehicle/:vehicleId', function(req, res){
        db.vehicles.destroy({id: req.params.vehicleId}, function(err){
            res.send('done');
        });
    });


});

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})

module.exports = app;
