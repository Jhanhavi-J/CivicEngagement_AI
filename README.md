"Civic Engagement & Awareness" –  GenAI-based

## 📹 Watch the Video  
[Click here to watch the video](https://drive.google.com/file/d/1BChyhHMPclb0DfUZFVWRveUAqGgB9QNG/view?usp=drivesdk)

Civic issues, such as infrastructure failures, environmental hazards, and public health concerns, often go unresolved due to inefficient reporting and delayed communication between citizens and authorities. Our Generative AI-powered Civic Engagement & Awareness Platform leverages Azure AI services to catalog, categorize, and summarize civic problems in real-time, enabling faster resolutions.
Civic-EA is a project that provides event management and analytics functionalities. It includes a backend built with Node.js and Express.js, handling event data stored in JSON format.
# Civic Issue Sentiment Analysis - Proof of Concept (POC)

## Project Overview  
This project aims to streamline the process of identifying, categorizing, and summarizing civic issues using **Generative AI** and **Azure Cognitive Services**. By leveraging AI-powered sentiment analysis and key phrase extraction, the platform enables better communication between citizens and authorities for quicker resolutions.  

## Proof of Concept (POC) Objective  
The POC demonstrates how AI can analyze and classify civic issues from various sources (social media, community reports, etc.), providing actionable insights for authorities.  

## Key Features  
- **Real-Time Problem Identification**: Collects civic complaints and categorizes them based on urgency, location, and severity.  
- **AI-Powered Sentiment Analysis**: Determines whether an issue is **positive, neutral, or negative** to prioritize critical problems.  
- **Key Phrase Extraction**: Identifies important keywords in reports for better classification.  
- **Community Feedback Integration**: Allows users to provide updates and collaborate on issue resolution.  
- **Automated Reporting for Authorities**: Generates concise reports summarizing active issues and progress.  

## POC Implementation  
1. **Azure Text Analytics API** is used for sentiment analysis and key phrase extraction.  
2. **Postman** is utilized to test API requests and validate responses.  
3. **Flask (Backend) and React (Frontend)** power the web application, providing an intuitive interface for issue submission and analysis.  

## Future Scope  
The POC can be expanded to include **predictive analysis**, **multi-language support**, and **real-time alerts** to further enhance civic engagement and responsiveness.  

---

This project serves as a foundation for **AI-driven civic engagement**, improving issue resolution through automated insights. 🚀  


## Features
- REST API for managing events
- JSON-based event storage
- Node.js and Express.js backend

## Installation
1. Clone the repository:
   git clone https://github.com/your-repo/Civic-EA.git
   
2. Navigate to the backend directory:
   cd Civic-EA/backend
   
3. Install dependencies:
   npm install
   

## Usage
1. Start the server:
   npm start
   
2. Access the API at http://localhost:3000

## API Endpoints
- GET /events - Retrieve all events
- POST /events - Add a new event
- PUT /events/:id - Update an event
- DELETE /events/:id - Delete an event

## Dependencies
- Node.js
- Express.js
