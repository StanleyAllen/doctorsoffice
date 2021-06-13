import React from 'react';
import './App.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import Footer from './component/Footer';
import Header from './component/Header';
import ShareNotes from './component/SharedNotes';
import AppNotes from './component/AppNotes';



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <AppNotes />
        <ShareNotes />
        <Footer />
      </div>
    );
  }
}

export default withAuthenticator(App);
