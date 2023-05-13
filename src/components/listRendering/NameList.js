import React from 'react';
import Person from './Person';

function NameList() {
  const name = ['dhilip', 'kumar', 'pranav'];
  const persons = [
    {
      id: 1,
      name: 'dhilip',
      age: 55,
      skill: 'android',
    },
    {
      id: 2,
      name: 'kavin',
      age: 23,
      skill: 'abcd',
    },
    {
      id: 3,
      name: 'kaviya',
      age: 12,
      skill: 'singing',
    },
  ];

  //   key are not accessable by child comp
  const personList = persons.map((person, index) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;

  // //using idex as key
  // const NameList = name.map((names,index)=> <h2 key={index}>{index} {names}</h2>)
  // return <div>{NameList}</div>;
}

export default NameList;
