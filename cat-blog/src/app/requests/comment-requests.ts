import { gql } from 'apollo-angular';

export const GET_COMMENTS_REQUEST = gql`
  query GetComments($articleId: ID!) {
    commentsByArticle(articleId: $articleId) {
      articleId
      avgRating
      content
      createdAt
      id
      rating
      username
      votesCount
      votes
    }
  }
`;

export const ADD_COMMENT_REQUEST = gql`
  mutation CreateComment($articleId: String!, $content: String!, $username: String!) {
    createComment(
      createComment: { articleId: $articleId, content: $content, username: $username }
    ) {
      articleId
      avgRating
      content
      createdAt
      id
      rating
      username
      votes
      votesCount
    }
  }
`;

export const LIKE_COMMENT_REQUEST = gql`
  mutation CommentRatingUp($id: ID!) {
    commentRatingUp(id: $id) {
      articleId
      avgRating
      content
      createdAt
      id
      rating
      username
      votes
      votesCount
    }
  }
`;

export const DISLIKE_COMMENT_REQUEST = gql`
  mutation CommentRatingDown($id: ID!) {
    commentRatingDown(id: $id) {
      articleId
      avgRating
      content
      createdAt
      id
      rating
      username
      votes
      votesCount
    }
  }
`;
