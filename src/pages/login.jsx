import axios from 'axios';
import React, { useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Page, 
  ListInput, 
  List, 
  Navbar,
  NavRight,
  LoginScreenTitle, 
  Block,
  BlockFooter,
  BlockTitle,
  Popup,
  ListButton, 
  f7,
  Link,
} from 'framework7-react';

export default ({ f7router }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [popupOpened, setPopupOpened] = useState(false);

  const signIn = async () => {
    if (username !== '' && password !== '') {
        try {
          const loginRequest = await axios({method: 'get', url: '/aspen/logon.do', withCredentials: true});
          const token = await loginRequest.data.match(/name="org.apache.struts.taglib.html.TOKEN" value="(.*?)"/)[1]
          const loginForm = new FormData();
          loginForm.append('org.apache.struts.taglib.html.TOKEN', token);
          loginForm.append('userEvent', 930);
          loginForm.append('deploymentId', 'aspen');
          loginForm.append('mobile', 'false');
          loginForm.append('username', username);
          loginForm.append('password', password);

          await axios({method: 'post', url: '/aspen/logon.do', data: loginForm, withCredentials: true}).then((response) => {console.log(response.status)}).catch((error) => {if(error.response){console.log(error.response.data)}});
          const loginStatus = await axios({method: 'get', url: '/aspen/home.do'});
          if (loginStatus.status != 200) {
            f7.dialog.alert(`Failed to login - Check your username or password.`);
          } else {
            // await AsyncStorage.setItem('username', username);
            // await AsyncStorage.setItem('password', password);
            f7router.navigate('/routes/');
          }

        } catch (ex) {
          f7.dialog.alert(`Failed to login - Check your username or password.`);
        }
    }
    else {
      f7.dialog.alert(`Failed to login - Check your username or password.`, () => {
      });
    } 
  };


  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      {/* Virtual ID */}
    <Popup
      className="vid"
      opened={popupOpened}
      onPopupClosed={() => setPopupOpened(false)}
    >
      <Page>
        <Navbar title="Privacy Policy">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
        <BlockTitle large>Privacy Policy</BlockTitle>  
          <BlockFooter>Last updated: February 2022</BlockFooter>
        </Block>
        <Block>
        <BlockTitle small>Information that is gathered from visitors</BlockTitle>  
          <p>Cookies may be used to remember visitor preferences when interacting with the website.</p>
          <p>Where login is required, the visitor's CPS username and password will be temporarily proxied on the server.</p>
        </Block>
        <Block>
        <BlockTitle small>How the Information is used</BlockTitle>
          <p>The information is proxied through our server to http://aspen.cps.edu in order for critical app components to function.</p>
          <p>Your data is safe. This app uses HTTP/SSL connections, meaning your data is encrypted throughout the whole process.</p>
          <b>We will never permanently store your data.</b>
        </Block>
        <Block>
        <BlockTitle small>Cookies</BlockTitle>
          <p>Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also, they may be used to track your return visits to the website.</p>
        </Block>
        </Page>
      </Popup>
    <LoginScreenTitle>Maple</LoginScreenTitle>
    <List form>
      <ListInput
        label="Login ID"
        type="text"
        placeholder="Your CPS username"
        value={username}
        onInput={(e) => {
          setUsername(e.target.value);
        }}
      />
      <ListInput
        label="Password"
        type="password"
        placeholder="Your password"
        value={password}
        onInput={(e) => {
          setPassword(e.target.value);
       }}
      />
    </List>
    <List>
      <ListButton onClick={signIn}>Sign In</ListButton>
      <BlockFooter>
        <br />
        By using this app, you agree to the <Link onClick={() => setPopupOpened(true)}>Privacy Policy.</Link>
        <br />
        Maple is not associated with Chicago Public Schools or Follett Corporation.
        <br />
      </BlockFooter>
    </List>
      </Page>
    );
  };