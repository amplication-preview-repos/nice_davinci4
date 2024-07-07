import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomersList } from "./customers/CustomersList";
import { CustomersCreate } from "./customers/CustomersCreate";
import { CustomersEdit } from "./customers/CustomersEdit";
import { CustomersShow } from "./customers/CustomersShow";
import { BuildingsList } from "./buildings/BuildingsList";
import { BuildingsCreate } from "./buildings/BuildingsCreate";
import { BuildingsEdit } from "./buildings/BuildingsEdit";
import { BuildingsShow } from "./buildings/BuildingsShow";
import { CollaboratorsList } from "./collaborators/CollaboratorsList";
import { CollaboratorsCreate } from "./collaborators/CollaboratorsCreate";
import { CollaboratorsEdit } from "./collaborators/CollaboratorsEdit";
import { CollaboratorsShow } from "./collaborators/CollaboratorsShow";
import { ResidentsList } from "./residents/ResidentsList";
import { ResidentsCreate } from "./residents/ResidentsCreate";
import { ResidentsEdit } from "./residents/ResidentsEdit";
import { ResidentsShow } from "./residents/ResidentsShow";
import { RentHomesList } from "./rentHomes/RentHomesList";
import { RentHomesCreate } from "./rentHomes/RentHomesCreate";
import { RentHomesEdit } from "./rentHomes/RentHomesEdit";
import { RentHomesShow } from "./rentHomes/RentHomesShow";
import { RolesList } from "./roles/RolesList";
import { RolesCreate } from "./roles/RolesCreate";
import { RolesEdit } from "./roles/RolesEdit";
import { RolesShow } from "./roles/RolesShow";
import { ContractsList } from "./contracts/ContractsList";
import { ContractsCreate } from "./contracts/ContractsCreate";
import { ContractsEdit } from "./contracts/ContractsEdit";
import { ContractsShow } from "./contracts/ContractsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BuildingManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customers"
          list={CustomersList}
          edit={CustomersEdit}
          create={CustomersCreate}
          show={CustomersShow}
        />
        <Resource
          name="Buildings"
          list={BuildingsList}
          edit={BuildingsEdit}
          create={BuildingsCreate}
          show={BuildingsShow}
        />
        <Resource
          name="Collaborators"
          list={CollaboratorsList}
          edit={CollaboratorsEdit}
          create={CollaboratorsCreate}
          show={CollaboratorsShow}
        />
        <Resource
          name="Residents"
          list={ResidentsList}
          edit={ResidentsEdit}
          create={ResidentsCreate}
          show={ResidentsShow}
        />
        <Resource
          name="RentHomes"
          list={RentHomesList}
          edit={RentHomesEdit}
          create={RentHomesCreate}
          show={RentHomesShow}
        />
        <Resource
          name="Roles"
          list={RolesList}
          edit={RolesEdit}
          create={RolesCreate}
          show={RolesShow}
        />
        <Resource
          name="Contracts"
          list={ContractsList}
          edit={ContractsEdit}
          create={ContractsCreate}
          show={ContractsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
