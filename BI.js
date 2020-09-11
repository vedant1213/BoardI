const taskModel = require('../models/taskModel');

module.exports = {
    create: (req, res) => {
        let task = new taskModel({
            taskName: req.body.taskName,
            taskDescription: req.body.taskDescription,
            creator: req.body.creator,
            duration: req.body.duration,
            createdAt:req.body.createdAt
        })
        task.save()
        .then(result => {
            res.json({ success: true, result: result})
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },

    retrieve: (req, res) => {
        taskModel.find()
        
        .then(task => {
            console.log("Tasks are:",task)
            if (task){
                res.json({ success: true, result: task})
            } 
            else{
                res.json({ success: false, result: "No tasks found"})
            }    
        })
        
        .catch(err => {
            console.log(err)
            res.json({ success: "false err", result: err})
        })
    },

    delete: (req, res) => {
        taskModel.remove({ _id: req.body._id})
        .then(task => {
            if (!task) res.json({ success: false, result: "No task with such ID was found" })
            res.json({ success: true, result: result })
        })
        .catch(err => res.json({success: false, result: err}))
    }
}