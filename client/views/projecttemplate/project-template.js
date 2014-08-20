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
            return Projects.find({owner:this._id},{fields:{_id:1},sort:{_id:1}});
        }
    },
    singleProjectData: function(){
        return Projects.findOne({_id:this._id});
    }
});
