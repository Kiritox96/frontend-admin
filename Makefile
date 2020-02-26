run:
	sudo docker stop admin
	sudo docker build --rm -t admin .
	sudo docker run --name admin -p 4200:4200 admin

first:
	sudo docker build --rm -t admin . 
	sudo docker run --name admin -p 4200:4200 admin
