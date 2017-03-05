'use strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../frontend/router';
let fs = require('fs');
let express =       require('express');
let path =          require('path');
let compression =   require('compression');

let app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'backend')));

var filePath = path.join(__dirname, 'backend', 'assets.json');

app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        const appHtml = renderToString(<RouterContext {...props}/>);

        fs.readFile(filePath, 'utf-8', (err, assets) => {
            if (err) {
                console.log(err.name);
                console.log(err.message);
                console.log(err.stack);
            } else {
                res.send(renderPage(appHtml, JSON.parse(assets)));
            }
        })
    })
});

function renderPage(appHtml, assets) {
    return `
    <!doctype html>
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href="${assets.index.css}">
    <div id=root>${appHtml}</div>
    <script src="${assets.index.js}"></script>
    </html>
   `
}

const PORT = 3003;
app.listen(PORT, () => {
    console.log('Production Express server running at localhost:' + PORT);
});