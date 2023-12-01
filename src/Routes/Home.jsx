import React from 'react'; 
import Card from '../Components/Card';
import { useCharContext } from '../Components/utils/global.context';   

const Home = ({users}) => {
  const { state } = useCharContext()

  return (
    <div className='card-grid'>
      <h1>Home</h1>
      {state.list && state.list.map(dentist => (
          <Card
            users={users}
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
  );
}

export default Home
