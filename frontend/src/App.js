import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#FFA000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/marketplace" component={Marketplace} />
            <Route path="/chat" component={Chat} />
            <Route path="/profile" component={Profile} />
            <Route path="/product/:id" component={ProductDetails} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
