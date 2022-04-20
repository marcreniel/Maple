import React, { useState, useEffect } from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Block,
  BlockTitle,
  BlockFooter,
  List,
  ListItem,
  Card,
  CardContent,
  CardFooter,
  Icon,
  Popup,
  Toggle,
  f7,
} from 'framework7-react';
export default ({ f7router }) => {
    const [popupOpened, setPopupOpened] = useState(false);
    return(
        <Page>
            {/* Privacy Policy */}
            <Popup
            className="pp"
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
            <Navbar large sliding={false}>
            <NavTitleLarge>Settings</NavTitleLarge>
            </Navbar>
            <BlockTitle>General</BlockTitle>
            <List>
            <ListItem link title="View Privacy Policy" onClick={() => setPopupOpened(true)}>
                <Icon md="f7:lock_shield_fill" aurora="f7:lock_shield_fill" ios="f7:lock_shield_fill" slot="media"/>
            </ListItem>
            <ListItem link title="Log Out" onClick={() => window.location.reload()}>
                <Icon md="f7:xmark_circle_fill" aurora="f7:xmark_circle_fill" ios="f7:xmark_circle_fill" slot="media"/>
            </ListItem>
            </List>
        </Page>
);
}