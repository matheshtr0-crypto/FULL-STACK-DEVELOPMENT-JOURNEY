import { useState,useEffect } from "react";
import{Routes,Route,Link} from "react-router-dom"

function Students() {
     const [students, setstudents] = useState([])
     const [id, setId] = useState("")
     const [name, setName] = useState("")
     const [age, setAge] = useState("")
     const [course, setCourse] = useState("")
     const [edit, setEdit] = useState(false)  


const getstudents = ()=>{
    fetch("http://localhost:3000/students")
    .then(res=>res.json())
    .then(data=>setstudents(data))
}; 

useEffect(()=>{
    getstudents()
},[])

const addstudent = ()=>{
    fetch("http://localhost:3000/students",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({id,name,age,course})
    })
    .then(res=>res.json())
    .then(()=>{getstudents(),setId(""),setName(""),setAge(""),setCourse("")})
};

const editStudent = (student)=>{
    setId(student.id)
    setName(student.name)
    setAge(student.age)
    setCourse(student.course) 
    setEdit(true)   
}

const updateStudent = ()=>{
    fetch(`http://localhost:3000/students/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age,course})
    })
    .then(res=>res.json())
    .then(()=>{getstudents(),setId(""),setName(""),setAge(""),setCourse("")})
    setEdit(false)
};

const deleteStudent = (id) => {
    fetch(`http://localhost:3000/students/${id}`,{
        method:"DELETE"
    })
        .then(res=>res.json())
        .then(()=>{getstudents()})
}

return(
    <>
    <h1>STUDENT MANAGER</h1>
    <input placeholder="student id" value={id} onChange={(e)=>setId(e.target.value)} />
    <input placeholder="student name" value={name} onChange={(e)=>setName(e.target.value)} />
    <input placeholder="student age" value={age} onChange={(e)=>setAge(e.target.value)} />
    <input placeholder="student course" value={course} onChange={(e)=>setCourse(e.target.value)} />
    {edit ? (
        <button onClick={updateStudent}>update Student</button>
    ):( 
        <button onClick={addstudent}>Add student</button>
    )}
    <section>
        {students.map((student)=>(
            <article key={student.id}>
                <h2>{student.name}</h2>
                <p>Age: {student.age}</p>
                <p>Course: {student.course}</p>
                <button onClick={()=>editStudent(student)}>Edit</button>
                <button onClick={()=>deleteStudent(student.id)}>Delete</button>
            </article>
         ))}
    </section>
    </>
) 

}

function Home() {

    return (
        
        <div>
             <h1 className="mt-[20px]">🎓 STUDENT MANAGER</h1>
             <p className="mt-[20px]">Manage Your Students</p>
             <Link to="/students">View Students</Link>
        </div>
      );
}

function App() {

    return (

        <>
         <nav className="flex gap-5">
              <Link to="/">Home</Link>
              <Link to="/students">Students</Link>
        </nav>
        <Routes>
          <Route path="/"element={<Home />}/>
          <Route path="/students"element={<Students />}/>
        </Routes>
      </>
    );
}

export default App
