import React from "react";
import "./styles.css";


function highOrder(WrappedComponent) {
return function enhancedComponent(props) {
const { test } = props;
const upperText = test.toUpperCase();
return <WrappedComponent upperText={upperText} />;
};
}


const WrappedText = (props) => {
return <div>{props.upperText}</div>;
};


const HighOrderComponent = highOrder(WrappedText);


export default function App() {
return (
<div className="App">
<HighOrderComponent test="Show in Upper case" />
</div>
)
}
