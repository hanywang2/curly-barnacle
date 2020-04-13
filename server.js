const express = require('express')
const app = express();
const cors = require('cors');
// const scraper = require('./scraper.js')

const functions = require('./functions/firebase-functions.js')

app.use(cors());

app.get('/api/firebase-test', (req, res) => {
    functions.handleFormSubmission('hyw2@cornell.edu', 'https://classes.cornell.edu/shared/schedule/SP20/92eac951cf5b329be2522a9829421833')
        .then(_ => res.send('success'))
        .catch(err => console.log(err))
})

const PORT = 3333;

functions.handleFormSubmission('ag759@cornell.edu', 'https://classes.cornell.edu/shared/schedule/SP20/6ca2268a84f4785a88fa20f940637614')

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})