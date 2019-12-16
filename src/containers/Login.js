import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
          return email.length > 0 && password.length > 0;
        }

    function handleSubmit(event) {
          event.preventDefault();
        }

    return (
          <div className="Login">
          <img src={require('./../assets/kiostix_logo.svg')} />
            <form onSubmit={handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <FormControl
                  autoFocus
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <FormControl
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <Button block bsSize="large"  type="submit">
                Regis
              </Button>
              <Button block bsSize="large" disabled={!validateForm()} type="submit">
                Login
              </Button>

           </form>
        <p className="tm">HRIS @ Created by Ibnu </p>
          </div>
        );
}
