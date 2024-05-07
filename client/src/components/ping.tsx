import { IonButton, IonList, IonItem, IonLabel } from '@ionic/react';

import './ping.css';
import axios from 'axios';
import { API_URL } from '../../config';
import { useEffect, useState } from 'react';

interface ContainerProps { }

interface Establishment {
  id: string; 
  name: string;
}

const Search: React.FC<ContainerProps> = () => {

  const [establishments, setEstablishments] = useState<Establishment[]>([]);

  const handleSearch = async () => { 
    try {
        const response = await axios.get(`${API_URL}/getEstablishments`);
        setEstablishments(response.data);
    } catch (error) {
        console.error("Error fetching establishments:", error); 
    }
}; 

  return (
      <> 
          <IonButton onClick={handleSearch}>Search</IonButton>

          <IonList>
              {establishments.map((establishment) => (
                  <IonItem key={establishment.id}>
                      <IonLabel>{establishment.name}</IonLabel>
                  </IonItem>
              ))}
          </IonList>
      </>
  );
};

export default Search;