//import express from 'express';
const express = require('express');
const router = express.Router();
//import { getUsers, createUser } from '../controllers/users.controller.js';
const {
  getUsers,
  createUser,
  getAVG,
} = require('../controllers/users.controller.js');
router.route('/').post(createUser).get(getUsers);
router.route('/avg').get(getAVG);
//export default router;
module.exports = router;
