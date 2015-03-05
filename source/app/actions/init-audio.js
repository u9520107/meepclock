import ActionBase from 'meepworks/action-base';

export const INIT_AUDIO = Symbol();
export default class InitAudio extends ActionBase {
  static get symbol() {
    return INIT_AUDIO;
  }
  get symbol() {
    return INIT_AUDIO;
  }
}
