# core-concept-of-mongoose

### TypeScript Interview Questions

<details>
<summary>What is TypeScript and how is it different from JavaScript?</summary>  
</br>
**English:** TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static types, which help in detecting errors at compile time, making the code more robust and maintainable.

**বাংলা:** TypeScript হলো JavaScript এর একটি টাইপযুক্ত superset যা সাধারণ JavaScript এ কম্পাইল করে। এটি স্থির টাইপ যোগ করে, যা কম্পাইল সময়ে ত্রুটি সনাক্ত করতে সাহায্য করে, ফলে কোডটি আরও শক্তিশালী এবং রক্ষণাবেক্ষণযোগ্য হয়।

</details>

<details>
<summary>What are interfaces in TypeScript?</summary>  
</br>
**English:** Interfaces in TypeScript are used to define the structure of an object. They specify what properties and methods an object should have.

**বাংলা:** TypeScript এ ইন্টারফেসগুলি একটি অবজেক্টের গঠন সংজ্ঞায়িত করতে ব্যবহৃত হয়। তারা কোন কোন প্রপার্টি এবং মেথড একটি অবজেক্টে থাকা উচিত তা নির্দিষ্ট করে।

</details>

<details>
<summary>How does TypeScript support classes and inheritance?</summary>  
</br>
**English:** TypeScript supports classes and inheritance similar to other object-oriented languages. You can define classes with properties and methods, and use the `extends` keyword to create a subclass that inherits from a parent class.

**বাংলা:** TypeScript অন্যান্য অবজেক্ট-অরিয়েন্টেড ভাষার মত class এবং inheritance সমর্থন করে। আপনি প্রোপার্টি এবং মেথড সহ ক্লাস define করতে পারেন, এবং `extends` কীওয়ার্ড ব্যবহার করে একটি সাবক্লাস তৈরি করতে পারেন যা প্যারেন্ট ক্লাস থেকে (inherits) উত্তরাধিকারিতা পায়।

</details>

<details>
<summary>What are generics in TypeScript?</summary>  
</br>
**English:** Generics in TypeScript allow you to create reusable components that can work with any data type. They provide a way to make a component more flexible and type-safe.

**বাংলা:** TypeScript এ জেনেরিক্স আপনাকে পুনঃব্যবহারযোগ্য কম্পোনেন্ট তৈরি করতে দেয় যা যেকোন ডেটা টাইপের সাথে কাজ করতে পারে। তারা একটি কম্পোনেন্টকে আরও flexible এবং টাইপ-নিরাপদ করার উপায় প্রদান করে।

</details>

<details>
<summary>How do you handle asynchronous operations in TypeScript?</summary>  
</br>
**English:** Asynchronous operations in TypeScript can be handled using promises, async/await syntax, or using libraries like RxJS for more complex scenarios.

**বাংলা:** TypeScript এ অ্যাসিনক্রোনাস অপারেশনগুলি প্রমিজ, async/await সিনট্যাক্স ব্যবহার করে বা আরও জটিল পরিস্থিতির জন্য RxJS এর মত লাইব্রেরি ব্যবহার করে পরিচালনা করা যায়।

</details>

### Mongoose Interview Questions

<details>
<summary>What is Mongoose and why do we use it?</summary>  
</br>
**English:** Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your data, making it easier to interact with MongoDB.

**বাংলা:** Mongoose হলো MongoDB এবং Node.js এর জন্য একটি Object Data Modeling (ODM) লাইব্রেরি। এটি আপনার ডেটা মডেল করার জন্য একটি স্কিমা-ভিত্তিক সমাধান প্রদান করে, যা MongoDB এর সাথে ইন্টারঅ্যাক্ট করা সহজ করে তোলে।

</details>

<details>
<summary>How do you define a schema in Mongoose?</summary>  
</br>
**English:** A schema in Mongoose is defined using the `Schema` constructor. It specifies the structure of the documents in a MongoDB collection, including fields and their types.

**বাংলা:** Mongoose এ একটি স্কিমা `Schema` কনস্ট্রাক্টর ব্যবহার করে সংজ্ঞায়িত করা হয়। এটি MongoDB কালেকশনের ডকুমেন্টগুলির গঠন নির্দিষ্ট করে, যার মধ্যে ফিল্ড এবং তাদের টাইপ অন্তর্ভুক্ত থাকে।

</details>

<details>
<summary>What are virtual properties in Mongoose?</summary>  
</br>
**English:** Virtual properties are not stored in the MongoDB database. They are defined on the Mongoose schema and can be used to compute values on the fly when a document is retrieved.

**বাংলা:** ভার্চুয়াল প্রপার্টিগুলি MongoDB ডাটাবেসে সংরক্ষিত হয় না। এগুলি Mongoose স্কিমায় সংজ্ঞায়িত করা হয় এবং যখন কোনও ডকুমেন্ট উদ্ধার করা হয় তখন চলার সময় মান গণনা করতে ব্যবহার করা যেতে পারে।

</details>

<details>
<summary>How do you handle relationships between collections in Mongoose?</summary>  
</br>
**English:** Relationships between collections in Mongoose can be handled using references (ObjectId) or embedding documents. References allow you to create a link between documents in different collections, while embedding documents store related documents inside a single document.

**বাংলা:** Mongoose এ কালেকশনগুলির মধ্যে সম্পর্কগুলি রেফারেন্স (ObjectId) বা ডকুমেন্ট এমবেডিং ব্যবহার করে পরিচালনা করা যায়। রেফারেন্স আপনাকে বিভিন্ন কালেকশনের ডকুমেন্টগুলির মধ্যে লিঙ্ক তৈরি করতে দেয়, যখন ডকুমেন্ট এমবেডিং সম্পর্কিত ডকুমেন্টগুলিকে একটি একক ডকুমেন্টের মধ্যে সংরক্ষণ করে।

</details>

<details>
<summary>How do you perform validation in Mongoose?</summary>  
</br>
**English:** Validation in Mongoose is performed by defining validation rules in the schema. Mongoose provides several built-in validators, and you can also create custom validation logic.

**বাংলা:** Mongoose এ ভ্যালিডেশন স্কিমায় ভ্যালিডেশন নিয়ম সংজ্ঞায়িত করে সম্পাদিত হয়। Mongoose কয়েকটি বিল্ট-ইন ভ্যালিডেটর প্রদান করে, এবং আপনি কাস্টম ভ্যালিডেশন লজিকও তৈরি করতে পারেন।

</details>

### 1. Introduction To Mongoose

**English:**  
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data.

**বাংলা:**  
Mongoose হলো MongoDB এবং Node.js এর জন্য একটি Object Data Modeling (ODM) লাইব্রেরি। এটি আপনার অ্যাপ্লিকেশনের ডেটা মডেল করতে একটি সহজ এবং স্কিমা-ভিত্তিক সমাধান প্রদান করে।

### 2. Installing express, mongoose, typescript, dotenv, cors

**English:**  
Let's install the required packages. Open your terminal and run:

```sh
npm install express mongoose typescript dotenv cors
```

### 3. Installing eslint, refactor code, fix errors using command

**English:**  
To maintain code quality, install ESLint:

```sh
npm install eslint --save-dev
```

Then, initialize ESLint:

```sh
npx eslint --init
```

### 4. Install prettier, ts-node-dev, fix formatting issues

**English:**  
For code formatting and development convenience, install Prettier and ts-node-dev:

```sh
npm install prettier ts-node-dev --save-dev
```

### 5. Software design pattern, MVC vs modular, create an interface

**English:**  
MVC (Model-View-Controller) separates the application into three main components:

- **Model**: Manages data and business logic.
- **View**: Outputs representation of data.
- **Controller**: Handles input and updates the model.

**বাংলা:**  
MVC (মডেল-ভিউ-কন্ট্রোলার) অ্যাপ্লিকেশনটিকে তিনটি প্রধান কম্পোনেন্টে বিভক্ত করে:

- **মডেল**: ডেটা এবং business লজিক পরিচালনা করে।
- **ভিউ**: ডেটার উপস্থাপনা।
- **কন্ট্রোলার**: ইনপুট পরিচালনা করে এবং মডেল আপডেট করে।

**Example of Interface in TypeScript:**

```typescript
interface Student {
  name: string;
  age: number;
  grade: string;
}
```

**বাংলা উদাহরণ:**

```typescript
interface Student {
  name: string;
  age: number;
  grade: string;
}
```

### 6. Create a schema for a student

**English:**  
Create a Mongoose schema for a student:

```typescript
import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
});

const Student = model('Student', studentSchema);
```

### 7. Refactor your schema

**English:**  
Refactor the schema by adding timestamps:

```typescript
const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
  },
  { timestamps: true },
);
```

### 8. Create route, service, and controller

**English:**  
Let's create the routes, services, and controllers:

- **Route (routes/student.ts):**

```typescript
import { Router } from 'express';
import { getStudents, createStudent } from '../controllers/studentController';

const router = Router();

router.get('/', getStudents);
router.post('/', createStudent);

export default router;
```

- **Service (services/studentService.ts):**

```typescript
import Student from '../models/studentModel';

export const getAllStudents = async () => {
  return await Student.find();
};

export const addStudent = async (studentData: any) => {
  const student = new Student(studentData);
  return await student.save();
};
```

- **Controller (controllers/studentController.ts):**

```typescript
import { Request, Response } from 'express';
import { getAllStudents, addStudent } from '../services/studentService';

export const getStudents = async (req: Request, res: Response) => {
  const students = await getAllStudents();
  res.json(students);
};

export const createStudent = async (req: Request, res: Response) => {
  const newStudent = await addStudent(req.body);
  res.status(201).json(newStudent);
};
```

### 9. Insert a student data into MongoDB

**English:**  
Use the POST route to insert a student:

```typescript
import express from 'express';
import studentRoutes from './routes/student';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

### 10. Create get student route

**English:**  
We already created a GET route to fetch all students in step 8.

**বাংলা:**  
আমরা ইতিমধ্যেই ৮ নং ধাপে সমস্ত ছাত্রকে ফেচ করার জন্য একটি GET রুট তৈরি করেছি।

### 11. Little explain in model > controller > services > router

**English:**

- **Model:** Defines the data structure (e.g., Student schema).
- **Service:** Contains business logic (e.g., getAllStudents, addStudent).
- **Controller:** Handles HTTP requests and responses (e.g., getStudents, createStudent).
- **Router:** Defines endpoints and links them to controller methods.

**বাংলা:**

- **মডেল:** ডেটার গঠন সংজ্ঞায়িত করে (যেমন, student স্কিমা)।
- **সার্ভিস:** business লজিক ধারণ করে (যেমন, getAllStudents, addStudent)।
- **কন্ট্রোলার:** HTTP অনুরোধ এবং প্রতিক্রিয়া পরিচালনা করে (যেমন, getStudents, createStudent)।
- **রাউটার:** এন্ডপয়েন্ট সংজ্ঞায়িত করে এবং সেগুলোকে কন্ট্রোলার মেথডের সাথে সংযুক্ত করে।

https://github.com/wclr/ts-node-dev
https://blog.logrocket.com/linting-typescript-eslint-prettier/
s
