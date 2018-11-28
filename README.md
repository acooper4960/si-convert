# si-convert
For all youre SI conversion needs, look no further!
This App is also hosted on: https://si-convert.herokuapp.com/

## Set up steps
clone the repo
run:
 - npm install
 - npm start
 
Next Steps:
 While determining the scope of this project I left a couple of TODOs that I felt took away from the purpose of this project. In the future I plan on adding these, but want to make a note of them here.

Error Handling
 - Http error codes I am sending need more work to be sure. Proper analyisis of invalid input and throwing of 400s needs to be added. 

Usage of eval()
 - For simplicity I have chosen to use eval here. For the most part, I am only calling it on internal code, however there is one case where I am using it on text recieved from the query param here. The operators * / (). A remedy for this would be to follow my pattern of mapping these to an Operator model of mine in following the same pattern I am with the Unit class. This would then ensure I am only calling eval on internal code. 
