import Student from "./Student";

const createStudent = (name, age, email, course) => {
  return name;
};

createStudent(name);

function App() {
  return (
    <>
      <h1>Ola</h1>
      <Student
        name={"Bruno"}
        age={22}
        email={"bruno@gmail.com"}
        course="Agro"
      ></Student>
      <Student
        name={"Natalia"}
        age={21}
        email={"natalia@gmail.com"}
        course="Sistemas de informação"
      ></Student>
    </>
  );
}

export default App;
