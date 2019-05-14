# jnode
Node.js multi purpose middleware RESTful API

##Install
* Run npm init - to generate package.json if needed

NodeMon:
* Nodemon is needed for NodeJS server side
* npm install --save-dev nodemon

Express:
* npm install express --save

Lite-Server
* Install local HTTP server to test DApp
* npm install lite-server --save

MongoDB:
* npm mongo
* mongo --version

Mongoose:
* This is what we will use to interact with MongoDB
* npm install mongoose --save

## Setup for NodeJS RESTful API
* change directory into comfreeproperty
* From current root of comfreeproperty create a Javascript file and call it "server.js"
* See sample code in this project
* Create directory "api"
* Create the following sub-directories: api/conrollers, api/models, api/routes
* This RESTful takes the MVC framework

## Start shyftAPI server
* Change directory to shyftAPI directory
* Run command: npm run start

###Should ganche UI does not start do the following
* netstat -vanp tcp | grep <portnumber> OR ls -f -i:<portnumber>
* kill -9 <PID#>

###Add ssh key
* Follow instructions below
* https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
