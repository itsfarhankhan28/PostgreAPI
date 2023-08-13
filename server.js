const express = require('express')
import cors from 'cors'
const app = express()
const PORT = 4000
import { query } from './db'

//middleware
app.use(cors())
app.use(json())

//routes

//create
app.post('/create',async(req,res)=>{
    try{
        const {description} = req.body
        const newpost = await query("INSERT INTO server (description) VALUES($1) RETURNING *",[description])
        res.json(newpost.rows[0])
    }catch(err){
        console.log(err)
    }
})

//get all
app.get('/get',async(req,res)=>{
    try{
        const getpost = await query("SELECT * FROM server")
        res.json(getpost.rows)
    }catch(err){
        console.log(err)
    }
})

//get a data
app.get('/get/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const singlepost = await query("SELECT * FROM server WHERE server_id = $1",[id])
        res.json(singlepost.rows)
    }catch(err){
        console.log(err)
    }
})

//update a post
app.put('/update/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const {description} = req.body
        const updatepost = await query("UPDATE server SET description = $1 WHERE server_id = $2",[description,id])
        res.json("Post updated successfully")
    }catch(err){
        console.log(err)
    }
})

//delete a port
app.delete('/delete/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const deletepost = await query("DELETE FROM server WHERE server_id = $1",[id])
        res.json("deleted sucessfully")
    }catch(err){
        console.log(err)
    }
})

app.get('/',(req,res)=>{
    res.send("This is the postgress app")
})

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})