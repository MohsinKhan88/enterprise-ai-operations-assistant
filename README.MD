# Enterprise AI Operations Assistant on AWS

AI-powered operational support using Retrieval-Augmented Generation (RAG), Amazon Bedrock, and Amazon CloudWatch to provide intelligent access to enterprise knowledge and operational logs.

---

# Overview

Enterprise support teams often spend significant time searching across runbooks, incident records, operational documentation, monitoring platforms, and application logs before identifying the root cause of an issue.

The Enterprise AI Operations Assistant demonstrates how Generative AI, Retrieval-Augmented Generation (RAG), and cloud-native operational data can be brought together through a conversational interface to support enterprise operations and troubleshooting.

The solution uses Amazon Bedrock Knowledge Bases to provide grounded answers from trusted enterprise documentation and Amazon CloudWatch Logs Insights to retrieve recent operational errors.

Built using managed AWS services, the project demonstrates a practical approach to combining enterprise knowledge with operational visibility without training or fine-tuning a custom Large Language Model.

---

# Live Demo

A live proof of concept is hosted on AWS Amplify.

**Application**

https://main.d2zuwqwp922u1r.amplifyapp.com

---

# Current Version

**Version 1.1.0**

Version 1.1 extends the Enterprise AI Operations Assistant with operational log monitoring capabilities using Amazon CloudWatch Logs Insights.

The assistant currently supports two types of operational queries:

- Enterprise knowledge questions using Amazon Bedrock Knowledge Bases
- Recent AWS Lambda error queries using Amazon CloudWatch Logs Insights

Example questions:

> What is the P1 incident process?

> How do I troubleshoot a 503 Service Unavailable error?

> Show recent Lambda errors

This demonstrates how a single operational assistant can provide access to both enterprise knowledge and recent operational data.

---

# Business Challenge

Production support engineers often investigate issues by searching across multiple disconnected systems, including:

- Application Logs
- Monitoring Platforms
- Runbooks
- Incident Records
- Knowledge Articles
- Internal Documentation

This fragmented approach increases Mean Time to Resolution (MTTR), creates dependency on Subject Matter Experts (SMEs), and results in inconsistent troubleshooting processes.

The Enterprise AI Operations Assistant addresses this challenge by providing a centralized conversational interface for accessing operational knowledge and recent system errors.

The following diagram illustrates the enterprise knowledge fragmentation problem.

![Business Challenge](images/problem-statement.png)

---

# Solution

The Enterprise AI Operations Assistant provides a conversational interface that allows users to ask operational questions using natural language.

The application supports two primary request paths.

## Enterprise Knowledge

For questions related to operational procedures, incidents, troubleshooting guides, and enterprise documentation:

1. Amazon Bedrock Knowledge Bases retrieves relevant enterprise documents.
2. Amazon Titan Embeddings enables semantic document retrieval.
3. Amazon Nova Lite generates a grounded response using the retrieved context.
4. References to the relevant source documents are returned with the response.

## Operational Logs

For supported log-related questions:

1. AWS Lambda identifies the request as an operational log query.
2. Amazon CloudWatch Logs Insights searches the configured Lambda log group.
3. Relevant recent error entries are retrieved.
4. The results are formatted into an operational log summary.
5. The response is displayed through the same conversational interface.

This approach avoids sending large volumes of raw logs to a Large Language Model and retrieves only the operational information relevant to the supported query.

---

# AWS Implementation

| Service | Purpose |
|----------|---------|
| AWS Amplify | Hosts the React web application |
| Amazon API Gateway | Exposes the backend REST API |
| AWS Lambda | Handles request routing and backend orchestration |
| Amazon Bedrock Knowledge Bases | Provides managed Retrieval-Augmented Generation (RAG) |
| Amazon Titan Embeddings | Enables semantic document retrieval |
| Amazon Nova Lite | Generates grounded responses from retrieved enterprise knowledge |
| Amazon S3 | Stores enterprise documentation |
| Amazon CloudWatch Logs | Stores application and Lambda operational logs |
| Amazon CloudWatch Logs Insights | Queries recent operational error logs |
| IAM | Controls access between AWS services |

---

# Solution Architecture

The solution was first designed as a conceptual Retrieval-Augmented Generation (RAG) workflow and then implemented using managed AWS services.

## Conceptual RAG Architecture

The following diagram illustrates the conceptual enterprise RAG workflow.

![Conceptual RAG Architecture](images/enterprise-ai-operations-assistant.png)

## AWS Implementation Architecture

The following diagram shows the cloud-native AWS implementation.

![AWS Implementation Architecture](images/architecture-aws-implementation.png)

---

# Request Flow

The React application provides a single conversational interface for enterprise knowledge and operational log queries.

### Knowledge-Based Request

```text
User
  ↓
React Application
  ↓
Amazon API Gateway
  ↓
AWS Lambda
  ↓
Amazon Bedrock Knowledge Bases
  ↓
Semantic Retrieval
  ↓
Amazon Nova Lite
  ↓
Grounded Response
