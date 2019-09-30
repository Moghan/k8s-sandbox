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
                sh 'cd packages/client'
                sh 'ls'
            }
        }
        stage('Docker test') {
            steps {
                container('docker') {
                    sh "docker version"
                    dir('packages/client/build') {
                        sh 'pwd'
                        sh 'ls -l'
                    }
                }
            }
        }
        stage('Node test') {
            steps {
                container('node') {
                    sh "npm version"
                }
            }
        }
        
    }
}