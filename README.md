# Enterprise AI Operations Assistant on AWS

AI-powered operational support using Retrieval-Augmented Generation (RAG) and enterprise knowledge sources.

---

## Overview

Enterprise knowledge is often distributed across multiple systems, making incident investigation and operational troubleshooting time-consuming and dependent on subject matter experts.

The Enterprise AI Operations Assistant demonstrates how Retrieval-Augmented Generation (RAG) and Generative AI can be used to unify enterprise knowledge and provide actionable operational insights.

The objective is to reduce investigation time, improve knowledge accessibility, and assist support teams in identifying issues more efficiently.

---

## Live Implementation

This project has been implemented as a working cloud-native solution on AWS to demonstrate how Retrieval-Augmented Generation (RAG) can be applied in an enterprise operations environment.

### Live Demo

https://main.d2zuwqwp922u1r.amplifyapp.com

### AWS Implementation

| AWS Service | Purpose |
|-------------|---------|
| AWS Amplify | Hosts the React web application |
| React | User interface |
| Amazon API Gateway | Exposes REST API endpoints |
| AWS Lambda | Backend orchestration |
| Amazon Bedrock Knowledge Bases | Managed Retrieval-Augmented Generation (RAG) |
| Amazon Titan Embeddings | Semantic search and embeddings |
| Amazon Nova Lite | Generates grounded AI responses |
| Amazon S3 | Stores enterprise documents |
| IAM | Identity and access management |

The implementation allows users to ask natural language operational questions and receive grounded responses with source citations from enterprise documentation.

---

## Business Challenge

When production issues occur, engineers typically need to investigate across multiple platforms:

* Application Logs
* Monitoring & Observability Platforms
* Runbooks & SOPs
* Incident Records
* Knowledge Articles
* Internal Documentation

A typical investigation involves manually correlating information from multiple systems before identifying the root cause.

### Common Challenges

* Knowledge scattered across multiple systems
* Manual and time-consuming investigations
* Heavy dependency on SMEs
* Inconsistent troubleshooting approaches
* Increased Mean Time to Resolution (MTTR)

---

## Problem Statement

Operational teams spend significant time searching across multiple systems before identifying the root cause of incidents.

Knowledge is often fragmented across logs, monitoring tools, runbooks, incident records, and documentation repositories, making troubleshooting slow and dependent on subject matter experts.

The following diagram illustrates the challenges faced by operational teams in a fragmented knowledge environment.

![Problem Statement](images/problem-statement.png)

---

## Solution

The Enterprise AI Operations Assistant has been implemented as a cloud-native web application hosted on AWS.

Users can ask operational questions using natural language through a React-based web interface.

Example:

> Why is the application responding slowly today?

The application retrieves relevant enterprise documents using the managed retrieval capabilities provided by Amazon Bedrock Knowledge Bases, powered by semantic search using Amazon Titan Embeddings.

Amazon Nova Lite then generates a grounded response using the retrieved enterprise knowledge.

Responses include:

- Probable Root Cause
- Supporting Evidence
- Recommended Actions
- Source Citations

---

## Architecture Diagram

The following diagram represents the implemented AWS architecture used in this project.

The application is deployed on AWS using a serverless architecture consisting of AWS Amplify, Amazon API Gateway, AWS Lambda, Amazon Bedrock Knowledge Bases, Amazon S3, and Amazon Nova Lite.

![Enterprise AI Operations Assistant Architecture](images/enterprise-ai-operations-assistant.png)

---

## AWS Architecture

The implemented solution follows a serverless architecture.

### Request Flow

1. User submits a question through the React application hosted on AWS Amplify.
2. API Gateway exposes a REST endpoint.
3. API Gateway invokes AWS Lambda.
4. Lambda calls Amazon Bedrock Knowledge Bases.
5. Bedrock performs semantic retrieval using Titan Embeddings.
6. Relevant document chunks are retrieved from the managed vector store.
7. Amazon Nova Lite generates a grounded response.
8. Lambda returns the response along with source citations.
9. The React application displays the response.
---

## Architecture Decisions

### Why Amazon Bedrock Knowledge Bases?

A fully managed Retrieval-Augmented Generation (RAG) capability was selected to avoid building and maintaining a custom embedding and vector search pipeline.

### Why Retrieval-Augmented Generation (RAG)?

Enterprise operational documentation changes frequently. RAG enables new knowledge to be incorporated without retraining foundation models.

### Why Serverless?

AWS Lambda and Amazon API Gateway provide a scalable, low-maintenance architecture while minimizing operational overhead.

### Why Source Citations?

Source citations improve trust by allowing users to verify which enterprise documents were used to generate each response.

---
## How RAG Works

### Step 1 – Knowledge Collection

Operational knowledge is collected from various enterprise sources:

* Logs
* Monitoring Platforms
* Runbooks
* Incident Records
* Knowledge Articles
* Internal Documentation

### Step 2 – Data Ingestion

Data is ingested from enterprise repositories, APIs, databases, and document stores.

### Step 3 – Data Processing

Documents are processed through:

* Data Extraction
* Cleaning and Normalization
* Chunking
* Metadata Enrichment

### Step 4 – Embeddings

Each document chunk is converted into a vector representation (embedding) that captures semantic meaning.

### Step 5 – Vector Database

Embeddings are stored in a vector database to enable semantic search and similarity matching.

### Step 6 – Retrieval

When a user submits a question, the system retrieves the most relevant document chunks from the vector database.

### Step 7 – Generation

The retrieved context is combined with the user query and sent to a Large Language Model (LLM).

The model generates a response grounded in enterprise knowledge rather than relying solely on its pre-trained knowledge.

---

## Key Concepts

This architecture is built around the following concepts:

* Retrieval-Augmented Generation (RAG)
* Embeddings
* Semantic Search
* Vector Databases
* Knowledge Management
* Generative AI

Together, these capabilities enable AI systems to retrieve relevant enterprise knowledge before generating responses.

---

## Benefits

### Faster Incident Resolution

Reduce Mean Time to Resolution (MTTR) by providing relevant operational knowledge instantly.

### Reduced SME Dependency

Enable support teams to troubleshoot issues without relying exclusively on subject matter experts.

### Knowledge Reuse

Capture and reuse institutional knowledge across teams and projects.

### Improved Operational Efficiency

Reduce manual investigation effort and accelerate issue resolution.

### Consistent Support Experience

Provide standardized troubleshooting guidance across teams.

### Scalability

Enable operational knowledge to be leveraged consistently across teams, business units, and geographies.

---

## Potential Enhancements

Potential future enhancements include:

- Conversation memory
- Amazon Cognito authentication
- Chat history
- Real-time document synchronization
- Multiple Knowledge Bases
- Streaming responses
- Feedback collection
- CloudWatch monitoring
- Cost analytics
- Agentic workflows using Amazon Bedrock Agents

---

## Project Status

Version: 1.0.0
Status: Production-ready Proof of Concept

This project has been fully implemented as a working proof of concept on AWS.

Current capabilities include:

- Live web application hosted on AWS Amplify
- React-based conversational interface
- Amazon API Gateway REST API
- AWS Lambda orchestration
- Amazon Bedrock Knowledge Bases
- Amazon Nova Lite
- Amazon Titan Embeddings
- Semantic search
- Retrieval-Augmented Generation (RAG)
- Source citations
- Enterprise operational documentation

The project demonstrates how enterprise knowledge can be transformed into an AI-powered operational assistant using managed AWS services.
---

## Current Limitations

This implementation is intended as a proof of concept.

Current limitations include:

- Single-turn conversations (no conversation memory)
- Static knowledge base documents
- Manual document synchronization
- No user authentication
- No persistent chat history

---
## Enterprise Value

This project demonstrates how Generative AI can be integrated into enterprise support environments without requiring model training or fine-tuning.

Using Retrieval-Augmented Generation (RAG), organizations can securely leverage internal documentation to provide grounded, explainable, and consistent responses while reducing investigation time and improving operational efficiency.

The solution showcases a practical implementation of enterprise AI using fully managed AWS services and modern cloud-native architecture.

---
## License

This project is provided for educational and portfolio purposes.
