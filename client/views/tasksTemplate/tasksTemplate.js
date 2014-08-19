Template.tasksTemplate.helpers({
    tasks: function(){
        if(TasksSubscription.ready()){
            console.log("getting tasks template");
            //window.setTimeout(function(){console.log("that was a timeout");}, 3000);
            return Tasks.find({projectId:this._id});
        }
    },
    junkTemplateThing: function(){
        console.log("junk template helper running here");
    }
});
