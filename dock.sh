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

# DOCKER_IMAGE="$(docker images -f=reference=$FOLDER_NAME'*node*' -q)"
# DOCKER_CONTAINER="$(docker ps -f ancestor=$DOCKER_IMAGE)"
# DOCKER_CONTAINER="$(echo "$DOCKER_CONTAINER" | grep -oE "("$FOLDER_NAME"_.*^[[:blank:]]*_[[:digit:]])$")"
# echo $DOCKER_IMAGE
# echo $DOCKER_CONTAINER

DOCKER_SERVICE="node"
DOCKER_CONTAINER="${FOLDER_NAME}_${DOCKER_SERVICE}_1"

DOCKER_CMD="echo 'Enter a command to run...'"

if [[ "$1" = "up" ]] ; then
  DOCKER_CMD="docker-compose up -d"
  echo "Up-ing container '$DOCKER_CONTAINER'..."
elif [[ "$1" = "stop" ]] ; then
  DOCKER_CMD="docker stop $DOCKER_CONTAINER"
  echo "Stopping container '$DOCKER_CONTAINER'..."
elif [[ "$1" = "yarn" ]] ; then
  DOCKER_CMD="winpty docker exec -it $DOCKER_CONTAINER ${@}"
  echo "Running ${@} in container '$DOCKER_CONTAINER'..." 
fi

exec $DOCKER_CMD

exit 0