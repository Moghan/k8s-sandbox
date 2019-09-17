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
    hostPathVolume(hostPath: '/', mountPath: '/home')
  ]
  ) {
    node('dockerpod') {
      stage('Continues Integration') {
        checkout scm
        sh 'pwd'
        sh 'ls -l'
      }
      stage('Test') {
        container('docker') {
          sh "docker version"
        }
        container('my-node') {
          
          sh "npm --version"
          sh 'ls -l'
        }
      }
      stage('Deployment')
    }
}