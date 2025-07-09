import { useDatingApp } from "@/hooks/useDatingApp";
import { HomePage } from "@/components/pages/HomePage";
import { LoginPage } from "@/components/pages/LoginPage";
import { RegisterPage } from "@/components/pages/RegisterPage";
import { SearchPage } from "@/components/pages/SearchPage";
import { MatchesPage } from "@/components/pages/MatchesPage";
import { ChatPage } from "@/components/pages/ChatPage";
import { ProfilePage } from "@/components/pages/ProfilePage";
import { AdminPage } from "@/components/pages/AdminPage";

const Index = () => {
  const {
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

    // Actions
    setCurrentView,
    setCurrentChat,
    setMessageText,
    setAgeRange,
    setAdminLogin,
    setAdminPassword,
    setIsAdmin,
    handleLike,
    handleSendMessage,
    handleAdminLogin,
    handleLogin,
    handleRegister,
    toggleInterest,

    // Helpers
    getProfile,
    getChatMessages,
    profiles,
    userProfile,
  } = useDatingApp();

  // Рендер в зависимости от текущего вида
  switch (currentView) {
    case "login":
      return (
        <LoginPage setCurrentView={setCurrentView} handleLogin={handleLogin} />
      );
    case "register":
      return (
        <RegisterPage
          setCurrentView={setCurrentView}
          handleRegister={handleRegister}
        />
      );
    case "search":
      return (
        <SearchPage
          profiles={profiles}
          likes={likes}
          ageRange={ageRange}
          selectedInterests={selectedInterests}
          setCurrentView={setCurrentView}
          setAgeRange={setAgeRange}
          toggleInterest={toggleInterest}
          handleLike={handleLike}
        />
      );
    case "matches":
      return (
        <MatchesPage
          matches={matches}
          profiles={profiles}
          setCurrentView={setCurrentView}
          setCurrentChat={setCurrentChat}
          getProfile={getProfile}
        />
      );
    case "chat":
      return (
        <ChatPage
          matches={matches}
          currentChat={currentChat}
          messageText={messageText}
          setCurrentView={setCurrentView}
          setCurrentChat={setCurrentChat}
          setMessageText={setMessageText}
          handleSendMessage={handleSendMessage}
          getProfile={getProfile}
          getChatMessages={getChatMessages}
        />
      );
    case "profile":
      return (
        <ProfilePage
          selectedInterests={selectedInterests}
          toggleInterest={toggleInterest}
          setCurrentView={setCurrentView}
          userProfile={userProfile}
        />
      );
    case "admin":
      return (
        <AdminPage
          isAdmin={isAdmin}
          adminLogin={adminLogin}
          adminPassword={adminPassword}
          profiles={profiles}
          setCurrentView={setCurrentView}
          setAdminLogin={setAdminLogin}
          setAdminPassword={setAdminPassword}
          setIsAdmin={setIsAdmin}
          handleAdminLogin={handleAdminLogin}
        />
      );
    default:
      return (
        <HomePage
          isLoggedIn={isLoggedIn}
          matches={matches}
          likes={likes}
          profiles={profiles}
          currentView={currentView}
          setCurrentView={setCurrentView}
          handleLike={handleLike}
        />
      );
  }
};

export default Index;
