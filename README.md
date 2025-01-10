# Homework Express App

An express application and supporting resources to meet the requirements in [TODO.md](./TODO.md). Summarized as:

- [x] Select or create a demo express app
  - [index.js](./index.js) is an express application built for purpose
  - [index.html](./index.html) is the root page for the application
  - Can be run standalone with `node .`
- [x] Containerize the application
  - See [Dockerfile](./Dockerfile)
- [x] Integrate Prometheus for monitoring
  - The express app now exports metrics at /metrics thanks to [express-prom-bundle](https://github.com/jochen-schweizer/express-prom-bundle)
  - [docker-compose.yml](./docker-compose.yml) added to run supporting infrastructure
  - [prometheus.yaml](./prometheus.yaml) scrapes metrics from the Express app
  - Instead of deploying Grafana I took the opportunity to try [Perses](https://perses.dev/)
    - The [perses](./perses) contains the relevant configuration.
    - [dashboard.yml](./perses/resources/dashboard.yaml) contains a small dashboard converted from a Grafana example
