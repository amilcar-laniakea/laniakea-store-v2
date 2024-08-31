import { InfoCircleOutlined } from "@ant-design/icons";
import { ContextGlobalConsumer } from "@context/Global";
import ModalGeneralInfo from "@components/ModalGeneralInfo";
import Logo from "@components/Logo";
import MainMenu from "./components/MainMenu";
import CartIcon from "./components/CartIcon";
import MenuDrawer from "./components/MenuDrawer";
import useServiceAction from "@hooks/useServiceAction";
import "./style.scss";

const Header = () => {
  const { isDate, HandleModalGeneralInfo } = ContextGlobalConsumer();

  const {
    data: categories,
    error,
    loading,
  } = useServiceAction({ collectionName: "laniakea-storage-db-categories" });

  return (
    <>
      <div className="navbar-vertical-spacer"></div>
      <div className="navbar-global-container">
        <div className="navbar-main-container">
          <div className="navbar-drawer-container">
            {categories && categories.length > 0 && (
              <MenuDrawer categories={categories} />
            )}
          </div>
          <Logo
            img={
              "https://firebasestorage.googleapis.com/v0/b/laniakea-coder.appspot.com/o/laniakea-coder%2Fmain-logos%2Fark-store-white.png?alt=media&token=cb0380e4-4649-4308-a662-406a81cad11b"
            }
          />

          <div className="global-spacer" />
          <div className="navbar-main-menu-container">
            {loading ? (
              <span className="navbar-menu-link">loading...</span>
            ) : (
              <>{!error && <MainMenu categories={categories} />}</>
            )}
          </div>
          <CartIcon />
          <InfoCircleOutlined
            className="navbar-info-help"
            onClick={HandleModalGeneralInfo}
          />
        </div>
      </div>
      <ModalGeneralInfo
        info={{
          title: "Acerca de:",
          subtitle: "Amilcar Barahona",
          description: `@${isDate} Coderhouse`,
          sub_description: "All rights reserved.",
        }}
      />
    </>
  );
};

export default Header;
