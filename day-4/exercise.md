# Exercises: Components

## Exercises: Level 1

1.  What is the difference between a regular function and an arrow function?

    In a regular function, the this keyword refers to the object that the function is a method of. However, when you use a regular function as a callback function or assign it to a new variable, the this keyword can refer to different objects, depending on how the function is called.

    On the other hand, arrow functions inherit the this value of the enclosing lexical scope, which means that the this value inside an arrow function is the same as the this value outside the function. This makes arrow functions particularly useful when working with callbacks and event handlers, as they can avoid issues with this scoping.

2.  What is a React Component?

    React component is a small, reusable code to be a one part of application UI

3.  How do you make a React functional component?

    We can create a functional component by writing a JSX element inside of javascript function

4.  What is the difference between a pure JavaScript function and a functional component?

    The parameter of a functional component takes an input of props and returns a React element (JSX)

5.  How small is a React component?

    As small as it is digestible. The UI gets split into small.

6.  Can we make a button or input field component?

    Yes we can.

7.  Make a reusable Button component.

    ```jsx
    const buttonStyles = {
      padding: "10px 20px",
      background: "rgb(0, 255, 0",
      border: "none",
      borderRadius: 5,
    };
    const Button = () => {
      <button style={buttonStyles}> action </button>;
    };
    ```

8.  Make a reusable InputField component.

    ```jsx
    const inputStyles = {
        font-size: '12px',
        padding: '10px',
        border-radius:'5px',
        border: '0px',
        margin:'5px'
    }

    const InputField = () => {
        <input style={inputStyles}></input>
    }
    ```

9.  Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).

    ```jsx
    const AlertBox = ({ type, message }) => {
      return (
        <div className={`alert-box ${type}`}>
          <p>{message}</p>
        </div>
      );
    };
    ```

    AlertBox can be reusable by calling the element as follows

    ```jsx
    const MyComponent = () => {
        return (
            <AlertBox type="warning" message="This is a warning message." />
            <AlertBox type="success" message="This is a success message." />
        );
    };
    ```

## Exercises: Level 2

1. Create functional components and display the following images

   With the same styling from index.html, we can directly add a functional component on index.js as follows

   ```jsx
   const FrontEnd = () => {
     <div className="task-wrapper">
       <p>Front End Technologies</p>
       <div>
         <img src={htmlLogo} width="120" height="120"></img>
         <img src={cssLogo} width="120" height="120"></img>
         <img src={javascriptLogo} width="120" height="120"></img>
         <img src={reactLogo} width="120" height="120"></img>
       </div>
     </div>;
   };
   ```

   We also have to add `<FrontEnd />` inside of `main` so we can render our code

2. Use functional component to create the following design

   ```jsx
   const newsLetterStyles = {
     fontSize: "12px",
     padding: "10px",
     borderRadius: "5px",
     border: "0px",
     margin: "5px",
   };

   const buttonSubscribeStyles = {
     padding: "10px",
     borderRadius: "5px",
     border: "0px",
     margin: "5px",
     width: "20%",
     backgroundColor: "lightcoral",
     color: "white",
   };

   const NewsletterInput = () => (
     <input size="20" style={newsLetterStyles}></input>
   );

   const Newsletter = () => (
     <div className="subscribe-wrapper">
       <h1>SUBSCRIBE</h1>
       <p>Sign up with your email address to receive news and updates.</p>
       <form>
         <NewsletterInput />
         <NewsletterInput />
         <NewsletterInput />
         <br></br>
         <input
           type="submit"
           value="Subscribe"
           style={buttonSubscribeStyles}
         ></input>
       </form>
     </div>
   );
   ```

## Exercises: Level 3

1.  Use the given hexadecimal color generator in the example to create these random colors

    Inside of our div, we can put in 5 HexaColor component

    ```html
    <div>
        <Newsletter /><br></br>
        <HexaColor/>
        <HexaColor/>
        <HexaColor/>
        <HexaColor/>
        <HexaColor/>
        <HexaColor/>
      </div>
    ```

    And then, we can add one properties to HexaColor styling, and that is `backgroundColor`

    ```jsx
    const HexaColor = () => {
      const bgColor = hexaColor();
      const styles = {
        height: "100px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        fontFamily: "Montserrat",
        margin: "2px auto",
        borderRadius: "5px",
        width: "75%",
        backgroundColor: bgColor,
      };
      return (
        <div style={styles}>
          <h2>{bgColor}</h2>
        </div>
      );
    };
    ```

2.  Use functional component to design the following user card.
