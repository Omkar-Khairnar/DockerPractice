<!-- To make the image of application -->
 docker buid -t [imageName:version-or-tag]
 Ex - docker build -t omkar158/example-nodeimage:0.0.1.RELEASE ./

<!-- To push the dockerImage of application to hub.docker.com i.e. publishing own Image can be public or private -->
docker push [imageName:tag]
Ex - docker push omkar158/example-nodeimage:0.0.1.RELEASE 

<!-- To run the container on the image created -->
docker container run -d -p 3000:3000 --name [NameofContainer] [ImageName:tag]
docker container run -d -p 3000:3000 --name my-image-container omkar158/example-nodeimage:0.0.1.RELEASE 
