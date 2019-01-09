import { createStore, compose } from 'redux';
// Do this to sync our Redux store with our React Router we've already made.
import { syncHistoryWithStore } from 'react-router-redux';
// Also need to modify the browserHisotry we fed into React Router before syncing it with our store (later).
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import the data (using static files atm, could be from an API eventually)
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data state
const defaultState = {
	posts,				// es6: same as `posts: posts` (set posts attr to value of post var, above), possible when attr and value have same name
	comments			// es6: same as `comments: comments`
}

// Creating a store requires 2 things: the root reducer, and the default state
const store = createStore(rootReducer, defaultState);

// To sync our browserHistory with our store, we pass them to syncHistoryWithStore. Then we will use this obj in our router in reduxstagram.js
// How do we pass things from one file to another? We EXPORT it!
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
