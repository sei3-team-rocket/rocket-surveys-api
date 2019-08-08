# Rocket Surveys

A single page survey application.

Users can create new surveys, see the answers to their surveys, and take other's surveys.

### Links
- [Application](https://sei3-team-rocket.github.io/Rocket-Surveys-Client/)
- [Back end](https://rocket-surveys.herokuapp.com/)
- [Front end repo](https://github.com/sei3-team-rocket/Rocket-Surveys-Client)
- [Back end repo](https://github.com/sei3-team-rocket/rocket-surveys-api)

### Development
1. Team launch w/ sprint planning meeting.
2. Created user stories.
3. Created wireframes.
4. Created ERD.
5. Began development:
  1. Create front end repo and deployed site.
  2. Create back end repo and database.
  3. Built authentication.
  4. HTML page layout.
  5. CRUD.

### Technologies
- HTML
- CSS
- Bootstrap
- Handlebars
- Javascript
- jQuery
- AJAX
- Express
- MongoDb

### User Stories

```md
As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to create a survey with a title and possible answers.
As a signed in user, I would like to update my survey's title and possible answers of a survey.
As a signed in user, I would like to delete my survey.
As a signed in user, I would like to see all surveys and its answers.
As a signed in user, I would like to take a survey.
```

### Database

The application will have one one-to-many relationship and one one-to-one relationship between three collections: users, surveys, and responOneses.

```md
Collection: Users
- email: string
- first_name: string
- last_name: string
- id: index

Collection: Surveys
- question: string

Collection: Answers
- answerOne: number
- answerTwo: number
```

### ERD

![ERD](https://i.imgur.com/N5AVpVy.png "ERD")

### Wireframes

![Sign In](https://i.imgur.com/IFRtMJ4.png "Sign In")

![Your Surveys](https://i.imgur.com/DV4t2Tc.png "Your Surveys")

![Take Survey](https://i.imgur.com/U7JzIY5.png "Take Survey")

![Create Survey](https://i.imgur.com/nfav5gf.png "Create Survey")

### Unsolved Issues / Future Features
-
