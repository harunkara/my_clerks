My Clerks App

Hello I am Charoun KARA TSOMPAN IMPRAM. I realized this project for the recruitment process of Clerk company. While carrying out this project, I was inspired by Instagram and tried to add original structures to the project. I used the React library and npm packages while carrying out the project. Apart from these technologies, I used many libraries and technologies such as Eslint, HTML, CSS, Jest, MUI (Material UI), Redux, Axios, Hooks.
One of the most challenging aspects of the project was responsiveness. I used my CSS skills to make the components responsive. Apart from this, the issue of making requests with performance was also a critical issue in the project. In order to achieve this, I set my requests to fetch only 10 people's data. When the user swiped right and reached the last element, I was making it request again, so I was making the component loads quickly.
In the continuation of the project, I observed that the features of AliceCarousel did not meet my requirements and some of them were missing. Then I wrote the carousel with my own HTML and CSS skills and used vanilla.js because I trusted its speed while customizing my own carousel. In the next step, I imported the jest test library to test my existing containers and components. I wrote tests for my Carousel container and UserCard component and observed that all elements render correctly and load data correctly.
I was almost near the end of the project, but I thought something was missing in the project. I noticed that due to the small size of the cards, the entire email is not visible. For this reason, I made a card appear larger by opening a modal on the screen, and I showed more information for the user in this detail section. In case the user wants to copy the information, I placed a copy button both on the cards in the carousel and inside the detail cards.
What I knew while doing the project and what I learned by researching were very helpful in finishing the project. Especially the structures that I knew like Redux and Store structure, Hooks, CSS , HTML, Class-Component structure and 'jest' helped a lot. The IntersactionObserver structure, which I had not used before but learned by researching, was also very important in completing the project. Apart from these, I tried to use plenty of vanilla.js to speed up my project. I hope the project I have developed will be enough for me to move on to the next stage.


Summary of Technologies Used

React.js: To create user interface and perform render management effectively.
HTML: To create components with HTML elements like div, button, span and more.
CSS: To beautify the HTML elements and to create responsive components/containers.
Eslint: To ensure sintax management and clean code writing.
MUI: To reach the understandable icons that beautify the components.
Redux: To provide state management.
Axios: To send HTTP requests.
Hooks: To be able to use state and lifecycle properties in React without writing a class.
Class-Component: Not to forget to use the old React structure. Because even on Facebook, there are still codes written with Class-components and this is stated in the React document.
Jest: To test the written components and containers.


How To Run the Project

First, the project should be downloaded from https://github.com/harunkara/my_clerks or as a zip. (Note: The repository is private, only opened for harunkara and SokratisVidros). Then unzip it and go to ..\my_clerks directory via terminal or cmd. The 'npm install' command should be run via terminal or cmd. Then, with the 'npm run start' command, the project will be running at http://localhost:3000/.
The project has been uploaded to https://my-clerks.herokuapp.com/ just in case. (Note: because heroku server is a free server, it puts sites to sleep when not logged in for a long time. Please wait for 30-40 seconds, heroku will stand up.). In fact, while the project was being developed, the CI/CD structure was used and after each commit, the project was checked to see how it looks on other devices.


Steps to Run the Project(Summary)

1.	Download the project.
2.	Unzip the project(if you use ‘git clone https://github.com/harunkara/my_clerks’ command you can pass this step).
3.	Go to ..\my_clerks directory via cmd or terminal.
4.	Run ‘npm install’ command. (Note: You have to download node from https://nodejs.org/en/download/ and add it to your windows path(system variables) before)
5.	Run ‘npm run start’ command.


Steps to Run the Tests of the Project

There are three test files in the project. You can run them all or seperately. To run them seperately you can run:

•	‘npm run test CarouselContainer.test.js’ command on ..\my_clerks directory.

•	‘npm run test UserCard.test.js’ command on ..\my_clerks directory.

•	‘npm run test MyModal.test.js’ command on ..\my_clerks directory.

To run them all:

•	‘npm run test --all’ command on ..\my_clerks directory.


Folders and files of the Project

Folders:

__test__ : Includes all test classes(wrote with jest).
actions: Includes the files that sends the request. 
components: Classes containing the smallest component. 
containers: Bigger components that contains other components inside.
css: Contains all css files that beautifies the components. 
reducers: Contains store and reducer classes that catches the response of the requests.

Files:

CarouselContainer.test.js: Includes all test cases of the CarouselContainer container.
commonFunctions: Includes mock datas to use in tests.
MyModal.test.js: Includes all test cases of the MyModal component.
UserCard.test.js: Includes all test cases of the UserCard component.
getRandomUsersAction.js: The file where we send the request.
MyModal.jsx: The modal(pop-up) to see the details of the user.
UserCard.jsx: The component which is used by the carousel to reflect the user datas.
App.jsx: The main wrapper of the project.
CarouselContainer.jsx: The carousel to reflect the UserCards like slider.
carouselcontainer.css: All css codes used to format CarouselContainer.
index.css: All css codes used to format index file.
mymodal.css: All css codes used to format MyModal component.
usercard.css: All css codes used to format UserCard component.
getRandomUsersReducer.js: The file to catch the responses of the requests.
store.js: The file where we store the responses of the requests.
setupTest.js: The file where we import the jest library.
.eslintrc.json: The configuration file for the eslint.
babel.config.js: The configuration file for the babel.
fileMock.js: The configuration file for the webpack.
package.json: All npm packages and their versions(This file is used by ‘npm install’ command to install true versions of npm packages).
