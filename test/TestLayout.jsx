'use strict';
var React = require('react/addons');
typeof window !== "undefined" && (window.React = React); // for devtools
typeof window !== "undefined" && (window.Perf = React.addons.Perf); // for devtools
var _ = require('lodash');
var ReactGridLayout = require('../lib/ReactGridLayout.jsx');
require('style!css!../css/styles.css');

var TestLayout = module.exports = React.createClass({
  displayName: 'TestLayout',

  generate() {
    return _.map(_.range(12), function(i) {
      return (<div key={i}><span className="text">{i}</span></div>);
    });
  },

  render() {
    var items = this.generate();
    var layout = _.map(items, function(item, i) {
      var y = Math.ceil(Math.random() * 8) + 1;
      return {x: i * 2 % 12, y: Math.floor(i / 6) * y, w: 2, h: y};
    });
    return (
      <ReactGridLayout className="layout" initialLayout={layout} cols={12} rowHeight={30}>
        {this.generate()}
      </ReactGridLayout>
    );
  }
});
