#!/bin/bash

printf "\n\n------------------------\n\n\t Watch API ... \n\t [$(pwd)] \n\n------------------------\n\n"

(
    cd api_container && \
    npm run watch
)
