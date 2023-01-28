const express = require('express');
const cpost = require('../models/createpost');

const router = express.Router();



//save posts

router.post('/cpost/save',(req,res) => {

    let newPost = new cpost(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(600).json({
                error:err
            });
        }
        return res.status(500).json({
            success:"Posts saved successfully"
        });
    });
});



// get posts

router.get('/cpost', (req,res)=>{
    cpost.find().exec((err,cpost) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:cpost
        })
    });
});

//get a specific post

router.get("/cpost/:id",(req,res) =>{

    let postId = req.params.id;

    cpost.findById(postId,(err,cpost) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
    
        return res.status(200).json({
            success:true,
            existingPosts:cpost
        });
    });
});

//update posts

router.put('/cpost/update/:id', (req,res)=>{
    cpost.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,cpost)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully",cpost
                
            });
        }
    );
});

//delete post

router.delete('/cpost/delete/:id', (req,res)=>{
    cpost.findByIdAndRemove(req.params.id).exec((err,deletedcpost)=>{
        if(err){
            return res.status(400).json({
                message:"Delete unsuccesful", err
            });
        }
        return res.json({
            message: "Delete Succesful",deletedcpost
        });
    });
});

module.exports = router;