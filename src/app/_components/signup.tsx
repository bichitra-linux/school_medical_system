import React, { useState } from 'react';

interface Student {
  name: string;
  email: string;
  schoolname: string;
  schoolregistrationnum: string;
  level: string;
  gender: string;
  dateofbirth: string;
  address: string;
  phone: string;
  faculty: string;
  facultytype: string;
  department: string;
  course: string;
  batch: string;
}

const Signup: React.FC = () => {
  const [student, setStudent] = useState<Student>({ name: '', email: '', schoolregistrationnum: '', level:'', gender:'', dateofbirth:'', address:'', phone:'', faculty:'', facultytype:'', department:'', course: '', batch: '', schoolname: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the student data to your server
    console.log(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={student.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={student.email} onChange={handleChange} required />
      </label>
      
        <label>
            Gender:
            <input type="text" name="gender" value={student.gender} onChange={handleChange} required />
        </label>
        <label>
            Date of Birth:
            <input type="date" name="dateofbirth" value={student.dateofbirth} onChange={handleChange} required />
        </label>
        <label>
            Address:
            <input type="text" name="address" value={student.address} onChange={handleChange} required />
        </label>
        <label>
            Phone:
            <input type="number" name="phone" value={student.phone} onChange={handleChange} required />
        </label>
        <label>
            School/College Name:
            <input type="text" name="schoolname" value={student.schoolname} onChange={handleChange} required />
        </label>
        <label>
        School/College Registration Number:
        <input type="number" name="number" value={student.schoolregistrationnum} onChange={handleChange} required />
      </label>
        <label>
            Level:
            <input type="text" name="level" value={student.level} onChange={handleChange} required />
        </label>
        <label>
            Faculty:
            <input type="text" name="faculty" value={student.faculty} onChange={handleChange} required />
        </label>
        <label>
            Faculty Type:
            <input type="text" name="facultytype" value={student.facultytype} onChange={handleChange} required />
        </label>
        <label>
            Department:
            <input type="text" name="department" value={student.department} onChange={handleChange} required />
        </label>
        <label>
            Course:
            <input type="text" name="course" value={student.course} onChange={handleChange} required />
        </label>
        <label>
            Batch:
            <input type="text" name="batch" value={student.batch} onChange={handleChange} required />
        </label>
        
        <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Signup;