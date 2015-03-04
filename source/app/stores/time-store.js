import StoreBase from 'meepworks/store-base';
import Im from 'immutable';

const DATA = Symbol();

export default class TimeStore extends StoreBase {
  constructor() {
    this.rehydrate({
      focus: []
    });
  }
  rehydrate(state) {
    state.now = new Date();
    this[DATA] = Im.fromJS(state);
  }
  dehydrate() {
    let state = this[DATA].toJS();
    delete state.now;
    return state;
  }
  static get now() {
    return this.getInstance().now;
  }
  get now() {
    return this[DATA].get('now');
  }
  static get isFocus() {
    return this.getInstance().isFocus;
  }
  get isFocus() {
  }
}
