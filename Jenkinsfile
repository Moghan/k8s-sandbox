pipeline {
    agent {
        kubernetes {
            cloud "kubernetes"
            yamlFile "k8s/jenkins-agent-pod.yaml"
        }
    }
    environment {
        APP_NAME = "k8s-demons"
    }
    stages {
        stage('Continues Integration (TEST)') {
            steps {
                checkout scm
                sh 'cd packages/client && npm install && npm run build'
                sh 'll'
            }
        }
    }
}