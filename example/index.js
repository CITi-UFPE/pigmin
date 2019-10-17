const express = require('express');
const morgan = require('morgan');
const { Admin, ModelAdmin } = require('../index');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/ping', (req, res, next) => {
  res.status(200).send({
    data: 'Pong!',
  });

  next();
});

const admin2 = new Admin();

app.get('/test', (req, res, next) => {
  const admin = new Admin();
  const postAdmin = new ModelAdmin({
    model: null,
    actions: [],
  });

  const authorAdmin = new ModelAdmin({
    model: null,
    actions: [],
  });

  admin
    .register({
      verbose_name: 'Postagem',
      verbose_name_plural: 'Postagens',
      admin: postAdmin,
    })
    .register({
      verbose_name: 'Autor',
      verbose_name_plural: 'Autores',
      admin: authorAdmin,
    });

  res.json(admin);

  next();
  
});

app.get('/method', admin2.init);

app.listen(process.env.PORT || 3000, () => console.log('Ready!'));
