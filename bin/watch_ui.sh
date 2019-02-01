#!/bin/bash

printf "\n\n------------------------\n\n\t Watch UI ... \n\t [$(pwd)] \n\n------------------------\n\n"

(
    cd ui_container && \
    npm run watch
)
