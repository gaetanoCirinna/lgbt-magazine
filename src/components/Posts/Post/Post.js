import React from "react";
import "./Post.scss";

import { Container, Row, Col } from "react-bootstrap";

const Post = (props) => {
  console.log("cosa arriva", props.content);
  return (
    <div className="Post">
      <div className="back" onClick={props.clickBack}>
        <span class="material-icons">keyboard_arrow_left</span>
        <span class="material-icons">keyboard_arrow_left</span>
      </div>
      <div>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${props.content[0].fields.img_bg.fields.file.url})`,
          }}
        />
        <div className="text-content">
          <h1 className="title-name">{props.content[0].fields.name}</h1>
          <h1 className="title-name">{props.content[0].fields.name}</h1>
          <h1>{props.content[0].fields.title.toUpperCase()}</h1>

          <blockquote className="blockquote">
            <p>{props.content[0].fields.quote}</p>
          </blockquote>

          <p className="author">
            By <a href="/#">{props.content[0].fields.authorName}</a>
            <button className="btn btn-primary btn-sm">
              <a href={props.content[0].fields.authorSocial}>FOLLOW</a>
            </button>
          </p>

          {props.content[0].fields.postContent.content.map((post, index) => {
            switch (post.nodeType) {
              case "heading-1":
                return (
                  <h1 className="" key={"heading1-" + index}>
                    {post.content[0].value.toUpperCase()}
                  </h1>
                );
                break;
              case "paragraph":
                return (
                  // Qui divide il testo in normale, blold, italic etc. Da incrementare tutto tranne il bold
                  <p key={"paragraph" + index}>
                    {post.content.map((p) => {
                      if (p.marks.length > 0 && p.marks[0].type === "bold") {
                        return <b>{p.value}</b>;
                      } else {
                        return p.value;
                      }
                    })}
                  </p>
                );

              case "heading-2":
                return (
                  <h2 key={"heading2-" + index}>{post.content[0].value}</h2>
                );

              case "embedded-asset-block":
                return (
                  <img
                    key={"embedded-asset-block" + index}
                    className="post-img"
                    src={post.data.target.fields.file.url}
                    alt=""
                  />
                );
              default:
                break;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
