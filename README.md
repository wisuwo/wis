# WIS Website 2023/24

## Steps (MacOS)
### 0. Required
1. Node JS LTS | current version - 20.9.0
2. Yarn LTS | current version - 1.22.19
3. React LTS | current version - 18.2.0
4. Github account with no deployed websites

### 1. Prep
1. Download the LTS version of <a href="https://nodejs.org/en">Node JS</a>
2. To check if NodeJS installed, open terminal and use command ```node -v```
3. Install nvm using command ```npm install```
4. To check if nvm is installed, open terminal and use command ```npm -v```
5. Download LTS version of yarn using command ```sudo npm i -g yarn```
6. To check if yarn is installed, use command ```yarn -v```
7. Install bootstrap (css) using command ```npm install react-bootstrap@next bootstrap@5.1.1```

### 2. Clone Files
1. Clone files locally by copying http link and in terminal running ```git clone HTTP_LINK_COPIED```
2. Make sure your new local file has:
   - package.json
   - index.html
   - readme file
   - reactapp folder
     If there is no package.json, in terminal, ```cd``` into cloned files folder and type ```yarn init```
     If there is no reactapp folder, in terminal, ```cd``` into cloned files folder and type ```mkdir REACT_FOLDER_NAME```. ```cd``` into the REACT_FOLDER_NAME. Type ```npx create-react-app```

### 3. Run Locally
1. In terminal, make sure you ```cd``` into the cloned file
2. To run locally, type ```npm start```

### 4. Deploy
1. Make sure site runs correctly locally and add any changes
2. In terminal, make sure you have ```cd``` into the cloned file
3. ```cd``` into your REACT_FOLDER_NAME
4. Make sure github pages package installed: ```npm install gh-pages --save-dev```
5. In the package.json of the react folder, update the first line "homepage": "https://USER_NAME.github.io/REPOSITORY_NAME"
   - you should be able to find the exact link after deploying on github pages
6. Make sure the "scripts" line looks like this:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
}
7. In terminal type ```npm run build``` then ```npm run deploy```
8. In the github pages section, you should be able to see a link of the format in step 5 where website is deployed to


### 5. Update/Push Changes to Github
1. After making a change to local files, ```cd``` into general file
2. Type ```git add .``` to add all changes, you can replace . with specific file
3. Type ```git commit -m```
4. Type ```git push origin main```

### 6. Adding Custom Domain Name
1. Purchase from a domain manager site
2. Verify domain name on <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site">github</a> (this will take 24 hours)
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

### 7. Google Search
Once the website is up and running, you need to make sure it is findable on google search. 
1. Go to <a href="https://search.google.com/search-console/welcome?action=inspect">google search console</a> and type in domain name for verification
2. It will redirect to domain name provider and add a text file
3. Wait for a few hours then you should be able to verify the domain

4. Once domain is verified, check if it is indexed or not. Indexed means you can find it through google search and unindexed you can't
5. If unindexed, check reason and meaning of reason at <a href="https://support.google.com/webmasters/answer/7440203#crawled">google's faq page</a>
6. You may need to create a site map depending on issue
     Creating a sitemap needs to be using xml file

### 8. Making a new page

### 9. Loading button

### 10. Nav Bar

### 11. Links

### 12. Adding to events
