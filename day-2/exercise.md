### Exercises: What is React?

1. What is React?
    
    React is a JavaScript library for building a reusable user interface(UI). It was initially released on May 29, 2013. The current version is 16.13.1 and somehow it is stable. React was created by Facebook. React makes creating UI components very easy. The official React documentation can be found [here](https://reactjs.org/docs/getting-started.html).
    
2. What is a library?
    
    Library is a collection of a pre-written code that can be used in future development in order to speed up the coding process and be more time efficient 
    
3. What is a single page application?
    
    A single page application is an application that offers core features in one single page
    
4. What is a component ?
    
    A component is an attribute or a property that are rendered to a website or application
    
5. What is the latest version of React?
    
    18.2.0 / 14 June 2022
    
6. What is DOM?
    
    DOM is a Document Object Model. It is a programming interface for web documents DOM is the way web browsers organize and manipulate web pages. 
    
    When a web page is loaded, the browser creates a Document Object Model of the page, which is essentially a tree-like structure of objects representing the different elements on the page, such as paragraphs, images, and links. The DOM allows JavaScript to interact with these elements and modify them in real-time, such as changing their content, style, or position on the page.
    
    By using the DOM, web developers can create dynamic and interactive web pages, such as web applications and games.
    
7. What is React Virtual DOM?
    
    React Virtual DOM is a precompiled and premanipulated DOM’s from React  
    
8. What does a web application or a website(composed of) have?
    
    Front-end, Back-end, Database, API, and hosting
    

### Exercises: Why React?

1. Why did you chose to use react?
    
    Because some of the stuff that are required to develop a website is precompiled and you dont need to worry half of the work to create magnificent websites. There are also several technical reasons to use it such as it is fast, scalable, modular, and flexible.
    
2. What measures do you use to know popularity ?
    
    Github repo indicators (usage, stars, forks, etc), Internet conversations about the framework
    
3. What is more popular, React or Vue ?
    
    React
    

### Exercises: JSX

1. What is an HTML element?
    
    HTML elements are the building blocks of a website. Say it’s the very basic brick in a wall. 
    
2. How to write a self closing HTML element?
    
    In HTML, some elements are called void or empty elements, which means they don't require a closing tag. These elements are self-closing and are written with a slash at the end of the opening tag.
    
    ```html
    <img src="image.jpg" alt="image description" />
    ```
    
3. What is an HTML attribute? Write some of them
    
    HTML attribute is the properties of an HTML element. Some example are
    
    ```html
    <h1 color='blue'> This is a header with blue color attribute</h1>
    ```
    
4. What is JSX?
    
    JSX is a stands for JavaScript XML. JSX allows us to write HTML elements with JavaScript code
    
5. What is babel?
    
    [babel.js](https://babeljs.io/). Babel is a library which transpiles JSX to pure JavaScript and latest JavaScript to older version.
    
6. What is a transpiler?
    
    Transpiler is translating compiler and its a type of compiler that translate source code from one programming language to another
    

### Exercises: JSX Elements

1. What is a JSX element?
    
    A JSX element is a JavaScript variable that contains a HTML element 
    
2. Write your name in a JSX element and store it in a name variable
    
    ```jsx
    const name = <h1> Azarel Grahandito Adi </h1>
    ```
    
3. Write a JSX element which displays your full name, country, title,gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
    
    ```jsx
    const user = 
    	<h1> Azarel Grahandito Adi </h1>
    	<p> Indonesia </p>
    	<p> Student </p>
    	<p> Male </p>
    	<p> azarelgrahandito@gmail.com </p>
    	<p> +62811810xxx </p>
    ```
    
4. Write a footer JSX element
    
    ```jsx
    const footer = 
    (
    	<footer>
    	  <p>Copyright 2023</p>
    	</footer>
    )
    ```
    

### Exercises: Inline Style

1. Create a style object for the main JSX
    
    ```jsx
    const headerStyle = {border : '2px blue', color:'black', fontSize :'32'}
    
    const user = 
    <header style={headerStyle}>
    	<h1> Azarel Grahandito Adi </h1>
    	<p> Indonesia </p>
    	<p> Student </p>
    	<p> Male </p>
    	<p> azarelgrahandito@gmail.com </p>
    	<p> +62811810xxx </p>
    </header>
    ```
    
2. Create a style object for the footer and app JSX
    
    ```jsx
    const headerStyle = {border : '2px blue', color:'black', fontSize :'32'}
    
    const user = 
    <header style={headerStyle}>
    	<h1> Azarel Grahandito Adi </h1>
    	<p> Indonesia </p>
    	<p> Student </p>
    	<p> Male </p>
    	<p> azarelgrahandito@gmail.com </p>
    	<p> +62811810xxx </p>
    </header>
    
    const footerStyles = {color:'black', fontSize :'16'}
    const footer = 
    (
    	<footer style={footerStyles}>
    	  <p>Copyright 2023</p>
    	</footer>
    )
    ```
    
3. Add more styles to the JSX element

### Exercises: Internal Styles

1. Apply different styles to your JSX elements
```css
  <style>
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    html,
    body {
      height: 100%;
      line-height: 1.5;
      font-family: 'Montserrat';
      font-weight: 300;
      color: black;
    }

    .root {
      min-height: 100%;
      position: relative;
    }

    .header-wrapper,
    .main-wrapper,
    .footer-wrapper {
      width: 85%;
      margin: auto;
    }

    .header-wrapper,
    .main-wrapper {
      padding: 10px;
      margin: 2px auto;
    }

    h1 {
      font-size: 70px;
      font-weight: 500;
    }

    h2,
    h3 {
      font-weight: 500;
    }

    header {
      background-color: #61dbfb;
      padding: 10px;
    }

    main {
      padding: 10px;
      padding-bottom: 60px;
      /* Height of the footer */
    }

    ul {
      margin-left: 15px;
    }

    ul li {
      list-style: none;
    }

    footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60px;
      /* Height of the footer */
      background: #6cf;
    }

    .footer-wrapper {
      font-weight: 400;
      text-align: center;
      line-height: 60px;
    }
  </style>
  ```

### Exercise: Inject data to JSX

1. Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
```jsx
    const rootElement = document.querySelector('.root')
    const date = new Date()

    const firstName = "Azarel"
    const lastName = "Grahandito Adi"

    const headerStyle = {
      border : '2px blue', 
      color:'black', 
      fontSize :'32',
      padding: 1
    }
    
    const day = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    const header = 
    <header style={headerStyle}>
      <div className='header-wrapper'>
    	<h1>{firstName} {lastName} </h1>
    	<p> Indonesia </p>
    	<p> Student </p>
    	<p> Male </p>
    	<p> azarelgrahandito@gmail.com </p>
    	<p> +62811810xxx </p>
      </div>
      </header>
      
      const progLang = ['C', 'Python', 'JavaScript', 'C++','Golang'] 
      const progLangFormatted = progLang.map((item) => <li>- {item}</li>)
      
      
      const main = 
      <div className='main-wrapper'>
        <h2> As of {day}, </h2> 
    <h3> Programming languages that i'm good at : </h3>
    <ul>
      {progLangFormatted}
    </ul>
    </div>

    const year = date.getFullYear()
    
    const footerStyles = {color:'white', backgroundColor:'black', fontSize :'16'}
    const footer = 
    (
    	<footer style={footerStyles}>
        <div className='footer-wrapper'>
    	  <p>All rights reserved. Copyright {year}</p>
        </div>
    	</footer>
    )

    // JSX element, app
    const app = (
      <div className='app'>
        {header}
        {main}
        {footer}
      </div>
    )

    // we render the JSX element using the ReactDOM package
    ReactDOM.render(app, rootElement)

    