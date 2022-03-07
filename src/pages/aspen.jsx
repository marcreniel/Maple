import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Barcode from 'react-barcode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cheerio from 'cheerio';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Card,
  CardContent,
  CardFooter,
  Icon,
  Popup,
  f7,
  BlockFooter,
} from 'framework7-react';
export default () => {
    return(
        <Page name="aspen">
            <Navbar large sliding={false}>
            <NavTitleLarge>Aspen</NavTitleLarge>
            </Navbar>
        </Page>
);
}