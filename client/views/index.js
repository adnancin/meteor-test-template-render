Meteor.startup(function(){
    Meteor.subscribe('projects');
    Meteor.subscribe('tasks');
});

Template.changeDataTemplate.events({
    'click #change-project-info': function(){
        var theOnlyProject = Projects.findOne();
        if(theOnlyProject.name === "First Project"){
            Projects.update({_id:Projects.findOne()._id},{$set:{name: "Edited Project Name"}});
        }
        else{
            Projects.update({_id:Projects.findOne()._id},{$set:{name: "First Project"}});
        }
    }
});
