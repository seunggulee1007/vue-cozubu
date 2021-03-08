node {
 
    stage('git source Pull') {
        git(
           url: "${GIT_URL}",
           credentialsId: "${CREDIT_ID}",
           branch: "${BRANCH}"
        )
    }

    stage("Docker Image build") {
        sh(script: "docker build -t vue-cozubu:latest .")
    }
    
    stage("Docker Image tag") {
        sh(script: "docker tag vue-cozubu:latest cozubu.cf/cozubu/vue-cozubu:latest")
    }
    
    stage("Docker Image Push") {
        withDockerRegistry(credentialsId: 'harbor_docker_repository', url: 'https://cozubu.cf') {
            // some block
            sh "docker push cozubu.cf/cozubu/vue-cozubu:latest"
        }
    }

    stage("SSH Docker Image Pull") {
        // def dockerRun = 'docker run -p 80:80 -d -name vue-cozubu cozubu.cf/cozubu/vue-cozubu:latest'
        sshagent(['dev-server']) {
            withDockerRegistry(credentialsId: 'harbor_docker_repository', url: 'https://cozubu.cf') {
                // some block
                sh "docker pull cozubu.cf/cozubu/vue-cozubu:latest"
            }
            sh 'docker run -p 80:80 -d -name vue-cozubu cozubu.cf/cozubu/vue-cozubu:latest'
        }
    }
    
}