import "../App.css";
import React from "react";
import { Grid, Button, Icon, } from "semantic-ui-react";

class App extends React.Component {
  render() {
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
                src="https://miro.medium.com/fit/c/262/262/1*Qf8xk3kisgOX5UdsQPwCTQ.jpeg"
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
                I am a full stack software engineer with a background in
                psychology. Prior to my career change, I was a Human Resources
                Director. My past experiences gave me the opportunity to
                understand different people and work well with a diverse team.
                When I made the change, I attended a coding bootcamp. Flatiron
                School taught me GRIT, PERSEVERENCE, and HOW TO OVERCOME ANY
                CHALLENGE THROWN MY WAY.
              </h3>
            </Grid.Column>
            <Grid.Column width={5}>
              <p>- MY SKILLS</p>
              <h3>
                Leadership, Communication, Problem-Solving, Analytical-Thinking,
                Team-Player<br></br>
                <br></br>
                Ruby, Rails, Javascript, React, Redux, HTML, CSS
              </h3>
            </Grid.Column>
          </Grid>
        </div>
        <div className="work">
          <Grid>
            <Grid.Column width={4}>
              <p>- WORK EXPERIENCE</p>
            </Grid.Column>
            <Grid.Column width={10} class="work_experience">
              <h2>Human Resources Director</h2>
              <h4>Bria Health Services / July 2019 - October 2020</h4>
              <h4>
                I solved work conflict and maintained positive employee
                relationships. I managed a bi-weekly payroll for 200 employees.
                I ensured legal compliance for the entire facility. I Counseled
                managers and employees in groups and one-on-one meetings. I
                interviewed and on-boarded new employees.
              </h4>
            </Grid.Column>
          </Grid>
        </div>
        <div className="education">
          <Grid>
            <Grid.Column width={4}>
              <p>- EDUCATION</p>
            </Grid.Column>
            <Grid.Column width={10} class="education_experience">
              <Grid.Row>
                <h2>Flatiron School</h2>
                <h4>
                  Full Stack Software Engineering Immersive / February 2021
                </h4>
                <h4>
                  Experienced in Ruby on Rails, Javascript, React, Redux, CSS,
                  HTML, Bootstrap, Semantic-UI, API's, JSON Web tokens, RESTful
                  backends, Client-Side routing.
                </h4>
              </Grid.Row>
              <hr className="hr"></hr>
              <Grid.Row>
                <h2>Baruch College, City University of New York</h2>
                <h4>Bachelor of Arts, Psychology / May 2019</h4>
                <h4>Summa Cum Laude</h4>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </div>
        <div className="projects">
          <h2>- PROJECTS</h2>

          <div className="healthy_habits">
            <h1>Healthy Habits</h1>
            <a
              href="https://github.com/denaweiss5/HealthyHabitsBackend"
              target="_blank"
            >
              GitHub
            </a>
            <a href="https://youtu.be/cfzUZdhdb-o" target="_blank">
              Demo
            </a>
          </div>
          <div className="note_takers">
            <h1>FlatNote</h1>
            <a
              href="https://github.com/denaweiss5/NoteTakersFrontend"
              target="_blank"
            >
              GitHub
            </a>
            <a href="https://youtu.be/Smnn0ZmcNYA" target="_blank">
              Demo
            </a>
           
          </div>
          <div className="local_voyage">
            <h1>Local Voyage</h1>
            <a
              href="https://github.com/denaweiss5/FrontEndLocalVoyage"
              target="_blank"
            >
              GitHub
            </a>
            <a href="https://youtu.be/mnhX_JFRejY" target="_blank">
              Demo
            </a>
          </div>
          <div className="tutor_co">
            <h1>TutorCo</h1>
            <a href="https://github.com/denaweiss5/tutor-co" target="_blank">
              GitHub
            </a>
            <a href="https://youtu.be/rMW-a3ftwqE" target="_blank">
              Demo
            </a>
          </div>
          <div className="dog_breed">
            <h1>Dog Breed 4 You</h1>
            <a
              href="https://github.com/denaweiss5/Dog_Breed_4_You"
              target="_blank"
            >
              GitHub
            </a>
            <a href="https://youtu.be/7pVJ-cFKQ9s" target="_blank">
              Demo
            </a>
          </div>
        </div>
        <div className="blogs">
          <h2>- BLOGS</h2>
       
          <div class="ui card" style={{display: 'inline'}}>
          <div class="content">
            <a class="header" href="https://dena-wn.medium.com/my-first-ruby-project-337f88bf69e4">My First CLI Application</a>
          <div class="meta">
            <p style={{fontStyle: 'italic'}}>Blog post highlighting essential concepts in building a CLI Application in Ruby. A broad overview of Variables, Joiner Tables, and Classes</p>
            </div>
        </div>
          </div>
          <hr/>
          <div class="ui card" style={{display: 'inline'}}>
          <div class="content">
            <a class="header" href="https://dena-wn.medium.com/ruby-red-my-favorite-color-bac102e15fe">
              Ruby Red - My Favorite Color</a>
          <div class="meta">
            <p style={{fontStyle: 'italic'}}>Helper blog for begginers in Ruby explaining the differences between Class methods and Instance methods</p>
            </div>
        </div>
          </div>
          <hr/>
          <div class="ui card" style={{display: 'inline'}}>
          <div class="content">
            <a class="header" href="https://dena-wn.medium.com/how-to-use-an-api-for-beginners-18c1eb2db86e">
              How to Use an API for Beginners</a>
          <div class="meta">
            <p style={{fontStyle: 'italic'}}>Steps outlining how to use a Google Maps API in a Vanilla Javascript application</p>
            </div>
        </div>
          </div>
          <hr/>
          <div class="ui card" style={{display: 'inline'}}>
          <div class="content">
            <a class="header" href="https://dena-wn.medium.com/so-youve-graduated-a-coding-bootcamp-a4e325ee8f78">
              So You've Graduated a Coding Bootcamp
              </a>
          <div class="meta">
            <p style={{fontStyle: 'italic'}}>Advice on what to do now that you have graduated a coding bootcamp and you are on the job hunt </p>
            </div>
        </div>
          </div>
    
    
        </div>

        <div className="contact">
          <p>- CONTACT ME</p>
          <form action="https://github.com/denaweiss5">
            <Button
              style={{ backgroundColor: "rgb(245, 238, 238)", padding: "0px" }}
            >
              <Icon name="github" size="massive" color="black" />
            </Button>
          </form>
          <form action="https://www.linkedin.com/in/dena-weiss-neuman-58a208137/">
            <Button
              style={{ backgroundColor: "rgb(245, 238, 238)", padding: "0px" }}
            >
              <Icon name="linkedin" size="massive" color="black" />
            </Button>
          </form>
          <form action="https://dena-wn.medium.com/">
            <Button
              style={{ backgroundColor: "rgb(245, 238, 238)", padding: "0px" }}
            >
              <Icon name="medium m" size="massive" color="black" />
            </Button>
          </form>
          <form action="mailto:denaweiss5@gmail.com">
            <Button
              style={{ backgroundColor: "rgb(245, 238, 238)", padding: "0px" }}
            >
              <Icon name="mail" size="massive" color="black" />
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
