# K6Playground

Welcome to **K6Playground**, a simple environment to explore and experiment with [k6](https://k6.io), an open-source tool designed for performance testing of APIs, microservices, and websites.

This project is intended as a starting point for learning how to use k6 by running simple load tests.

## 📦 Prerequisites

To use k6, you need to have it installed on your system.

### 🛠 Install k6

You can follow the detailed instructions for your platform on the official k6 installation page:

👉 [https://grafana.com/docs/k6/latest/set-up/install-k6/](https://grafana.com/docs/k6/latest/set-up/install-k6/?pg=get&plcmt=selfmanaged-box10-cta1&src=k6io)

Here are some quick commands for common platforms:

#### macOS (using Homebrew)
```bash
brew install k6
```

#### Windows (using Chocolatey)
```bash
choco install k6
```

## 🌐 Integration with Datadog

K6 can be integrated with Datadog to send real-time metrics using the DogStatsD protocol. This allows you to monitor the performance of your tests directly in the Datadog dashboard.

### 🛠 Configuration

1. **Set up the Datadog agent**:
   Ensure the Datadog agent is running and configured to receive DogStatsD metrics. You can use the provided `docker-compose.yaml` file in this project or run the Datadog container manually.

2. **Run K6 with Datadog output**:
   Use the following command to execute a K6 test script and send metrics to Datadog:
   ```bash
   k6 run --out statsd script.js

### 🔗 Useful Links

- [K6 Integration with Datadog](https://grafana.com/docs/k6/latest/results-output/real-time/datadog/)
- [Official Datadog Documentation for K6](https://docs.datadoghq.com/integrations/k6/)
- [Installing K6](https://grafana.com/docs/k6/latest/set-up/install-k6/)