# Building Attention - Project Showcase

This repository contains the source code for the Building Attention Project Showcase, a React-based application to display student projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Folder Structure](#folderstructure)
- [Notes](#notes)

*TO READ THE README CLEARLY, OPEN IT IN AN EDITOR, AS IN GIT IT'S A BIT SCRUNCHED UP*

## Installation
Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
   git clone https://github.com/your-username/building-attention-project-showcase.git


   cd building-attention-project-showcase
Install dependencies:
Ensure you have Node.js and Yarn installed. Then run:
yarn install

Installing Each Dependency Individually
If you need to install dependencies individually, use the following commands:

'react:'
yarn add react

'react-dom:'
yarn add react-dom

'react-router-dom:'
yarn add react-router-dom

'react-scripts:'
yarn add react-scripts

'react-coverflow:'
yarn add react-coverflow

'react-responsive-carousel:'
yarn add react-responsive-carousel

'react-slick:'
yarn add react-slick

'react-swipeable:'
yarn add react-swipeable

'slick-carousel:'
yarn add slick-carousel

'gsap:'
yarn add gsap

## Usage
To start the development server and run the application locally:

Start the development server:
yarn start

Open your browser:
Navigate to http://localhost:3000 to view the application.

## Folder Structure
The project structure is as follows:

building-attention-project-showcase/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── ...
│   │
│   ├── components/
│   │   ├── CoverflowComponent.js
│   │   ├── VerticalCarouselComponent.js
│   │   └── ProjectInfoComponent.js
│   │
│   ├── css/
│   │   └── VerticalCarouselComponent.css
        └── ProjectDetail.css
        └── ProjectInfoComponent.css
        └── CoverflowComponent.css
│   │
│   ├── data/
│   │   └── ProjectsData.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
├── yarn.lock
├── README.md
└── webpack.config.js

## Scripts
Here are the available scripts for this project:

Start the development server:
yarn start

Build the project for production:
yarn build

Run tests:
yarn test

Eject the configuration:
yarn eject

## Dependecies
The main dependencies used in this project are:

react: ^18.3.1
react-dom: ^18.3.1
react-router-dom: ^6.23.1
react-scripts: 5.0.1
react-coverflow: ^0.2.20
react-responsive-carousel: ^3.2.23
react-slick: ^0.30.2
react-swipeable: ^7.0.1
slick-carousel: ^1.8.1
gsap: ^3.12.5
For a complete list of dependencies, refer to the package.json file.

## Page Descriptions

App.js
The main entry point of the application.
Configures routing using react-router-dom to navigate between different pages.

CoverflowComponent.js
Displays the main carousel of projects using a custom coverflow implementation.
Allows users to select and navigate through various projects visually.
Includes swipe handling using react-swipeable for smooth transitions.

ProjectsData.js
Contains the data for all projects displayed in the carousels.
Includes project titles, descriptions, images, and other relevant information.

App.css
Contains the main styling rules for the application.
Defines the layout, colors, and typography for the project showcase.

VerticalCarouselComponent.js
Displays a vertical carousel of project thumbnails.
Allows users to select a project by clicking or swiping through the thumbnails.
Handles touch interactions with react-swipeable to enhance the user experience on touch devices.

ProjectDetail.js
Displays detailed information about a selected project.
Includes sections for project overview, objectives, impact, prototype, and gallery.
Allows users to navigate back to the main carousel.

## Notes
The project uses a custom background image located in src/assets/images/DarkenedBackground.png. Ensure this path is correct or update the path in App.css if the image is located elsewhere.
Adjust the configurations in webpack.config.js as needed for your environment.
