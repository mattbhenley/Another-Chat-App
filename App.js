//Import the screens 
import Main from './Components/Main';
import Chat from './Components/Chat';

//Import React navigation 
const navigator = createStackNavigator({
    Main: { screen: Main },
    Chat: { screen: Chat },
});

// Export as the root compnent 
export default navigator