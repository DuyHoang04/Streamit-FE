import Sidebar from "../components/Sidebar/Sidebar";
import "./index.scss";

const PageLayout = ({ children }) => {
  console.log(children);
  return (
    <div className="default__layout-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="page__content">{children}</div>
    </div>
  );
};

export default PageLayout;
