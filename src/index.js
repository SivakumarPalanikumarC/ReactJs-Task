import React from 'react';
import ReactDOM from 'react-dom';
import One from './One';
function Layout()
{
  return(
  <One Channel={"kumar"}/>
   );
}
ReactDOM.render(<Layout/>,document.getElementById('root'));