OwnerProjectModel = function(doc){
    _.extend(this,doc);
};
_.extend(OwnerProjectModel.prototype,{
    fullName: function(){
        return (this.firstName + " " + this.lastName);
    }
});

OwnerProjects = new Meteor.Collection('ownerprojects', {
    transform: function(doc){
        return new OwnerProjectModel(doc);
    }
});

OwnerProjects.allow({
    update:function(){
        return true;
    }
});
