###
 # Start project
 ##
ionic start -a MyApp -i com.mycompany.myapp -s true myapp tabs
cd myapp/

###
 # Install node modules
 ##
sudo npm install

###
 # Install requirejs
 ##
bower install requirejs -S
bower install requirejs-text -S

###
 # Config requirejs
 ##
mkdir www/config
nano www/config/requirejs.js

###
 # Make global files
 ##
mkdir www/global
nano www/global/ini.js # Define app
nano www/global/bootstrap.js # Manual bootstrap app

###
 # Make modules
 # Structure:
 # modules
 # |-controllers
 # |-directives
 # |-services
 # |-templates
 # '-main.js
 ##
mkdir www/modules

###
 # Add gulp task
 ##
nano gulpfile.js