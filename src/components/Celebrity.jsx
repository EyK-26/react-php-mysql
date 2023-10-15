/* eslint-disable react/prop-types */

export const Celebrity = ({ person }) => {
  const getKeyByValue = (obj, value) =>
    Object.keys(obj).find((key) => obj[key] === value);

  return (
    <div>
      <h1>
        {getKeyByValue(person, person.name)}: {person.name}
      </h1>
      <p>
        {getKeyByValue(person, person.age)}: {person.age}
      </p>
      <p>
        {getKeyByValue(person, person.source_of_wealth)}:{" "}
        {person.source_of_wealth}
      </p>
      <p>
        {getKeyByValue(person, person.wealth)}: {person.wealth}
      </p>
      <p>
        {getKeyByValue(person, person.citizenship)}: {person.citizenship}
      </p>
      <p>
        {getKeyByValue(person, person.children)}:{" "}
        {person.children ?? "no children"}
      </p>
      <img src={person.image} alt={person.name} />
      <p>
        {getKeyByValue(person, person.bio)}: {person.bio}
      </p>
    </div>
  );
};
