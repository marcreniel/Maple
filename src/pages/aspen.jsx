import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import cheerio from 'cheerio';
import {
  Page,
  Navbar,
  NavTitleLarge,
  List,
  ListItem,
  f7,
  Subnavbar,
  Searchbar
} from 'framework7-react';
export default () => {
    const [classes, setClasses] = useState([]);
    const [popupOpened, setPopupOpened] = useState(false);

    useEffect(async () => {
        try {
        //  let username = await AsyncStorage.getItem('username');
        //  let password = await AsyncStorage.getItem('password');
                try { 
                /*  Do not know if there is a better fix, not giving timeout will 
                cause loadProfile errors in home.jsx due to HTTP request overlap */
                    setTimeout(loadClasses, 500);
                } catch(ex) {
                f7.dialog.alert(`Data refresh failed. Try restarting the application.`);
                }
            }
            catch(ex) {
            f7.dialog.alert(`Data refresh failed. Try restarting the application.`);
        }
    }, []);
    const loadClasses = async (/* username, password */) => {
        const classList = [];
        const getClassList = await axios({method: 'get', headers: { "Content-Type": 'application/json' }, url: '/aspen/portalClassList.do?navkey=academics.classes.list'});
        const $ = cheerio.load(getClassList.data);
        $('#dataGrid').find($('.listCell')).each((index, element)=> {
            classList.push({
              name: $($(element).find($('td'))[1]).text(),
              teacher: $($(element).find($('td'))[2]).text(),
              avg: $($(element).find($('td'))[6]).text(),
              code: $($(element).find($('td'))[1]).attr('id'),
            });
            let mappedClasses = classList.map((element, index) => (
                <ListItem
                key={index}
                mediaItem
                link="#"
                title={element.name}
                subtitle={element.teacher}
                />
            ));
            setClasses(mappedClasses);
          });
    };

    return(
        <Page name="aspen">
            <Navbar large sliding={false}>
            <NavTitleLarge>Aspen</NavTitleLarge>
            <Subnavbar inner={false}>
                <Searchbar
                    searchContainer=".list"
                    searchItem="li"
                    searchIn=".item-title"
                />
            </Subnavbar>
            </Navbar>
            <List>
                <ul>
                    {classes}
                </ul>
            </List>
        </Page>
);
}