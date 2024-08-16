
# ClassConnect

ClassConnect is a RESTful API for managing classrooms, teachers, and tasks in an educational environment. This project provides endpoints for creating and managing classrooms, assigning tasks, and viewing task submissions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/classconnect.git
   cd classconnect
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your environment variables:

   ```
   MONGODB_URI=your_mongodb_uri
   PORT=8000
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will start and listen on the port specified in the `.env` file (default: 8000).

## Usage

You can use tools like Postman or cURL to interact with the API. Here are some example requests:

- **Create a Classroom:**

  ```
  POST /api/teachers/:teacherId/classrooms
  ```

  Body:
  ```json
  {
    "classroomName": "Math 101"
  }
  ```

- **View Classrooms:**

  ```
  GET /api/teachers/:teacherId/classrooms
  ```

- **Edit a Classroom:**

  ```
  PUT /api/teachers/classrooms/:classroomId
  ```

  Body:
  ```json
  {
    "classroomName": "Math 102"
  }
  ```

- **Delete a Classroom:**

  ```
  DELETE /api/teachers/classrooms/:classroomId
  ```

- **Assign a Task:**

  ```
  POST /api/teachers/classrooms/:classroomId/tasks
  ```

  Body:
  ```json
  {
    "title": "Homework",
    "description": "Solve exercises",
    "dueDate": "2024-08-30"
  }
  ```

- **View Task Submissions:**

  ```
  GET /api/teachers/tasks/:taskId/submissions
  ```

## API Endpoints

### Teachers Routes

- `POST /api/teachers/:teacherId/classrooms` - Create a classroom.
- `GET /api/teachers/:teacherId/classrooms` - View classrooms for a teacher.
- `PUT /api/teachers/classrooms/:classroomId` - Edit a classroom.
- `DELETE /api/teachers/classrooms/:classroomId` - Delete a classroom.
- `POST /api/teachers/classrooms/:classroomId/tasks` - Assign a task.
- `GET /api/teachers/tasks/:taskId/submissions` - View task submissions.

## Project Structure

```
classconnect/
├── node_modules/
├── public/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── utils/
├── .env
├── .gitignore
├── app.js
├── constant.js
├── index.js
├── package.json
├── package-lock.json
└── Readme.md
```

- **`controllers/`**: Contains the controller functions for handling requests.
- **`db/`**: Contains database connection logic.
- **`middlewares/`**: Contains middleware functions.
- **`models/`**: Contains Mongoose models.
- **`routes/`**: Contains route definitions.
- **`utils/`**: Contains utility functions.


---
