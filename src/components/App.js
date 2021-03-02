import "../App.css";
// import Navbar from './Navbar.js'
// import About from './About.js'
import { Grid } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <div class="welcome">
        <Grid>
          <Grid.Column width={9}>
            <h1>HI, I'M DENA NEUMAN.</h1>
            <h3>A Full Stack Software Engineer</h3>
          </Grid.Column>
          <Grid.Column width={3}>
            <img
              className="image"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFaKEKhH-bvww/profile-displayphoto-shrink_800_800/0/1614699152318?e=1620259200&v=beta&t=L0pFGmHCkp-MOElRqEF_6rCSqDGbffW1hDuzq84NKDw"
              alt="picture of me"
            />
          </Grid.Column>
        </Grid>
      </div>

      <div className="background">
        <Grid>
          <Grid.Column width={9}>
            <p>- MY BACKGROUND</p>
            <h3>
              I am a full stack software engineer with a background in psychology. 
              Prior to my career change, I was a Human Resources Director. 
              My past experiences gave me the opportunity to understand different people 
              and work well with a diverse team. When I made the change, I attended a coding
              bootcamp. Flatiron School taught me GRIT, PERSEVERENCE, and HOW TO OVERCOME ANY CHALLENGE THROWN MY WAY. 
      
            </h3>
          </Grid.Column>
          <Grid.Column width={5}>
            <p>- MY SKILLS</p>
            <h3>
              Leadership,
              Communication,
              Problem-Solving,
              Analytical-Thinking,
              Team-Player<br></br><br></br>
              Ruby,
              Rails,
              Javascript,
              React,
              Redux,
              HTML,
              CSS
            </h3>
          </Grid.Column>
        </Grid>
      </div>
      <div className='work'>
        <Grid>
          <Grid.Column width={4}>
          <p>- WORK EXPERIENCE</p>
          </Grid.Column>
          <Grid.Column width={10} class='work_experience'>
    <h2>
      Human Resources Director
    </h2>
    <h4>
      Bria Health Services / July 2019 - October 2020
    </h4>
          </Grid.Column>
        </Grid>
    
      </div>
    </div>
  );
}

export default App;
