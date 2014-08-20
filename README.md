#Testing template rendering with Meteor#

**CURRENT STATUS**: The templates now do not re run fully for data changes and even
project inserts. The model being used here successfully solves the problem by 
ensuring the data context is just a reference to a set of Ids. Within that context 
if you need access to a full data model you simply bind that data within its own 
with context. 

This is an experimental project to see how template updates are triggered in Meteor.
The observations we have noticed in some larger projects show that despite only a
single field being updated in a 'parent' template, the entire DOM gets rerendered. As
we are not sure what is causing this, we are slowly trying to recreate this scenario
