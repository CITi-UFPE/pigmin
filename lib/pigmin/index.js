const express = require('express');

/**
 * Model representation on admin interface
 */
class ModelAdmin {
  constructor({ model, admin }) {
    this.model = model;
    this.admin = admin;
  }
}

/**
 * Admin interface representation
 */
class Admin {
  constructor({ modelAdminList, settings }){
    this.modelAdminList = modelAdminList;
    this.settigns = settings;
  }

  generateInterface(){}
  register({ verbose_name, verbose_name_plural }){}
}

/**
 * Admin interface middleware
 */
const interface = (req, res, next) => {
  next();
};

module.exports = {
  ModelAdmin,
  Admin,
  interface,
};
