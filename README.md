# si-convert
For all youre SI conversion needs, look no further!
This App is also hosted on: https://si-convert.herokuapp.com/

All js files are minified and managed via Webpack. Travis and Heroku are used for the CI/CD pipeline.

## Set up steps
clone the repo
run:
 - npm install
 - npm start
 
Unit types are dynamically constructed from conversion-data.json, new types can be added without a need to add code allowing non developers to maintain the application.
 
Next Steps:
 While determining the scope of this project I left a couple of TODOs that I felt took away from the purpose of this project. In the future I plan on adding these, but want to make a note of them here.

Error Handling
 - Http error codes I am sending need more work to be sure. Proper analyisis of invalid input and throwing of 400s needs to be added. 
 
 Security
 - I have added mathjs to evaluate mathematical expressions which adds security to this process. The majority of expressions are pulled from internal code, minimizing any risk of injection. That being said, I would have liked to add models for operators the same way I have done for Unit, reducing the % of outside code being evaluated to 0. 
 
