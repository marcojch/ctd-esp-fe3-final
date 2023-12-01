import React from 'react'; 
import Card from '../Components/Card';
import { useCharContext } from '../Components/utils/global.context';   



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// REVISAR HOME

const Home = ({ dentists }) => {

  const { state } = useCharContext()


  return (
    <main className="dentist-grid">
      <h1>Home</h1>
      <div className='card-grid'>
      {state.list && state.list.map(dentist => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;