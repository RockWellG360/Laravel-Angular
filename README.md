# Laravel Angular By Rock Well Ramos
Simple Laravel Angular Login, Logout and Forgot Password with JWT token

# Pre Requisite

Node<br />
NPM<br />
Composer<br />
Laravel (PHP Framework)<br />
MAMP or XAMPP<br />
Angular<br />
IDE or Code Editor

# Installation

Clone the Project<br />
After Cloning, run `composer install`.<br />
You can use AWS SES for mailer if you do,<br />
run `composer require aws/aws-sdk-php` for the SES<br />
Create .env . match it into your database credentials<br />
Setup the `MAIL_FROM_ADDRESS`, `AWS_ACCESS_KEY_ID`<br />
Setup the `MAIL_FROM_NAME` via config<br />
After installing the composer packages<br />
Run `php artisan serve` for the backend

# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
