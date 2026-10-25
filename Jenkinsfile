pipeline {
    agent any

    environment {
        DOCKERHUB_REPO = 'avp18/node-devops-app'
        K8S_DEPLOYMENT = 'node-app-deployment'
        K8S_CONTAINER = 'node-app'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install and Test') {
            steps {
                sh '''
                    set -e
                    node --version
                    npm --version
                    npm ci
                    npm test
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    set -e
                    docker build -t ${DOCKERHUB_REPO}:${BUILD_NUMBER} .
                '''
            }
        }

