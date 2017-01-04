# egghead.io / Dan Abramov Getting Started with Redux tutorial
* Coding along with the [tutorial](https://egghead.io/courses/getting-started-with-redux).
* This code along starts with my [Meteor React boilerplate](https://github.com/sjm-practice/meteor-react-testing-bp)

## Notes
* Monday 1/3/17, left off completing video 26 (Provider)
* I like the brevity and convenience of react-redux connect(), however it wasn't obvious on how to render multiple components
    * I did find this [post](http://stackoverflow.com/questions/35032204/react-redux-connect-to-multiple-components-best-practices) on how to render multiple components with connect
    * essentially, using connect to create one container component that has multiple components to render, and destructuring props, and passing those to each individual component as needed
* Note, there are varying coding conventions / styles in this code base; mostly because I'm mimicking different examples as I see them, and still dialing in on conventions to follow