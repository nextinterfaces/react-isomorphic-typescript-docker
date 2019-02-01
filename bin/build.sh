#!/bin/bash

if [ "/root" = $HOME ]; then

    printf "\n\n------------------------\n\n\t PROD build ... \n\t [$(pwd)] \n\n------------------------\n\n"
    (
      git pull && \
      ./api_container/bin/build.sh && \
      ./ui_container/bin/build.sh
    )

#else
#
#    echo "LOCAL build ...."
#    (
#      ./api_container/bin/build.sh
#    )

fi
