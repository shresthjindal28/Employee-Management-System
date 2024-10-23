const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstName": "Amit",
    "tasks": [
      {
        "title": "Prepare Financial Report",
        "description": "Complete the report",
        "date": "2024-10-18",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Redesign Homepage",
        "description": "Update the website",
        "date": "2024-10-19",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Client Presentation",
        "description": "Client meeting preparation",
        "date": "2024-10-20",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Priya",
    "tasks": [
      {
        "title": "Handle Support Tickets",
        "description": "Resolve customer support tickets",
        "date": "2024-10-18",
        "category": "Support",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Warehouse Stock Check",
        "description": "Inventory check",
        "date": "2024-10-19",
        "category": "Logistics",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Conduct Staff Training",
        "description": "Employee training",
        "date": "2024-10-20",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Raj",
    "tasks": [
      {
        "title": "Present Project Overview",
        "description": "Project presentation",
        "date": "2024-10-18",
        "category": "Presentations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Organize Team Lunch",
        "description": "Team lunch organization",
        "date": "2024-10-19",
        "category": "Social",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Review Code Submissions",
        "description": "Code review",
        "date": "2024-10-20",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Suman",
    "tasks": [
      {
        "title": "Analyze Marketing Data",
        "description": "Marketing campaign analysis",
        "date": "2024-10-18",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Create New Blog Post",
        "description": "Write blog post",
        "date": "2024-10-19",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Complete Client Proposal",
        "description": "Finalize client proposal",
        "date": "2024-10-20",
        "category": "Sales",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Neha",
    "tasks": [
      {
        "title": "Backup Database Systems",
        "description": "Database backup",
        "date": "2024-10-18",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Conduct Security Review",
        "description": "Security audit",
        "date": "2024-10-19",
        "category": "Security",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Optimize Website Performance",
        "description": "Website optimization",
        "date": "2024-10-20",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
    "firstName": "Vikram"
  }
];


export const setLocalStorage = () =>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  
  return {employees,admin}

}