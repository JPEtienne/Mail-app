import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EmailList from './components/EmailList/EmailList'
import { selectSendMessageIsOpen } from './features/mailSlice'
import SendMail from './components/SendMail/SendMail'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Mail from './components/Mail/Mail'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail" component={Mail} />
            <Route path="/" component={EmailList} />
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  )
}

export default App

