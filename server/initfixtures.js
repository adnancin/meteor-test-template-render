if(Projects.find().count()===0){
    
    var firstProjectId = Projects.insert({
        name: "First Project",
        type: "List Project"
    });

    Projects.insert({
        name: "Second Project",
        type: "Plan Project"
    });

    OwnerProjects.insert({
        firstName: "Adnan",
        lastName: "Issadeen"
    });

    Tasks.insert({
        projectId: firstProjectId,
        name: "First Task",
        estimate: 3
    });

    Tasks.insert({
        projectId: firstProjectId,
        name: "Second Task",
        estimate: 5
    });
};
