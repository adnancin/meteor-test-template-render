ProjectSubscription = Meteor.subscribe('projects');
TasksSubscription = Meteor.subscribe('tasks');
OwnerProjectsSubscription = Meteor.subscribe('ownerprojects');

Template.changeDataTemplate.events({
    'click #change-project-info': function(){
        var theOnlyProject = Projects.findOne();
        if(theOnlyProject.name === "First Project"){
            Projects.update({_id:Projects.findOne()._id},{$set:{name: "Edited Project Name"}});
        }
        else{
            Projects.update({_id:Projects.findOne()._id},{$set:{name: "First Project"}});
        }
    },
    'click #change-owner-info': function(){
        var ownerProject = OwnerProjects.findOne();
        if(ownerProject.firstName == "Adnan"){
            OwnerProjects.update({_id:ownerProject._id},{$set:{firstName: "Another"}});
        }
        else{
            OwnerProjects.update({_id:ownerProject._id},{$set:{firstName: "Adnan"}});
        }
    }
});
