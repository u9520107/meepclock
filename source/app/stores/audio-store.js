import StoreBase from 'meepworks/store-base';
import InitAudio from '../actions/init-audio';
import LoadAudio from '../actions/load-audio';
import PlayAudio from '../actions/play-audio';

const DATA = Symbol();

export default class AudioStore extends StoreBase {
  constructor() {
    this.rehydrate();
  }
  rehydrate() {
    this[DATA] = {
      loaded: false
    };
  }
  dehydrate() {
    return null;
  }
  handleInitAudio() {
    this[DATA].ctx = new AudioContext();
  }
  handleLoadAudio(buffers) {
    this[DATA].buffers = buffers;
    this[DATA].loaded = true;
  }
  handlePlayAudio(type) {
    if(this[DATA].loaded) {

      let src = this[DATA].ctx.createBufferSource();
      src.buffer = this[DATA].buffers[type];
      src.connect(this[DATA].ctx.destination);
      src.start(0);
    }
  }
  get handlers() {
    return [{
      action: InitAudio.symbol,
      handler: this.handleInitAudio
    }, {
      action: LoadAudio.symbol,
      handler: this.handleLoadAudio
    }, {
      action: PlayAudio.symbol,
      handler: this.handlePlayAudio
    }];
  }
}