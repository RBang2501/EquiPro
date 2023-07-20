package com.arjuncodes.studentsystem.service;

import com.arjuncodes.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(int id); // New method to retrieve a student by ID

    void deleteStudent(int id); // New method to delete a student by ID
}
