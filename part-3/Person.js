const Person = ({ name = "Lorem Ipsum", age = 27, hobbies = ["none"] }) => {
  const isAbove18 = age >= 18 ? true : false;

  return (
    <div>
      {isAbove18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
      <p>Learn some information about this person.</p>
      <ul>
        <li>Name: {name.length > 8 ? name.substring(0, 6) : name}</li>
        <li>Age: {age}</li>
      </ul>
      <p>Hobbies</p>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
