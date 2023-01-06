import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import "./style.css"
import SimpleCounter from './SimpleCounter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    {/* <Counter/> */}
 <SimpleCounter></SimpleCounter>
 </>
);

