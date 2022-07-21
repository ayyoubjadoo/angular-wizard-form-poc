# Angular Form Wizard Poc

## About
This is a proof of concept (POC) about creating a wizard form for data entry single submission in Angular 14, most of the concepts and ideas used here are valid in other frameworks too.

This POC specifically created for the following scenario:
1. You have a submission form for data entry.
2. It needs to be divided into some steps as a wizard for better user experience and more simplicity.
3. It's a single submission form, which means that no submit on each step, only one submission in the last step.
4. There is some interactions and changes may be needed between the steps.
5. Each step has it's own design and components to represent it's part of the form submission.

## Challenges
If you decide to design the above wizard in Angular the normal way you'll face the following challenges:
1. Syncing data from the parent (wizard container) to the children (steps) and vise versa.
3. Interaction between steps when needed.
4. Validation before going to the next step or submit.
5. Handling step nivigation logic in a clean way instead of implementing it in each step.
6. Guarantee direct reflection of the data changes on the UI regardless of which step you see.
7. Guarantee that all the data gathered correctly on submit.
8. Timing issues on edit scenario, when will all the step components be ready? when I can bind my data for edit?
9. Handle a lot of user interactions and reflect effects on the same step or other next one or more if needed.

## Problem
If we used the standard Angular approach without a good analysis of the above scenario we'll end up with a dirty solution with tons of events and subscriptions.
Angular standard way is great for loosely coupled components, to design a fine grained peice of UI to reuse it many times in a generic way and this is awsome, but the fact about the wizard in the above scenario is that it's a container and children with tightly coupled nature, and the steps itself are just parts of the form and it's not planned to be used anywhere else.

## Solution
I respected the tightly coupled nature of the wizard and used Angular standards considering this, I came with a very good solution (in my opinion) which ended up with clean, organized and extesible code and approach.

Please feel free to check out the POC code to see the solution.

Note: Sorry I know that the UI is ugly, that's because my POC has nothing with styling, it's a front-end architecture POC :)

## Technical Info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
