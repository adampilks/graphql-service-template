# graphql-service-template

WIP Template to be forked when creating a new GraphQL service, either as a single Apollo Server, or converted to a federated micro service.

## Design principles

- **Schema driven types**: let the schema drive the types as much as possible via codegen
Schema driven folder and file structure: make all logic easy to find by mimicking the schema structure in the folder structure
- **Modular and extensible context providers**: break up the context creation into logical testable chunks
- **Composable base resolvers**: base resolvers (currently via apollo-resolvers) that all resolvers can extend to tackle global concerns in a single location (error handling, authentication checks)
- **No default exports**: take away the cognitive overhead of naming imports and increase consistency by keeping named exports throughout the codebase as much as possible

## TODO

- Tests setup
- Contract tests setup for Datasources via pacts
- Example authentication checking
