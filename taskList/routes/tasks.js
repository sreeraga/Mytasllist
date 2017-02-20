var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');
var db = mongojs('mongodb://10.240.151.26/company',['profile']); 
router.get('/tasks',function(req,res,next){
//res.send('TASK PAGE');
db.tasks.find(function(err,tasks){
    if(err){
        res.send(err);
    }
res.send(tasks);
});
});

//Get Single task

router.get('/task/:id', function(req,res,next){
    //res.send('TASK API')
    db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
}); 


router.get('/task/:username/:password', function(req,res,next){
    //res.send('TASK API')
    db.profile.findOne({name:req.params.username,password:req.params.password},function(err,user){
        if(err){
            res.send(err);
        }
       if(!user.name){
       res.send({
         "error":"fail"
     }); 
     }
        res.json(user);
    })
}); 


router.post('/task',function(req,res,next){
var task=req.body;
if(!task.title || ( task.isDone+'')){
 res.ststus(400);
 res.json({
     "error":"Bad data"
 });
} else{
    db.tasks.save(task,function(err,task){
 if(err){
            res.send(err);
        }
                res.json(task);

    })
}
});


router.delete('/task/:id', function(req,res,next){
    //res.send('TASK API')
    db.tasks.remove({_id:mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
}); 
module.exports=router;

