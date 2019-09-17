podTemplate(
  label: 'dockerpod',
  containers: [
      containerTemplate(
    image: 'node:latest', name: 'my-node', command: 'cat', ttyEnabled: true,
  ),
      containerTemplate(
    image: 'docker:17.11.0-ce', name: 'docker', command: 'cat', ttyEnabled: true,
  )],
  volumes: [
    hostPathVolume(hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock'),
  ]
  ) {
    node('dockerpod') {
      stage('Continues Integration') {
        checkout scm
        container('my-node') {
          
          sh "npm --version"
          sh 'cd packages/client && npm install && npm run build'
        }
      }
      stage('Test') {
        container('docker') {
          sh "docker version"
          sh 'ls -l'
        }
        
      }
      stage('Deployment') {
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