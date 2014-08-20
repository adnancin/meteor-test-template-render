if(Projects.find().count()===0){

    var firstOwnerId = OwnerProjects.insert({
        firstName: "Adnan",
        lastName: "Issadeen",
    });

    var firstProjectId = Projects.insert({
        name: "First Project",
        type: "List Project",
        owner: firstOwnerId
    });

    var secondProjectId = Projects.insert({
        name: "Second Project",
        type: "Plan Project",
        owner: firstOwnerId
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
