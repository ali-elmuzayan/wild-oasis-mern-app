# The Wild Oasis

The Wild Oasis is a hotel management project centered around forest cabins. The idea is to build a complete platform with an internal dashboard for managing the business and a public website where users can explore the cabins and interact with the brand.

## Project Overview

This repository is planned as the main workspace for the full application. It will contain:

- `dashboard`: the internal admin dashboard built with Vite and React
- `frontend`: the public website built with Next.js
- `backend`: the API and server-side logic built with Node.js

At the moment, the `dashboard` app is the part that already exists in the repository. The `frontend` and `backend` directories will be added as the project grows.

## Planned Architecture

### 1. Dashboard

The dashboard is for hotel staff and administrators. It will be used to manage the daily operations of The Wild Oasis, such as:

- managing cabins
- managing bookings
- tracking guests
- handling availability
- viewing business data and internal workflows

Tech stack:

- Vite
- React
- TypeScript

### 2. Frontend

The frontend will be the public-facing website for customers. This is the part visitors will use to discover the project and interact with it.

It may include:

- landing pages
- cabin listings
- booking flow
- guest account pages
- marketing and brand content

Tech stack:

- Next.js
- React

### 3. Backend

The backend will handle the business logic and data layer for both the dashboard and the frontend.

It will be responsible for:

- authentication and authorization
- cabin and booking management
- guest data handling
- APIs for the dashboard and frontend
- database communication

Tech stack:

- Node.js

## Current Repository Structure

```text
01-wild-oasis/
├── dashboard/
├── frontend/   # planned
├── backend/    # planned
└── README.md
```

## Current Status

- `dashboard` is already created
- `frontend` is planned and will be built with Next.js
- `backend` is planned and will be built with Node.js

## Goal of the Project

The goal of The Wild Oasis is to provide a complete forest cabin hotel platform with:

- an admin dashboard for managing operations
- a modern customer-facing website
- a backend that connects everything together

## Notes for Contributors

This README describes the intended structure of the project at a high level. As the `frontend` and `backend` parts are added, this document can be updated with:

- setup instructions
- environment variables
- development workflow
- API documentation
- deployment details
