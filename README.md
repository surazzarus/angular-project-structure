# Angular10 Folder Structure

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Folder Structure

Folder structure for angular project.

```bash
├── app
|  ├── app-routing.module.ts
|  ├── app.component.html
|  ├── app.component.scss
|  ├── app.component.spec.ts
|  ├── app.component.ts
|  ├── app.module.ts
|  ├── core
|  |  ├── guard
|  |  ├── interceptors
|  |  ├── services
|  |  ├── utils
|  |  └── core.module.ts
|  ├── features
|  |  ├── feature1
|  |  |  ├── components
|  |  |  ├── services
|  |  |  |  ├── feature1.component.html
|  |  |  |  ├── feature1.component.scss
|  |  |  |  ├── feature1.component.ts
|  |  |  |  └── feature1.module.ts
|  |  ├── feature2
|  |  |  ├── components
|  |  |  ├── services
|  |  |  |  ├── feature2.component.html
|  |  |  |  ├── feature2.component.scss
|  |  |  |  ├── feature2.component.ts
|  |  |  |  ├── feature2.module.ts
|  |  |  |  └── feature2-routing.module.ts
|  ├── layouts
|  |  ├── content-layout
|  |  |  ├── home
|  |  |  |  ├── home.component.html
|  |  |  |  ├── home.component.scss
|  |  |  |  └── home.component.ts
|  |  |  ├── navbar
|  |  |  |  ├── navbar.component.html
|  |  |  |  ├── navbar.component.scss
|  |  |  |  └── navbar.component.ts
|  |  |  ├── sidebar
|  |  |  |  ├── sidebar.component.html
|  |  |  |  ├── sidebar.component.scss
|  |  |  |  └── sidebar.component.ts
|  |  └── layouts.module.ts
|  ├── shared
|  |  ├── components
|  |  ├── interfaces
|  |  ├── pipes
|  |  └── services
|  |  └── shared.module.ts
├── assets
|  ├── images
|  └── scss
|     ├── base
|     |  ├── _global.scss
|     |  └── _variables.scss
|     └── main.scss
├── environments
|  ├── environment.prod.ts
|  └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
└── test.ts
```

## More??
Run `npm run build:stats` to build & `npm run analyze` to see the file stats. 

Also, take a look at [Dockerizing Angular Application](https://github.com/surazzarus/angular-docker) if you want to run your application as a Docker Container.
