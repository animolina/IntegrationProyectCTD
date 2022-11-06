#!/bin/bash
function deploy_api {
    cd ~/grupo-01/backend
    echo "<=============== Fetching last changes... ===============>"
    git checkout ${1} && git pull
    echo "<=============== Removing old jar file... ===============>"
    rm -rf ~/grupo-01/backend/target/pi-api.jar
    echo "<=============== Compiling project... ===================>"
    mvn clean install
    echo "<=============== Running API... =========================>"
    cd ~/grupo-01/backend/target
    nohup java -jar pi-api.jar > ~/grupo-01/backend/process.log 2>&1 &
    echo $! > ~/grupo-01/backend/process-id.txt
    echo "<============= API successfully deployed! ===============>"
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
