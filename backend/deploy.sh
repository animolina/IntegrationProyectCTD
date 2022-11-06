#!/bin/bash
function deploy_api {
    cd ~/grupo-01/backend
    echo "<=============== Fetching last changes... ===============>"
    git checkout feature/infra-server-setup && git pull
    echo "<=============== Removing old jar file... ===============>"
    rm -rf pi-api.jar
    cd ~/grupo-01/backend
    echo "<=============== Compiling project... ===================>"
    mvn clean install
    echo "<=============== Running API... =========================>"
    cd ~/grupo-01/backend/target
    nohup java -jar pi-api.jar > process.log 2>&1 &
    echo $! > process-id.txt
}

if [ -s ./process-id.txt ]
then
    echo "<========== Killing current active process... ============>"
    processId=$(cat ./process-id.txt)
    kill $processId
    deploy_api
else
    deploy_api
fi
