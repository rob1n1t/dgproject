# Park to Podium — Architecture

This document describes the intended architectural direction. The architecture
should be introduced gradually as features require it; the project should not
be filled with empty layers, folders, or abstractions in advance.

## Architecture Principles

- Choose the simplest solution that meets current requirements and can evolve.
- Separate presentation, use cases, game rules, and technical infrastructure.
- Represent park objects as data and render the interface from that data.
- Keep game rules outside React components and database code where practical.
- Use clear types, tests, and automated checks to protect important boundaries.
- Introduce design patterns to solve concrete problems, not hypothetical needs.
- Make security and server authority part of the design when online features are built.

## System Shape

The system combines several complementary architectural styles:

- **Client/server:** the browser is the client, and the future server owns shared data.
- **Component-based frontend:** React divides the interface into understandable components.
- **Layers with inward dependencies:** presentation and infrastructure depend on
  application and domain logic, not the other way around.
- **Modular monolith:** the backend will be one deployable ASP.NET Core application
  with clear internal business modules.
- **Lightweight domain-driven design:** the code's language and models should follow
  the game's concepts and rules without introducing the full complexity of DDD.

This structure broadly corresponds to presentation, business, and data layers,
but distinguishes application workflows from the domain rules themselves:

```text
Presentation  ->  Application  ->  Domain
      |                 ^
      v                 |
Infrastructure ---------+
```

- **Presentation:** the React interface and, later, API endpoints.
- **Application:** use cases, such as upgrading a hole.
- **Domain:** park models, invariants, calculations, and game rules.
- **Infrastructure:** localStorage, databases, file systems, and external services.

The domain must not depend on React, HTTP, Entity Framework, or a particular
database. Infrastructure should connect to the application through clear
interfaces when such an abstraction is genuinely needed.

## Technology Choices

### Current Client

- React, TypeScript, and Vite.
- Plain CSS and a responsive interface for desktop and mobile browsers.
- Local React state; introduce `useReducer` only when related transitions become
  difficult to manage with `useState`.
- Versioned and validated `localStorage` for the local game version.
- DOM and CSS for the park view; SVG is the next option if the map requires it.

Game data, rules, and presentation should be separated when the code develops
distinct responsibilities. A possible structure once these needs exist is:

```text
src/
  components/   reusable presentation
  features/     interface and workflows grouped by game capability
  domain/       types, rules, and state transitions
  data/         static initial data
  storage/      saving, loading, and migration
```

### Future Server

- C# with the ASP.NET Core version supported as .NET LTS when development begins.
- A controller-based REST API using JSON over HTTPS with OpenAPI documentation.
- Entity Framework Core for database access and migrations.
- SQLite may be used for local learning; PostgreSQL is the production target.
- Deploy the frontend and API under the same origin when practical.

API contracts should use DTOs and remain separate from database entities. The
backend should be divided by business capability, initially **Park Management**
and **Competitions**. **Identity and Access**, **Community**, and **Seasons**
should be introduced only when their functionality is being built.

## State, Data, and Authority

- Every piece of client state should have a clear owner and should not be
  duplicated unnecessarily.
- The client may be authoritative in the local version because no shared or
  competitive data exists.
- When online features are built, the server becomes authoritative for resources,
  upgrades, ownership, timers, tournament results, and leaderboards.
- The client sends intentions, such as "upgrade hole 3," rather than a claimed
  new balance or result.
- Important server-side state changes use validation, transactions, and
  concurrency controls.

## Design Patterns

Patterns may be introduced when the corresponding need appears:

- components and unidirectional data flow in React;
- a reducer for many related state transitions;
- an adapter to separate domain logic from localStorage or an API;
- DTOs at the API boundary;
- dependency injection in the backend;
- a strategy for multiple interchangeable tournament calculations;
- a factory when objects must be created according to several invariants;
- domain events when one action has several independent consequences.

We will not introduce generic repositories, CQRS/MediatR everywhere, event
sourcing, a message bus, or inheritance hierarchies without a demonstrated
problem that they solve.

## Security Direction

When accounts and shared data are introduced, the system should include:

- authentication with ASP.NET Core Identity or an established OpenID Connect provider;
- server-side authorization checks for every protected resource;
- secure HttpOnly cookies and CSRF protection when cookie authentication is used;
- server-side validation of formats, limits, and domain rules;
- least privilege, secure secret management, and narrowly configured CORS;
- rate limiting, safe error logging, and security-focused tests;
- an updated threat model and OWASP ASVS as verification guidance.

## Cloud and Operations Learning Path

Application development remains the project's primary focus, but the finished
system should also demonstrate that it can be deployed and operated securely.
Infrastructure should be introduced only when there is a real workload to run.

The intended progression is:

1. GitHub Actions for automated checks.
2. Docker and Docker Compose for reproducible local environments.
3. A managed Azure deployment, initially using Container Apps or App Service.
4. Infrastructure as Code, preferably Bicep, with budgets and cost alerts.
5. Managed identities, Azure RBAC, Key Vault, monitoring, backups, and runbooks.
6. An optional Kubernetes/AKS deployment as a documented learning exercise,
   not as a production dependency without a demonstrated operational need.

Microsoft Entra and Microsoft 365 administration may be explored in a separate
eligible development tenant to practise IAM and infrastructure operations. These
labs should integrate with the game only when they serve a genuine product use
case, such as standards-based authentication. No secrets or tenant data belong
in the public repository.

## Deliberately Excluded

The following will not be introduced without a concrete and documented need:

- microservices, Kubernetes, or message brokers;
- GraphQL, WebSockets, or real-time multiplayer;
- Redux or another global state library;
- NoSQL as the primary database;
- Supabase or another Backend-as-a-Service as a replacement for our own backend;
- WinForms, native mobile applications, or a game engine;
- advanced Canvas rendering;
- premature abstractions created solely for possible future use.

## Evolution Over Time

1. A responsive static park view.
2. A local domain model, interaction, and complete core game loop.
3. Versioned saves, tests, and the first published demo.
4. An ASP.NET Core API and PostgreSQL with server-authoritative rules.
5. Accounts, authorization, a threat model, and secure deployment.
6. Community features and scaling based on measured needs.

Significant decisions should be recorded as short Architecture Decision Records
in `docs/adr/` when those decisions need to be made. Revisit the architecture
when an important assumption or quality risk changes.
