import React from 'react';
import {
  Page,
  Views,
  Toolbar,
  Link,
  View,
} from 'framework7-react';
export default () => {

return(
  <Page pageContent={false}>
      {/* Views/Tabs container */}
    <Views tabs>
      {/* Tabbar for switching views-tabs */}
      <Toolbar tabbar labels bottom>
        <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
        <Link tabLink="#view-aspen" iconIos="f7:square_list_fill" iconAurora="f7:square_list_fill" iconMd="material:view_list" text="Aspen" />
        <Link tabLink="#view-settings" iconIos="f7:gear" iconAurora="f7:gear" iconMd="material:settings" text="Settings" />
      </Toolbar>
                          
      {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
      <View id="view-home" tab tabActive url="/home/" />
              
      {/* Catalog View */}
      <View id="view-aspen" name="aspen" tab url="/aspen/" />

      {/* Settings View */}
      <View id="view-settings" name="settings" tab url="/settings/" />
    </Views>
  </Page>
);
};