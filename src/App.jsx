
i// Vite + React + simple-react-cytoscapejs GitHub Pages-ready project
// This is a minimal single-file preview of the src/App.jsx component.
// In a real Vite project structure, place this as src/App.jsx and follow the included instructions.


import React from "react";
import CytoscapeComponent from "react-cytoscapejs";


const elements = [
{ data: { id: "Animal", label: "Animal" } },
{ data: { id: "Mammal", label: "Mammal" } },
{ data: { id: "Person", label: "Person" } },
{ data: { id: "Age", label: "Age" } },
{ data: { id: "ClassA", label: "Class A" } },
{ data: { id: "Student", label: "Student" } },
{ data: { id: "Colors", label: "Colors" } },
{ data: { id: "Red", label: "Red" } },


{ data: { id: "Animal_Mammal", source: "Animal", target: "Mammal", relation: "is_a" } },
{ data: { id: "Person_Age", source: "Person", target: "Age", relation: "has_attribute" } },
{ data: { id: "Student_Class", source: "Student", target: "ClassA", relation: "member_of" } },
{ data: { id: "Red_Colors", source: "Red", target: "Colors", relation: "element_of" } }
];


const stylesheet = [
{
selector: "node",
style: {
label: "data(label)",
"text-valign": "center",
"text-halign": "center",
"background-color": "#eee",
"border-color": "#666",
"border-width": 1,
shape: "round-rectangle",
padding: "6px"
}
},
{
selector: 'edge[relation = "is_a"]',
style: {
"line-style": "solid",
"line-color": "#333",
"target-arrow-shape": "triangle",
"target-arrow-color": "#333",
width: 2
}
},
{
selector: 'edge[relation = "has_attribute"]',
style: {
"line-style": "dashed",
"line-color": "#777",
"target-arrow-shape": "circle",
width: 2
}
},
{
selector: 'edge[relation = "member_of"]',
style: {
"line-style": "dotted",
"line-color": "#0a0",
width: 2
}
},
{
selector: 'edge[relation = "element_of"]',
style: {
"line-style": "solid",
"line-color": "#b00",
"target-arrow-shape": "diamond",
"target-arrow-color": "#b00",
width: 3
}
}
];


export default function App() {
return (
<div style={{ width: "100vw", height: "100vh" }}>
<CytoscapeComponent
elements={elements}
style={{ width: "100%", height: "100%" }}
stylesheet={stylesheet}
layout={{ name: "breadthfirst", directed: true, spacingFactor: 1.2 }}
/>
</div>
);
}
