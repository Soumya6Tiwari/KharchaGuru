# KharchaGuru

KharchaGuru is a cutting-edge MERN stack-powered expense tracker crafted to elevate personal finance management to a new level of efficiency. This elegant platform seamlessly integrates secure user authentication, real-time expense monitoring, and a sleek, intuitive interface designed for effortless categorization and insightful financial analysis. KharchaGuru simplifies financial data, providing clear insights that help users make informed decisions and take control of their financial future.

# Screenshots

*Login page of KharchaGuru*
![Login Page Of KharchaGuru](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1487).png)<br><br><br>

*SignUp page of KharchaGuru*
![SignUp Page Of KharchaGuru](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1489).png)<br><br><br>

*SignUp Validations*
![SignUp Validations](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1432).png)<br><br><br>

*Register New user*
![Register New User](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1490).png)<br><br><br>

*Logging in User*
![Logging in User](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1491).png)<br><br><br>

*FrontLook of the DashBoard*
![FrontLook of the Dashboard](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1437).png)<br><br><br>

*Empty income Page*
![Empty income Page](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1438).png)<br><br><br>

*Empty expense Page*
![Empty expense Page](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1444).png)<br><br><br>

*Adding incomes*
![Adding incomes](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1442).png)<br><br><br>
![Adding incomes](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1443).png)<br><br><br>

*Adding expenses*
![Adding expenses](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1465).png)<br><br><br>
![Adding expenses](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1466).png)<br><br><br>

*Showing all incomes*
![Showing all incomes](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1482).png)<br><br><br>

*Showing all expenses*
![Showing all expenses](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1484).png)<br><br><br>

*View Transactions (incomes)*
![income transactions](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%202024-08-12%20013300.png)<br><br><br>

*View Transactions (expenses)*
![expense transactions](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%202024-08-12%20013242.png)<br><br><br>

*Updated DashBoard*
![Updated dashboard](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1479).png)<br><br><br>
![Updated dashboard](https://github.com/Soumya6Tiwari/KharchaGuru/blob/master/Screenshots/Screenshot%20(1481).png)<br><br><br>

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Techstack](#installation)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Secure user signup and login with JWT-based authentication.
- **Real-Time Expense Tracking**: Keep track of your expenses as you spend, with instant updates and data storage.
- **Expense Categorization**: Organize your expenses into categories for better analysis and budgeting.
- **Income Categorization**: Track and categorize your income sources to maintain a clear financial overview.
- **History Tracking**: View detailed histories of your expenses and income, allowing for better financial planning and retrospection.
- **Data Analysis**: Gain insights into your spending and income patterns with visualizations and detailed reports.
- **Visual Representation with Charts**: Easily understand your financial data through charts and graphs, making analysis more intuitive and actionable.

## Prerequisites
The prerequisites for the KharchaGuru project are:

1. **Basic Knowledge of MERN Stack**:
   - **MongoDB**: Understanding of database design and queries.
   - **Express.js**: Familiarity with building RESTful APIs.
   - **React**: Experience with React components, state management, and hooks.
   - **Node.js**: Basic knowledge of server-side JavaScript.

2. **JavaScript and ES6**: Understanding of modern JavaScript features and syntax.

3. **Version Control with Git**: Familiarity with Git for version control and collaboration.

4. **npm (Node Package Manager)**: Experience with managing packages and dependencies using npm.

5. **Basic Knowledge of Authentication**: Understanding of JWT and how to implement secure authentication.

6. **Environment Setup**:
   - Node.js and npm installed.
   - MongoDB installed locally or access to a MongoDB Atlas account.
   - Code editor like VSCode.

- **Styled-components**: Familiarity with styled-components for styling React components.
- **Postman or similar tool**: To test API endpoints during development.


## Techstack
- **Frontend**: React, styled-components, HTML5, Javascript
- **Backend**: Node.js, Express.js
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MongoDB
- **Styling**: CSS, styled-components


## Getting Started
Follow these steps to get started

## Installation

Here are the installation steps for the KharchaGuru project:

#### Installation

1. **Clone the Repository**:
   Start by cloning the KharchaGuru repository from GitHub to your local machine:
   git clone https://github.com/Soumya6Tiwari/kharchaguru.git  <br>
   cd kharchaguru

2. **Install Frontend Dependencies**:
   Navigate to the frontend directory and install the necessary dependencies using npm:
   <br>
   cd frontend
   <br>
   cd frontend
   <br>
   npm install

3. **Install Backend Dependencies**:
   Next, move to the backend directory and install the backend dependencies:
   <br>
   cd backend
   <br>
   npm install

4. **Setup Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following environment variables:<br>
   MONGODB_URI=   mongodb+srv://soumyaecc6:bachat123@expense.cgzpsya.mongodb.net/?retryWrites=true&w=majority&appName=Expense <br>
   JWT_SECRET=MCA2025
   
5. **Start the Backend Server**:
   npm start
   
6. **Start the Frontend Development Server**:
   Now, navigate back to the frontend directory and start the frontend server:<br>
   npm start
   
7. **Access KharchaGuru**:
   Open your web browser and go to `http://localhost:3000` to start using KharchaGuru.

### Additional Notes

- Ensure that MongoDB is running either locally or in the cloud (e.g., MongoDB Atlas).
- The backend server typically runs on `http://localhost:5000` and interacts with the frontend server running on `http://localhost:3000`.
- If you encounter any issues, check the console for error messages and ensure that all dependencies are correctly installed.

# Usage
Here’s the usage section for the KharchaGuru project:
 ### usage
1. **Sign Up or Log In**:
   - Visit `http://localhost:3000` in your web browser.
   - If you don't have an account, click on the "Sign Up" button and create an account by providing your email and password.
   - If you already have an account, simply log in using your credentials.

2. **Add an Expense**:
   - After logging in, navigate to the "Add Expense" section.
   - Select a category (e.g., Food, Transport, Entertainment) for your expense.
   - Enter the amount, date, and any additional notes.
   - Click "Add Expense" to save it.

3. **Add Income**:
   - Go to the "Add Income" section.
   - Choose the income source category (e.g., Salary, Freelance, Investments).
   - Enter the income amount, date, and any relevant notes.
   - Click "Add Income" to save it.

4. **View Expense and Income History**:
   - Access the "History" section to view a detailed log of all your expenses and income on the dashboard
  

7. **Log Out**:
   - When you're done, ensure to log out of your account securely by clicking on the "Log Out" button.

# Contributing
### contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

# License
### license
This project is licensed under the MIT License.

# Contact
### contact
For any inquiries or feedback, please reach out to soumyaecc6@example.com








