#!/bin/bash

docker exec -it h_ng sh -c "tail -f /var/log/nginx/access.log"

