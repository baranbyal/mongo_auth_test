


const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'

};


app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.json({message: ' ////baranbyal//// '});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db= require('./app/models');
const dbConfig = require('./app/config/db.config');
const Role = db.role;

db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Successfully connect to MongoDB.');
        initial();
    })
    .catch(err => {
        console.error('Connection error', err);
        process.exit();
    });



function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: 'user'
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log('added \'user\' to roles collection');
            });

            new Role({
                name: 'moderator'
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log('added \'moderator\' to roles collection');
            });

            new Role({
                name: 'admin'
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log('added \'admin\' to roles collection');
            });

            new Role({
                name: 'dansciUye'
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log('added \'dansciUye\' to roles collection');
            });

            new Role({
                name: 'YK'
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log('added \'YK\' to roles collection');
            });

            new Role({
                name: 'DDK'
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log('added \'DDK\' to roles collection');
            });

            new Role({
                name: 'latinEgitmen'
            }).save(err => {
                if (err) {
                    console.log('error', err);
                }

                console.log('added \'latinEgitmen\' to roles collection');
            });

            
        }
    });
}

// routers
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests

