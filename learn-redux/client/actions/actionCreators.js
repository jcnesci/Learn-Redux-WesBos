// 'increment likes' action
// receives `index`, the index of the post that was liked, ie. incremented
// we pass as little data around as possible, here only the index, not the all the post's data
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index							// es6 shortcut
	}
}

// 'add comment'
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// 'remove comment'
// `i` is the index of the comment to remove
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}
