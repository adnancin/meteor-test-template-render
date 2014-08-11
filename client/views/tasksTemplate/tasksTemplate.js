Template.tasksTemplate.helpers({
    tasks: function(){
        if(Tasks.findOne()){
            console.log("getting tasks template");
            window.setTimeout(function(){console.log("that was a timeout");}, 3000);
            return Tasks.find({projectId:this.id});
        }
    }
});
