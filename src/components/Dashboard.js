import React,{useState} from 'react';
import ClassForm from './ClassForm';
import ClassList from './ClassList';

export default function Dashboard() {
const Dashboard=()=>{
    const [classes, setClasses]=useState([]);
    const handleCreateClass=(newClass)=>{
        setClasses([...classes,newClass]);
    };
const handleUpdateClass=(updatedClassData)=>{
    const updatedClass=classes.map(cls=>
        cls.id===updatedClassData.id ?updatedClassData: cls);
        setClasses(updatedClass);
};
const handleDeleteClass=(classId)=>{
    const updatedClasses=classes.filter(cls.id!==classId);
    setClasses(updatedClasses);
};
    return (
    <div>
        <h1>Class Dashboard</h1>
        <ClassForm onCreateClass={handleCreateClass}/>
        <ClassList classes={classes}
        onUpdateClass={handleUpdateClass()}
        onDeleteClass={handleDeleteClass()}/>
    </div>
  )
}
}