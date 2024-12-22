import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: "22rem",
    margin: "15px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
  };

  const imageStyle = {
    height: "200px",
    width: "50%",
    objectFit: "cover",
    margin: "0 auto", // Centre horizontalement
    display: "block", // Nécessaire pour centrer avec margin auto
  };
  

  const badgeStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#007bff",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "12px",
  };

  const infoStyle = {
    padding: "20px",
    textAlign: "center",
  };

  const nameStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#343a40",
  };

  const detailStyle = {
    fontSize: "0.9rem",
    color: "#6c757d",
    margin: "5px 0",
  };

  return (
    <Card style={cardStyle}>
      <div style={{ position: "relative" }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={`${name}'s image`}
          style={imageStyle}
        />
        <div style={badgeStyle}>#{jerseyNumber}</div>
      </div>
      <Card.Body style={infoStyle}>
        <Card.Title style={nameStyle}>{name}</Card.Title>
        <Card.Text style={detailStyle}>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text style={detailStyle}>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text style={detailStyle}>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150",
};

export default Player;
