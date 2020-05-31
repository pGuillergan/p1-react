import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage () {

        return (
            <>
                <h1>Welcome to ABCollege Course Portal</h1>
                <p>
                    So crucify the ego, before it's far too late
                    To leave behind this place so negative and blind and cynical
                    And you will come to find that we are all one mind
                    Capable of all that's imagined and all conceivable
                    Just let the light touch you
                    And let the words spill through
                    And let them pass right through
                    Bringing out our hope and reason
                </p>

                <Link to='/courses'>
					<button className='btn btn-danger'>Go to Courses Page</button>
				</Link>
            </>
        );

}

