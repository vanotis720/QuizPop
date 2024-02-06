import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigations/AppNavigation';
import { insertQuestions, clearQuestionsTable } from './src/models/database';

export default function App() {

  React.useEffect(() => {
    try {

      // clearQuestionsTable()
      //   .then((message) => {
      //     console.log(message);
      //   })
      //   .catch((error) => {
      //     console.error('Erreur lors du nettoyage de la table "questions": ', error);
      //   });

      insertQuestions();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

