import React from 'react';

const profiles = [
  {name : "taro", age : 10},
  {name : "hanako", age : 20},
  {name : "hana"},
]

const App = () => {
  return (
    <div>
      {profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })}
    </div>
  );
}

const User = (props) => {
return <div>I am {props.name},and {props.age} years old</div>
}

User.defaultProps = {
  age:2
}

export default App;
