const posts = [
  {
    id: 1,
    author: "Kevin Butz",
    image:
      "https://images.unsplash.com/photo-1578496781379-7dcfb995293d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbmNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60",
    avatar:
      "https://images.unsplash.com/profile-1550909047272-90b93f9b8175?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
    content:
      "Two young girls with acute lymphocytic leukemia (ALL) receiving chemotherapy. The girl on the left has an IV tube in the neck, the other girl's IV is in her arm. They are sitting on a bed and are demonstrating some of the procedures and techniques used with chemotherapy.    ",
    timestamp: "3 hours ago",
    comment: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
        comment: "Great post!",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
        comment: "Nice work!",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
        comment: "Awesome!",
      },
    ],
    shares: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
    likes: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
  },
  {
    id: 3,
    author: "National Cancer Institute",
    image:
      "https://images.unsplash.com/photo-1637618619829-ef0f457d67b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    avatar:
      "https://images.unsplash.com/profile-1605780274397-200ea3604d6fimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: "1 day ago",
    shares: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
    likes: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
    comment: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
        comment: "Great post!",
        replies: [
          {
            id: 1,
            username: "JohnDoe",
            avatar: "https://i.pravatar.cc/150?img=4",
            reply: "Thanks, Tom!",
            timestamp: "2023-05-10T10:30:00Z",
          },
        ],
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
        replies: [],
        comment: "looks great!",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
        replies: [],
        comment: "Awesome!",
      },
    ],
  },
  {
    id: 2,
    author: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    avatar:
      "https://images.unsplash.com/profile-1576086368754-99727c1b6f81image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
    shares: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
    likes: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
    comment: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
        comment: "Great post!",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
        comment: "Nice work!",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
        comment: "Awesome!",
      },
    ],
    content: "Young Girl Receiving Chemotherapy",
    timestamp: "1 day ago",
  },
  {
    id: 5,
    author: "Alexander Grey",
    image:
      "https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNhbmNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    avatar:
      "https://images.unsplash.com/profile-1660845751050-33687caf3461image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
    content: "Patient recovering from surgery.",
    timestamp: "3 day ago",
    shares: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      {
        id: 5,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
    likes: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
    comment: [
      {
        id: 1,
        username: "Tomcruies",
        avatar: "https://i.pravatar.cc/150?img=1",
        comment: "Great post!",
        replies: [
          {
            id: 1,
            username: "JohnDoe",
            avatar: "https://i.pravatar.cc/150?img=4",
            reply: "Thanks, Tom!",
            timestamp: "2023-05-10T10:30:00Z",
          },
        ],
      },
      {
        id: 2,
        username: "Janesmith",
        avatar: "https://i.pravatar.cc/150?img=2",
        replies: [],
        comment: "looks great!",
      },
      {
        id: 3,
        username: "Alicejohnson",
        avatar: "https://i.pravatar.cc/150?img=3",
        replies: [],
        comment: "Awesome!",
      },
    ],
  },
];

export default posts;
