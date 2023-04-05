### Overview of file structure:-

		client/
		public/
		src/
		 components/
		   AddDocument.js
		   Document.js
		   DocumentList.js
		   EditDocument.js
		 services/
		   api.js
		 App.js
		 index.js
		...
		.env
		package.json
		...


		server/
		controllers/
		 document.js
		models/
		 document.js
		routes/
		 documents.js
		node_modules/
		index.js
		.env
		package.json
		package-lock.json


		docker/
		.dockerignore
		Dockerfile
		docker-compose.yml


		README.md
		Dockerfile.client
		


# Fullstack MERN WEBAPP using Docker.

## React CRUD Application with Node.js Backend

This is a simple web application that allows users to manage a list of documents. It features a React-based front-end and a Node.js/Express back-end with MongoDB database

### Tech Stack
* React.js (Front-end)
* Node.js (Back-end)
* Express.js (Back-end)
* MongoDB (Database)
* Docker (Containerization)

# Getting Started
To get started, you will need to have Node.js and Docker installed on your machine.

### Installation
1. Clone the repository

   `git clone https://github.com/<username>/<project-name>.git`

2. Install dependencies for both the client and server
	```
	cd client
	npm install
	cd ../server
	npm install
	```

3. Create a .env file in the server directory with the following content:
	```
	PORT=8080
	MONGODB_URI=mongodb://mongo:27017/<your-database-name>
	```

4. Build the Docker containers using Docker Compose

   `docker-compose build`

### Running the Application
1. Start the Docker containers

   `docker-compose up`

2. The React application should now be accessible in your browser at 

   `http://localhost:3000.`


### Additional Information
*The React application has a proxy field in the package.json file, which allows you to make API requests to the back-end without specifying the full URL. This is because the front-end and back-end are served on different ports.
* To build the React application for production, run npm run build in the client directory. This will generate a build directory that can be served by the back-end.
* To deploy the application to a cloud platform like AWS or Google Cloud, you can use Docker Hub to host your Docker images and Kubernetes to orchestrate your containers.


## Things used in project!

###  client-side
* Axios: A Promise based HTTP client for the browser and node.js
* Bootstrap: A CSS framework to make our application responsive and mobile-first.
* Font Awesome: A web font containing all the icons from the Twitter Bootstrap framework.

### Server-side
* Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
* Express.js: A fast, unopinionated, minimalist web framework for Node.js.
* Mongoose: A MongoDB object modeling tool designed to work in an asynchronous environment
* MongoDB: A NoSQL document-based database.
* dotenv: A zero-dependency module that loads environment variables from a .env file.
* nodemon: A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* bcrypt: A password-hashing function that is used to securely store user passwords in the database.

### Deployment
* Docker: A tool designed to make it easier to create, deploy, and run applications by using containers.
* Docker Compose: A tool for defining and running multi-container Docker applications.
* Heroku: A cloud platform as a service (PaaS) that allows us to deploy, manage, and scale our applications.

## Dependencies we added in our project:

### Server Dependencies
* express: A fast, unopinionated, minimalist web framework for Node.js
* mongoose: A MongoDB object modeling tool designed to work in an asynchronous environment
* dotenv: A zero-dependency module that loads environment variables from a .env file
* cors: A middleware that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading resources
* helmet: A middleware that helps to secure Express apps by setting various HTTP headers
* bcryptjs: A library for hashing passwords

### Client Dependencies
* react: A JavaScript library for building user interfaces
* react-dom: A package for working with the DOM in React
* react-router-dom: A library that provides routing functionality for React apps
* axios: A promise-based HTTP client for making API requests
* bootstrap: A popular CSS framework for building responsive, mobile-first websites
* react-bootstrap: A library of reusable front-end components for React
* react-icons: A collection of popular icons for React
* react-toastify: A library for showing toast notifications in React

### Dev Dependencies
* nodemon: A utility that automatically restarts the node process when a file is changed
* concurrently: A tool for running multiple commands concurrently



