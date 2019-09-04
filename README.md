# Angular4DynamicForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Highlights of Version 1.0

1. The following input types are supported:
    a. Text
    b. Dropdown
    c. Date
    d. Range
    

2. The metadata json is currently fetched from a hard-coded service defined in: dynamic-form-field.service.ts
3. Bootstrap v3.3.7 is used to style the components.
4. On form submission, the json data is printed on the console.

## Highlights of Version 1.1

1. The following input types are also supported:
    a. Textarea
    b. Button
2. The metadata json is now fetched from a expressjs based GET service defined in: dynamic-form-field.service.ts
3. The service fetches data from a file �localdata.json�
4. Designer is also accessible as a textarea, the input of which is updated via a POST service into �localdata.json�.
5. The url for designer is �/designer�

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4201/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## To Do Items 

1.  Custom Composite Controls 
2.	Angular based routing – for accessing internal routes.
3.  CSS fixes
4.	Designer - Adding props to each control + Creation of JSON (similar to parsing written in the FormField service)
5.	I18n support
6.	Popups  - for login, messages & confirmation
7.	Creating a form instance from a created template

8.	Authentication
9.	Listing form instances with RBAC support
10.	Color schemes - complaince with BMC Adapt
11.	Nested Sections
