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
  const courses = [
    {
      title: "Programming Languages",
      id: "programming",
      description: "All programming language courses",
      modules: [
        { name: "C Programming", pathlink: "/cprogramming",imgPath:"https://tinyurl.com/267qj6ow" },
        { name: "C++ Programming", pathlink: "/cpp" ,imgPath:"https://tinyurl.com/244esgly"},
        { name: "Python Programming", pathlink: "/python", imgPath:"https://media.licdn.com/dms/image/D5612AQHTGcgR9_RlDg/article-cover_image-shrink_600_2000/0/1705826273539?e=2147483647&v=beta&t=hZkuaC9fOago3ij77UdR45nXktn2C_R9nIwYiEGxVpU"},
        { name: "Java Programming", pathlink: "/java" ,imgPath:"https://miro.medium.com/v2/resize:fit:640/format:webp/1*tpWdWWENs7rNjSGX2qadNg.png"},
        { name: "JavaScript Programming", pathlink: "/javascript",imgPath:"https://media.istockphoto.com/id/1492949991/vector/javascript-programming-js-logo-on-blue-binary-background.jpg?s=612x612&w=0&k=20&c=8ULSHmh3ZeAep6qYYsMAlgJH1QRAcA1b3Tt9VdWIsKM=" },
      ],
    },
   
    {
      title: "Domain Specific",
      id: "domainspecific",
      description: "All domain specific course",
      modules: [
        { name: "Web Development", pathlink: "/webdevelopment",imgPath:"https://media.istockphoto.com/id/1169873646/vector/programming-web-banner.jpg?s=612x612&w=0&k=20&c=WOqI33qPlnzKdhxjr235ynOw9DYveoeAPPTcw9WfLMY=" },
        { name: "App Development", pathlink: "/appdevelopment",imgPath:"https://media.istockphoto.com/id/1269463789/vector/smartphone-online-data-analysis-and-management-tool-data-analysis-mobile-application.jpg?s=612x612&w=0&k=20&c=nPQcCGqR9EZplJRL7Oun6sHCTZ4t7YOG6Y5LdHu09N4=" },
        { name: "Game Development", pathlink: "/gamedevelopment",imgPath:"https://media.istockphoto.com/id/1256473398/vector/kids-learning-to-coding-programming-in-online-it-school-engineering-courses-in-internet-for.jpg?s=612x612&w=0&k=20&c=oeUkdgXcTJp-r32NuJ1oUYNaXx9cTHqBY2KX0YXUeNw=" },
        { name: "Robotics & IoT", pathlink: "/roboticsiot" ,imgPath:"https://media.istockphoto.com/id/1070984040/vector/industry-4-0-robot-with-ai-control-production-line-on-factory-robotics-arms.jpg?s=612x612&w=0&k=20&c=M1ejem8105g3CzNpzzIhkmsFYnjVO84p-WeivqCfR8M="},
        { name: "Database Management", pathlink: "/cpp",imgPath:"https://media.istockphoto.com/id/1216332344/vector/vector-black-line-concept-of-internet-technology-dbms.jpg?s=612x612&w=0&k=20&c=dAxWRcLHj59Ab3xZHct_tXihMgZ_itgmO3aK4sFPp-M=" },
      ],
    },
    {
      title: "Foreign Languages",
      id: "foreign",
      description: "All domain specific course",
      modules: [
        { name: "Spanish" ,pathlink:'',imgPath:'https://media.istockphoto.com/id/1453852952/vector/spanish.jpg?s=612x612&w=0&k=20&c=osO54uBF4_OsGvHjbDON15g9lecjS2Jhw7QiaFZjSao='},
        { name: "Chinese" ,pathlink:'',imgPath:'https://media.istockphoto.com/id/1141685362/vector/chinese.jpg?s=612x612&w=0&k=20&c=dpAdCYZpBAHAmwEdb17r1sLY1UFsmK1Iq931YEIPkBs='},
        { name: "French" ,pathlink:'',imgPath:'https://media.istockphoto.com/id/1079735964/vector/french-open-book-with-language-hand-drawn-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=CY0MTKxg5r6wl5rBheTRz7QqN4aSB3YoFumCOSQoqIo='},
        { name: "Italian" ,pathlink:'',imgPath:'https://media.istockphoto.com/id/1134706250/vector/italian-hand-drawn-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=RETVPeB-DHgJaf93QL76Wxqbt1XTaNzK5VjJSuKyH70='},
        { name: "Japanese" ,pathlink:'',imgPath:'https://media.istockphoto.com/id/1404377420/vector/learn-japanese-template.jpg?s=612x612&w=0&k=20&c=4p-Lkqqj2oqOg6sxXik5VXh9GVDzqZAtY6SXmEZLgGU='},
        { name: "German" ,pathlink:'',imgPath:'https://media.istockphoto.com/id/1096979810/vector/german-hand-drawn-doodles-and-lettering.jpg?s=2048x2048&w=is&k=20&c=9BKEcjhHMifK-AamvsXX5Om8_ljNHcy4aDQFPIoez1Y='},
      ],
    },
    {
      title: "General Skills",
      id: "generalskill",
      description: "All domain specific course",
      modules: [
        { name: "MS-Word" ,pathlink:'',imgPath:'https://media.istockphoto.com/id/1155112005/vector/microsoft-office-icon.jpg?s=612x612&w=0&k=20&c=iofwzjqQN5hNQ6yIr8GYA1cNR-9KSjy59vavxafv1uc='},
        { name: "MS-Excel",pathlink:'',imgPath:'https://media.istockphoto.com/id/1155111978/vector/microsoft-office-icon.jpg?s=612x612&w=0&k=20&c=YKZRKvmfbjYoun_sNgQEwnCahmvuaCP7yhsq4eEHJqw=' },
        { name: "MS-Powerpoint" ,pathlink:'',imgPath:'https://media.istockphoto.com/id/1155112000/vector/microsoft-office-icon.jpg?s=612x612&w=0&k=20&c=qaaPloNPLqpGQa4EJGLsFZPzz2T4w3E4GR88Zse6NJs='},
        { name: "Canva",pathlink:'',imgPath:'https://res-academy.cache.wpscdn.com/images/seo_posts/20231103/ba9605ac7b8f7b38b585106817bd3b2b.png' },
        { name: "Photoshop",pathlink:'',imgPath:'https://www.waca.associates/en/wp-content/uploads/2021/02/photoshop-history-860x573.jpg' },
      ],
    },
    {
      title: "21st Century Skills",
      id: "lifeskill",
      description: "All domain specific course",
      modules: [
        { name: "Personality Development",pathlink:'',imgPath:'https://media.istockphoto.com/id/911529646/vector/super-businessman.jpg?s=2048x2048&w=is&k=20&c=hrGH08Vqc9IbYHLQXc--6iPuBEnN6PsW-pvoAaGlhGw=' },
        { name: "Communication Skills",pathlink:'',imgPath:'https://media.istockphoto.com/id/1162009708/vector/flat-design-concept-of-meeting-business-presentation-training-annual-report.jpg?s=612x612&w=0&k=20&c=M3o3FJhyLPycL_SrlKLqbcrtJnHgJl4GvruthY4O8ro=' },
        { name: "Abacus",pathlink:'',imgPath:'https://media.istockphoto.com/id/1266190051/vector/abacus-soroban-for-learning-mental-arithmetic-for-kids-concept-of-illustration-of-the.jpg?s=612x612&w=0&k=20&c=HRfOGapf76tr_Nf375dypRQ9tuQgsvFcg-ZAIgyJVuU=' },
        { name: "Vedic Maths",pathlink:'',imgPath:'https://media.istockphoto.com/id/1045662318/vector/the-pi-symbol-mathematical-constant-irrational-number-greek-letter-and-many-formulas.jpg?s=612x612&w=0&k=20&c=lEnY5FBnFRMvOMKZ5mawoLg9X-tgLCifVdRtcKr1Np4=' },
        { name: "Critical Thinking" ,pathlink:'',imgPath:'https://media.istockphoto.com/id/1139877453/vector/artificial-intelligence-learning.jpg?s=612x612&w=0&k=20&c=VQ-Aa8M52Mwhc8fmuERpfpA8S1f5Qf8V3ohBOU9qImc='},
      ],
    },
  ];
  const contents=[
    "Basic",
    "Loops & Conditional statements",
    "Functions & Pointers",
    "Object Oriented Programming",
    "Advance Concepts",
    "Final Projects",
  ];

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
              <CourseContent course="Programming" courseLink='/courses/programming'    title="C++ Programming"  description="Description"  imgLink={require("./assets/cpp programming.jpg")}  lectureCount="15"  contents={contents}/>}>
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
              <CourseContent course="Domain Specific" courseLink='/courses/domainspecific'  title="Web Developement"  description="Description"  imgLink={require("./assets/webd.jpg")}  lectureCount="15"  contents={contents}/>}>
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


        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
