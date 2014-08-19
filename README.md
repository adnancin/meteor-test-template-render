#Testing template rendering with Meteor#

**CURRENT STATUS**: The template now has a with binding on top that causes all helpers
inside it to run even for a change of a single field. 

The data for this can be changed using the two buttons at the bottom of the scren 
The first button will change the first project's name. This will cause a call of only 
the data within the children of that particular project. The second project template 
helpers will not get called again. **NOTE: The DOM does not get updated. Only the 
helpers are called** 

The second button will change the "Owner Project" first name. That causes a **Full call of
all helpers under it including a rerun of the loop. Again, no DOM updates**


This is an experimental project to see how template updates are triggered in Meteor.
The observations we have noticed in some larger projects show that despite only a
single field being updated in a 'parent' template, the entire DOM gets rerendered. As
we are not sure what is causing this, we are slowly trying to recreate this scenario
