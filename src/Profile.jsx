import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { ChatDotsFill, PersonPlusFill } from "react-bootstrap-icons";
import baba from "./assets/baba.jpg";
import baini from "./assets/baini.jpg";
import college from "./assets/college.png";
import dani from "./assets/dani.jpg";
import didi from "./assets/didi.jpg";
import friends from "./assets/friends.jpg";
import git from "./assets/git.png";
import haha from "./assets/haha.png";
import instagram from "./assets/instagram.png";
import like from "./assets/like.png";
import location from "./assets/location.png";
import love from "./assets/love.png";
import share from "./assets/share.png";
import me from "./assets/me.jpg";
import mummy from "./assets/mummy.jpg";
import pp from "./assets/Mypp.jpg";
import neha from "./assets/neha.jpg";
import original from "./assets/originalpp.jpg";
import sagar from "./assets/sagar.jpg";

const mutualFriends = [
  { image: neha },
  { image: mummy },
  { image: baba },
  { image: didi },
  { image: baini },
  { image: sagar },
  { image: dani },
];
const menu = [
  "Posts",
  "About",
  "Friends",
  "Photos",
  "Videos",
  "Check-ins",
  "More",
];
const intro = [
  { icon: college, label: "Studied at Bal Kalyan Vidhya Mandir(BKVM)" },
  { icon: college, label: "Went to Arniko College, Biratnagar" },
  { icon: location, label: "Biratnagar , Nepal" },
  { icon: instagram, label: "samrat166" },
  { icon: git, label: "_samrat_ojha" },
];

export default function Profile() {
  return (
    <div
      className="gradient-custom-2"
      style={{ backgroundColor: "#9de2ff", cursor: "pointer" }}
    >
      <div
        className="py-5 h-100"
        style={{ width: "900px", margin: "0px auto" }}
      >
        <Card>
          <div
            className="rounded-top text-white d-flex cover-photo "
            style={{ backgroundColor: "gray", height: "180px" }}
          >
            <div
              style={{ position: "relative", marginTop: "125px" }}
              className="ms-4 "
            >
              <span
                style={{
                  position: "absolute",
                  top: "180%",
                  right: "2%",
                  height: "23px",
                  borderRadius: "50%",
                  width: "23px",
                  backgroundColor: "#31A24C",
                  zIndex: 1000,
                  border: "3px solid white",
                }}
              />
              <Image
                src={pp}
                alt="Generic placeholder image"
                className=" img-thumbnail"
                fluid
                style={{
                  width: "155px",
                  height: "150px",
                  zIndex: "1",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div
              className="ms-1 text-dark"
              style={{ marginTop: "190px", zIndex: 100 }}
            >
              <h3 style={{ fontWeight: "700", fontSize: "24px" }}>
                Samrat Ojha
              </h3>
              <h5
                style={{
                  fontWeight: "550",
                  fontSize: "16px",
                  marginTop: "-8px",
                }}
              >
                1.6k friends. 17 mutual
              </h5>
              <div
                style={{
                  display: "flex",
                  marginTop: "-10px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {mutualFriends.map((friend, index) => {
                    return (
                      <Image
                        src={friend.image}
                        alt="Generic placeholder image"
                        className=" img-thumbnail"
                        fluid
                        style={{
                          width: "35px",
                          height: "35px",
                          marginLeft: "-10px",
                          zIndex: "1",
                          borderRadius: "50%",
                          border: "0px",
                        }}
                      />
                    );
                  })}
                </div>
                <div style={{ marginLeft: "300px" }}>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#1a6ed8" }}
                  >
                    <PersonPlusFill
                      style={{
                        marginTop: "-3px",
                        marginRight: "2px",
                      }}
                    />
                    Add friend
                  </button>{" "}
                  <button
                    class="btn"
                    style={{
                      marginLeft: "8px",
                      backgroundColor: "#D8DADF",
                      color: "black",
                    }}
                  >
                    <ChatDotsFill
                      style={{
                        marginTop: "-3px",
                        marginRight: "2px",
                        height: "15px",
                        width: "17px",
                      }}
                    />
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: "100px", backgroundColor: "" }} />
          <div
            style={{
              height: "40px",
              display: "flex",
              backgroundColor: "",
              borderTop: "1px solid lightgray",
            }}
          >
            {menu.map((menus, index) => {
              return (
                <h3
                  style={{
                    marginLeft: "15px",
                    fontWeight: "500",
                    fontSize: "16px",
                    marginTop: "10px",
                    color: index === 0 && " #1876F2",

                    borderBottom: index === 0 && "2px solid #1876F2",
                  }}
                >
                  {menus}
                </h3>
              );
            })}
          </div>
        </Card>
        <div style={{ padding: "6px 1px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                width: "49%",
                borderRadius: "4px",
                backgroundColor: "white",
                padding: "2px 5px 5px 5px",
                height: "225px",
              }}
            >
              <h3 style={{ fontWeight: "600", fontSize: "16px" }}>Intro</h3>
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "13px",
                  marginTop: "-6px",
                }}
              >
                || Stay humble. Be kind. Work hard. ||
              </h3>
              <hr />
              {intro.map((i) => {
                return (
                  <div>
                    <Image
                      src={i.icon}
                      alt="Generic placeholder image"
                      className=" img-thumbnail"
                      fluid
                      style={{
                        width: "25px",
                        height: "25px",
                        marginTop: "2px",
                        marginLeft: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {i.label}
                    </span>
                  </div>
                );
              })}
              <div
                style={{
                  width: "103%",
                  marginLeft: "-5px",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  marginTop: "13px",
                  padding: "2px 5px",
                  height: "160px",
                }}
              >
                <h3 style={{ fontWeight: "600", fontSize: "16px" }}>Photos</h3>
                <Row>
                  <Col lg={6} md={6} xs={6}>
                    {" "}
                    <Image
                      src={me}
                      alt="Generic placeholder image"
                      className=" img-thumbnail photos"
                    />
                  </Col>{" "}
                  <Col lg={6} md={6} xs={6}>
                    {" "}
                    <Image
                      src={friends}
                      alt="Generic placeholder image"
                      className=" img-thumbnail photos"
                    />
                  </Col>
                </Row>
              </div>
            </div>
            {/* Post section */}
            <div
              style={{
                width: "50%",
                backgroundColor: "white",
                borderRadius: "4px",
                padding: "2px 5px",
                height: "340px",
              }}
            >
              <h3 style={{ fontWeight: "600", fontSize: "16px" }}>Posts</h3>
              <div className="d-flex">
                <Image
                  src={pp}
                  alt="Generic placeholder image"
                  className=" img-thumbnail"
                  fluid
                  style={{
                    width: "35px",
                    height: "35px",
                    zIndex: "1",
                    borderRadius: "50%",
                    border: "0px",
                  }}
                />
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    Samrat Ojha
                  </span>{" "}
                  updated his profile picture
                  <h6
                    style={{
                      fontWeight: "600",
                      fontSize: "10px",
                      marginTop: "-2px",
                    }}
                  >
                    October 16,1999
                  </h6>
                </p>
              </div>
              <h6
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  marginTop: "-4px",
                  marginLeft: "10px",
                }}
              >
                I woke up and… posted this.
              </h6>
              <Image
                src={original}
                alt="Generic placeholder image"
                className=" img-thumbnail"
                fluid
                style={{
                  width: "440px",
                  height: "220px",
                  border: "0px",
                }}
              />
              <div className="d-flex">
                <Image
                  src={like}
                  alt="Generic placeholder image"
                  className=" img-thumbnail"
                  fluid
                  style={{
                    width: "28px",
                    height: "28px",
                    zIndex: "1",
                    marginTop: "-1px",
                  }}
                />{" "}
                <Image
                  src={love}
                  alt="Generic placeholder image"
                  className=" img-thumbnail"
                  fluid
                  style={{
                    width: "25px",
                    height: "25px",
                    zIndex: "1",
                    marginLeft: "-5px",
                  }}
                />{" "}
                <Image
                  src={haha}
                  alt="Generic placeholder image"
                  className=" img-thumbnail"
                  fluid
                  style={{
                    width: "28px",
                    height: "28px",
                    marginLeft: "-5px",
                    zIndex: "1",
                    marginTop: "-1px",
                  }}
                />
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    marginLeft: "2px",
                  }}
                >
                  You and 165 others
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "102.5%",
                  backgroundColor: "white",
                  padding: "2px 5px",
                  marginLeft: "-5px",
                  height: "40px",
                }}
              >
                <div>
                  <Image
                    src={love}
                    alt="Generic placeholder image"
                    className=" img-thumbnail"
                    fluid
                    style={{
                      width: "25px",
                      height: "25px",
                      zIndex: "1",
                      marginLeft: "-5px",
                    }}
                  />{" "}
                  <span style={{ color: "red", fontSize: "14px" }}>Love</span>
                </div>{" "}
                <div>
                  <Image
                    src={share}
                    alt="Generic placeholder image"
                    className=" img-thumbnail"
                    fluid
                    style={{
                      width: "25px",
                      height: "25px",
                      zIndex: "1",
                      marginLeft: "-5px",
                    }}
                  />{" "}
                  <span style={{ fontSize: "14px" }}>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
