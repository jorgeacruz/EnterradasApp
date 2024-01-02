import NavStack from './src/routes';

//import Provider
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <NavStack/>
    </AuthProvider>
    );
}

