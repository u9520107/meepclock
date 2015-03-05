import ActionBase from 'meepworks/action-base';

export const LOAD_AUDIO = Symbol();

export default class LoadAudio extends ActionBase {
  static get symbol() {
    return LOAD_AUDIO;
  }
  get symbol() {
    return LOAD_AUDIO;
  }
  *action () {
    let ctx = new AudioContext();

    let res = yield [
      '/build/app/assets/mp3/start.mp3',
      '/build/app/assets/mp3/focus-end.mp3'
    ].map(f=> new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();
      req.open('get', f);
      req.responseType = 'arraybuffer';
      req.onload = () => {
        if(req.status!==200) {
          return reject(req.status);
        }
        ctx.decodeAudioData(req.response, (b) => {
          resolve(b);
        });
      };
      req.onerror = (err) => {
        reject(err);
      };
      req.send();
    }));
    return {
      start: res[0],
      end: res[1]
    };
  }
}
