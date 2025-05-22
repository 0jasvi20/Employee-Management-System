const admin = {
  "id": 1,
  "email": "admin@example.com",
  "password": "123",
  "first_name": "Aarav"
};

const employees = [
  {
    "id": 101,
    "email": "employee1@example.com",
    "password": "123",
    "first_name": "Rohit",
    "task_numbers": { "active": 2, "complete": 1, "new_task": 1, "failed": 0 },
    "tasks": [
      {
        "title": "Prepare report",
        "description": "Compile monthly performance metrics",
        "date": "2025-05-20",
        "category": "Reporting",
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss project milestones",
        "date": "2025-05-19",
        "category": "Meetings",
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false
      },
      {
        "title": "Update CRM",
        "description": "Enter new client data into CRM",
        "date": "2025-05-18",
        "category": "Data Entry",
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false
      }
    ]
  },
  {
    "id": 102,
    "email": "employee2@example.com",
    "password": "123",
    "first_name": "Priya",
    "task_numbers": { "active": 2, "complete": 2, "new_task": 1, "failed": 0 },
    "tasks": [
      {
        "title": "Design logo",
        "description": "Create logo for new campaign",
        "date": "2025-05-21",
        "category": "Design",
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Feedback Review",
        "description": "Review customer feedback forms",
        "date": "2025-05-19",
        "category": "Customer Service",
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review latest pull requests",
        "date": "2025-05-20",
        "category": "Development",
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false
      },
      {
        "title": "Unit Testing",
        "description": "Write tests for new module",
        "date": "2025-05-18",
        "category": "Testing",
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false
      }
    ]
  },
  {
    "id": 103,
    "email": "employee3@example.com",
    "password": "123",
    "first_name": "Anjali",
    "task_numbers": { "active": 3, "complete": 2, "new_task": 2, "failed": 0 },
    "tasks": [
      {
        "title": "Onboarding",
        "description": "Guide new hire through onboarding",
        "date": "2025-05-17",
        "category": "HR",
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Run vulnerability assessment",
        "date": "2025-05-19",
        "category": "IT Security",
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false
      },
      {
        "title": "Team Training",
        "description": "Prepare training material for DevOps",
        "date": "2025-05-20",
        "category": "Training",
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Budget Planning",
        "description": "Draft Q3 department budget",
        "date": "2025-05-18",
        "category": "Finance",
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false
      },
      {
        "title": "Inventory Check",
        "description": "Verify office supplies",
        "date": "2025-05-21",
        "category": "Operations",
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false
      }
    ]
  },
  {
    "id": 104,
    "email": "employee4@example.com",
    "password": "123",
    "first_name": "Vikram",
    "task_numbers": { "active": 1, "complete": 2, "new_task": 1, "failed": 0 },
    "tasks": [
      {
        "title": "Social Media Post",
        "description": "Draft and schedule Instagram post",
        "date": "2025-05-21",
        "category": "Marketing",
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "SEO Optimization",
        "description": "Optimize website for SEO",
        "date": "2025-05-20",
        "category": "Marketing",
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false
      },
      {
        "title": "Team Sync",
        "description": "Weekly catch-up meeting",
        "date": "2025-05-19",
        "category": "Meetings",
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false
      }
    ]
  },
  {
    "id": 105,
    "email": "employee5@example.com",
    "password": "123",
    "first_name": "Neha",
    "task_numbers": { "active": 3, "complete": 1, "new_task": 2, "failed": 0 },
    "tasks": [
      {
        "title": "Bug Fixing",
        "description": "Fix layout issues on mobile",
        "date": "2025-05-18",
        "category": "Development",
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Performance Review",
        "description": "Submit self-review for appraisal",
        "date": "2025-05-19",
        "category": "HR",
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false
      },
      {
        "title": "Email Campaign",
        "description": "Draft emails for product launch",
        "date": "2025-05-20",
        "category": "Marketing",
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false
      },
      {
        "title": "Server Backup",
        "description": "Backup staging server data",
        "date": "2025-05-21",
        "category": "IT",
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false
      }
    ]
  }
];

export const setLocalStorage = () => {   
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin }
}

const data = { employees, admin };
export default data;
