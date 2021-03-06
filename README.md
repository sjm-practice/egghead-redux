# egghead.io / Dan Abramov Getting Started with Redux tutorial
* Coding along with the [tutorial](https://egghead.io/courses/getting-started-with-redux).
* This code along starts with my [Meteor React boilerplate](https://github.com/sjm-practice/meteor-react-testing-bp)

## Notes
* Monday 1/3/17, left off completing video 26 (Provider)
* I like the brevity and convenience of react-redux connect(), however it wasn't obvious on how to render multiple components
    * I did find this [post](http://stackoverflow.com/questions/35032204/react-redux-connect-to-multiple-components-best-practices) on how to render multiple components with connect
    * essentially, using connect to create one container component that has multiple components to render, and destructuring props, and passing those to each individual component as needed
* Note, there are varying coding conventions / styles in this code base; mostly because I'm mimicking different examples as I see them, and still dialing in on conventions to follow
* PropTypes still works with connect container, just declare/define as usual
* Children are pass on to connect container, just like to a normal container
* props are passed on as well, but as 'ownProps' arguments to mapStateToProps and mapDispatchToProps

## Feedback
* A very good tutorial, clear progressive explanations.
* At times shows what is going under the hood through simple coding examples
* I would follow along, and not worry to much about refactoring in to a style you may code, because he does some of those refactors later on in the tutorial