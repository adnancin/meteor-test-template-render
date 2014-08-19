Template.projectTemplate.helpers({
    singleProject:function(){
        if (ProjectSubscription.ready()){
            console.log("getting the single project");
            return Projects.findOne({_id:'MJonpDZrbyHc2EoHp'});
        }
    },

    multiProject: function(){
        console.log("getting the single project");
        if(ProjectSubscription.ready()){
            return Projects.find({_id:{$in:this.projects}});
        }
    },
    anotherJunkTemplate: function(){
        console.log("Project junk template running");
    },
    superTemplate: function(){
        if(OwnerProjectsSubscription.ready()){
            return OwnerProjects.findOne();
        }
    }
});
