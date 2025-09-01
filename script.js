const element1 = React.createElement("h1",{id:"heading1",className:"heading",style:{color:"white",backgroundColor:"blue"}},"Hello Coder Army");
const element2 = React.createElement("h2",{id:"heading2",className:"heading",style:{color:"white",backgroundColor:"red"}},"Kese ho aap log");
const div = React.createElement("div",{},[element1,element2])
const root = document.getElementById('root'); // Our html root div
const Reactroot = ReactDOM.createRoot(root);  // Our root div into reactRoot

// Render element in reactRoot
//Reactroot.render(element1);
//Reactroot.render(element2); // this last elemnt will render only

// render div (Problem solved of only one element rendering):

Reactroot.render(div); // single element render at a time
