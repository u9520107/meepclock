import React from 'react';

export const ClockFace = React.createClass({
  render() {
    return <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0
      }}
      height="100%"
      width="100%"
      viewBox="0 0 1000 1000" >
      <circle cx="500" cy="500" r="400" stroke="black" fill="#E1EEFD" opacity="0.3"/>
      <text fill="black" fontSize="80" transform="translate(500, 180)" textAnchor="middle">12</text>
      <text fill="black" fontSize="80" transform="translate(500, 880)" textAnchor="middle">6</text>
      <text fill="black" fontSize="80" transform="translate(860, 530)" textAnchor="middle">3</text>
      <text fill="black" fontSize="80" transform="translate(140, 530)" textAnchor="middle">9</text>
      <circle fill="black" r="3" transform="translate(500 500) rotate (30) translate(0 -360) "/>
      <circle fill="black" r="3" transform="translate(500 500) rotate (60) translate(0 -360) "/>
      <circle fill="black" r="3" transform="translate(500 500) rotate (120) translate(0 -360) "/>
      <circle fill="black" r="3" transform="translate(500 500) rotate (150) translate(0 -360) "/>
      <circle fill="black" r="3" transform="translate(500 500) rotate (210) translate(0 -360) "/>
      <circle fill="black" r="3" transform="translate(500 500) rotate (240) translate(0 -360) "/>
      <circle fill="black" r="3" transform="translate(500 500) rotate (300) translate(0 -360) "/>
      <circle fill="black" r="3" transform="translate(500 500) rotate (330) translate(0 -360) "/>
    </svg>;
  }
});

export const Clock = React.createClass({
  render() {
    return <div></div>;
  }
});

/**

var Clock = React.createClass({
  getInitialState: function () {
    return {
      time: new Date()
    };
  },
  componentDidMount: function () {
    raf(this.animate);
  },
  animate: function () {
    if(this.isMounted()) {
      this.setState({
        time: new Date()
      });
      raf(this.animate);
    }
  },
  render: function () {
    var ms = this.state.time.getMilliseconds();
    var seconds = this.state.time.getSeconds();
    var minutes = this.state.time.getMinutes();
    var hours = this.state.time.getHours()%12;

    var className = ['mp-clock'];
    var center = {
      x: 500,
      y: 500
    };

    return <svg className={className.join(' ')} height="100%" width="100%" viewBox="0 0 1000 1000">
      <Hand
        center={center}
        length={320}
        angle={(ms + seconds*1000)/60000*360}
      />
      <StyleHand
        center={center}
        length={200}
        color={'red'}
        width={10}
        angle={(hours*3600000 + minutes*60000 + seconds*1000 + ms)/43200000*360}
      />
      <StyleHand
        center={center}
        length={350}
        width={5}
        angle={(minutes*60000 + seconds*1000 + ms)/3600000*360}
      />
      <circle cx={center.x} cy={center.y} r="20" fill="black" />
    </svg>;
  }
});
var Hand = React.createClass({
  getDefaultProps: function () {
    return {
      center: {
        x: 0,
        y: 0
      },
      color: 'black',
      width: 1,
      length: 0,
      angle: 0
    };
  },
  render: function () {
    var transforms = ['translate(500, 500)','rotate(' + this.props.angle + ')'];
    return <line className="mp-clock-hand"
      x1={0}
      y1={0}
      x2={0}
      y2={-this.props.length}
      stroke={this.props.color}
      strokeWidth={this.props.width}
      transform={transforms.join(' ')}
    />;
  }
});

var StyleHand = React.createClass({
  getDefaultProps: function () {
    return {
      center: {
        x: 0,
        y: 0
      },
      color: 'black',
      width: 1,
      length: 0,
      angle: 0
    };
  },
  render: function () {
    var transforms = ['translate(500, 500)', 'rotate(' + this.props.angle + ')'];
    var points = [
      [0,0].join(','),
      [-this.props.width/2, -this.props.length*0.3].join(','),
      [0, -this.props.length].join(','),
      [this.props.width/2, -this.props.length*0.3].join(',')
    ].join(' ');

    return <polygon points={points} fill={this.props.color} transform={transforms.join(' ')}/>;
  }
  });
*/
