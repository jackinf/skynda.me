# **Angular sails base**

A [Sails](http://sailsjs.org) template with angular and https by default

    sudo apt-get install git npm nodejs 
    sudo npm install bower -g
    bower install
    mkdir config/ssl
    cd config/ssl
    openssl genrsa -out key.pem
    openssl req -new -key key.pem -out csr.pem
    openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
    sudo npm install -g sails
    sudo npm install -g grunt

to start the server 

sails lift --silly

Go to https://localhost: 1337
