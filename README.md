

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/bee2805/mediclinic)
![GitHub watchers](https://img.shields.io/github/watchers/bee2805/mediclinic)
![GitHub language count](https://img.shields.io/github/languages/count/bee2805/mediclinic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/bee2805/mediclinic)


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Bronwyn Potgieter</h5>
<h5 align="center" style="padding:0;margin:0;">200089</h5>
<h6 align="center">DV200 - Term 2 | 2022</h6>
</br>
<p align="center">

  <a href="https://github.com/bee2805/mediclinic">
    <img src="src/assets/mainLogo.svg" alt="Logo" width="200" height="140">
  </a>
  
  <h3 align="center">MediClinic</h3>

  <p align="center">
    A react project where I created a web application used by a receptionist to manage a medical practice using php, mySQL and React. <br>
    
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/bee2805/mediclinic/issues">Report Bug</a>
    ·
    <a href="https://github.com/bee2805/mediclinic/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
   * [Custom UI](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1][image1]

### Project Description

A nice introduction to this amazing project of mine.

### Built With

* [React](https://reactjs.org/)
* [php](https://www.php.net/)
* [mySQL](https://www.mysql.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/bee2805/mediclinic.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/bee2805/mediclinic.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

4. An API key is not required


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
![image2](https://raw.githubusercontent.com/bee2805/mediclinic/main/src/assets/mockup.jpg)

### Manage Appointments! 

Using CRUD operations appointments can be created, read, updated and deleted from the database. The user is able to easily edit, delete and add new appointments. The user will also be able to see the upcoming appointments for the week. 

![image3][image3]
### Manage doctor profiles

The user will also be able to add, edit and delete a doctor profile. The doctor profile holds important and personal information about the doctors, such as their name, specialization, age and gender. The user will also be able to see a list of doctor profile cards where they will easily be able to edit and delete the doctors from.

![image4][image4]
### Manage patient profiles

Much like the doctors page, the user will also be able to add, edit and delete a patient profile. The user will also be able to see a list of doctor profile cards presenting important information that can be edited or deleted.
![image5][image5]


<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

### Ideation

![image5][image5]
<br>

### Wireframes
<h4>Login Page</h4>

![image6](https://github.com/bee2805/mediclinic/blob/main/src/assets/ideation/Wireframes/LoginPageWireframe.jpg)

<h4>Register Page</h4>

![image7](https://github.com/bee2805/mediclinic/blob/main/src/assets/ideation/Wireframes/RegisterFormWireframe.jpg)

<h4>Appointments Page</h4>

![image8](https://github.com/bee2805/mediclinic/blob/main/src/assets/ideation/Wireframes/LandingPageWireframe.jpg)

<h4>Doctors Page</h4>

![image9](https://github.com/bee2805/mediclinic/blob/main/src/assets/ideation/Wireframes/DoctorsWireframe.jpg)

<h4>Patients Page</h4>

![image10](https://github.com/bee2805/mediclinic/blob/main/src/assets/ideation/Wireframes/PatientsWireframe.jpg)

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilized React `Charts.JS` dependency for Data visualization
* Implemented Routing with `React-Router v6`.
* API End Point: link Here 
* `Plugin` for this.
* ETC.

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
Overall, I really enjoyed this term and found the work to be quite interesting
* using props to dynamically show the input from the database.
* use CRUD operations to aid the management of the data.
* Building and stylling the project.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Type error: Data.map is not a function - I realized the work around this was to make sure the path to my database was correct, as well as ensuring there was data in my database. I found that if the table in the database was empty, I would get this error.
* There was a cors error because my front end was running on port 3000 and the server was running on port 8888, which caused a conflict. This was in class with the assistance of Mike, my lecturer.


#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
* Name of Skill Explored.
* Explain your understanding and execution of above skill.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Add form validation on my “add appointment”, “add doctor”, “add patient” and edit forms.
* I think the implementation of a calendar would have been a nice addition to the project for adding appointments. I aim to keep working on this project in the future and implement this feature.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image9][image9]
<br>
![image10][image10]

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](path/to/video/demonstration)


See the [open issues](https://github.com/bee2805/mediclinic/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Bronwyn Potgieter** - [bee2805](https://github.com/bee2805)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Bronwyn Potgieter** - [200089@virtualwindow.co.za](mailto:200089@virtualwindow.co.za) - [@bronns_designs](https://www.instagram.com/bronns_designs/) 
* **Project Link** - https://github.com/bee2805/mediclinic

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)


