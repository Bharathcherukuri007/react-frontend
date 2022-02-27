import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task=()=>{

const [table,setTable]=useState();
axios
.get('https://reqres.in/api/unknown')
.then(response => setTable(response.data.current));


}
return(
    <div>
        <h1>hello</h1>
    </div>
)

export default Task;