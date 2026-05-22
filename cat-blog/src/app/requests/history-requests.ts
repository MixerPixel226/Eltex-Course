import { gql } from 'apollo-angular';

export const GET_HISTORY_REQUEST = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      id
      title
      content
      imgSrc
      category {
        id
      }
      rating
    }
  }
`;

export const LIKE_HISTORY_REQUEST = gql`
  mutation ArticleRatingUp($id: ID!) {
    articleRatingUp(id: $id) {
      avgRating
      categoryId
      content
      createdAt
      id
      imgSrc
      rating
      title
      updatedAt
      votes
      votesCount
    }
  }
`;

export const DISLIKE_HISTORY_REQUEST = gql`
  mutation ArticleRatingDown($id: ID!) {
    articleRatingDown(id: $id) {
      avgRating
      categoryId
      content
      createdAt
      id
      imgSrc
      rating
      title
      updatedAt
      votes
      votesCount
    }
  }
`;
