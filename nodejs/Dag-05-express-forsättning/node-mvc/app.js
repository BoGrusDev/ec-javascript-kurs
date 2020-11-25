// node-mvc
const express = require('express');
const webRoutes = require('./routes/webRoutes');
const apiMemberRoutes = require('./routes/apiMemberRoutes');
const contactRoutes = require('./routes/contactRoutes');
const app = express();

app.use(webRoutes);
app.use('/api/member', apiMemberRoutes);
app.use('/contact', contactRoutes);
app.listen(3000);