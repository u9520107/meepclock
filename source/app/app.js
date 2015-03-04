import React from 'react';
import 'normalize.css/normalize.css!';


const App = React.createClass({
  render() {
    return <div>MeepClock
    </div>;
  }
});



export default {
  component: App,
  stores: [
  ],
  routes: {
    '/': {
      name: 'home',
      title: 'Meepshop Clock'
    }
  }
};
