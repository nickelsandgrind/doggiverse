import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, likePost, unlikePost } from "../../actions/postActions";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.likePost(id);
  }

  onUnlikeClick(id) {
    this.props.unlikePost(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div className="card postcard card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle postimg d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="postname text-secondary ">{post.name}</p>
          </div>
          <div className="col-md-10">
            <div className="lead posttext">
              {post.text.split("\n").map(i => {
                return <div>{i}</div>;
              })}
            </div>

            {showActions ? (
              <span>
                <div className="postactions">
                  <button
                    onClick={this.onLikeClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-link mr-1"
                  >
                    <i
                      className={classnames(
                        "text-secondary smile fas fa-smile",
                        {
                          "text-primary": this.findUserLike(post.likes)
                        }
                      )}
                    />
                    <span className="badge badge-text text-muted">
                      {post.likes.length}
                    </span>
                  </button>
                  <button
                    onClick={this.onUnlikeClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-link mr-1"
                  >
                    <i className="text-secondary smile far fa-smile" />
                  </button>
                  <Link
                    to={`/post/${post._id}`}
                    className="btn btn-text text-muted  mr-1"
                  >
                    Comments
                  </Link>
                  {post.user === auth.user.id ? (
                    <button
                      onClick={this.onDeleteClick.bind(this, post._id)}
                      type="button"
                      className="btn btn-link mr-1"
                    >
                      <span>
                        <i className="fas delete text-secondary fa-times" />{" "}
                      </span>
                      Delete Post
                    </button>
                  ) : null}
                </div>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, likePost, unlikePost })(
  PostItem
);
