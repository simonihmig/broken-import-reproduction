import Route from '@ember/routing/route';

import { createStore } from 'tracked-redux';

const store = createStore((state = { items: [] }, action) => {
  if (action.type === 'ADD') {
    return { items: [...state.items, state.items.length + 1] };
  }

  return state;
});

export default class ApplicationRoute extends Route {
  model() {
    store.dispatch({ type: 'ADD' });
    return store.getState().items;
  }
}
