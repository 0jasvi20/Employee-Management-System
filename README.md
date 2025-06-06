# Employee-Management-System
This project is a React-based Employee Task Management Dashboard designed to help administrators assign, track, and manage tasks for employees in an organization. The application features two main user roles: Admin and Employee.

# Key Features
    1. Admin Dashboard: 
            View all employees and their assigned tasks.
            Create and assign new tasks to employees.
            See the status of every task (Active, New, Complete, Failed) for all employees.
            All data is stored and updated in the browser’s localStorage for persistence.
            
    2. Employee Dashboard:
            Employees can log in and view their assigned tasks.
            Tasks are categorized by status: Active, New, Complete, Failed.
            Employees can interact with their tasks (e.g., mark as complete or failed).
            
    3. Task Management:
            Tasks include details such as title, description, date, category, and status.
            Admins can assign tasks to employees by name.
            The UI updates to reflect new tasks and status changes.
            
    4. Persistent Data
          All employee and task data is stored in localStorage, so it persists across browser sessions.
          The app reads from and writes to localStorage to keep data in sync.
          
    5. Responsive UI
    The dashboard and task cards are styled for usability and adapt to different screen sizes.

# Tech Stack
    React for building the user interface.
    Tailwind CSS for styling and responsive design.
    localStorage for data persistence in the browser.
    React Context for global state management.

# Typical Use Case
      Admin logs in and assigns tasks to employees using the Create Task form.
      Employees log in to view and manage their tasks.
      Task statuses are updated and visible to both admin and employees.
      All changes are saved in localStorage, ensuring data is not lost on refresh.

# Screenshot

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/ea060ca1-667e-4940-bcb1-44d3b089c860" />

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/da4fa506-8411-4175-873c-9bf91913deaa" />

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/73b79147-8c21-42b3-b17b-b126effb5ae8" />

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/4e9f2c45-0234-4854-a8c2-08f739250599" />

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/128e86fd-1b1d-4c12-8b3b-dc8bf7d278b4" />

