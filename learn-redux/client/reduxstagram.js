/*
Progress: video #4
https://www.youtube.com/watch?v=iNzMIoBNnNU&list=PLu8EoSxDXHP5uyzEWxdlr9WQTJJIzr6jy&index=4
*/

import React from 'react';		// path is short, so its from node_modules
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// import React router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// history={ browserHistory } is to enable "push state" feature, ie. we can enter URL and go to that path without relaoding page, I think
// IndexRoute is the main component for its parent Route
// Route of Single is also a child component of Main route, but is not the index/primary one, so we give it a path
// We use 'React.cloneElement()' in Main because of how we setup Routes here; PhotoGrid and Single are children on Main here, so that's why we pass down props.children with cloneElement
const router = (
	<Router history={ browserHistory }>
		<Route path="/" component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>
);

render(router, document.getElementById('root'));