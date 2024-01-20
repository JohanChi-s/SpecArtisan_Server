import React, { useEffect, useState, useRef } from "react";
import { Admin, AuthProvider, DataProvider, Resource } from "react-admin";
import Keycloak from "keycloak-js";
import {
  keycloakClient,
  keycloakAuthProvider,
} from "./auth-provider/ra-auth-keycloak";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { WorkspaceList } from "./workspace/WorkspaceList";
import { WorkspaceCreate } from "./workspace/WorkspaceCreate";
import { WorkspaceEdit } from "./workspace/WorkspaceEdit";
import { WorkspaceShow } from "./workspace/WorkspaceShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { CollectionList } from "./collection/CollectionList";
import { CollectionCreate } from "./collection/CollectionCreate";
import { CollectionEdit } from "./collection/CollectionEdit";
import { CollectionShow } from "./collection/CollectionShow";
import { MemberList } from "./member/MemberList";
import { MemberCreate } from "./member/MemberCreate";
import { MemberEdit } from "./member/MemberEdit";
import { MemberShow } from "./member/MemberShow";
import { ArchivedList } from "./archived/ArchivedList";
import { ArchivedCreate } from "./archived/ArchivedCreate";
import { ArchivedEdit } from "./archived/ArchivedEdit";
import { ArchivedShow } from "./archived/ArchivedShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { ActionEventList } from "./actionEvent/ActionEventList";
import { ActionEventCreate } from "./actionEvent/ActionEventCreate";
import { ActionEventEdit } from "./actionEvent/ActionEventEdit";
import { ActionEventShow } from "./actionEvent/ActionEventShow";
import { PositionList } from "./position/PositionList";
import { PositionCreate } from "./position/PositionCreate";
import { PositionEdit } from "./position/PositionEdit";
import { PositionShow } from "./position/PositionShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const [keycloak, setKeycloak] = useState<Keycloak | null>();
  const authProvider = useRef<AuthProvider | null>();

  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const initKeyCloakClient = async () => {
      await keycloakClient.init({
        onLoad: "login-required",
      });
      authProvider.current = keycloakAuthProvider(keycloakClient, {});
      setKeycloak(keycloakClient);
    };
    if (!keycloak) {
      initKeyCloakClient();
    }
  }, [keycloak]);

  if (!dataProvider || !authProvider.current) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <Admin
        title={"Core Services"}
        dataProvider={dataProvider}
        authProvider={authProvider.current}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Workspace"
          list={WorkspaceList}
          edit={WorkspaceEdit}
          create={WorkspaceCreate}
          show={WorkspaceShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="Collection"
          list={CollectionList}
          edit={CollectionEdit}
          create={CollectionCreate}
          show={CollectionShow}
        />
        <Resource
          name="Member"
          list={MemberList}
          edit={MemberEdit}
          create={MemberCreate}
          show={MemberShow}
        />
        <Resource
          name="Archived"
          list={ArchivedList}
          edit={ArchivedEdit}
          create={ArchivedCreate}
          show={ArchivedShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="ActionEvent"
          list={ActionEventList}
          edit={ActionEventEdit}
          create={ActionEventCreate}
          show={ActionEventShow}
        />
        <Resource
          name="Position"
          list={PositionList}
          edit={PositionEdit}
          create={PositionCreate}
          show={PositionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
