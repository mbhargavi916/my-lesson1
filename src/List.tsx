import * as React from "react";
import "./List.scss";

function Button({ children }) {
  return <button className="Button">{children}</button>;
}

function UserRow({ name, image }) {
  return (
    <div className="UserRow">
      <div>
        <div
          className="Avatar"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
      <a>
        <h3 className="UserName">{name}</h3>
        <div className="description">
          Co-founder Digital Insurance Agenda. Speaker / author Customer
          Engagement, Innovation, Fintech, Insurtech.
        </div>
        <div className="connection">Connected 2 days ago</div>
      </a>

      <div>
        <Button>Message</Button>
      </div>
    </div>
  );
}
export function List() {
  return (
    //hello world
    <div className="List">
      <UserRow
        name="Roger Peverelli"
        image="https://media-exp1.licdn.com/dms/image/C5603AQH6gA3Y-RaJHQ/profile-displayphoto-shrink_100_100/0?e=1593648000&v=beta&t=AtoGUQSPWSY_gPJm-PwZEvoE3KdZxrZ0k1YFTgryoWA"
      />
      <UserRow
        name="Marieke Wisse"
        image="https://media-exp1.licdn.com/dms/image/C5603AQHQcxmIGn0JoA/profile-displayphoto-shrink_100_100/0?e=1593648000&v=beta&t=1mdd-H7jAsDsYTI0ieBJGngozRTS7HnnqQ-Ka8BJAUA"
      />
      <UserRow
        name="Rahul Basu"
        image="https://media-exp1.licdn.com/dms/image/C4D03AQHLhl663XYRzQ/profile-displayphoto-shrink_100_100/0?e=1593648000&v=beta&t=nZWLUm3I9cXBQpsaRGazb5t3q1aa21WM6B6uGOHpVVU"
      />
    </div>
  );
}
