# Exercises

## NOTE !

Apparently, this repo was created long ago even before Joe Biden held the office. So, in order to run the boilerplate, consult the web on how to downgrade your `node` version into v14.18. If you're running on Linux/MacOS, you can run these commands on your dedicated terminal :

```shell
sudo npm install -g n
n 14.18
```

Once you successfully downgraded your Node, `npm start` should run perfectly fine

## Exercises: Level 1

1. What is a module?

   Module is a group of function that can be exported and imported when needed in a project

2. What is package?

   Package is a collection of modules

3. What is the difference between a module and a package.

   A module is consisted of a group of function. While a package consists of a group of modules.

4. What is NPM?

   NPM is Node.js Package Manager. It's sole purpose is to allow Node developers to use and distribute JavaScript modules that are available in the registry

5. What is Webpack?

   Webpack is module bundler

6. How do you create a new React project?

   Creating new react project can be done by running `npx create-react-app project-name`

7. What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?

   - `package.json` : Lists of packages and commands that the user uses
   - `package-lock.json` : A way to lock the package's version
   - `gitignore` : List of files and folder that are ignored and not meant to be pushed to git
   - `node_modules` : Node packages, modules and dependencies
   - Public : Consists of files thats necessary for rendering your webpage (index.html, icon, manifest.json, robots.txt)

8. What is your favorite code editor (I believe that it is Visual Studio Code)?

   Neovim for building API or Competitive Programming (college) and VS Code for web development or data mining

9. Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).

   aight bet

10. Try to make a different custom module in a different file and import it to index.js.

## Exercises: Level 2

1. Import and render the following images

   Added a div inside main

   ```JSX
   const main = (
   <main>
      <div className="main-wrapper">
         <p>
         Prerequisite to get started{" "}
         <strong>
            <em>react.js</em>
         </strong>
         :
         </p>
         <ul>{techsFormatted}</ul>
         {result}
         {personAge}
         {user}
      </div>
      <div className="task-wrapper">
         <p>Front End Technologies</p>
         <div>
         <img src={htmlLogo} width="150" height="150"></img>
         <img src={cssLogo} width="150" height="150"></img>
         <img src={javascriptLogo} width="150" height="150"></img>
         <img src={reactLogo} width="150" height="150"></img>
         </div>
      </div>
   </main>
   );
   ```

   The `task-wrapper` class are written in the HTML file are as follow

   ```css
   .task-wrapper {
     text-align: center;
     padding: 10px;
     margin: auto;
   }

   .task-wrapper img {
     margin-left: 40px;
     margin-right: 40px;
   }

   .task-wrapper p {
     padding-bottom: 10px;
     font-size: 13px;
     font-weight: 900;
   }
   ```

   2. Use h1, p, input and button HTML elements to create the following design using JSX

   Added styling in HTML

   ```css
   .task-wrapper,
   .subscribe-wrapper {
     text-align: center;
     padding: 20px;
     margin: auto;
   }

   .subscribe-wrapper {
     background-color: #adebfa;
     margin: auto;
     width: 85%;
     border-radius: 10px;
   }

   .subscribe-wrapper h1 {
     font-size: 20px;
   }

   .subscribe-wrapper p {
     font-size: 12px;
     padding: 30px;
   }

   .subscribe-wrapper input {
     font-size: 12px;
     padding: 10px;
     border-radius: 5px;
     border: 0px;
     margin: 5px;
   }

   .button-wrapper {
     width: 30%;
     background-color: lightcoral;
     color: white;
   }

   .task-wrapper img {
     margin-left: 40px;
     margin-right: 40px;
   }
   ```

   Added a div inside main

   ```jsx
      <div className="task-wrapper">
         <p>Front End Technologies</p>
         <div>
         <img src={htmlLogo} width="120" height="120"></img>
         <img src={cssLogo} width="120" height="120"></img>
         <img src={javascriptLogo} width="120" height="120"></img>
         <img src={reactLogo} width="120" height="120"></img>
         </div>
      </div>
      <div className="subscribe-wrapper">
         <h1>
         SUBSCRIBE
         </h1>
         <p>
         Sign up with your email address to receive news and updates.
         </p>
         <form>
            <input
               placeholder="First Name"
               size="20">
            </input>
            <input
               placeholder="Last Name"size="20">
            </input>
            <input
               placeholder="Email"size="20">
            </input><br></br>
            <input type="submit" value="Subscribe" className="button-wrapper">
            </input>
               </form>
      </div>
   ```

## Exercises: Level 3

1. Design the following user card.

   not today,,, this is tough
