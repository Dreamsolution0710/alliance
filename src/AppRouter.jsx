import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import ContactUs from "./components/contactUs/ContactUs";
import OurCompany from "./components/ourCompany/OurCompany";
import News from "./components/News/News";
import BlogPost_October_2020 from "./components/News/BlogPost_October_2020";
import BlogPost_September_2020 from "./components/News/BlogPost_September_2020";
import BlogPost_Auguest_2020 from "./components/News/BlogPost_Auguest_2020";
import BlogPost_July22_2020 from "./components/News/BlogPost_July22_2020";
import BlogPost_June12_2020 from "./components/News/BlogPost_June12_2020";
import BlogPost_June_2020 from "./components/News/BlogPost_June_2020";
// import Productview from "./components/products/productsView/Productview";
import ProductFilms from "./components/products/ProductFilms";
import Academy from "./components/allianceAcademy/Academy";
import Products from "./components/products/Products";
import Representative from "./components/tools/Representative";
import ProductTapes from "./components/products/ProductTapes";
import ProductEdges from "./components/products/ProductEdges";
import Commitment from "./components/ourCompany/Commitment";
import Calculator from "./components/calculator/Calculator";
import NanoTechnology from "./components/ourCompany/NanoTechnology";
import teamData from "/src/assets/team.json";
import OurTeam from "./components/ourCompany/OurTeam";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/" Component={LandingPage} />
      <Route path="/contactus" Component={ContactUs} />
      <Route path="/aboutus" Component={OurCompany} />
      <Route path="/news" Component={News} />
      <Route path="/calculator" Component={Calculator} />
      <Route path="/news/blogview202010" Component={BlogPost_October_2020} />
      <Route path="/news/blogview202009" Component={BlogPost_September_2020} />
      <Route path="/news/blogview202008" Component={BlogPost_Auguest_2020} />
      <Route path="/news/blogview20200722" Component={BlogPost_July22_2020} />
      <Route path="/news/blogview20200612" Component={BlogPost_June12_2020} />
      <Route path="/news/blogview202006" Component={BlogPost_June_2020} />
      <Route path="/academy" Component={Academy} />
      <Route path="/products" Component={Products} />
      {teamData.map((member, index) => (
        <Route
          path={`${member.path}`}
          element={
            <OurTeam
              name={member.name}
              photo={member.src}
              bio={member.bio}
              email={member.email}
              content={member.content}
              phone={member.phone}
              position={member.position}
            />
          }
          key={index}
        />
      ))}
      <Route path="/products/films" Component={ProductFilms} />
      <Route path="/products/tapes" Component={ProductTapes} />
      <Route path="/products/edges" Component={ProductEdges} />
      <Route path="/representative" Component={Representative} />
      <Route path="/commitment" Component={Commitment} />
      <Route path="/nanotech" Component={NanoTechnology} />
    </Routes>
  );
};

export default AppRouter;
