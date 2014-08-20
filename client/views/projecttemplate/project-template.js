Template.projectTemplate.helpers({
    ownerProjectId: function(){
        if(OwnerProjectsSubscription.ready()){
            return OwnerProjects.findOne({},{fields:{_id:1}});
        }
    },
    ownerProjectData: function(){
        return OwnerProjects.findOne(this._id);
    },
    multiProject: function(){
        console.log("getting the project Ids");
        if(ProjectSubscription.ready()){
            return Projects.find({_id:{$in:OwnerProjects.findOne({_id:this._id},{fields:{projects:1}}).projects}},{fields:{id:1}});
        }
    },
    singleProjectData: function(){
        return Projects.findOne({_id:this._id});
    }
});
