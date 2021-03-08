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
        withDockerRegistry(credentialsId: 'harbor_docker_repository', url: 'cozubu.cf') {
            // some block
            sh "docker push cozubu.cf/cozubu/vue-cozubu:latest"
        }
    }
    
}