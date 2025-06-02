import FlexContainer from "./FlexContainer";
import { studentsMock } from "./mockStudents";
import Student from "./Student";

function App() {
  return (
    <>
      <h1>Ola</h1>
      <FlexContainer>
        {studentsMock.map((student) => {
          return (
            <Student
              key={student.id}
              name={student.nome}
              age={student.idade}
              email={student.email}
              course={student.curso}
            ></Student>
          );
        })}
      </FlexContainer>
      {/* <Student
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
      ></Student> */}
    </>
  );
}

export default App;
