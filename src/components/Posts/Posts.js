import React, { Component, Fragment } from "react";
import "./Posts.scss";

import { Link } from "react-router-dom";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import { client } from "./../../client";
import Post from "./Post/Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          name: "Nome Cognmome",
          description: "Descrizione",
          img:
            "https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          social: "",
          text: {
            img_bg:
              "https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            name: "Nome Cognome",
            title: "Titolo",
            quote: "Quote kls sk asjkans jkasjkasnasnjk",
            author: {
              name: "Autore Cognome",
              social: "url",
            },
            mainTitle: "Titolo Principale",
            mainText: "Testo principale",
            content: [
              {
                secondaryTitle: "Testo secondario",
                text: ["primo testo", "secondo testo", "terzo tezto"],
                img: ["url1", "url2", "url3"],
              },
            ],
          },
        },
        {
          name: "Nome Cognmome",
          description: "Descrizione",
          img:
            "https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          social: "",
          text: {
            img_bg:
              "https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            name: "Nome Cognome",
            title: "Titolo",
            quote: "Quote kls sk asjkans jkasjkasnasnjk",
            author: {
              name: "Autore Cognome",
              social: "url",
            },
            mainTitle: "Titolo Principale",
            mainText: "Testo principale",
            content: [
              {
                secondaryTitle: "Testo secondario",
                text: ["primo testo", "secondo testo", "terzo tezto"],
                img: ["url1", "url2", "url3"],
              },
            ],
          },
        },
      ],
      postsContent: [],
      showPost: false,
      postContent: [],
    };
  }

  componentDidMount() {
    client
      .getEntries({ content_type: "posts" })
      .then((res) => {
        this.setState({
          postsContent: [...res.items],
        });
      })
      .catch(console.error);
  }

  tooglePost = (ele) => {
    this.setState({
      showPost: !this.state.showPost,
      postContent: [ele],
    });
    return;
  };

  render() {
    return (
      <Fragment>
        {this.state.showPost ? (
          <Post
            clickBack={this.tooglePost}
            content={this.state.postContent}
          ></Post>
        ) : (
          <div className="Posts">
            <Container fluid={true}>
              <Row>
                <div className="container-carousel">
                  <Carousel indicators={false}>
                    {this.state.postsContent.length > 0
                      ? this.state.postsContent.map((ele) => {
                          return (
                            <Carousel.Item key={ele.sys.id}>
                              <Col md={12}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src={ele.fields.img.fields.file.url}
                                  />
                                  <Card.Body>
                                    <Card.Title>{ele.fields.title}</Card.Title>
                                    <Card.Text>
                                      <p className="">
                                        {ele.fields.description}
                                      </p>
                                    </Card.Text>

                                    <div className="button-bg">
                                      <button
                                        onClick={() => {
                                          this.tooglePost(ele);
                                        }}
                                        className="button"
                                      >
                                        LEGGI L'ARTICOLO
                                      </button>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Carousel.Item>
                          );
                        })
                      : null}
                  </Carousel>
                </div>
              </Row>
              <Row>
                {/* Recent Posts */}

                {this.state.postsContent.map((ele) => {
                  console.log("dentro il map", ele);
                  return (
                    <Col md={4} xs={12} key={ele.sys.id}>
                      <div
                        className="Posts__recent-post"
                        onClick={() => {
                          this.tooglePost(ele);
                        }}
                      >
                        <Container fluid={false}>
                          <Row>
                            <Col xs={8} className="no-padding">
                              <div className="container-text">
                                <h2>{ele.fields.name}</h2>
                                <p>{ele.fields.description}</p>
                              </div>
                            </Col>
                            <Col xs={4} className="no-padding">
                              <div className="container-img">
                                <img src={ele.fields.img.fields.file.url}></img>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        )}
      </Fragment>
    );
  }
}
export default Posts;
