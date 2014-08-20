Tasks = new Meteor.Collection('tasks');

Tasks.allow({
    insert:function(){return true;}
});
