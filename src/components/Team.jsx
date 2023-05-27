import React from "react";
import "../style/Team.scss";
import user from "../assets/user.jpg";

function changeBackground(e) {
  e.removeC = 'red';
}

function Employee({ name, position, className, img }) {
  return (
    <div
      onMouseOver={changeBackground}
      className= {'employeeCard before ' + className}>
      <img src={img} alt={name + "'s photo"} />
      <div className="details fc f22">
        <h1>{name}</h1>
        <h2>{position}</h2>
      </div>
    </div>
  );
}

function Text({ txt }) {
  return (
    <div className="letter flex f22">
      <p>{txt}</p>
    </div>
  );
}

const Team = () => {
  return (
    <div className="containerTeam flex fr">
      <div className="titleTeamSection f22 fc">
        <Text txt={"T"} />
        <Text txt={"E"} />
        <Text txt={"A"} />
        <Text txt={"M"} />
      </div>

      <div className="employeeContainer fr">
        <Employee
          name="Prelipcian Tiberiu"
          position="CEO"
          className={"red"}
          img={user}
        />
        <Employee
          name="Flavius Halip"
          position="Manager"
          className={"blue"}
          img={user}
        />
        <Employee
          name="Daniel Cocos"
          position="Designer UI/UX"
          className={"green"}
          img={user}
        />
        <Employee
          name="Emanuel Prelpcian"
          position="Senior ReactJs Developer"
          className={"yellow"}
          img={user}
        />
        <Employee
          name="Boicu Luca"
          position="Senior Flutter Developer"
          className={"yellow"}
          img={user}
        />
        <Employee
          name="Vlad Lefter"
          position="Backend Developer"
          className={"green"}
          img={user}
        />
        <Employee
          name="Timy Ifrim"
          position="Frontend Developer"
          className={"blue"}
          img={user}
        />
        <Employee
          name="Paola Boicu"
          position="Marketing Manager"
          className={"red"}
          img={user}
        />
      </div>
    </div>
  );
};

export default Team;
