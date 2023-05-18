export const lmsData = {
  users: [
    {
      userID: 1,
      username: "user1",
      email: "user1@example.com",
      password: "password1",
      firstName: "John",
      lastName: "Doe",
      role: "student",
    },
    {
      userID: 2,
      username: "user2",
      email: "user2@example.com",
      password: "password2",
      firstName: "Jane",
      lastName: "Smith",
      role: "instructor",
    },
    {
      userID: 3,
      username: "user3",
      email: "user3@example.com",
      password: "password3",
      firstName: "Michael",
      lastName: "Brown",
      role: "administrator",
    },
  ],
  courses: [
    {
      courseID: 1,
      courseName: "Introduction to Computer Science",
      instructorID: 2,
      description:
        "This course provides an introduction to the fundamental concepts of computer science. Topics covered include data structures, algorithms, programming languages, and software engineering.",
      startdate: "2023-01-01",
      enddate: "2023-05-31",
      sections: [
        {
          sectionID: 1,
          courseID: 1,
          instructorID: 2,
          meetingTime: "10:00 AM - 11:00 AM",
          meetingLocation: "Room 101",
          meetingDays: "Monday, Wednesday, and Friday",
          students: [1, 2],
        },
        {
          sectionID: 2,
          courseID: 1,
          instructorID: 2,
          meetingTime: "2:00 PM - 3:00 PM",
          meetingLocation: "Room 202",
          meetingDays: "Tuesday and Thursday",
          students: [3],
        },
      ],
    },
    {
      courseID: 2,
      courseName: "Data Structures and Algorithms",
      instructorID: 3,
      description:
        "This course covers the fundamental data structures and algorithms used in computer science. Topics covered include arrays, linked lists, trees, graphs, and sorting and searching algorithms.",
      startdate: "2023-06-01",
      enddate: "2023-08-31",
      sections: [
        {
          sectionID: 1,
          courseID: 2,
          instructorID: 3,
          meetingTime: "10:00 AM - 11:00 AM",
          meetingLocation: "Room 101",
          meetingDays: "Monday, Wednesday, and Friday",
          students: [1, 2],
        },
      ],
    },
  ],
  sections: [
    {
      sectionID: 1,
      courseID: 1,
      instructorID: 2,
      meetingTime: "10:00 AM - 11:00 AM",
      meetingLocation: "Room 101",
      meetingDays: "Monday, Wednesday, and Friday",
      students: [1, 2],
    },
    {
      sectionID: 2,
      courseID: 1,
      instructorID: 2,
      meetingTime: "2:00 PM - 3:00 PM",
      meetingLocation: "Room 202",
      meetingDays: "Tuesday and Thursday",
      students: [3],
    },
    {
      sectionID: 1,
      courseID: 2,
      instructorID: 3,
      meetingTime: "10:00 AM - 11:00 AM",
      meetingLocation: "Room 101",
      meetingDays: "Monday, Wednesday, and Friday",
      students: [1, 2],
    },
  ],
};

export const categories = {
  courses: [
    {
      main: "Development",
      subCategories: [
        {
          name: "Mobile Development",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
    {
      main: "Business",
      subCategories: [
        {
          name: "Enterpreneurship",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
    {
      main: "Finance",
      subCategories: [
        {
          name: "Accounting",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
    {
      main: "IT & Software",
      subCategories: [
        {
          name: "Mobile Development",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
    {
      main: "Office Productivity",
      subCategories: [
        {
          name: "Mobile Development",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
    {
      main: "Personal Development",
      subCategories: [
        {
          name: "Mobile Development",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
    {
      main: "Design",
      subCategories: [
        {
          name: "Mobile Development",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
    {
      main: "Marketing",
      subCategories: [
        {
          name: "Mobile Development",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
    {
      main: "Health & Fitness",
      subCategories: [
        {
          name: "Mobile Development",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
    {
      main: "Music",
      subCategories: [
        {
          name: "Mobile Development",
          link: "/mobile-development",
        },
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Programming Language",
          link: "/programming-language",
        },
        {
          name: "Game Development",
          link: "/mobile-development",
        },
        {
          name: "Database Design & Development",
          link: "/mobile-development",
        },
        {
          name: "Software Testing",
          link: "/mobile-development",
        },
      ],
    },
  ],
};
