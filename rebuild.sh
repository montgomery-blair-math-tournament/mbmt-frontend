# rebuild.sh - taken from https://github.com/mbhs/mbhs

git pull

old_container=$(docker ps -a -q --filter ancestor=mbmtfrontend)

old_image=$(docker images -q mbmtfrontend)

#docker rm $(docker stop $(docker ps -a -q  --filter ancestor=mbmt))

docker build . -t mbmtfrontend --no-cache

docker stop $old_container

docker run --restart unless-stopped -d -p 12890:12890 mbmtfrontend

docker rm $old_container

docker rmi $old_image
