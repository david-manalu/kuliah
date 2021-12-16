function testObejct() {
    var student = {
        name : "David",
        age : 19,
        major : "Informatics",
        semester : 1
    }
    for (const x in student) {
        if (Object.hasOwnProperty.call(student, x)) {
            const test = student[x];
            console.log(test);
        }
    }
}

testObejct();