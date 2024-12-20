# Real-Time Chat Application

## Description
This is a modern real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. The app enables users to send instant messages, track online status, and enjoy a seamless chat experience with a clean and responsive UI. Designed with scalability and security in mind, this project implements best practices for authentication, authorization, and state management.

## Features
- **User Authentication & Authorization**: Secure login and registration system using JWT (JSON Web Tokens) for session management.
- **Real-Time Messaging**: Instant messaging powered by Socket.io for seamless real-time communication.
- **Online User Status**: Displays the online status of users dynamically using Socket.io and React Context.
- **Global State Management**: Efficient state management with Zustand for a responsive user experience.
- **Error Handling**: Comprehensive error handling implemented on both the client and server sides.
- **Responsive UI**: Built with TailwindCSS and Daisy UI for a modern, user-friendly design.
- **Deployment**: Successfully deployed to ensure high availability and scalability.

## Technologies Used

### Frontend
- **React.js**: JavaScript library for building interactive user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Daisy UI**: UI components built on top of TailwindCSS.

### Backend
- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and chat data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

### Real-Time Communication
- **Socket.io**: Enables real-time, bidirectional communication between the server and clients.

### State Management
- **Zustand**: Lightweight state management library for React.

## Setup

### Prerequisites
- Node.js installed on your system.
- MongoDB server running locally or a MongoDB Atlas account.
- A `.env` file configured with the following variables:
  ```env
  PORT=...
  MONGO_DB_URI=...
  JWT_SECRET=...
  NODE_ENV=...
