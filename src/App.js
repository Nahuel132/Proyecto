import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Herramientas from './components/Herramientas';

import { useAuth0 } from '@auth0/auth0-react'

function App() {

    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <h1 > Loading... < /h1>

    return ( <
        div className = "App" >
        <
        h1 > Panioleta < /h1>  { isAuthenticated ? <LogoutButton / >: < LoginButton / >
    }

    <
    Herramientas / >
        <
        /div>
);
}
export default App;