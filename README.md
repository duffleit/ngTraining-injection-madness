# Injection Madness

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Tasks:

1. Make the `UserService` available as **singleton** for all three usages (RootComponent, EagerComponent, LazyComponent). Try it with the new  `@Injectable({providedIn: ?})`  syntax.
2. Make the `UserService` available as **own instance** for all three usages (RootComponent, EagerComponent, LazyComponent).
3. Make the `UserService` only in the lazy-loaded module available. In all other usages a `No provider for UserService!` should be thrown at runtime.
4. Make the `UserService` available as **own instance** for the (i) lazy-loaded module, and the rest of the application (therefore, a common instance for RootComponent and EagerComponent).
5. Provide the `UserService` **as singleton, but only** in the eager-loaded module.
6. Use the new `@Injectable({providedIn: 'root'})` syntax after moving the service to the lazy-loaded module, and check if it is available in the root-component.