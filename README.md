## Todo App for Blackstone challenge 🧾✅
_______________________________________
### Brief

For this app the GraphQL server and frontend were implemented with the next technologies:

#### Backend
* Technologies
    * Express
    * Express-graphql
    * Expres-jwt
    * Graphql-tools
    * Graphql
    * Mongoose
* Services
  * Mongo Atlas

#### Frontend
* Technologies 
  * @material-ui
  * @apollo/client
  * @reach/router
  * graphql
  * prop-types
  * React(the boilerplate was created with `creat-react-app`)

### Installation
______________________________

1. Clone the [Repository](https://github.com/contrerasjf0/blackstoneTodo.git).
2. Enter to the directori of de project

#### Backend
3. Enter to the `api` directory `cd api`
4. install the dependencies `npm i`
5. Create a `.env` file from `.env.example` file and put  the env variables 
6. Run the project with `npm run start:dev`

#### Frontend
3. Enter to the `frontend` directory `cd frontend`
4. install the dependencies `npm i`
5. Run the project `npm run start`


###### Note

If you have some probles with the port change them.

For the `API` server could you change the port in the `PORT` variable inside .env file. if you change this value make sure it is the same port on the frontend. You'll find below snippet code in the `blackstonetodo/frontend/src/ApolloConfig.js`

```nodejs
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/api',
});
```
