#AS <NAME> to name this stage as maven

FROM maven:3.6.3 AS maven
LABEL MAINTAINER="mauriciol.paez@outlook.com"

WORKDIR /user/src/app
COPY . /user/src/app

# Compile and package the application to an executable JAR
RUN mvn package

# For Java 17
FROM amazoncorretto:17

ARG JAR_FILE=pi-api.jar

WORKDIR /opt/app

# Copy the pi-api.jar from the maven stage to the /opt/app dir of the current stage
COPY --from=maven /usr/src/app/target/${JAR_FILE} /opt/app/

ENTRYPOINT [ "java", "-jar" "pi-api.jar" ]