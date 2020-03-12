const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const PORT = 3000;
const bodyParser = require('body-parser')

let students = [
    {
        id: 5835512119,
        name: "jesadakorn",
        surname: "kirtnu",
        Major: "CoE",
        GPA: "10.00"
    },
    {
        id: 5835512200,
        name: "helloworld",
        surname: "itsme",
        Major: "CoE",
        GPA: "4.00"
    }
];

router.route('/students')
    .get((req, res) => {
        res.json(students)
    })
    .post((req, res) => {
        let student = {};
        student.id = students[students.length - 1].id + 1;
        student.name = req.body.name;
        student.surname = req.body.surname;
        student.Major = req.body.Major;
        student.GPA = req.body.GPA;
        students.push(student);
        res.json({ message: "student created" });
    })

router.route('/students/:student_id')
    .get((req, res) => {
        const id = req.params.student_id
        const index = students.findIndex(student => student.id === +id)
        res.json(students[index])
    })
    .put((req, res) => {
        const id = req.params.student_id
        const index = students.findIndex(student => (student.id === +id))
        students[index].name = req.body.name;
        students[index].surname = req.body.surname;
        students[index].Major = req.body.Major;
        students[index].GPA = req.body.GPA;
        res.json({ message: 'student updated!' + req.params.student_id });
    })
    .delete((req, res) => {
        // delete     bears[req.params.bear_id]
        const id = req.params.student_id
        const index = students.findIndex(student => student.id === +id)
        students.splice(index, 1)
        res.json({ message: 'student deleted: ' + req.params.student_id });
    })

app.use(cors());
app.use('/api', bodyParser.json(), router)
app.listen(PORT, () => console.log(`students server running on ${PORT}`))