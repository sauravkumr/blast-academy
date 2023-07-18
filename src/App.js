import React from 'react';
import { withRouter, Switch, Route, useSearchParams } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';
import LayoutAlt2 from './layouts/LayoutAlt2';
import LayoutSignin from './layouts/LayoutSignin';

// Views 
import Home from './views/Home';
import Curriculum from './views/Curriculum';
import Secondary from './views/Secondary';
import Symposium from './views/Symposium';
import Acceptance from './views/Acceptance';
import Acceptance2 from './views/Acceptance2';
import Login from './views/temp';
import pr from './views/PR';
// import Login from './views/Login';
import faq from './views/FAQ';
import globals from './globals'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      fullName: ''
    };
  }
  setFullName = (fullName) => {
    this.setState({ fullName });
  }

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    // const [searchParams] = useSearchParams();
    // const params = new URLSearchParams(location.search);
    // const [searchParams, setSearchParams] = useSearchParams({});

    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutAlt2} />
            <AppRoute exact path="/bootcamp" component={Curriculum} layout={LayoutDefault} />
            <AppRoute exact path="/research" component={Symposium} layout={LayoutDefault} />
            <AppRoute exact path="/testimonials" component={pr} layout={LayoutDefault} />
            <AppRoute exact path="/secondary" component={Secondary} layout={LayoutDefault} />
            {/*<AppRoute exact path="/acceptance">
              <Acceptance loggedInUser={"id"} fullName={"this.props.match.params.id"} setFullName={this.setFullName} />
            </AppRoute>*/}

            {/* <Route path='/decision/:userId' component={Acceptance} layout={LayoutDefault}/> */}

            <AppRoute path="/decision/:userId" component={Acceptance} layout={LayoutAlt2}/>
            <AppRoute path="/letter/:userId" component={Acceptance2} layout={LayoutAlt2}/>
            {/* <Route path="/decision/:id" render={(props) => <Acceptance loggedInUser={this.props.match.params.id} fullName={this.props.match.params.id} setFullName={this.setFullName} />}></Route> */}
            {/* <AppRoute exact path="/decision/:id">
              <Acceptance loggedInUser={this.props.match.params.id} fullName={this.state.fullName} setFullName={this.setFullName} />
            </AppRoute> */}
            <AppRoute exact path="/temp">
              <Login onLogin={this.onLogin} />
            </AppRoute>

            <Route path='/apply' component={() => {
              window.location.href = 'https://forms.gle/wCSb1F8qg4Zrgj1RA';
              return null;
            }}/>
            <Route path='/bootcamp-application' component={() => {
              window.location.href = 'https://forms.gle/aX4j2ZZfU1Q4b9pN8';
              return null;
            }}/>
            <Route path='/research-application' component={() => {
              window.location.href = 'https://forms.gle/wCSb1F8qg4Zrgj1RA';
              return null;
            }}/>
            <Route path='/hiring' component={() => {
              window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf0hDk80cwFj_hyEcED0roqkuLPeaOIGcCkhJzvzt1akpk-eg/viewform';
              return null;
            }}/>
            <Route path='/blastoff-2023-accept' component={() => {
              window.location.href = 'https://wnewxg7rxr5.typeform.com/to/It50iMMJ';
              return null;
            }}/>
            <Route path='/apply-referred-by-felipe' component={() => {
              window.location.href = 'https://forms.gle/2EsCrxBEJGb3UtDg6';
              return null;
            }}/>
            <Route path='/financial-aid-application' component={() => {
              window.location.href = 'https://forms.gle/ppZKduUegpyjbHgGA';
              return null;
            }}/>
            <Route path='/apply-to-blast' component={() => {
              window.location.href = 'https://forms.gle/2EsCrxBEJGb3UtDg6';
              return null;
            }}/>
            
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);