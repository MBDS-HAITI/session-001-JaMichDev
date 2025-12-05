import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip
} from '@mui/material';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Récupération de la liste depuis l'API
    fetch('http://localhost:8010/api/courses')
      .then(response => { 
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        // Trier la liste par name
        const sortedCourses = data.sort((a, b) => a.name.localeCompare(b.name));
        setCourses(sortedCourses);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Courses List
      </Typography>
      <Chip 
        label={`Total Courses: ${courses.length}`} 
        color="secondary" 
        sx={{ marginBottom: 2 }}
      />
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="courses table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#9c27b0' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Course Name</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Code</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Unique ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map(course => (
              <TableRow
                key={course._id}
                sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' }, '&:hover': { backgroundColor: '#f3e5f5' } }}
              >
                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                  {course.name}
                </TableCell>
                <TableCell align="center">{course.code}</TableCell>
                <TableCell align="center">{course.unique_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export { CourseList };
