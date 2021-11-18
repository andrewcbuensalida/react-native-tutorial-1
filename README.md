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

create a node server
