# Agent Team Coordination

## Team structure

- The backend lead coordinates four specialists: API implementation, API testing, backend modularity, and PostgreSQL/data access.
- The frontend lead coordinates nine specialists: UX design, motion design, accessibility testing, functional testing, app shell, menu/products, order flow, barista scene, and integration.
- The parent agent is the cross-team coordinator. Custom agents do not have a persistent direct group chat; leads and workers coordinate through their parent and the shared handoff documents in this repository.

## Required context

Before assigning or starting work, every agent must read:

1. `docs/ai.md` for the stack and intended module layout.
2. `docs/tasks.md` for completed work, current state, and documented blockers.
3. This file for task ownership and cross-team coordination.

Treat the repository as authoritative when it differs from older documentation. The frontend is React/Vite with Tailwind; verify installed dependencies before using other libraries. The backend and PostgreSQL foundation are documented as implemented, but database-backed behavior still depends on a configured PostgreSQL service.

## Task and handoff rules

- Leads assign bounded tasks with an owner, acceptance criteria, allowed files, dependencies, and a verification command.
- Avoid overlapping file ownership. A lead must coordinate before assigning concurrent changes to shared entry points or shared contracts.
- For work that crosses backend/frontend boundaries, the owning lead records the agreed API endpoint, method, authentication, request/response shape, errors, and Socket.IO event (if applicable) in a task-specific handoff under `docs/agent-handoffs/`. The receiving lead confirms the contract before implementation.
- Each worker reports files changed, behavior, commands run and their outcomes, and unresolved blockers to its lead. Leads review changes and pass a concise status to the parent agent.
- Do not claim tests, database execution, accessibility, or visual behavior were verified unless the corresponding check was run.
- Keep code modular and preserve existing behavior. Avoid unrelated refactors and do not silently change documented API contracts.

## Current product direction

The next major product area is the customer-facing cafe experience. Build it as a scrollable story: a customer approaches and enters the cafe, explores the menu and products, selects an order, then sees the order handed to the barista. **Liquid Glass is the required visual theme throughout the customer-facing experience**, expressed through coherent translucent surfaces, blur, borders, and depth rather than isolated decorative effects. Define reusable Tailwind patterns/tokens and apply them consistently across sections. Maintain readable text, sufficient contrast, visible keyboard focus, and clear interactive controls; the glass treatment must never reduce accessibility or usability. Use React modules and Tailwind styling, with GSAP for purposeful scroll/motion effects when installed and approved. Provide keyboard-usable interactions, responsive layouts, and reduced-motion behavior. Treat this as a direction, not permission to invent API behavior or external assets.

## Initial lead responsibilities

- Backend lead: compare the documented backend milestones with the actual code and tests, then assign only concrete pending backend/API work. Do not rewrite completed database/API foundations without evidence of a defect or a documented requirement.
- Frontend lead: inspect the currently implemented frontend and turn the product direction into non-overlapping component/design/test tasks. Coordinate any API dependency with the backend lead before assigning integration work.
