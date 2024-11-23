
    const students = [
        { name: "Mehmood", age: 20, grade: 90 },
        { name: "Danial", age: 22, grade: 78 },
        { name: "Usama", age: 19, grade: 88 },
        { name: "Shazaib", age: 21, grade: 65 },
        { name: "Amad", age: 20, grade: 85 }
    ];
    function getTopStudents(students) {
        return students.filter(student => student.grade >= 85);
    }
    function averageGrade(students) {
        const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
        return totalGrades / students.length;
    }
    const topStudents = getTopStudents(students);
    const avgGrade = averageGrade(students);
    
    console.log('Top Students:', topStudents);
    console.log('Average Grade:', avgGrade);