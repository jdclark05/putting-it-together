import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center pt-3" >
        <div class="d-flex flex-column">
          <PersonCard  className="text-center" infoCard={formatCard(person1)}/>
          <PersonCard  className="text-center" infoCard={formatCard(person2)}/>
          <PersonCard  className="text-center" infoCard={formatCard(person3)}/>
          <PersonCard  className="text-center" infoCard={formatCard(person4)}/>
        </div>
      </div>
    </div>
  );
}

const formatCard = (person) => {
  return [person.lastName, person.firstName, person.age, person.hair];
}

const person1 = {
  lastName: 'Doe',
  firstName: 'Jane',
  age: '45',
  hair: 'Black'
};

const person2 = {
  lastName: 'Smith',
  firstName: 'John',
  age: '88',
  hair: 'Brown'
};

const person3 = {
  lastName: 'Fillmore',
  firstName: 'Millard',
  age: '50',
  hair: 'Brown'
};

const person4 = {
  lastName: 'Smith',
  firstName: 'Maria',
  age: '62',
  hair: 'Brown'
};

export default App;
