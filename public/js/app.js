var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');


var Hello = createReactClass({
  render: function () {
    return <h3>Hello JSX?</h3>;
  }
});

ReactDOM.render(<Hello />, document.getElementById('react'));