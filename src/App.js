import './App.css';

import React, { useEffect, useState } from 'react';
import UserApi from './services/users';
import { SnackbarProvider } from 'notistack';
import LoadingComponent from './components/Layout/utils/loading'
import { useTranslation } from 'react-i18next';

import Router from './routes';


const avatars = ["alex", "cave-spider", "cow", "creeper", "enderman", "pig", "sheep",
  "skeleton", "spider", "steve", "villager", "wolf", "zombie"]

function App() {

  const { t } = useTranslation();
  const [userLoaded, setUserLoaded] = useState(false);

  const [user, setUser] = useState(null);
  const [isRoutesReady, setIsRoutesReady] = useState(false);

  useEffect(() => {
    setUserLoaded(false);
    if (localStorage.getItem('accessToken')) {
      UserApi.verify()
        .then((res) => {
          const data = res.data;
          data.imageName = avatars[Math.floor(Math.random() * avatars.length)];
          setUser(res.data);
        })
        .catch(() => setUser(null))
        .finally(() => setUserLoaded(true));
    } else {
      setUser(null);
      setUserLoaded(true);
    }
  }, []);

  if (!userLoaded && !isRoutesReady) {

    return LoadingComponent(t)
  }

  return (
    <SnackbarProvider>
      <div className="App">
        <Router user={user}
          setIsRoutesReady={setIsRoutesReady}
          isRoutesReady={isRoutesReady} />
      </div>
    </SnackbarProvider>
  );
}

export default App;