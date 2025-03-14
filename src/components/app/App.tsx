import MainPage from '../../pages/MainPage/MainPage';

type AppScreenProps = {
  cardsCount: number;
}

function App({cardsCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage cardsCount={
      cardsCount
    }
    />
  );
}

export default App;
