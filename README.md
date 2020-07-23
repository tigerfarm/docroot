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

--------------------------------------------------------------------------------
After making a package change, for example, adding a new dependency using the npm version ("request": "6.14.5").
````
$ npm -v request
6.14.5

vi package.json
...
"dependencies": {
    "express": "^4.15.2",
    "request": "6.14.5",
...
````
Run the following which updates package-lock.json with the version number to use in package.json.
````
$ npm install
...
cat package-lock.json
...
"request": {
      "version": "2.88.0",
...
````
Use that version number from package-lock.json, in package.json, example:
````
"request": {
      "version": "2.88.0",
````
Run the following sequence to update the Heroku dyno from my GitHub repository.
````
$ git add .
$ git commit -am "updates"
$ git push -u origin master
$ git push heroku master

````

Cheers...
