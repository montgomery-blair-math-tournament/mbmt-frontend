# rebuild.sh - taken from https://github.com/mbhs/mbhs

git pull

old_container=$(docker ps -a -q --filter ancestor=mbmt-frontend)

old_image=$(docker images -q mbmt-frontend)

#docker rm $(docker stop $(docker ps -a -q  --filter ancestor=mbmt))

docker build . -t mbmt-frontend --no-cache

docker stop $old_container

docker run --restart unless-stopped -d -p 19230:19230 mbmt-frontend

docker rm $old_container

docker rmi $old_image
