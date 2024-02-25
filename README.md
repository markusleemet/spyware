# Spyware

This is a small demo project about adding/deleting contacts through UI. Contacts are stored in the PostgreSQL database. The main technologies used for this project are Vue3, SpringBoot, and PostgreSQL.
Running example of this project can be accessed [here](https://spyware.leemetmarkus.ee/).

## System Requirements

- Java SDK version 17
- Node.js version 12.x or above
- NPM

## Running the Project

- Clone this repository.


### Database

Make sure you have PostgreSQL running on port 12345. One option for this is to run the following commands in the project root directory.

- docker build -t spyware-db .
- docker run -p 12345:5432 -d spyware-db

### Frontend

To start upp frontend run the following commands in the `/frontend/frontend` folder

- npm install
- npm run build
- npm run start

### Backend

Run the following command in the project root directory.

- ./gradlew bootRun


## License

<a target="_blank" href="https://icons8.com/icon/8281/spy">Spy</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>