
Contribution Guidelines



Contributing to fnplus Open Source Projects
fnplus welcomes contributions to open source projects on Github. When contributing, please follow the Code of Conduct.

Issues
Feel free to submit issues and enhancement requests.



Contributing

Setting Up GitHub And Git For The First Time

Get a github account.
Download and install git.
Set up git with your user name and email.

Open a terminal/shell and type :

$ git config --global user.name "Your name here"
$ git config --global user.email "your_email@example.com"

(Don’t type the $; that just indicates that you’re doing this at the command line.)

For any technical issues while setting up visit this page by Github —  
https://help.github.com/en/github/getting-started-with-github


1. Fork the project

Click on the FORK icon on top right of your screen .

2. Clone the Project
After the step 1, you have to click on the Green Colored “Clone or download” button and copy the web-URL .

3. Open GitBash Software

Open Terminal/Command Line and write the command

git clone <link you copied> e.g

$ git clone https://github.com/YOUR-USERNAME/ProjectName

Press Enter. Your local clone will be created.

4. Create your separate Branch

To create a separate branch write this command on Github —

$ git branch <name_of_your_new_branch>

Tip: Always work on a new branch and don’t mess up the master branch.

5. Open the project

Now, Open the project in your local device. It will be in the directory where you cloned the project.
After opening the project, make some meaningful changes to the project(Add features, Modify existing code, Add files/Readme.md) .

6. Add your changes

To add all the changes you made write the command

$ git add .

7. Commit Changes

Commit all your changes using the command

$ git commit -m"commit message"

9. Push Your Code

$ git push -u origin <name_of_your_new_branch>


10. Pull Request

To create a pull request that is ready for review, click Create Pull Request. For more information about creating pull requests, see “About pull requests.”

Congratulations ! You are all set to contribute to the Open Source Community .
