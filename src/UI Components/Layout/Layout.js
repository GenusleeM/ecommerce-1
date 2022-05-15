import { useContext } from "react";
import { DataContext } from "../../UI Components/DataProvider/DataProvider";
import LayoutClient from "../LayoutClient/LayoutClient";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";

const Layout = (props) => {
  // Data Context Hooks
  const newData = useContext(DataContext);
  return newData.adminPage === false ? (
    <LayoutClient>{props.children}</LayoutClient>
  ) : (
    <LayoutAdmin>{props.children}</LayoutAdmin>
  );
};

export default Layout;
