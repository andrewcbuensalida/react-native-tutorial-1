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

create a node server
