# TODO

## Tasks

- [ ] Update the README
- [ ] Add instructions on how AI should develop in the repo
- [ ] Review and rework the current page

## Notes

Add any additional context or details for each task as needed.

## Temporary on how the project should be structured.

1. Root components should be connected to the router.
2. A root component is a component who are allowed to manage state.
3. No root components can have another root component as a child
   - Exception: A root child component can be added if it is added as a subroute and rendered as a child of the parent
4. State should flow from the router -> mapper -> root component -> child components
5. Only child components should have complext HTML or React code.
6. No child components are allowed to handle business logic. All functions and state needs to be passed as props from the nearest root component
   - Exception: Simple open/closed logic may be permitted if there is never a use-case for that state to be persistent in any way
