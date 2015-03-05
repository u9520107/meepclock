import ActionBase from 'meepworks/action-base';

export const PLAY_AUDIO = Symbol();
export default class PLayAudio extends ActionBase {
  static get symbol() {
    return PLAY_AUDIO;
  }
  get symbol() {
    return PLAY_AUDIO;
  }
  *action(type) {
    return type;
  }
}
