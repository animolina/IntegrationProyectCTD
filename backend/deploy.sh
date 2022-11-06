#!/bin/bash
function deploy_api {
    cd ~/grupo-01/backend
    echo "<=============== Removing old jar file... ===============>"
    rm -rf ~/grupo-01/backend/target/pi-api.jar
    echo "<=============== Compiling project... ===================>"
    mvn clean install
    echo "<=============== Running API... =========================>"
    cd ~/grupo-01/backend/target
    nohup java -jar pi-api.jar > ~/grupo-01/backend/process.log 2>&1 &
    echo "New process ID $!"
    ps -ef | grep "java -jar pi-api.jar"
    echo $! > ~/grupo-01/backend/process-id.txt
    echo "<============= API successfully deployed! ===============>"
}

if [ -s ./process-id.txt ]
then
    echo "<========== Killing current active process... ============>"
    ps -ef | grep "java -jar pi-api.jar"
    processId=$(cat ./process-id.txt)
    kill $processId
    echo "<========== Successfully killed process $processId ============>"
    deploy_api
else
    deploy_api
fi
