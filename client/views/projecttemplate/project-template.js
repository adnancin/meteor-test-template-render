Template.projectTemplate.helpers({
    singleProject:function(){
        if (Projects.findOne()){
            console.log("getting the single project");
            var singleProjectToReturn = Projects.findOne();
            return new Project(singleProjectToReturn._id, singleProjectToReturn.name, singleProjectToReturn.type);
        }
    }
});
