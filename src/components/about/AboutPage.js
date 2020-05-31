import React from 'react';

function AboutPage(){
    return(
        <>
        <h1>Project Description</h1>
        <p>
	The project is aimed to be used by students and administrators of ABCollege.<br/> 
    The admin can create account, view accounts, and create courses. <br/>
    While the student can view their transcript of records, view courses uploaded by the admin, and edit their personal information. <br/>
    </p>
<h1>Technologies</h1>
<p>
Node JS – It is an open source runtime for JavaScript that runs on a V8 engine. This allows the program to communicate with back-end.<br/>
	Node Packages:<br/>
		-Express<br/>
		- Express -sessions<br/>
		- jest<br/>
		- nodemon<br/>
		-router<br/>
		-super test<br/>
		-fs for logs<br/>
	Express JS – Is a framework for JavaScript mainly to develop web or mobile applications.  <br/>
	Jest – It is an open source Framework maintained by Facebook to test JavaScript.<br/>
PostgreSQL – Open source relational database. It is considered as the most advanced database system.<br/>
JavaScript/TypeScript – Java script as a front end more interactive while JavaScript as a backend enables the program to communicate with the server. TypeScript is a super set of JavaScript.
</p>
        </>
    );
}

export default AboutPage;