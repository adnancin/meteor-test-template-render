ProjectSubscription = Meteor.subscribe('projects');
TasksSubscription = Meteor.subscribe('tasks');
OwnerProjectsSubscription = Meteor.subscribe('ownerprojects');

Template.changeDataTemplate.events({
    'click #change-project-info': function(){
        var theOnlyProject = Projects.findOne({},{sort:{_id:1}});
        if(theOnlyProject.name === "First Project"){
            Projects.update({_id:theOnlyProject._id},{$set:{name: "Edited Project Name"}});
        }
        else{
            Projects.update({_id:theOnlyProject._id},{$set:{name: "First Project"}});
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
    },
    'click #add-project-with-task': function(){
        var ownerProject = OwnerProjects.findOne();
        var projectCount = Projects.find({},{fields:{_id:1}}).count() + 1;
        var insertedProjectId = Projects.insert({
            name: "Project number " + projectCount.toString(),
            type: "Button Project",
            owner: ownerProject._id
        });
        Tasks.insert({
            projectId: insertedProjectId,
            name: "First task for Project " + projectCount.toString(),
            estimate: 0
        })
    }
});
