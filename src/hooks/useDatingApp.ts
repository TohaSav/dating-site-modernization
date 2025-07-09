import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import {
  AppState,
  ViewType,
  Message,
  UserProfile,
  RegistrationData,
} from "@/types";
import { ADMIN_CREDENTIALS } from "@/data/constants";
import { MOCK_PROFILES } from "@/data/mockData";

export const useDatingApp = () => {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved ? JSON.parse(saved) : false;
  });
  const [likes, setLikes] = useState<number[]>([]);
  const [matches, setMatches] = useState<number[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentChat, setCurrentChat] = useState<number | null>(null);
  const [messageText, setMessageText] = useState("");
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 35]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [adminLogin, setAdminLogin] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem("userProfile");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
    }
  }, [userProfile]);

  const handleLike = (profileId: number) => {
    if (!likes.includes(profileId)) {
      setLikes([...likes, profileId]);
      // Симуляция взаимного лайка
      if (Math.random() > 0.5) {
        setMatches([...matches, profileId]);
        toast({
          title: "Новый матч! 💕",
          description: "Вы понравились друг другу!",
        });
      } else {
        toast({
          title: "Лайк отправлен! ❤️",
          description: "Ждем ответной реакции",
        });
      }
    }
  };

  const handleSendMessage = () => {
    if (messageText.trim() && currentChat) {
      const newMessage: Message = {
        id: messages.length + 1,
        chatId: currentChat,
        text: messageText,
        sender: "me",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessageText("");

      // Симуляция ответа
      setTimeout(() => {
        const reply: Message = {
          id: messages.length + 2,
          chatId: currentChat,
          text: "Привет! Как дела? 😊",
          sender: "other",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reply]);
      }, 2000);
    }
  };

  const handleAdminLogin = () => {
    if (
      adminLogin === ADMIN_CREDENTIALS.LOGIN &&
      adminPassword === ADMIN_CREDENTIALS.PASSWORD
    ) {
      setIsAdmin(true);
      setCurrentView("admin");
      toast({
        title: "Добро пожаловать, администратор!",
        description: "Вы успешно вошли в админ-панель",
      });
    } else {
      toast({
        title: "Ошибка входа",
        description: "Неверный логин или пароль",
        variant: "destructive",
      });
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    setCurrentView("home");
  };

  const handleRegister = (data: RegistrationData) => {
    const newUserProfile: UserProfile = {
      id: Date.now(),
      name: data.firstName,
      firstName: data.firstName,
      age: data.age,
      location: data.city,
      bio: `Привет! Меня зовут ${data.firstName}. Рад(а) познакомиться!`,
      image: `/api/placeholder/400/400`,
      interests: [],
      verified: false,
      premium: false,
      online: true,
      email: data.email,
      gender: data.gender,
    };

    setUserProfile(newUserProfile);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    setCurrentView("profile");

    toast({
      title: "Добро пожаловать!",
      description: "Регистрация прошла успешно. Заполните свой профиль.",
    });
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const getProfile = (id: number) => {
    return MOCK_PROFILES.find((p) => p.id === id);
  };

  const getChatMessages = (chatId: number) => {
    return messages.filter((m) => m.chatId === chatId);
  };

  return {
    // State
    currentView,
    isLoggedIn,
    likes,
    matches,
    messages,
    currentChat,
    messageText,
    ageRange,
    selectedInterests,
    adminLogin,
    adminPassword,
    isAdmin,
    userProfile,

    // Actions
    setCurrentView,
    setCurrentChat,
    setMessageText,
    setAgeRange,
    setAdminLogin,
    setAdminPassword,
    setIsAdmin,
    setUserProfile,
    handleLike,
    handleSendMessage,
    handleAdminLogin,
    handleLogin,
    handleRegister,
    toggleInterest,

    // Helpers
    getProfile,
    getChatMessages,
    profiles: MOCK_PROFILES,
  };
};
