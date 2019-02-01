#!/bin/bash

echo ${1}

echo $HOME

if [ "/root" = $HOME ]; then

    printf "\n\n------------------------\n\n\t PROD api_container build ... \n\t [$(pwd)] \n\n------------------------\n\n"
    (
      git pull && \
      cd api_container && \
      npm i && \
      npm run clean && \
      npm run build
    )

fi
