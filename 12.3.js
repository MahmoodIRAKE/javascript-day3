const school = {
    teachers: [{
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [{
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

function findPerson(type, id) {
    return school[type].find(item => item.id === id);
}
console.log(findPerson('teachers', 1));
console.log(findPerson('students', 10));

function assignStudent(id, subject) {
    let teacher = school['teachers'].find(item => item.subjects.includes(subject) && item.capacityLeft > 0);
    if (!teacher) {
        console.log("Sorry, no available teachers left");
        return;
    }
    teacher.students.push(id);
    console.log(school);
}
assignStudent(11, 'history');

function assignTeachersSubject(id, subject) {
    let teacher = school['teachers'].find(item => item.id === id && !item.subjects.includes(subject));
    if (!teacher) {
        console.log("Sorry, already have the subject");
        return;
    }
    teacher.subjects.push(subject);
    console.log(school);
}
assignTeachersSubject(1, 'history');
assignTeachersSubject(2, 'history');

function myFunc(students) {
    students.forEach(item => {
        assignStudent(item);
    });
}