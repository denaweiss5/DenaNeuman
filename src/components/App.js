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
            <h1>Healthy Habits </h1>
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
          <div>
            <a href="https://dena-wn.medium.com/my-first-ruby-project-337f88bf69e4">
              <img src="https://marsbased.com/images/blog/20200427-ed1e2292.jpg" />
            </a>
          </div>
          <div>
            <a href="https://dena-wn.medium.com/ruby-red-my-favorite-color-bac102e15fe">
              <img src="data:image/jpeg;base64,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" />
            </a>
          </div>
          <div>
            <a href="https://dena-wn.medium.com/how-to-use-an-api-for-beginners-18c1eb2db86e">
              <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" />
            </a>
          </div>
          <div>
            <a href="https://dena-wn.medium.com/so-youve-graduated-a-coding-bootcamp-a4e325ee8f78">
              <img src="https://blog.4tests.com/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-2.11.26-PM.png" />
            </a>
          </div>
          {/* href="https://dena-wn.medium.com/how-to-use-an-api-for-beginners-18c1eb2db86e"
              header="How to Use an API for Beginners"
            >
              <img src='https://miro.medium.com/max/1400/1*9eJmD-SOfwMlb6ciCSNL6A.jpeg'/>
            </Card>
          </div>
          <div className="ruby_red">
            <Card
              href="https://dena-wn.medium.com/so-youve-graduated-a-coding-bootcamp-a4e325ee8f78"
             
            >
              <img  src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg'/>
            </Card>
          </div> */}
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
