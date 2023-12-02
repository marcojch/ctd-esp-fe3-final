import React from 'react'; 
import Card from '../Components/Card';
import { useCharContext } from '../Components/utils/global.context';   

const Home = () => {
  const { state } = useCharContext()
  return (
    <div>
     <h1>Home</h1>
      {state.list && state.list.map(users => (
         
          <Card
            users={users}
            key={users.id}
            id={users.id}
            name={users.name}
            username={users.username}
          />
        ))}
      </div>
  );
}

export default Home
