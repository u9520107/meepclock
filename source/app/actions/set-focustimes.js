import ActionBase from 'meepworks/action-base';

export const SET_FOCUSTIMES = Symbol();

export default class SetFocustimes extends ActionBase {
  static get symbol() {
    return SET_FOCUSTIMES;
  }
  get symbol() {
    return SET_FOCUSTIMES;
  }
  *action (focustimes) {
    return focustimes;
  }
}
