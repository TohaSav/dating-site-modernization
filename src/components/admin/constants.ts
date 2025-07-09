export const ADMIN_CREDENTIALS = {
  email: "toly.akuloff@yandex.ru",
  password: "908908Tolya--Qwe",
};

export const MOCK_STATS = {
  totalUsers: 12547,
  todayLikes: 8934,
  messages: 45231,
  reports: 23,
};

export const MOCK_USERS = [
  {
    id: 1,
    name: "Анна Петрова",
    age: 28,
    location: "Москва",
    bio: "Люблю путешествовать и изучать новые языки",
    image: "/api/placeholder/400/400",
    interests: ["Путешествия", "Языки", "Фотография"],
    verified: true,
    premium: true,
    online: true,
    email: "anna.petrova@example.com",
    status: "active" as const,
    lastActive: "2024-01-15 14:30",
  },
  {
    id: 2,
    name: "Михаил Иванов",
    age: 32,
    location: "СПб",
    bio: "Веб-разработчик, люблю кодить и играть в теннис",
    image: "/api/placeholder/400/400",
    interests: ["Программирование", "Теннис", "Кино"],
    verified: false,
    premium: false,
    online: false,
    email: "michael.ivanov@example.com",
    status: "banned" as const,
    lastActive: "2024-01-14 20:15",
  },
];

export const MOCK_REPORTS = [
  {
    id: 1,
    reportedUser: "Михаил Иванов",
    reportedBy: "Анна Петрова",
    reason: "Неуместные сообщения",
    status: "pending" as const,
    date: "2024-01-15 10:30",
  },
  {
    id: 2,
    reportedUser: "Олег Смирнов",
    reportedBy: "Мария Козлова",
    reason: "Подозрительная активность",
    status: "resolved" as const,
    date: "2024-01-14 16:45",
  },
];
