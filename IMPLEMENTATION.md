## State Modeling

### How the UI state is structured

The app uses TanStack Query as the main async state manager for server-like data. Since the event data is shared across routes and components, TanStack Query acts as the single source of truth for that data, so there is no need for another global state library or a custom React context for events.

This currently works as follows:

- Event data is simulated in [`src/modules/events/services/events.services.ts`](/Users/ayobamiagunroye/work/projects/liv-dot/src/modules/events/services/events.services.ts).
- TanStack Query calls those service functions through query options and caches the results.
- Any route or component that needs event data subscribes to the relevant query cache entry.
- When an event is updated, the cache is updated as well, so subscribed parts of the UI receive the latest data immediately.
- This keeps server-like state centralized and avoids duplicating the same data in multiple places.

### How state transitions are handled

State transitions are driven by event updates. Once an event is updated, the relevant cached query data is updated too. Because the UI reads from the query cache, all subscribed components automatically re-render with the latest event state.

This makes transitions feel seamless: the event details view, event list, and any other subscriber stay in sync without requiring manual prop drilling or separate synchronization logic.

### How the UI responds to blocked or incomplete states

The main blocked flow in the app is the `READY_FOR_STREAMING -> LIVE` transition. An event in the `READY_FOR_STREAMING` state cannot move to `LIVE` until the required checklist has been completed.

This is handled with the `canGoLive` field on the event:

- if `canGoLive` is `false`, the `Go Live` action remains disabled
- the UI shows a checklist section explaining what still needs to be completed
- when the user confirms completion, the event is updated with `canGoLive: true`
- once that update reaches the cache, the UI immediately enables the next transition

This ensures the blocked state is reflected directly in the interface instead of relying on hidden logic.

## Implementation Notes

### Component structure

The app follows a feature-based module structure.

- [`/src/modules`](/Users/ayobamiagunroye/work/projects/liv-dot/src/modules) contains feature modules such as the events module
- each module contains its own components, services, types, mock data, and helper functions
- [`/src/ui`](/Users/ayobamiagunroye/work/projects/liv-dot/src/ui) contains reusable UI building blocks shared across the app
- [`/src/components`](/Users/ayobamiagunroye/work/projects/liv-dot/src/components) contains shared components that do not belong to a single feature module
- [`/src/icons`](/Users/ayobamiagunroye/work/projects/liv-dot/src/icons) contains application icons
- [`/src/routes`](/Users/ayobamiagunroye/work/projects/liv-dot/src/routes) contains TanStack Router file-based route definitions
- [`/src/utils`](/Users/ayobamiagunroye/work/projects/liv-dot/src/utils) contains general-purpose utilities that are not tied to a specific module

This structure keeps feature logic close together and makes it easier to scale the app by adding new modules without mixing unrelated concerns.

### State management approach

The app uses TanStack Query as its async state manager. The main reason for this choice is to keep one source of truth for server data while making that data available across the app through cache subscriptions.

This works well here because:

- routes and components can read the same cached event data
- updates can be reflected immediately in the UI
- data fetching and caching behavior stay colocated with the feature logic
- the app avoids introducing extra global state complexity for data that is already server-shaped

### Assumptions and tradeoffs

One assumption in the `READY_FOR_STREAMING -> LIVE` flow is that the user completes the required checklist outside the app flow, then returns and clicks the `Checklist Completed` button. In other words, the checklist confirmation is treated as a user acknowledgment rather than a fully verified workflow.

That is a deliberate simplification for this implementation. It keeps the flow easy to demonstrate, but in a production system those checklist items would likely be validated by real backend conditions or more explicit task completion steps.
