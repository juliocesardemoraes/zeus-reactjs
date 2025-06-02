import Student from "./Student";

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
