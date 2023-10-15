/* eslint-disable react/prop-types */

import { Celebrity } from "./Celebrity";

export const CelebrityList = ({ list }) => {
  return (
    <div>
      {list.map((person) => (
        <Celebrity key={person.id} person={person} />
      ))}
    </div>
  );
};
