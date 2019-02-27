import ApolloClient from 'apollo-boost';

export const devUrl = 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev';
export const prodUrl = 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev';
export const stagingUrl = 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev';
export const environment = 'dev';

export const getCurrentUrl = () => {
  switch (environment) {
    case 'dev':
      return devUrl;
    case 'prod':
      return prodUrl;
    case 'staging':
      return stagingUrl;
    default:
      return devUrl;
  }
};

export const client = new ApolloClient({
  uri: getCurrentUrl(),
  clientState: {
    defaults: {
      sortOptions: 'arrivalDate_ASC',
    },
    resolvers: {
      Mutation: {
        updateSortOptions(_, variables, { cache }) {
          const data = {
            data: { sortOptions: variables.sortOptions },
          };
          cache.writeData(data);
          return data;
        },
      },
    },
  },
});
