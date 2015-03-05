import React from 'react';
import TimeStore from './stores/time-store';
import SetFocustimes from './actions/set-focustimes';
import UpdateTime from './actions/update-time';
import 'normalize.css/normalize.css!';
import styles from './app-styles';
import {merge as m} from 'meepworks/styles';
import {ClockFace, Clock} from './lib/clock';

import AudioStore from './stores/audio-store';
import InitAudio from './actions/init-audio';
import LoadAudio from './actions/load-audio';
import PlayAudio from './actions/play-audio';


const App = React.createClass({
  getInitialState() {
    return this.getStates();
  },
  componentDidMount() {
    TimeStore.getInstance().on('change', this.handleChange);
    requestAnimationFrame(this.triggerUpdateTime);
    new InitAudio()
      .exec()
      .then(() => {
        return new LoadAudio()
          .exec();
      });
  },
  componentWillUnmount() {
    TimeStore.getInstance().off('change', this.handleChange);
  },
  shouldComponentUpdate(nextProps, nextState) {
    let focus = nextState.time.get('focus');
    let wasFocused = this.state.time.get('focus');
    if(focus !== wasFocused) {
      new PlayAudio(focus ? 'start': 'end')
        .exec();
    }
    return nextState.time !== this.state.time;
  },
  handleChange() {
    this.replaceState(this.getStates());
  },
  triggerUpdateTime() {
    new UpdateTime().exec()
    .then(() => {
      if(this.isMounted()) {
        requestAnimationFrame(this.triggerUpdateTime);
      }
    });
  },
  getStates() {
    return {
      time: TimeStore.state
    };
  },
  render() {
    let focus = this.state.time.get('focus');
    return <div className="app-contaier">
      {
        //<div className="debug-info">
        //  Now: {this.state.time.get('now').toString()}<br />
        //  Focus: {focus.toString()}<br /><br />
        //  Focus times: <pre><code>{JSON.stringify(this.state.time.get('focusTimes'), null, 2)}</code></pre>
        //</div>
        }
        <div
          className="app-content"
          style={m(
            styles.app
          )}
          >
          <div
            key="focus"
            style={m(
              styles.background,
              styles.focusColor
            )}>
            <div
              key="focus-background"
              style={m(
                styles.focusBackground
              )}></div>
            <img
              key="focus-egg"
              src="/build/app/assets/images/focus-a.png"
              style={m(
                styles.focusEgg,
                !focus && styles.focusEggTransform
              )}
            />
            <img
              key="focus-logo"
              src="/build/app/assets/images/focus-d.png"
              style={m(
                styles.focusLogo,
                !focus && styles.focusLogoTransform
              )}
            />
          </div>
          <div
            key="normal"
            style={m(
              styles.background,
              styles.normalColor,
              focus && styles.transparent
            )}>
            <img
              key="cooperation"
              src="/build/app/assets/images/cooperation.png"
              style={m(
                styles.cooperation,
                focus && styles.cooperationTransform
              )}
            />
            <img
              key="cooperation-logo"
              src="/build/app/assets/images/cooperation-logo.png"
              style={m(
                styles.cooperationLogo,
                focus && styles.cooperationLogoTransform
              )}
            />
          </div>
          <div
          className="clock-container"
          style={m(
            styles.clockContainer,
            !focus && styles.clockCasual
          )}>
          <ClockFace />
          <Clock now={
            this.state.time.get('now')
          }/>
        </div>
      </div>
    </div>;
  }
});



export default {
  component: App,
  stores: [
    TimeStore,
    AudioStore
  ],
  initialActions: [{
    action: SetFocustimes,
    payload: [
      '9:30~10:30',
      '11:00~12:00',
      '16:52~16:53'
    ]
  }],
  routes: {
    '/': {
      name: 'home',
      title: 'Meepshop Clock'
    }
  }
};
