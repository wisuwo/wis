# WIS Website 2023/24

## Steps (MacOS)
### 0. Required
1. Node JS LTS | current version - 20.9.0
2. Node Package Manager (NPM) | current version - 10.3.0
3. Node Version Manager (NVM) | current version - 0.39.5
4. React LTS | current version - 18.2.0
5. Github account with no deployed websites (?)

### 1. Clone Files
1. Clone files locally by copying http link and in terminal running ```git clone HTTP_LINK_COPIED```
2. The root folder of the cloned repository should have the following:
   - CNAME
   - package.json
   - index.html
   - readme file
   - sitemap.xml
   - wisreactapp folder

### 2. Prepare Locally Cloned Repository
In the Root Folder of your Locally Cloned Repository:
1. Download the LTS version of <a href="https://nodejs.org/en">Node JS</a>
2. To check if NodeJS installed, open terminal and use command ```node -v```
3. Install nvm using command ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash```
4. To check if nvm is installed, open terminal and use command ```nvm --version```
5. NPM comes when you install Node JS. To ensure it is installed, run the command ```npm -v```
6. ```cd``` into the wisreactapp folder, then run the ```npm i``` command. This will install all node modules being used in the React app.
7. While still in the wisreactapp folder, install bootstrap (css) using command ```npm install react-bootstrap@next bootstrap@5.1.1```


### 3. Run Locally
1. In terminal, make sure you ```cd``` into the wisreactapp folder
2. To run locally, type ```npm start```
3. The website should open on your local host, and you are now ready to make changes and see these changes dynamically!

### 4. Deploy
1. Make sure you are on the main branch, and that all the changes you want are pushed and merged with main
2. Make sure site runs correctly locally by ```cd``` into the wisreactapp folder and running ```npm start```
   a. Fix any issues if they exist and push these changes
4. To begin the deployment process, make sure you are ```cd``` into the wisreactapp folder
5. Make sure github pages package installed: ```npm install gh-pages --save-dev```
6. In both package.json files (root folder and the wisreactapp folder), update the first line "homepage": "https://USER_NAME.github.io/REPOSITORY_NAME"
   - You should be able to find the exact link after deploying on github pages
8. Make sure the "scripts" line looks like this:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
}
9. In terminal type ```npm run build```. Let that compile, then enter ```npm run deploy```
10. Go to GitHub in your browser. Navigate to the repository, then the Actions page
11. Wait for the "pages build and deployment" workflow run to finish
12. Click on the workflow run when it is completed successfully, and the link to your website will be there. Click on it to view your website live!
13. As mentioned in Step 5, this link is going to be what you will insert into the "homepage" line of your package.json files.

### 5. Update/Push Changes to Github
1. After making a change to local files, ```cd``` into general file
2. Type ```git add .``` to add all changes, you can replace . with specific file
3. Type ```git commit -m```
4. Type ```git push origin main```

### 6. Adding Custom Domain Name
1. Purchase from a domain manager site
2. Verify domain name on <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site">github</a> (this may take up to 24 hours)
3. On domain managers site, find the Manage DNS page
4. Add 4 A records:
   Under each ipv4 title add:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
  These point to the location of the github deployment
5. Under CNAME record:
   - Hostname should contain ```www```
   - Name should contain name of root repository - eg. USER_NAME.github.io
6. Add TXT record
   - Hostname should contain ```_github-pages-challlenge-YOUR_ACCOUNT_NAME```
   - Name should contain the numbers given from verified domain name
You should end up with 7 records total - 4 A, 2 TXT, 1 CName
7. In your locally cloned repository, navigate back to the "homepage" line of both package.json files and replace the github.io link: "homepage": "https://YOUR_DOMAIN/"
8. Open GitHub on your browser and navigate to your repository Settings -> Pages
9. Scroll down and enter your custom domain. Click "Save". A DNS check will begin which may (unlikely) take up to 24 hours.
10. Navigate to the Actions page of your repository. You should see the new workflow run for the deployment
11. Once the workflow run is complete, click on it and you should see the link to your live website. If the DNS check succeeded, your website should load correctly!

### 7. Google Search
Once the website is up and running, you need to make sure it is findable on google search. 
1. Go to <a href="https://search.google.com/search-console/welcome?action=inspect">google search console</a> and type in domain name for verification
2. It will redirect to domain name provider and add a text file
3. Wait for a few hours then you should be able to verify the domain

4. Once domain is verified, check if it is indexed or not. Indexed means you can find it through google search and unindexed you can't
5. If unindexed, check reason and meaning of reason at <a href="https://support.google.com/webmasters/answer/7440203#crawled">google's faq page</a>
6. You may need to create a site map depending on issue -> Creating a sitemap needs to be using xml file

### 8. Making a new page

### 9. Loading button

### 10. Nav Bar

### 11. Links

### 12. Adding to events
