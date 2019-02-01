#!/bin/bash

mkdir -p ./nginx_container/dist
mkdir -p ./api_container/dist
mkdir -p ./ui_container/dist

cp ./nginx_container/app.conf.templ ./nginx_container/dist/app.conf

if [ "/root" = $HOME ]; then

    printf "\n\n------------------------\n\n\t PROD docker start ... \n\t [$(pwd)] \n\n------------------------\n\n"

    (
      DATE_SITEMAP=$(date +"%F")  # "%FT%T" --> 2018-08-12T12:26:43, "%F" --> 2018-08-12
      echo "Writing Sitemap date $DATE_SITEMAP"
      sed -i -e "s/DATE_SITEMAP/${DATE_SITEMAP}/g" ./ui_container/dist/static/root/sitemap.xml

      docker rm h_ui h_api h_db h_ng --force

      docker-compose up --build
    )
else

    printf "\n\n------------------------\n\n\t LOCAL docker start ... \n\t [$(pwd)] \n\n------------------------\n\n"

    (
        docker rm h_db  --force

        LOCAL_IP=$(ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p')
        echo "Wiring local IP address: $LOCAL_IP"
        sed -i -e "s/api_server/${LOCAL_IP}/g" ./nginx_container/dist/app.conf
        sed -i -e "s/ui_server/${LOCAL_IP}/g" ./nginx_container/dist/app.conf

        docker-compose -f docker-compose-local.yml up --build
    )

fi
