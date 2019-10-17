const express = require('express');


class ModelAdmin {
  constructor({ model, actions }){
    this.model = model;
    this.actions = actions;
  }

  list(){
    throw new Error('Not implemented');
  }
}

class Admin {
  constructor() {
    this._modelRegistry = [];
  }

  register({
    verbose_name,
    verbose_name_plural,
    admin,
  }) {
    this
      ._modelRegistry
      .push({
        verbose_name,
        verbose_name_plural,
        admin
      });
    return this;
  }
  init(req, res, next) {
    console.log('yay');
    next();
  }
}

module.exports = {
  ModelAdmin,
  Admin,
};
