import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Ping from '../components/ping';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">The Trusted Tap</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Ping />
      </IonContent>
    </IonPage>
  );
};

export default Home;
