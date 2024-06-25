import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import CourseCard from "./Components/CourseCard";
import CourseContent from "./Components/CourseContent";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

  const { courses, contents } = require('./data');

  const programmingCatalog = [courses[0]];
  const domainCatalog = [courses[1]];
  const foreignCatalog = [courses[2]];
  const generalCatalog = [courses[3]];
  const lifeCatalog = [courses[4]];
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>

          <Route  exact  path="/courses"  element={<CourseCard courses={courses} />}></Route>
          <Route  exact  path="/courses/programming"  element={<CourseCard courses={programmingCatalog} />}></Route>
          <Route  exact  path="/courses/domainspecific"  element={<CourseCard courses={domainCatalog} />}></Route>
          <Route  exact  path="/courses/foreignlanguages"  element={<CourseCard courses={foreignCatalog} />}></Route>
          <Route  exact  path="/courses/lifeskill"  element={<CourseCard courses={lifeCatalog} />}></Route>
          <Route  exact  path="/courses/generalskill"  element={<CourseCard courses={generalCatalog} />}></Route>
          
          <Route  exact  path="/cpp"  element={
              <CourseContent course="Programming" courseLink='/courses/programming'    title="C++ Programming"  description="Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description "  imgLink={require("./assets/cpp programming.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/cprogramming"  element={
              <CourseContent course="Programming" courseLink='/courses/programming'  title="C  Programming"  description="Description"  imgLink={require("./assets/cprogramming.png")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/python"  element={
              <CourseContent course="Programming" courseLink='/courses/programming'  title="Python Programming"  description="Description"  imgLink={require("./assets/python.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/java"  element={
              <CourseContent course="Programming" courseLink='/courses/programming'   title="Java Programming"  description="Description"  imgLink={require("./assets/java.webp")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/javascript"  element={
              <CourseContent course="Programming" courseLink='/courses/programming' title="JavaScript Programming"  description="Description"  imgLink={require("./assets/javascript.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/webdevelopment"  element={
              <CourseContent course="Domain Specific" courseLink='/courses/domainspecific'  title="Web Developement"  description="Description about web development what it is "  imgLink={require("./assets/webd.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/appdevelopment"  element={
              <CourseContent course="Domain Specific" courseLink='/courses/domainspecific'  title="App Development"  description="Description"  imgLink={require("./assets/appd.jpeg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/gamedevelopment"  element={
              <CourseContent course="Domain Specific" courseLink='/courses/domainspecific'  title="Game Development"  description="Description"  imgLink={require("./assets/gamed.webp")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/roboticsiot"  element={
              <CourseContent course="Domain Specific" courseLink='/courses/domainspecific' title="Robotics and IoT"  description="Description"  imgLink={require("./assets/robotics.jpeg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/french"  element={
              <CourseContent course="Foreign Languages" courseLink='/courses/foreignlanguages'  title="French Language"  description="Description"  imgLink={require("./assets/french.jpeg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/german"  element={
              <CourseContent course="Foreign Languages" courseLink='/courses/foreignlanguages'  title="German Language"  description="Description"  imgLink={require("./assets/german.jpeg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/spanish"  element={
              <CourseContent course="Foreign Languages" courseLink='/courses/foreignlanguages'  title="Spanish Language"  description="Description"  imgLink={require("./assets/spanish.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/chinese"  element={
              <CourseContent course="Foreign Languages" courseLink='/courses/foreignlanguages'  title="Chinese Language"  description="Description"  imgLink={require("./assets/chinese.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/japanese"  element={
              <CourseContent course="Foreign Languages" courseLink='/courses/foreignlanguages'  title="Japanese Language"  description="Description"  imgLink={require("./assets/japanese.jpeg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/italian"  element={
              <CourseContent course="Foreign Languages" courseLink='/courses/foreignlanguages'  title="Italian Language"  description="Description"  imgLink={require("./assets/italian.jpeg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          


        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
