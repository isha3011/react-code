/* <div id=parent>
      <div id=child>
        <h1>Hello World!</h1>
        <h2>Namaste React</h2>
      </div>
    </div>


*/

const parent = React.createElement("div", {id : "parent"},
  [React.createElement("div", {id : "child1"}, [
    React.createElement("h1", {}, "Hello world!"), 
    React.createElement("h2", {}, "Namaste React!")]
  ), React.createElement("div", {id : "child2"}, [
    React.createElement("h1", {}, "This is h1 tag!"), 
    React.createElement("h2", {}, "This is h2 tag!")])]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//JSX

