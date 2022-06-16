import React, { useMemo } from "react";

export function FilteredList (){
    const listOfPeople = [
            {
              id: 1,
              name: 'Manfredi',
              age: 31,
            },
            {
              id: 2,
              name: 'Matteo',
              age: 13,
            },
            {
              id: 3,
              name: 'Sergio',
              age: 35,
            },
            {
              id: 4,
              name: 'Ramona',
              age: 28,
            },
            {
              id: 5,
              name: 'Giulia',
              age: 34,
            }
          ];
        //   const patata = useMemo(() => FilteredList(), [])
        // DA FIXARE

            return (
                listOfPeople.map(filteredPerson => filteredPerson.age > 18 && <li>{filteredPerson.name}</li>)
            )


        }