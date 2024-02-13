import React,{useState} from 'react';
export default function ClassForm() {
    const ClassForm=({onCreateClass})=>{
        const[id,setId]=useState('');
        const[schoolId,setSchoolId]=useState('');
        const[students,setStudents]=useState('');

        const handleSubmit=(e)=>{
            e.preventDefault();
            const newClass={id,schoolId,students};
            onCreateClass(newClass);
            setId('');
            setSchoolId('');
            setStudents('');
        };
    }
  return (
    <div>
        <h2>Add New Class</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='ID'
            value={id}
            onChange={(e)=>setId(e.target.value)}/>

            <input type='text'
            placeholder='School Id'
            value={schoolId}
            onChange={(e)=> setschoolId(e.target.value)}/>

<input type='text'
            placeholder='Students'
            value={students}
            onChange={(e)=> setStudents(e.target.value)}/>

<button type='submit'>Add Class</button>
        </form>
    </div>
  )
}
