# jnode
Node.js multi purpose middleware RESTful API
Node version as of this writing: v8.11.3

##Install for development environment
* Run npm init - to generate package.json if needed

NodeMon:
* Nodemon is needed for NodeJS server side
* npm install --save-dev nodemon

Express:
* npm install express --save

Lite-Server
* Install local HTTP server to test DApp
* npm install lite-server --save

MongoDB.  Check to see if you have this database already installed.  If not run below NPM command:
* npm mongo
* mongo --version

Mongoose:
* This is what we will use to interact with MongoDB
* npm install mongoose --save

Web3:
* Need to install Web3 that bridges between Javascript and blockchain smart contract
* npm install web3

Solc:
* Need to install solc to interact with smart contracts
* npm install solc

## Setup for NodeJS RESTful API
* change directory into jnode
* From current root of jnode create a Javascript file and call it "server.js"
* See sample code in this project
* Create directory "api"
* Create the following sub-directories: api/conrollers, api/models, api/routes
* This RESTful takes the MVC framework

## Start jnode server
* Change directory to jnode directory
* Run command: npm run start

###Should ganche UI does not start do the following
* netstat -vanp tcp | grep <portnumber> OR lsof -f -i:<portnumber>
* kill -9 <PID#>

###Add ssh key
* Follow instructions below
* https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
