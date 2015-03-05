import ActionBase from 'meepworks/action-base';

export const UPDATE_TIME = Symbol();

export default class UpdateTime extends ActionBase {
  get symbol() {
    return UPDATE_TIME;
  }
  static get symbol() {
    return UPDATE_TIME;
  }
}
