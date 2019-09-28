pipeline {
    agent {
        kubernetes {
            cloud "kubernetes"
            yamlFile "k8s/jenkins-agent-pod.yaml"
        }
    }
    environment {
        APP_NAME = "k8s-sandbox-demo"
    }
    stages {
        stage('Continues Integration (TEST)') {
            steps {
                checkout scm
                container('node') {
                    sh "npm --version"
                    sh 'cd packages/client && npm install && npm run build'
                }
            }
        }
        stage('Test') {
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
        stage('Deployment') {
            steps {
                sh 'pwd'
                dir('packages/client') {
                    sh 'pwd'
                    sh 'ls -l'
                    dir('build') {
                        sh 'pwd'
                        sh 'ls -l'
                    }
                }
            }
        }
    }
}