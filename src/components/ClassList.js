import React from 'react'

export default function ClassList() {
  const ClassList=({classes,onUpdateClass,onDeleteClass})=>{
    return (
        <div>
            <h2>Class List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>School ID</th>
                        <th>Students</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map(cls=>(<tr key={cls.id}>
                        <td>{cls.Id}</td>
                        <td>{cls.schoolId}</td>
                        <td>{cls.Students}</td>
                        <td>
                            <button onClick={()=>onUpdateClass(cls)}>Update</button>
                            <button onClick={()=>onDeleteClass(cls.Id)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
  };
    
}
