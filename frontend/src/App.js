import {Container} from 'react-bootstrap'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Header,Footer} from './components';
import { LoginScreen,ProductScreen,HomeScreen,CartScreen} from './screens';

const App =() => {
  return (
    <Router>
    <Header/>
    <main className='py-3'>
      <Container>
      <Route path="/" component={HomeScreen} exact/>
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/login" component={LoginScreen}/>
      <Route path="/cart/:id" component={CartScreen}/>
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
