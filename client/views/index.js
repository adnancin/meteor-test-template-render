Meteor.startup(function(){
    Meteor.subscribe('projects');
    Meteor.subscribe('tasks');
});
