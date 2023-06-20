import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;
const CONNECTION_URL = '';

app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connexion réussie');
}).catch((error) => {
    console.log(error);
});

app.listen(PORT, () => {
    console.log('My site is reside on port server ' + PORT);
})

