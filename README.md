# Project Name

Panorbit Backend Assignment


## Table of Contents

- [Project Description](#project-description)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Project Description

In this project, I have implemented authentication and authorization. Additionally, I have incorporated a search field that automatically displays suggestions as the user enters keywords. When the user clicks on a suggestion, they are redirected to another page where they can view detailed information about the selected item.

## Usage

Import the world.sql database file into MySQL. This file contains the necessary database structure and data for the project.

Create a .env file and include the following configurations:

Port Number: Specify the desired port number for running the project.

Gmail Credentials: Provide your Gmail address and password. These credentials will be used for sending emails via Nodemailer.

Secret Key: Generate and add a secret key for JWT (JSON Web Tokens) to ensure secure authentication.

Install or require all the dependencies required to run this project. Make sure to include all necessary libraries and modules. You can find a list of dependencies in the project's documentation or configuration files, such as package.json or requirements.txt.

By following these instructions, you will have the project set up with the appropriate database, environment variables, and dependencies.

## Dependencies
In this project, the following dependencies have been used:

colors (version ^1.4.0): This dependency is used for easy error handling during debugging, providing helpful color-coded messages.

cors (version ^2.8.5): CORS (Cross-Origin Resource Sharing) is a middleware used to enable cross-origin requests. It allows the API to be accessed by client applications running on different domains.

dotenv (version ^16.0.3): The dotenv module is utilized for storing secret keys and sensitive information securely. It allows you to load environment variables from a .env file into the project's configuration.

express (version ^4.18.2): Express is a popular web application framework used for building APIs and handling HTTP requests and responses. It simplifies the process of creating server-side applications.

jsonwebtoken (version ^9.0.0): JWT (JSON Web Tokens) is a standard for securely transmitting information between parties. It is used in this project to create and verify tokens for authentication purposes.

mysql2 (version ^3.3.1): The mysql2 module is a MySQL database driver that enables communication between the Node.js application and the MySQL database. It provides a convenient API for performing database operations.

nodemailer (version ^6.9.2): Nodemailer is a module used for sending emails from a Node.js application. It is used in this project to send emails to users for various purposes, such as account verification or password reset.

otp-generator (version ^4.0.1): The otp-generator module is used for generating unique one-time passwords (OTPs) dynamically. It is commonly used in authentication workflows to provide an extra layer of security.

sequelize (version ^6.31.1): Sequelize is an Object-Relational Mapping (ORM) library that simplifies database operations by providing an abstraction layer over the database. It supports multiple database systems and allows you to work with the database using JavaScript objects and methods.

These dependencies were chosen to enhance various aspects of the project, such as error handling, API development, database operations, authentication, email communication, and OTP generation. You can find these dependencies listed in the project's package.json file, along with their respective versions.


Thank you for considering this project! I hope that the combination of authentication, authorization, and search functionality will enhance the user experience and streamline data retrieval. If you have any questions or suggestions, please feel free to reach out. Happy coding!

