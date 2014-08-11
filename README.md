#Testing template rendering with Meteor#

**CURRENT STATUS**: The template helpers are being rerun but the DOM updates are not
being triggered with it

This is an experimental project to see how template updates are triggered in Meteor.
The observations we have noticed in some larger projects show that despite only a
single field being updated in a 'parent' template, the entire DOM gets rerendered. As
we are not sure what is causing this, we are slowly trying to recreate this scenario
