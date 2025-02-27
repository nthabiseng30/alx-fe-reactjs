import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: 'Nthabiseng Mahlangu',
    email: 'nthabisengmahlangu493@gmail.com',
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile />
        <Counter/>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
