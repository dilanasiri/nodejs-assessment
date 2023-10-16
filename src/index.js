import {router} from './api/httpUserController.js'
import express from 'express';
// const express = require('express')

const app = express()

const port = 5000

app.use(express.json())
app.use("/api/v1/users",router)

app.listen(port, () => {
  console.log(`Server is up on port ` + port)
})
