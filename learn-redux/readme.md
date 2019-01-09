
# Learning Notes

Progress:
- ... no notes
- Video 5
	- introducing Redux
	- Chrome Dev Tools' Console: `$r` : shortcut for whatever is selected in Dev Tools React panel
		- `$r.store.getState()` : returns all data in our redux Store (comments, etc)
	- Creating `store.js` file
		- root reducer + default state => store
		- syncing browser history with store
- Video 6
	- Topics
		- What are actions?
			- Its an action a user takes in the app, like clicking a button, liking a post, commenting on an image
			- Contains 2 things: the type of action that occured, and the data payload that goes with it
		- What are action creators?
			- wrote them in new `actionCreators.js`
		- What are reducers?
			- in next video
- Video 7
	- WIP

---

# ORIGINAL README >>>

# Learn Redux

A simple React + Redux implementation. This will be turned into a free video series once the app is totally fleshed out.

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.
