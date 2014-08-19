ProjectModel = function(doc){
    _.extend(this, doc);
};
_.extend(ProjectModel.prototype, {
    nameType: function(){
        return (this.name + ": " + this.type);
    }
});

Projects = new Meteor.Collection('projects', {
    transform: function (doc){
        return new ProjectModel(doc);
    }
});

Projects.allow({
    update: function(){return true;}
});
