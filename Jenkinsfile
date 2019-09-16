pipeline {
    agent {
        docker { image 'node:7-alpine' }
    }
    stages {
        stage('Testing stage') {
            steps {
                sh 'node --version'
            }
        }
    }
}