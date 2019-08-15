# Tiger Farm Press Website

My Tiger Farm Press website.

These are just my work in progress files.

--------------------------------------------------------------------------------
### Support Information

https://help.heroku.com/749084

With free dyno version, no SSL certificate.
````
$ heroku certs -a tfpdocroot
* tfpdocroot has no SSL certificates.
Use heroku certs:add CRT KEY to add one.
````

Use the (Heroku dashboard)[https://dashboard.heroku.com] to set up ACM.
https://devcenter.heroku.com/articles/automated-certificate-management
+ Open an Heroku account.
+ Deploy GitHub repository to Heroku.
+ Log into the (Heroku dashboard)[https://dashboard.heroku.com].
+ Add a credit card into Heroku (Manage Account/Billing)[https://dashboard.heroku.com/account/billing].
+ Go to your deployment's resources: https://dashboard.heroku.com/apps/<deployment-name>/resources
+ Configure your dyno to be a paid version. I use Hobby, the first step up from Free.
+ Point your DNS entries to your Heroku deployment.

````
$ heroku certs:auto:enable
Enabling Automatic Certificate Management... starting. See status with heroku certs:auto or wait until active with heroku certs:auto:wait
=== Your certificate will now be managed by Heroku.  Check the status by running heroku certs:auto.
$ heroku certs:auto
=== Automatic Certificate Management is enabled on tfpdocroot

Certificate details:
Common Name(s): www.tigerfarmpress.com
                tigerfarmpress.com
Expires At:     2019-11-13 15:10 UTC
Issuer:         /C=US/O=Let's Encrypt/CN=Let's Encrypt Authority X3
Starts At:      2019-08-15 15:10 UTC
Subject:        /CN=www.tigerfarmpress.com
SSL certificate is verified by a root authority.

Domain                  Status       Last Updated
──────────────────────  ───────────  ────────────
tigerfarmpress.com      Cert issued  1 minute
www.tigerfarmpress.com  Cert issued  1 minute

$ heroku certs -a tfpdocroot
Name               Common Name(s)                              Expires               Trusted  Type
─────────────────  ──────────────────────────────────────────  ────────────────────  ───────  ────
stegosaurus-95825  www.tigerfarmpress.com, tigerfarmpress.com  2019-11-13 15:10 UTC  True     ACM
````

If you would like to use your root domain you will need to use a 
DNS host which supports CNAME-like records for root domains (usually called ALIAS or ANAME records).
We have a short list of providers we know to work here.  
This list not comprehensive so you will find others who also work.  
Note you do not need to change DNS registrars, you just need to delegate your domain to use your chosen DNS host.

Manually uploading certificates and intermediaries
https://devcenter.heroku.com/articles/ssl#manually-uploading-certificates-and-intermediaries
Add your certificate, any intermediate certificates bundles, and private key with the certs:add command.
heroku certs:add server.crt server.key

Cheers...
