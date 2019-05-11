#!/bin/bash

rev () {
  ORIGINAL_STRING=${1}
  STRING_COPY=${ORIGINAL_STRING}

  STRING_LENGTH=${#STRING_COPY}
  for((i=$STRING_LENGTH-1;i>=0;i--)); do REVERSE_STRING="$REVERSE_STRING${STRING_COPY:$i:1}"; done

  echo "$REVERSE_STRING"
}

FOLDER_NAME=$(PWD)
FOLDER_NAME="$(rev $FOLDER_NAME)"
FOLDER_NAME="$(cut -d'/' -f1 <<<$FOLDER_NAME)"
FOLDER_NAME="$(rev $FOLDER_NAME)"

# DOCKER_IMAGE="$(docker images -f=reference=$FOLDER_NAME'*client*' -q)"
# DOCKER_CONTAINER="$(docker ps -f ancestor=$DOCKER_IMAGE)"
# DOCKER_CONTAINER="$(echo "$DOCKER_CONTAINER" | grep -oE "("$FOLDER_NAME"_.*^[[:blank:]]*_[[:digit:]])$")"
# echo $DOCKER_IMAGE
# echo $DOCKER_CONTAINER

declare -a DOCKER_SERVICES=("client" "api" "db" "db_gui")
DOCKER_IMAGES=""
DOCKER_CONTAINERS=""
for i in "${DOCKER_SERVICES[@]}"
do
  DOCKER_IMAGES="${FOLDER_NAME}_${i} ${DOCKER_IMAGES}"
  DOCKER_CONTAINERS="${FOLDER_NAME}_${i}_1 ${DOCKER_CONTAINERS}"
done

if [[ "$1" = "build" ]] ; then
  echo "Building container(s) '$DOCKER_CONTAINERS'..."
  exec docker-compose build
elif [[ "$1" = "up" ]] ; then
  echo "Up-ing container(s) '$DOCKER_CONTAINERS'..."
  exec docker-compose up -d
elif [[ "$1" = "build-up" ]] ; then
  echo "Building and up-ing container(s) '$DOCKER_CONTAINERS'..."
  exec docker-compose up -d --build
elif [[ "$1" = "stop" ]] ; then
  echo "Stopping container(s) '$DOCKER_CONTAINERS'..."
  exec docker stop $DOCKER_CONTAINERS
elif [[ "$1" = "rm" ]] ; then
  echo "Removing container(s) '$DOCKER_CONTAINERS'..."
  exec docker rm $DOCKER_CONTAINERS
elif [[ "$1" = "im-rm" ]] ; then
  echo "Removing images(s) '$DOCKER_IMAGES'..."
  exec docker image rm $DOCKER_IMAGES
elif [[ "$1" = "yarn" ]] ; then
  echo "Running ${@} in container(s) '${FOLDER_NAME}_${DOCKER_SERVICES[0]}_1'..." 
  exec winpty docker exec -it ${FOLDER_NAME}_${DOCKER_SERVICES[0]}_1 ${@}
else
  echo 'Enter a command to run...'
fi

exit 0