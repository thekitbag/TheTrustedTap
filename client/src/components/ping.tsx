import { IonButton } from '@ionic/react';
import './ping.css';
import axios from 'axios';
import { API_URL } from '../../config.js';


const handlePing = async () => {
  try {
      const response = await axios.post(`${API_URL}/ping`, {
          message: 'ping' 
      });

      // Handle the response, maybe display an alert
      console.log(response.data); // Should log the 'Pong' message
  } catch (error) {
      console.error("Ping error:", error); // Handle errors gracefully
  }
};



interface ContainerProps { }

const Ping: React.FC<ContainerProps> = () => {
  return (
    <IonButton onClick={handlePing}>Ping</IonButton>
  );
};

export default Ping;
