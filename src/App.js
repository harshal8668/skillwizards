import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import CourseCard from "./Components/CourseCard";
import CourseContent from "./Components/CourseContent";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const {
    courses,
    domainspecificContent,
    foreignLanguageContent,programmingContents
  } = require("./data");

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

          <Route
            exact
            path="/courses"
            element={<CourseCard courses={courses} />}
          ></Route>
          <Route
            exact
            path="/courses/programming"
            element={<CourseCard courses={programmingCatalog} />}
          ></Route>
          <Route
            exact
            path="/courses/domainspecific"
            element={<CourseCard courses={domainCatalog} />}
          ></Route>
          <Route
            exact
            path="/courses/foreignlanguages"
            element={<CourseCard courses={foreignCatalog} />}
          ></Route>
          <Route
            exact
            path="/courses/lifeskill"
            element={<CourseCard courses={lifeCatalog} />}
          ></Route>
          <Route
            exact
            path="/courses/generalskill"
            element={<CourseCard courses={generalCatalog} />}
          ></Route>

          <Route
            exact
            path="/cprogramming"
            element={
              <CourseContent
                course="Programming"
                courseLink="/courses/programming"
                title="C  Programming"
                imgLink="https://tinyurl.com/2pqsymzw"
                lectureCount="15"
                contents={programmingContents.c}
              />
            }
          ></Route>

          <Route
            exact
            path="/cpp"
            element={
              <CourseContent
                course="Programming"
                courseLink="/courses/programming"
                title="C++ Programming"
                imgLink="https://tinyurl.com/2kf3vfy3"
                lectureCount="15"
                contents={programmingContents.cpp}
              />
            }
          ></Route>

          <Route
            exact
            path="/python"
            element={
              <CourseContent
                course="Programming"
                courseLink="/courses/programming"
                title="Python Programming"
                imgLink="https://tinyurl.com/2fjh4g2f"
                lectureCount="15"
                contents={programmingContents.python}
              />
            }
          ></Route>

          <Route
            exact
            path="/java"
            element={
              <CourseContent
                course="Programming"
                courseLink="/courses/programming"
                title="Java Programming"
                imgLink="https://media.licdn.com/dms/image/D5612AQEbwrBQ8eGYug/article-cover_image-shrink_720_1280/0/1714367817877?e=1724889600&v=beta&t=BDxjDt5GpffC_QPtDG2M2RCHwLxCW6JNr4qcvQBgKRw"
                lectureCount="15"
                contents={programmingContents.java}
              />
            }
          ></Route>

          <Route
            exact
            path="/javascript"
            element={
              <CourseContent
                course="Programming"
                courseLink="/courses/programming"
                title="JavaScript Programming"
                imgLink="https://tinyurl.com/2k8wu8xm"
                lectureCount="15"
                contents={programmingContents.javascript}
              />
            }
          ></Route>

          <Route
            exact
            path="/webdevelopment"
            element={
              <CourseContent
                course="Domain Specific"
                courseLink="/courses/domainspecific"
                title="Web Developement"
                description="Description about web development what it is "
                imgLink="https://media.istockphoto.com/id/1169873646/vector/programming-web-banner.jpg?s=612x612&w=0&k=20&c=WOqI33qPlnzKdhxjr235ynOw9DYveoeAPPTcw9WfLMY="
                lectureCount="15"
                contents={domainspecificContent.webContent}
              />
            }
          ></Route>

          <Route
            exact
            path="/appdevelopment"
            element={
              <CourseContent
                course="Domain Specific"
                courseLink="/courses/domainspecific"
                title="App Development"
                imgLink="https://tinyurl.com/2op77tza"
                lectureCount="15"
                contents={domainspecificContent.appContent}
              />
            }
          ></Route>

          <Route
            exact
            path="/gamedevelopment"
            element={
              <CourseContent
                course="Domain Specific"
                courseLink="/courses/domainspecific"
                title="Game Development"
                imgLink="https://media.istockphoto.com/id/1256473398/vector/kids-learning-to-coding-programming-in-online-it-school-engineering-courses-in-internet-for.jpg?s=612x612&w=0&k=20&c=oeUkdgXcTJp-r32NuJ1oUYNaXx9cTHqBY2KX0YXUeNw="
                lectureCount="15"
                contents={domainspecificContent.gameContent}
              />
            }
          ></Route>

          <Route
            exact
            path="/roboticsiot"
            element={
              <CourseContent
                course="Domain Specific"
                courseLink="/courses/domainspecific"
                title="Robotics and IoT"
                imgLink="https://media.istockphoto.com/id/1070984040/vector/industry-4-0-robot-with-ai-control-production-line-on-factory-robotics-arms.jpg?s=612x612&w=0&k=20&c=M1ejem8105g3CzNpzzIhkmsFYnjVO84p-WeivqCfR8M="
                lectureCount="15"
                contents={domainspecificContent.roboticsContent}
              />
            }
          ></Route>

          <Route
            exact
            path="/dbms"
            element={
              <CourseContent
                course="Domain Specific"
                courseLink="/courses/domainspecific"
                title="Database Management Systems"
                imgLink="https://media.istockphoto.com/id/1216332344/vector/vector-black-line-concept-of-internet-technology-dbms.jpg?s=612x612&w=0&k=20&c=dAxWRcLHj59Ab3xZHct_tXihMgZ_itgmO3aK4sFPp-M="
                lectureCount="15"
                contents={domainspecificContent.dbms}
              />
            }
          ></Route>

          <Route
            exact
            path="/french"
            element={
              <CourseContent
                course="Foreign Languages"
                courseLink="/courses/foreignlanguages"
                title="French Language"
                imgLink="https://cdn.ila-france.com/wp-content/uploads/2018/01/Learn-French-Comprehension.jpg"
                lectureCount="15"
                contents={foreignLanguageContent.frenchContent}
              />
            }
          ></Route>

          <Route
            exact
            path="/german"
            element={
              <CourseContent
                course="Foreign Languages"
                courseLink="/courses/foreignlanguages"
                title="German Language"
                imgLink="https://www.cosmolingua.in/wp-content/uploads/2023/01/Learn-German.jpg"
                lectureCount="15"
                contents={foreignLanguageContent.germanContent}
              />
            }
          ></Route>

          <Route
            exact
            path="/spanish"
            element={
              <CourseContent
                course="Foreign Languages"
                courseLink="/courses/foreignlanguages"
                title="Spanish Language"
                imgLink="https://assets.website-files.com/5f3d3713427af43e4ebfd076/629e3d602494caf0b1446489_0610_Teaching-Spanish_Hero_3.jpg"
                lectureCount="15"
                contents={foreignLanguageContent.spanishContent}
              />
            }
          ></Route>

          <Route
            exact
            path="/chinese"
            element={
              <CourseContent
                course="Foreign Languages"
                courseLink="/courses/foreignlanguages"
                title="Chinese Language"
                imgLink="https://t4.ftcdn.net/jpg/01/82/18/29/240_F_182182936_ohV2Lec20xosrwjV3kIkdemDFy17JZ9y.jpg"
                lectureCount="15"
                contents={foreignLanguageContent.chineseContent}
              />
            }
          ></Route>

          <Route
            exact
            path="/japanese"
            element={
              <CourseContent
                course="Foreign Languages"
                courseLink="/courses/foreignlanguages"
                title="Japanese Language"
                imgLink="https://www.cosmolingua.in/wp-content/uploads/2023/01/Learn-Japanese.jpg"
                lectureCount="15"
                contents={foreignLanguageContent.japaneseContent}
              />
            }
          ></Route>

          <Route
            exact
            path="/italian"
            element={
              <CourseContent
                course="Foreign Languages"
                courseLink="/courses/foreignlanguages"
                title="Italian Language"
                imgLink="https://www.cosmolingua.in/wp-content/uploads/2023/01/Learn-Italian.jpg"
                lectureCount="15"
                contents={foreignLanguageContent.italianContent}
              />
            }
          ></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
