import React from 'react';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import csvtojson from 'csvtojson';
import globals from '../globals';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
  
    const url = '1Q3yfe7sWpbq0zyP6CpG0xIsm2gTtGjcDgxkNksML9ZY';
  
    fetch(`https://docs.google.com/spreadsheets/d/${url}/gviz/tq?tqx=out:csv`)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(csv => {
        const jsonObj = csvJSON(csv);
        if (jsonObj.length === 0) {
            alert("Email not found");
        }
        console.log("JSON RESPONSE: " + JSON.stringify(jsonObj[1]))

        const user = jsonObj.find((u) => u.Email === email);
        if (user && password === "BLASTSTUDENT6643") {
            console.log("JDLKAJSDKAJSIODJWAIO: " + JSON.stringify(user));
          const fullName = user['Name (First + Last)'];
          globals.fullName = user['Name (First + Last)'];
          this.props.setFullName(fullName);
          this.props.history.push('/acceptance');
        
        } else {
            console.log("ASLKDJAKLSDJ: " + JSON.stringify(user))
          alert("Incorrect email or password");
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    const csvJSON = (csv) => {
        const lines = csv.split("\n");
        const result = [];
        const headers = lines[0].split(",");
      
        for (let i = 1; i < lines.length; i++) {
          const obj = {};
          const currentline = lines[i].split(",");
      
          for (let j = 0; j < headers.length; j++) {
            // remove quotes from header and value
            obj[headers[j].replace(/"/g, '')] = currentline[j].replace(/"/g, '');
          }
      
          result.push(obj);
        }
      
        return result;
      };
  };
  
  

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Check if the password is correct
    if (this.state.password === "BLASTSTUDENT6643") {
      // Redirect to dashboard page
      this.props.history.push('/acceptance');
    } else {
      alert('Invalid password');
    }
  }

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'signin section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'signin-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'View your BLAST AI Admissions Decision',
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader tag="h2" data={sectionHeader} className="center-content" />
            <div className="tiles-wrap">
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <form onSubmit={this.handleLogin}>
                    <fieldset>
                      <div className="mb-12">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Email"
                          labelHidden
                          required
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange} />
                      </div>
                      <div className="mb-12">
                        <Input
                          type="password"
                          label="Password"
                          placeholder="Password"
                          labelHidden
                          required
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange} />
                      </div>
                      <div className="mt-24 mb-32">
                        <Button type="submit" color="primary" wide>Sign in</Button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;