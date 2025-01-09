# DevOps Take-Home Test

## Overview

The goal of this test is to assess your skills in DevOps practices, including CI/CD, observability, and infrastructure management.
You will work with an existing Node.js application to demonstrate your technical abilities and decision-making process.

- **Timebox:** The test is designed to be completed in 6 hours or less.
- **Commit Often:** Show your working process through regular commits.
- **External Dependencies:** Use any external tools or libraries you see fit.
- **Keep It Practical:** Avoid over-engineering the solution and focus on meeting the requirements.

## Objectives

1. **CI/CD Pipeline**: Create a CI/CD pipeline for a Node.js application.
2. **Observability**: Implement basic observability for the application.
3. **Infrastructure Setup**: Containerize and deploy the application.

---

## Requirements

### Functional

1. **CI/CD Pipeline**
    - Automate the build, test, and deployment processes.
    - Ensure the pipeline triggers on commits and pull requests.
    - Roll back deployments on failure.
    - (Optional) Use advanced deployment strategies, such as blue/green or canary deployments.
    - **Deliverables**:
        - A CI/CD pipeline configuration (e.g., `.github/workflows/main.yml`).
        - Evidence of successful pipeline runs (e.g., screenshots, build logs, GitHub Actions).

2. **Observability**
    - Integrate a monitoring solution (e.g., Prometheus) to collect application metrics.
    - Create or import a visualization dashboard using Grafana.
    - (Optional) Add alerting rules based on application performance or errors.
    - **Deliverables**:
        - Prometheus configuration files (e.g., `prometheus.yml`).
        - Grafana dashboard JSON file or screenshots.

3. **Infrastructure Setup**
    - Containerize the application using Docker.
    - Deploy the application to an environment of your choice:
        - Local environment using Docker Compose.
        - Cloud environment (e.g., AWS, GCP, or any platform of your choosing).
    - (Optional) Implement orchestration using Kubernetes or similar tools.
    - **Deliverables**:
        - A functional `Dockerfile`.
        - Deployment instructions or scripts (e.g., `docker-compose.yml`).
        - Evidence of successful deployment (e.g., screenshots, URLs, GitHub Actions logs).

---

## Technical

- **CI/CD Tool**: Use GitHub Actions, so this can be easily reviewed.
- **Monitoring**: Use Prometheus and Grafana (or alternatives).
- **Containerization**: Create a functional `Dockerfile`.
- **Documentation**: Provide clear instructions for setting up and running the application.

---

## Getting Started

1. **Use an Example Application**
    - [Express.js Example App](https://github.com/expressjs/express/tree/master/examples) or one of your choice.

2. **Set Up CI/CD**
    - Create a GitHub Action workflow for the CI/CD pipeline.

3. **Set Up Monitoring**
    - Configure application to export Prometheus metrics.
    - Configure Prometheus to scrape application metrics.
    - Create or import a Grafana dashboard for visualization.

4. **Deploy the Application**
    - Containerize the application using Docker.
    - Deploy locally or to a cloud environment.

---

## Submission Guidelines

- **Repository**
    - Fork this repository to start your work.
    - Push your code to the fork.
    - Ensure the repository has a clear commit history, and commit regularly.

- **README File**
    - Include instructions on how to run your application and observability setup.
    - Describe your thought process and any architectural decisions.
    - Mention any trade-offs or assumptions made during development.

- **Submission**
    - Email us the link to your GitHub repository at [sam.thompson@playa3ull.games].

---

## Evaluation Criteria

1. **CI/CD Pipeline**
    - Robustness of the pipeline.
    - Clear error handling and rollback mechanisms.

2. **Observability**
    - Completeness and usability of the monitoring and alerting setup.
    - Clarity and functionality of dashboards.

3. **Infrastructure Setup**
    - Simplicity and effectiveness of the containerization and deployment process.
    - (Optional) Use of orchestration tools like Kubernetes.

4. **Documentation**
    - Clarity and completeness of the README file.
    - Explanation of design decisions and trade-offs.

5. **Problem-Solving**
    - How challenges were addressed.
    - Demonstration of creativity and efficiency in solutions.

---

## Extra Credit

*These are not required but can showcase additional skills:*

- **Advanced Deployment**
    - Implement blue/green or canary deployments.

- **Tracing**
    - Add distributed tracing to the application.

- **Log Aggregation**
    - Integrate a log aggregation solution (e.g., Loki / LGTM Stack).

- **Pipeline Observability**
    - Add monitoring and alerting to the CI/CD pipeline.