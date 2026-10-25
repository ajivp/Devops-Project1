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

        stage('Push to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKERHUB_USER',
                        passwordVariable: 'DOCKERHUB_TOKEN'
                    )
                ]) {
                    sh '''
                        set -e
                        echo "$DOCKERHUB_TOKEN" | docker login \
                            --username "$DOCKERHUB_USER" \
                            --password-stdin
                        docker push ${DOCKERHUB_REPO}:${BUILD_NUMBER}
                    '''
                }
            }
            post {
                always {
                    sh 'docker logout || true'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    set -e
                    kubectl apply -f deployment.yaml
                    kubectl apply -f service.yaml
                    kubectl set image deployment/${K8S_DEPLOYMENT} \
                        ${K8S_CONTAINER}=${DOCKERHUB_REPO}:${BUILD_NUMBER}
                    kubectl rollout status deployment/${K8S_DEPLOYMENT} \
                        --timeout=180s
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    set -e
                    kubectl get deployment ${K8S_DEPLOYMENT}
                    kubectl get pods -l app=node-app
                    kubectl get service node-app-service
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the stage logs for details.'
        }
    }
}
