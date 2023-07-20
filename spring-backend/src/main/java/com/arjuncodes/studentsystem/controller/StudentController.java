package com.arjuncodes.studentsystem.controller;

import com.arjuncodes.studentsystem.model.Student;
import com.arjuncodes.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> list() {
        return studentService.getAllStudents();
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable int id, @RequestBody Student updatedStudent) {
        Student existingStudent = studentService.getStudentById(id);

        if (existingStudent == null) {
            return "Student not found";
        }

        existingStudent.setName(updatedStudent.getName());
        existingStudent.setAddress(updatedStudent.getAddress());

        studentService.saveStudent(existingStudent);

        return "Student updated successfully";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        Student existingStudent = studentService.getStudentById(id);

        if (existingStudent == null) {
            return "Student not found";
        }

        studentService.deleteStudent(id);

        return "Student deleted successfully";
    }
}
