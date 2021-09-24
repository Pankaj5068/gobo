import {
  Link,
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import inputs from "./Input";
import NewsLetter from "./NewsLetter";
import PageTitle from "./PageTitle";
import Pagination from "./Pagination";
import ProtectedRoute from "./protectedRoute";
import OwlCarousel from "react-owl-carousel";

const all = {
  Footer,
  Banner,
  Header,
  NewsLetter,
  PageTitle,
  Link,
  Switch,
  Route,
  Router,
  Redirect,
  Pagination,
  ProtectedRoute,
  inputs,
  OwlCarousel,
};

export default all;
