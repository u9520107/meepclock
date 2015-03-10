import ActionBase from 'meepworks/action-base';

export const CLIENT_INIT = Symbol();

export default class ClientInit extends ActionBase {
  static get symbol() {
    return CLIENT_INIT;
  }
  get symbol() {
    return CLIENT_INIT;
  }
}
