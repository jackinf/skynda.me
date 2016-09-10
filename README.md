# **Angular sails base**

A [Sails](http://sailsjs.org) template with angular and https by default

### For Linux users: ###

    sudo apt-get install git npm nodejs
    sudo npm install -g bower sails grunt
    npm install
    bower install

### For Windows users: ###

Install chocolatey at https://chocolatey.org/

    cinst git npm nodejs
    npm install -g bower sails grunt
    npm install
    bower install

## Configure SSL ##

    mkdir config/ssl
    cd config/ssl
    openssl genrsa -out key.pem
    openssl req -new -key key.pem -out csr.pem
    openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

to start the server
    sails lift --silly

Go to https://localhost:1337
