DEVOPS INTERNSHIP PROJECT REPORT 

### **PROJECT 1** 

# **Containerization and Automated Deployment of a Node.js Web Application** 

_DevOps Internship Project Documentation_ 

Project Repository: **https://github.com/ajivp/Devops-Project1** 

Docker Hub: https://hub.docker.com/r/avp18/node-devops-app 

Project 1 | Containerization and Automated Deployment 

DEVOPS INTERNSHIP PROJECT REPORT 

## **1. Project Aim** 

The aim of this project is to containerize a Node.js web application using Docker and automate its testing, image building, image publishing, and deployment using Jenkins and Kubernetes. The project demonstrates a practical DevOps CI/CD workflow, from source-code checkout to deployment verification. 

## **2. Technologies and Tools Used** 

|**Technology / Tool**|**Purpose**|
|---|---|
|**Linux Mint**|Development and deployment environment|
|**Node.js and Express.js**|Web application runtime and framework|
|**Node.js test runner**|Automated application test|
|**Docker**|Build and run the application container image|
|**Docker Hub**|Store and distribute versioned images|
|**Kubernetes with Minikube**|Deploy and manage application pods locally|
|**Jenkins**|Automate CI/CD pipeline stages|
|**Git and GitHub**|Version control and source-code hosting|
|**JavaScript**|Application implementation|



## **3. Project Implementation / Work Done** 

#### **3.1 Node.js Application** 

Developed a Node.js application using Express.js. It listens on port 3000 and returns a welcome message at the root endpoint (/). 

#### **3.2 Automated Testing** 

Added an automated test using Node.js's built-in test runner. The test verifies that GET / returns HTTP 200 and the expected application message. The npm test command passed. 

#### **3.3 Docker Containerization** 

Created a Dockerfile based on node:22-alpine, installed production dependencies with npm ci --omit=dev, copied the application, exposed port 3000, and configured the container to start with npm start. 

#### **3.4 Docker Hub Publishing** 

Published the application image to the Docker Hub repository avp18/node-devops-app. Jenkins tags each image using the build number. 

#### **3.5 Kubernetes Deployment** 

Created deployment.yaml to run two replicas of the application. Kubernetes maintains the desired replica count and manages the application pods. 

#### **3.6 Kubernetes Service** 

Created service.yaml using a NodePort Service. The Service maps port 3000 to NodePort 30036 and routes requests to the application pods. 

Project 1 | Containerization and Automated Deployment 

DEVOPS INTERNSHIP PROJECT REPORT 

#### **3.7 Deployment to Minikube** 

Applied the Kubernetes manifests and verified the rollout. The deployment reported successfully rolled out, and both application pods were Running and Ready. 

#### **3.8 Jenkins CI/CD Pipeline** 

Configured a Jenkins pipeline from the GitHub repository using a Jenkinsfile. Jenkins checks out the source, installs dependencies and runs tests, builds a Docker image, pushes it to Docker Hub using Jenkins-managed credentials, deploys the image to Kubernetes, and verifies the Deployment, pods, and Service. 

## **4. Outputs and Results** 

The following results were confirmed from the terminal and Jenkins screenshots: 

|**Verification**|**Observed Result**|
|---|---|
|**Automated application test**|Passed|
|**Jenkins pipeline**|Build #8 completed successfully; all displayed stages<br>passed|
|**Docker image deployed**|avp18/node-devops-app:8|
|**Kubernetes Deployment**|node-app-deployment; 2/2 replicas ready|
|**Application pods**|2 Running; 1/1 Ready each; 0 restarts in the shown<br>output|
|**Kubernetes Service**|node-app-service; NodePort; port 3000 mapped to<br>30036|
|**HTTP test**|Successful response from http://192.168.49.2:30036|



Command used to verify the application: 

curl http://192.168.49.2:30036 

Observed HTTP response: 

<h1>Hello from my DevOps Project 1 App!</h1> 

## **5. Verdict / Conclusion** 

The project was successfully implemented. The Node.js application was containerized with Docker, published to Docker Hub, and deployed to Kubernetes through a Jenkins CI/CD pipeline. The successful pipeline stages, two ready application replicas, and successful HTTP response demonstrate that the main project objectives were achieved. 

## **6. Learning / Key Takeaways** 

- Developing and testing a Node.js and Express.js application. 

- Writing a Dockerfile and building a container image. 

- Publishing versioned Docker images to Docker Hub. 

- Creating Kubernetes Deployments and NodePort Services. 

- Understanding replicas, pods, rollout status, and deployment verification. 

- Writing a Jenkinsfile and automating CI/CD stages. 

- Integrating GitHub, Jenkins, Docker, Docker Hub, and Kubernetes. 

- Using Jenkins-managed credentials for registry authentication. 

- Troubleshooting pipeline failures and verifying the final application. 

Project 1 | Containerization and Automated Deployment 

DEVOPS INTERNSHIP PROJECT REPORT 

This project strengthened my practical understanding of how DevOps automation helps test, package, publish, deploy, and verify an application in a repeatable workflow. 

## **7. Project Repository Links** 

GitHub: https://github.com/ajivp/Devops-Project1 

Docker Hub: https://hub.docker.com/r/avp18/node-devops-app 

## **8. Evidence and Screenshots** 

The screenshots below document the successful Jenkins pipeline and its stage results. Additional terminal screenshots showing Kubernetes status and the curl response may be added if required. 

**Figure 1. Jenkins pipeline stage view — Build #8** 



<!-- Start of picture text -->
e>-¢ © D tp/Mocalhost2000//b/Dev0ps Project1-c-cojworklowstage Be @a=s<br>@ Jenkins vevosrrject-cico ~ —Fullstage View ago<br>DevOps-Project1-Cl-CD - Stage View<br>Decarative: Installand Build Docker Pashto Deoloy’o vecity Dectaratve<br>checkoursem —— eetout est mane Dockeriub Kubernetes__Deployment_ Pest Actions<br>average stage tines cA a os 25 ts 15 & 2<br>(halruntime:-3min379)_— - — =. = z :<br>oe ° ° 3s * Fa ®<br>«ou ss 47s 108 Ga“ -avie a2a<br>= & ; ms « 786m 70m Ae<br>a ae<br>aa ww a Ae awa<br>o 2 5 tin 40s 16 2» *<br><!-- End of picture text -->

**Figure 2. Jenkins pipeline details — all stages successful** 



<!-- Start of picture text -->
«oe © D hitpi/Mecathost:c0a0/ob/oevops Projectt-crco/a/stagesselectednode~ HO) te L@a=s<br>@ Jenkins vevonsricec-crco v8 stages ago<br>Y < #8 @ enn |) @<br>en ee ee ee ee<br>ie content sts J VCO piling completed successful<br>@ cceat CI/C0 pipeline conpleted successfully!<br>Sealand<br>Test ce<br>J Build Dacker image<br>Y Pushto Dockers 246<br>% Deploy<br>to kubernetes<br>2 Vest Deployment oy<br>2 Post ations 2<br><!-- End of picture text -->

Project 1 | Containerization and Automated Deployment 

DEVOPS INTERNSHIP PROJECT REPORT 

#### **Figure 3. Docker Hub repository (avp18/node-devops-app)** 



<!-- Start of picture text -->
«7c OB & hubdocker.com/repositories/avp a @as<br>ws hub Explore My Hub Q Search Docker Hub GK) @OOG # A<br>apiecf oP v Repositories<br>Aepositonis<br>Repositories within the apt namespace<br>@ Hardened images a ar C<br>2 Collaborations<br>@ Settings = Name Last Pushed 4 Contains Visibility ‘Scout<br>Defoe par a node-devops-app 30 minutes ago mace Public<br>© Billing G v8 fontend 21 ays099 use Puc<br>& Us0ge a sp lordereevce 21 daysys 909 sce Puc<br>Pas sp /earervice 21 daysag0 ce ube<br>storage vp 18/product-service 21 days ago ce Public<br>vp 18/devops-project2 2adays 90 ace ube<br>onde app about 1 month age ce ube<br><!-- End of picture text -->

The repository avp18/node-devops-app shows the image published by the Jenkins pipeline, confirming the Docker Hub publishing stage completed successfully. 

#### **Figure 4. Kubernetes Deployment and Pods status** 

ST<sup>BTSIRECSTDEVOPEEPFBTEESci~/or0Jects/Devops-Project</sup> 

Terminal output confirms node-app-deployment rolled out successfully with 2/2 pods ready, both application pods Running, and the node-app-service NodePort mapping port 3000 to 30036. 

**Figure 5. Kubernetes Service (NodePort 30036)** 



<!-- Start of picture text -->
c © (BiNotSectite) heoy/192.168.49.2:3¢ a @a=z<br>Hello from my DevOps Project 1 App!<br><!-- End of picture text -->

Project 1 | Containerization and Automated Deployment 

DEVOPS INTERNSHIP PROJECT REPORT 

The browser confirms the application is reachable at http://192.168.49.2:30036, the NodePort exposed by nodeapp-service. 

#### **Figure 6. HTTP response verification** 



<!-- Start of picture text -->
€ c oo locathost: = @a=<br>Hello from my DevOps Project 1 App!<br><!-- End of picture text -->

Local access via http://localhost:3000 returns the expected application heading, confirming the containerized app serves requests correctly. 

Note: All screenshots above were captured from the live deployment and Jenkins pipeline run described in this report. 

Project 1 | Containerization and Automated Deployment 

