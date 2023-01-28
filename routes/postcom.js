const express = require('express');
const postcom = require('../models/postcom');

const router = express.Router();



//save posts

router.post('/postcom/save',(req,res) => {

    let newPost = new postcom(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});



// get posts

router.get('/postcom', (req,res)=>{
    postcom.find().exec((err,postcom) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:postcom
        })
    });
});

//get a specific post

router.get("/postcom/:id",(req,res) =>{

    let postId = req.params.id;

    postcom.findById(postId,(err,postcom) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
    
        return res.status(200).json({
            success:true,
            existingPosts:postcom
        });
    });
});

//update posts

router.put('/postcom/update/:id', (req,res)=>{
    postcom.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,postcom)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully",postcom
                
            });
        }
    );
});

//delete post

router.delete('/postcom/delete/:id', (req,res)=>{
    postcom.findByIdAndRemove(req.params.id).exec((err,deletedpostcom)=>{
        if(err){
            return res.status(400).json({
                message:"Delete unsuccesful", err
            });
        }
        return res.json({
            message: "Delete Succesful",deletedpostcom
        });
    });
});

module.exports = router;