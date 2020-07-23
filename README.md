# Tiger Farm Press Website

My Tiger Farm Press website files.

--------------------------------------------------------------------------------
### Information

How to update the GitHub repository, and then update the website.

If not logged into your Heroku account, do so.
````
$ heroku login -i
heroku: Enter your login credentials
Email: abc@example.com
Password: ********
Logged in as abc@example.com
````

Update,
````
$ cd ../tfpdocroot/
$ git add .
$ git commit -am "updates"
$ git push -u origin master

$ git push heroku master

heroku logs --tail
````

After making a package change,
````
$ npm install
$ git commit -am "updates"
$ git push -u origin master
$ git push heroku master

````

Cheers...
