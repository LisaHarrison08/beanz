# Beanz

## Project by: Lisa Harrison & Kurt Reynolds

https://docs.google.com/document/d/1sUwBE89XPz7e5mv-nv3NwMNBKM5W3darBaXB7U5DcrQ/edit

## Update Notes

- 5/10/22: Kurt

  - Updated main branch. Going forward all updates will be to dev branch.
  - Main branch will be updated once the project is complete.
  - Added BrowserRouter to App.js for navigation purposes
  - Added Routes in the Main component and linked to components
  - Added Navigation & Footer components into Home component
  - Switched style to style.scss and copied style from previously used style to the scss file.
  - Working on navigation-kurt branch
  - Created reusable components: ImageCard & TextCard
  - Added filler content to Home component

  5/14/22: Kurt

- Added new branch: aboutPageAndMenuPage (forgot to put -kurt in the branch name)
- Added Redux to the project
- Created Redux store, actions, and reducers
- Created product data for the menu page
- Created reusable MenuCard component for the Menu page
- Added products to the Menu page
- Added some simple style to Menu page

5/16/22: Kurt

- Created new branch: homepage-style-kurt
- Made the Nav menu transparent. Used same color, but switched to rgba.
- Updated TextCard content on the Home page.
- Created AboutPage component to house the About component on a separate page.
- Created MenuPage component to house the Menu component on a separate page.

## Rules for Branches

- Work off of the dev branch
- Going forward, do a pull request to get the latest code from the dev branch
- Once the latest code has been loaded onto the local machine, create a NEW branch for what will be worked on. For example: 'header-kurt'.
- Commit that newly created branch to the repo

## Rules for Style

- add any style updates to the style.scss file
- a SCSS preprocessor will be needed. One cane be found on the Extensions store, such as Live Sass Compiler.

## Git Commands:

- git fetch --> tells local git to retrieve lastest meta-data info from the original (doesn't do any file transferring, just checks to see if any changes available)
- git pull --> pulls the latest changes from the remote repo
- git add -A —> Add all to staging area
- git commit -m “comment” —> Commit
- git push origin master —> Push changes to remote repository
- git diff —> Show changes made to code
- git reset —> Remove everything from staging area
- git clone URL —> Clone remote repository into current directory
- git pull origin master —> Get updates from repository
- git checkout branchName —> Switch branch
- git remote add origin https://github.com/user/repo.git
  - Set a new remote
- git remote -v
  - Verify new remote
  - > origin https://github.com/user/repo.git (fetch)
  - > origin https://github.com/user/repo.git (push)
- Check log of commits
  - Git log —oneline
- git branch -m main —> create a branch called main
- git branch -m master main —> change name of local branch from master to main git push -u origin main
- git branch –-show-current —> show current branch
- git branch -D _branch name_ —> delete branch (need to get off branch before deleting)
- rm -rf .git —> delete local repository (must be in current directory of local repo)
- git config --global init.defaultBranch main —> use to make default branch name as main
- git config —global alias._name of alias_ ‘! _command 1 && command 2_’ —> create an alias for command shortcuts, for example: git config --global alias.addcom '!git add -A && git commit -m'
