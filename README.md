# Dynamic-UI-Master
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

## Installation Instructions

1) Clone or download repository. 
2) Download and install Node.JS. It can be downloaded from the following URL - https://nodejs.org/en/download/. Open Node.JS CLI and execute the following command to install Angular CLI globally - npm install -g @angular/cli
3) Change the directory in the Node.JS to the directory where the repository has been installed.
4) Execute the following command - 'npm install' to build the project
5) Once installed execute the command - 'ng serve --open'. This command launches the designer component of the project.
6) Open another Node.JS CLI instance. Change the directory to the directory where the repository is located. Execute the command 'npm run dev'. This command launches the renderer component of the project. Navigate to `http://localhost:4201/`.
7) Finally open a normal Windows Command prompt. Change the directory to the directory where the repository is located. Execute the command 'node server.js'. This is used to start the local server. 

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

