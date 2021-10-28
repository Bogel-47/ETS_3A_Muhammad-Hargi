<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div>
  <h1 align="center">cronômetro</h1>
  <p align="center">A timer for task made with JavaScript</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#cronômetro">cronômetro</a></li>
	<li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
	<li><a href="#prerequisities">Prerequisities</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This project was created to fulfill the mid-semester evaluation in a web development course.


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With
* HTML
* CSS
* VueJS
* NodeJS
* PostgreSQL

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisities
1. Install [NodeJS](https://nodejs.org/en/) and install yarn using `npm install -g yarn'
2. Install [PostgreSQL](https://www.postgresql.org/download/)

### Installation

1. Clone the repository
	```sh 
	 git clone https://github.com/Bogel-47/ETS_3A_Muhammad-Hargi.git
	 ```
3. Configure back-end
    * cd to `back-end` and install packages with `yarn install`
    * Copy `.env.example` to `.env`. Fill PORT with your desired API port or leave blank. Fill DB_USER and DB_PASSWORD with your database user and password
    * Run the server with `npx nodemon index.js`
4. Configure front-end
    * cd to `front-end` and install packages with `yarn install`
    * Run the server with `yarn serve`
    * Open http://localhost:8081/ in your browser

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
<div>
	<img width="100%" src="images/usage.gif" />
</div>

To use this app, you can:

1. Insert new language to database
2. Update language to database
3. Delete language to database
4. See data in database language

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

* [Muhammad Hargi](https://github.com/Bogel-47)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [StackEdit](https://stackedit.io/)
* [ReadMe Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- WARNING -->
##WARNING
This project was carried out without using existing data, because there were obstacles in loading data in the database
