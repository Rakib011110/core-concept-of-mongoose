# core-concept-of-mongoose

https://github.com/wclr/ts-node-dev
https://blog.logrocket.com/linting-typescript-eslint-prettier/

---

Sure, here is the information on the listed topics in both basic English and বাংলা চলিত ভাষা (Bengali Colloquial Language):

### 1. Introduction to Mongoose

**English:**  
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It helps in managing relationships between data, provides schema validation, and is used to translate between objects in code and MongoDB documents.

**বাংলা:**  
Mongoose হল MongoDB এবং Node.js এর জন্য একটি Object Data Modeling (ODM) লাইব্রেরি। এটি ডেটার মধ্যে সম্পর্ক পরিচালনা করতে, স্কিমা ভ্যালিডেশন প্রদান করতে এবং কোডের অবজেক্ট এবং MongoDB ডকুমেন্টগুলির মধ্যে অনুবাদ করতে ব্যবহৃত হয়।

### 2. Installing express, mongoose, typescript, dotenv, cors, setup

**English:**  
To install these packages, use the following commands:

```bash
npm install express mongoose typescript dotenv cors
```

Then, set up your project by creating necessary configuration files and initializing TypeScript.

**বাংলা:**  
এই প্যাকেজগুলি ইনস্টল করতে নিম্নলিখিত কমান্ডগুলি ব্যবহার করুন:

```bash
npm install express mongoose typescript dotenv cors
```

তারপর প্রয়োজনীয় কনফিগারেশন ফাইলগুলি তৈরি করে এবং টাইপস্ক্রিপ্ট ইনিশিয়ালাইজ করে আপনার প্রকল্প সেট আপ করুন।

### 3. Installing eslint, refactor code, fix errors using command, setup

**English:**  
Install ESLint for code linting:

```bash
npm install eslint --save-dev
```

Initialize ESLint and configure it. Refactor your code and fix any errors using ESLint commands.

**বাংলা:**  
কোড লিন্টিংয়ের জন্য ESLint ইনস্টল করুন:

```bash
npm install eslint --save-dev
```

ESLint ইনিশিয়ালাইজ এবং কনফিগার করুন। আপনার কোডটি রিফ্যাক্টর করুন এবং ESLint কমান্ডগুলি ব্যবহার করে কোনো ত্রুটি ঠিক করুন।

### 4. Install prettier, ts-node-dev, fix formatting issues, setup

**English:**  
Install Prettier and ts-node-dev:

```bash
npm install prettier ts-node-dev --save-dev
```

Configure Prettier for code formatting and use ts-node-dev for development. Fix any formatting issues using Prettier commands.

**বাংলা:**  
Prettier এবং ts-node-dev ইনস্টল করুন:

```bash
npm install prettier ts-node-dev --save-dev
```

কোড ফরম্যাটিংয়ের জন্য Prettier কনফিগার করুন এবং ডেভেলপমেন্টের জন্য ts-node-dev ব্যবহার করুন। Prettier কমান্ডগুলি ব্যবহার করে যেকোনো ফরম্যাটিং সমস্যা ঠিক করুন।

### 5. Software design pattern, mvc vs modular, create an interface

**English:**  
MVC (Model-View-Controller) and Modular are software design patterns. MVC separates the application into three components: Model, View, and Controller. Modular design breaks down an application into smaller, manageable modules. Creating an interface in TypeScript helps in defining the structure of an object.

**বাংলা:**  
MVC (মডেল-ভিউ-কন্ট্রোলার) এবং মডুলার হল সফটওয়্যার ডিজাইন প্যাটার্ন। MVC অ্যাপ্লিকেশনকে তিনটি অংশে বিভক্ত করে: মডেল, ভিউ এবং কন্ট্রোলার। মডুলার ডিজাইন একটি অ্যাপ্লিকেশনকে ছোট, পরিচালনাযোগ্য মডিউলে ভেঙে দেয়। টাইপস্ক্রিপ্টে একটি ইন্টারফেস তৈরি করা একটি অবজেক্টের কাঠামো নির্ধারণ করতে সাহায্য করে।

### 6. Create a schema for a student

**English:**  
Define a schema for a student using Mongoose:

```javascript
const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
});
const Student = mongoose.model('Student', studentSchema);
```

**বাংলা:**  
Mongoose ব্যবহার করে একজন ছাত্রের জন্য একটি স্কিমা সংজ্ঞায়িত করুন:

```javascript
const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
});
const Student = mongoose.model('Student', studentSchema);
```

### 7. Refactor your schema

**English:**  
Refactor your student schema to include more details and validations:

```javascript
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 0 },
  grade: { type: String, required: true },
});
```

**বাংলা:**  
আপনার ছাত্রের স্কিমাটি আরও বিস্তারিত এবং ভ্যালিডেশন সহ রিফ্যাক্টর করুন:

```javascript
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 0 },
  grade: { type: String, required: true },
});
```

### 8. Create route, service, and controller

**English:**  
Set up routes, services, and controllers to handle API requests.

**Route:**

```javascript
const express = require('express');
const router = express.Router();
const studentController = require('./controllers/studentController');

router.post('/students', studentController.createStudent);

module.exports = router;
```

**Service:**

```javascript
const Student = require('../models/studentModel');

const createStudent = async (studentData) => {
  const student = new Student(studentData);
  await student.save();
  return student;
};

module.exports = { createStudent };
```

**Controller:**

```javascript
const studentService = require('../services/studentService');

const createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { createStudent };
```

**বাংলা:**  
API অনুরোধগুলি পরিচালনা করতে রাউট, সার্ভিস এবং কন্ট্রোলার সেট আপ করুন।

**রাউট:**

```javascript
const express = require('express');
const router = express.Router();
const studentController = require('./controllers/studentController');

router.post('/students', studentController.createStudent);

module.exports = router;
```

**সার্ভিস:**

```javascript
const Student = require('../models/studentModel');

const createStudent = async (studentData) => {
  const student = new Student(studentData);
  await student.save();
  return student;
};

module.exports = { createStudent };
```

**কন্ট্রোলার:**

```javascript
const studentService = require('../services/studentService');

const createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { createStudent };
```

### 9. Insert a student data into MongoDB

**English:**  
Use the created API endpoint to insert a student:

```bash
curl -X POST http://localhost:3000/students -H "Content-Type: application/json" -d '{"name": "John Doe", "age": 20, "grade": "A"}'
```

**বাংলা:**  
একটি ছাত্র ডেটা ইনসার্ট করতে তৈরি করা API এন্ডপয়েন্টটি ব্যবহার করুন:

```bash
curl -X POST http://localhost:3000/students -H "Content-Type: application/json" -d '{"name": "John Doe", "age": 20, "grade": "A"}'
```

### 10. Create get student route

**English:**  
Set up a GET route to fetch student data:

```javascript
router.get('/students/:id', studentController.getStudent);

const getStudent = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    res.status(200).send(student);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getStudentById = async (id) => {
  return await Student.findById(id);
};

module.exports = { getStudent, getStudentById };
```

**বাংলা:**  
ছাত্রের ডেটা আনার জন্য একটি GET রাউট সেট আপ করুন:

```javascript
router.get('/students/:id', studentController.getStudent);

const getStudent = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    res.status(200).send(student);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getStudentById = async (id) => {
  return await Student.findById(id);
};

module.exports = { getStudent, getStudentById };
```

### 11. Little explain in model > controller > services > router

**English:**

- **Model:** Defines the structure of the data.
- **Controller:** Handles requests and responses.
- **Service:** Contains the business logic.
- **Router:** Defines the endpoints and maps them to controller functions.

**বাংলা:**

- **মডেল:** ডেটার কাঠামো নির্ধারণ করে।
- **কন্ট্রোলার:** অনুরোধ এবং প্রতিক্রিয়া

পরিচালনা করে।

- **সার্ভিস:** ব্যবসায়িক লজিক ধারণ করে।
- **রাউটার:** এন্ডপয়েন্টগুলি সংজ্ঞায়িত করে এবং সেগুলি কন্ট্রোলার ফাংশনের সাথে ম্যাপ করে।
