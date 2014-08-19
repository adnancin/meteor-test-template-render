Meteor.publish('projects', function(){
    return Projects.find({});
});

Meteor.publish('tasks', function(){
    return Tasks.find({});
});

Meteor.publish('ownerprojects', function(){
    return OwnerProjects.find({});
});
