copy config of docg
sudo cp /etc/nginx/sites-available/docg.anhonestobserver.com.conf /etc/nginx/sites-available/heat.anhonestobserver.com.conf

edit
sudo nano /etc/nginx/sites-available/heat.anhonestobserver.com.conf

delete the 443 stuff so it looks like
server {
listen 80;
server_name heat.anhonestobserver.com www.heat.anhonestobserver.com;

location / {
proxy_pass http://localhost:3000;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}
}

sudo ln -s /etc/nginx/sites-available/heat.anhonestobserver.com.conf /etc/nginx/sites-enabled/
sudo systemctl reload nginx

go to aws route53 and create a record www.heat.anhonestobserver.com and naked that points to ip address of google compute engine.

sudo certbot --nginx to get ssl

to install postgres on linux: https://www.postgresql.org/download/linux/ubuntu/
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get -y install postgresql

switch to postgres account: sudo -i -u postgres
then access postgresql: psql

create postgres db by following instructions in db.sql

create a node server locally, upload it to github, then in compute engine clone it
git clone https://github.com/andrewcbuensalida/react-native-tutorial-1.git
rename folder to heat, mv react-native-tutorial-1 heat
cd into heat/server, cd heat, then create .env withh sudo nano .env
npm i to install dependencies

ss -tnlp | grep "node /" to see what ports pm2 processes are running on.

to run server, with auto restart when files change, put --watch,
pm2 start server.js --watch --name heat

then to auto restart when instance reboots,
pm2 startup
pm2 save

to check logs , pm2 logs heat --timestamp

<!-- development workflow isnt so great. if changing the server, cant remote ssh via vs code if remote has low ram, has to be maybe 4gb at least, or else itll just crash and have to restart server. just ssh via gcp, then push to sync changes to local. except that i cant because support for password authentication ended in august 2021. so ngrok is the answer.

open powershell, then
cd "C:\Program Files\nginx-1.20.1" -->
<!-- then ngrok.exe http 3000 , 3000 being the port of the node server. -->

ACTUALLY NGROK ISN'T THE ANSWER BECAUSE GOING TO HAVE TO FIX UP THE DATABASE LOCALLY AND REMOTELY, DOUBLE WORK. JUST EDIT the server on remote ssh, and edit the client on local. then just copy from remote and paste to local. then push local. then pull in remote.

also explore element inspector. react native debugger or something.

rr to refresh emulator

to publish to expo:
https://docs.expo.dev/classic/building-standalone-apps/
cd into client folder, then expo build:android or expo build:ios
building android will point you to a url with a qr code. give you an aab file. which you can download onto your phone and install. for some reason though, couldn't install aab, only apk.
expo publish will give you the url with qr code.
build:ios then choosing simulator will give you a .tar file.
need to have paid developer account for ios if not building simulator version
build automatically publishes
now can go to https://expo.dev/@andrewcbuensalida/heat

<!-- to publish to the play store, npm install --global eas-cli
then eas submit --platform android --url https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40andrewcbuensalida/heat-7270f58d628c4f118a785012c76b69e9-signed.aab -->
