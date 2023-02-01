import {AuthProvider} from './context/auth';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

