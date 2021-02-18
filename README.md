# Laravel Angular By Rock Well Ramos
Simple Laravel Angular Login, Logout and Forgot Password with JWT token

# Prerequisite

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
run `npm install` for the NodeJS<br />
You can use AWS SES for mailer if you do,<br />
run `composer require aws/aws-sdk-php` for the SES<br />

For Mailtrap<br />
To test the mails sending across the development environment, [create the Mailtrap account](https://mailtrap.io/).<br />
Go to mailtrap dashboard, click on the small gear icon, copy the username and password from the SMTP Settings tab.<br />
Then, open .env and add the mailtrap details.<br />

Create .env . match it into your database credentials and the SES<br />
After installing the composer packages<br />
Run `php artisan migrate` for the tables<br />
Run `php artisan serve` for the backend

# Usage

After following instructions, set the angular api endpoint url to your api’s url via `cd frontend`
run `ng serve` to start the development server for angular

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
