
/*

*/


// Input params - tag, attribute, text

const parent = React.createElement('div', {id: 'parent'}, 
                React.createElement('div', {id: 'child'}, 
                React.createElement('h1', {}, "h1 Tag")))
const heading = React.createElement(
    'h1',
    {id: 'heading'},
    "Hello World from React"
);

console.log('hading', parent); // object 

const root = ReactDOM.createRoot(document.getElementById("root"));

// render method takes heading object and create h1 tag and putting on DOM
root.render(parent)