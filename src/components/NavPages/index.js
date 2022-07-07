import { NavContainer, PageContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const NavPages = () => {
  const home = ["Dashboard", "Balanço", "Sobre nós", "Logout"];
  const dash = ["Balanço", "Sobre nós", "Logout", "Home"];
  const stats = ["Dashboard", "Sobre nós", "Logout", "Home"];
  const about = ["Dashboard", "Balanço", "Logout", "Home"];

  const whichLocation = () => {
    const href = window.location.href;
    if (href === "http://localhost:3000/home") {
      return home;
    } else if (href === "http://localhost:3000/dashboard") {
      return dash;
    } else if (href === "http://localhost:3000/stats") {
      return stats;
    } else if (href === "http://localhost:3000/about") {
      return about;
    }
  };

  const pages = whichLocation();

  const navigate = useNavigate();

  const handleRedirect = (page) => {
    if (page === "Dashboard") {
      //navigate("/dashboard")
    } else if (page === "Balanço") {
      //navigate("/balance")
    } else if (page === "Sobre nós") {
      //navigate("/aboutus")
    } else if (page === "Logout") {
      //abre modal de realmente deseja sair
    } else if (page === "Home") {
      //navigate("/home")
    }
  };

  return (
    <NavContainer>
      {pages.map((page, index) => {
        return page[index] === page[pages.length - 1] ? (
          <PageContainer borderBottom="0" key={index}>
            {page}
          </PageContainer>
        ) : (
          <PageContainer
            onClick={() => handleRedirect(page)}
            borderBottom="0.5px solid black"
            key={index}
          >
            {page}
          </PageContainer>
        );
      })}
    </NavContainer>
  );
};
export default NavPages;
