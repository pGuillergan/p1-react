import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
	return (
		<>
			<h1>404. Page Not Found</h1>
			<Link to='/'>
				<button className='btn btn-warning'>Back to home</button>
			</Link>
		</>
	);
}

export default NotFoundPage;