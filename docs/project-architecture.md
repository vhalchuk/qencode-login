# Project Architecture

## Overview

This document outlines the architectural design of our React project. The architecture is divided into four primary layers:

1. **App Layer**
2. **Routes Layer**
3. **Business Layer**
3. **Shared Layer**

---

## 1. App Layer

### Purpose

This layer holds application-wide configurations, global providers and side effects.

### Directory Structure

```plaintext
app/
├── providers/
├── index.css
└── index.tsx
```

---

## 2. Routes

### Purpose

Routes encapsulate pages related to specific features or user flows. Routes are independent; they can't depend on each other but can use lower-layer services and components.

---

## 3. Shared Business Logic Layer

### Purpose

This layer holds shared business logic, data-fetching queries, API endpoints, and components that encapsulate common business logic.

### Directory Structure

```plaintext
business/
├── api/
├── components/
└── hooks/
```

---

## 4. Shared Logic Layer

### Purpose

This is the base layer of the application. It contains reusable utilities, custom hooks, and components that are agnostic to the business logic. The best way to determine if some code belongs to `shared` layer is to answer the question: "Can this code be easily reused within another project?"

### Directory Structure

```plaintext
shared/
├── components/
├── utils/
└── hooks/
```

---


## Dependency Flow

The project is structured to minimize dependency complexity and ensure clear directional flow. Here's how dependencies should cascade:

1. **App Layer**: The top layer with dependencies on all the layers below it. This is where application-wide settings are managed.
2. **Routes Layer**: These are self-contained, focusing on specific business features. They can depend on both Shared Logic and Shared Business Logic Layers but should not depend on each other.
3. **Business Layer**: Depends only on the Shared Logic Layer. No dependencies on Routes layer.
4. **Shared Layer**: The foundational layer with zero dependencies on any of the other layers. Other layers can depend on it.
