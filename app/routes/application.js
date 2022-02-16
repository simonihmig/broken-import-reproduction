import Route from '@ember/routing/route';

import { createStorage } from 'ember-tracked-storage-polyfill';
import { createStore } from 'tracked-redux';
import { assert } from '@ember/debug';

const store = createStore((state = { items: [] }, action) => {
  if (action.type === 'ADD') {
    return { items: [...state.items, state.items.length + 1] };
  }

  return state;
});

export default class ApplicationRoute extends Route {
  model() {
    assert('createStorage import works', createStorage);
    store.dispatch({ type: 'ADD' });
    return store.getState().items;
  }
}
