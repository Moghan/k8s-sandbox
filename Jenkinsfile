podTemplate(
  label: 'dockerpod',
  containers: [
      containerTemplate(
    image: 'node:latest', name: 'my-node', command: 'cat', ttyEnabled: true,
  ),
      containerTemplate(
    image: 'docker:17.11.0-ce', name: 'docker', command: 'cat', ttyEnabled: true,
  )],
  volumes: [hostPathVolume(hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock')]
  ) {
    node('dockerpod') {
      stage('Test') {
        container('docker') {
          sh "docker version"
        }
        container('my-node') {
          sh "npm --version"
        }
      }
    }
}