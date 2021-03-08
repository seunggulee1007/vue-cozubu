node {
 
    stage('git source Pull') {
        checkout scm
    }

    stage("Docker Image build") {
        sh "docker build -t vue-cozubu:latest ."
    }
    
    stage("Docker Image tag") {
        sh "docker tag vue-cozubu:latest cozubu.cf/cozubu/vue-cozubu:latest"
    }
    
    stage("Docker Image Push") {
        withDockerRegistry(credentialsId: 'harbor_docker_repository', url: 'https://cozubu.cf') {
            // some block
            sh "docker push cozubu.cf/cozubu/vue-cozubu:latest"
        }
    }

    stage("SSH Docker Image Pull") {
        def dockerRun = 'docker run -p 80:80 cozubu.cf/cozubu/vue-cozubu:latest'
        sshagent(['dev-server']) {
            sh "ssh -o StrictHostKeyChecking=no ec2-user@172.31.3.118 ${dockerRun}"
            
        }
        
    }
    
}