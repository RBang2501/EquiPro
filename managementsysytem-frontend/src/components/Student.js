import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function refreshPage() {
  window.location.reload(false);
}

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);
  const [currentStudentId, setCurrentStudentId] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };

    if (currentStudentId) {
      // Update an existing student
      updateStudent(currentStudentId, student);
    } else {
      // Add a new student
      fetch('http://localhost:8080/student/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      })
        .then(() => {
          console.log('New Student added');
          fetchAllStudents(); // Fetch all students after adding a new one to refresh the list
        })
        .catch((error) => {
          console.error('Error adding student:', error);
        });
    }
    // refreshPage();
  };

  const updateStudent = (studentId, updatedStudentData) => {
    fetch(`http://localhost:8080/student/update/${studentId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedStudentData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        fetchAllStudents(); // Fetch all students after updating to refresh the list
        setCurrentStudentId(null); // Reset currentStudentId after updating
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
    refreshPage();
  };

  const fetchAllStudents = () => {
    fetch('http://localhost:8080/student/getAll')
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  return( 
    <>
      
    </>
  );
}
