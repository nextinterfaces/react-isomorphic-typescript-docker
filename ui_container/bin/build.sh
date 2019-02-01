#!/bin/bash

printf "\n\n------------------------\n\n\t PROD ui_container build ... \n\t [$(pwd)] \n\n------------------------\n\n"

(
  cd ui_container && \

# ---------------
# Enable if NODE SASS fails
# ---------------

#  npm update && \
#  npm i && \
#
#  npm run clean && \
#
#  nodejs node_modules/node-sass/scripts/install.js && \
#  npm rebuild node-sass && \

  npm run clean

  npm i && \
  
  npm run build
)
