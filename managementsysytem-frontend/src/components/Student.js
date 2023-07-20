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
    // refreshPage();
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

  const handleEdit = (studentId) => {
    const studentToEdit = students.find((student) => student.id === studentId);
    if (studentToEdit) {
      setName(studentToEdit.name);
      setAddress(studentToEdit.address);
      setCurrentStudentId(studentId);
    }
  };

  const deleteStudent = (studentId) => {
    fetch(`http://localhost:8080/student/delete/${studentId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        fetchAllStudents(); // Fetch all students after deletion to refresh the list
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
      });
  };
  const handleDelete = (studentId) => {
    // if (window.confirm('Are you sure you want to delete this student?')) {
    // }
    deleteStudent(studentId);
    refreshPage();
  };

  const handleAddNew = () => {
    setName('');
    setAddress('');
    setCurrentStudentId(null);
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  return( 
    <>
      <div className='bg-dark py-0 my-0'>
      <Container className='mt-3 pt-3'>
        <Paper elevation={3} style={paperStyle}>
          <h3 className='fw-bold' style={{ color: 'black' }}>
            <u>{currentStudentId ? 'Edit Equipment' : 'Add Equipment'}</u>
          </h3>

          <form noValidate autoComplete="off">
            <TextField
              className='my-2'
              id="outlined-basic"
              label="Equipment Name"
              variant="outlined"
              size="small"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              className='my-2'
              id="outlined-basic"
              label="Equipment Count"
              variant="outlined"
              size="small"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Button className='mt-2' variant="contained" color='primary' onClick={handleClick}>
              {currentStudentId ? 'Update' : 'Submit'}
            </Button>
            {currentStudentId && (
              <Button onClick={handleAddNew}>
                Cancel
              </Button>
            )}
          </form>
        </Paper>


        <h3 className='text-center text-white fw-bold'>Equipments in Database</h3>
        <Paper elevation={3} style={paperStyle}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Count</TableCell>
                  <TableCell align="center">Edit</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow
                    key={student.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{student.id}</TableCell>
                    <TableCell align="center">{student.name}</TableCell>
                    <TableCell align="center">{student.address}</TableCell>
                    <TableCell align="center"><Button variant="contained" onClick={() => handleEdit(student.id)}><EditIcon/></Button></TableCell>
                    <TableCell align="center"><Button variant="contained"color="secondary"onClick={() => handleDelete(student.id)}><DeleteIcon/></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>;
      </Container>


    </div>
    </>
  );
}
