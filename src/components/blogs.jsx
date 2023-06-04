import * as React from "react";

import Markdown from "markdown-to-jsx";


class Byline extends React.Component {
  render() {
    let name = this.props.name;
    let pfp = this.props.profile;

    return (
      <table className="byline">
        <tbody>
          <tr>
            <td>{name}</td>
            <td>
              <img src={pfp} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class TitleCard extends React.Component {
  render() {
    let unixtime = this.props.timestamp * 1000;
    let title = this.props.title;
    const dateObject = new Date(unixtime);
    let humanDate = dateObject.toLocaleString("en-US", { weekday: "long" }) + ", " + dateObject.toLocaleString("en-US", { month: "long" }) + " " + dateObject.toLocaleString("en-US", { day: "numeric" }) + ", " + dateObject.toLocaleString("en-US", { year: "numeric" });
    return (
      <>
      <h6>{humanDate}</h6>
      <h2 className="post-title">{title}</h2>
      </>
    );
  }
}

class CoverImg extends React.Component {
  render() {
    let img = this.props.src
    
    return (
      <img className="cover" src={img} />
    );
  }
}

class PostBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: "",
      error: null
    };
  }
  
  componentDidMount() {
    let article = this.props.article
    fetch("./src/articles/"+article+".md")
      .then(res => res.text())
      .then(
        (result) => {
          console.log(result.split('\n'))
          this.setState({
            postText: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            postText: "",
            error
          });
          console.log(error)
        }
      )
    console.log()
  }
  
  render() {
    const { error, postText } = this.state;
    if (error) {
      return (
        <div>Error: {error.message}</div>
        );
    } else {
      return (
        <div className="post-body">
          <Markdown  options={{
            overrides: {
                h1: {
                    props: {
                        className: 'blog-title',
                    },
                },
                img: {
                  props: {
                    className: 'blog-img'
                  }
                }
            },
        }}>
          {postText}
            </Markdown>
        </div>
      );
    }
  }
}

class Post extends React.Component {
  render() {
    let name = this.props.post.name;
    let pfp = this.props.post.profile;
    let timestamp = this.props.post.timestamp;
    let title = this.props.post.title;
    let cover = this.props.post.cover;
    let article = this.props.post.article;

    return (
      <div className="blog-post">
        <div className="top">
          <table>
            <tbody>
              <tr>
                <td className="title">
                  <TitleCard timestamp={timestamp} title={title} />
                </td>
                <td>
                  <Byline name={name} profile={pfp} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <CoverImg src={cover}/>
        <PostBody article={article} />
      </div>
    );
  }
}

export default class Blogs extends React.Component {
  render() {
    let data = this.props.data;
    data.sort((a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp));
    console.log(data);
    const posts = [];

    data.forEach((eachPost) => {
      posts.push(
        <div>
          <Post post={eachPost} />
        </div>
      );
    });
    
    

    return <div className="blog-container">{posts}</div>;
  }
}
