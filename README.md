
# What do we have here?

Express.js server serves on port 3000 an app for CRUD operations of employees

### To run it:
1. Clone the repo and cd into it 
2. `docker build clarity-be .`
3. `docker run  --init -p 3000:3000 clarity-be`
4. Open browser in localhost:3000 to see the status of the app
   1. You can add employees with `POST` to `http://localhost:3000/employees/add`
   2. You can see all the current employees with `GET` to  `http://localhost:3000/employees/all`