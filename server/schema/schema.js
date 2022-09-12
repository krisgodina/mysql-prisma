const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

//---------------------Types---------------------

// Friend Type
const FriendType = new GraphQLObjectType({
  name: 'Friend',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  })
});

//---------------------Queries---------------------

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    friends: {
      type: new GraphQLList(FriendType),
      resolve(parent, args){
        return prisma.Friend.findMany();
      },
    },
    friend: {
      type: FriendType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {       

        return prisma.Friend.findUnique({
          where: {
            id: parseInt(args.id),
          },
        });

      },
    },
  },
});

//---------------------Mutations---------------------

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Create a friend
    createFriend: {
      type: FriendType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {       

          return prisma.Friend.create({
            data: {
              name: args.name,
              email: args.email,
              phone: args.phone,
            }
          });       
        
      }
    },
    // Delete a friend
    deleteFriend: {
      type: FriendType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {

        return prisma.Friend.delete({
          where: {
            id: parseInt(args.id),
          },
        })

      }
    },
    // Update a friend
    updateFriend: {
      type: FriendType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parent, args){

        return prisma.Friend.update({
          where: {
            id: parseInt(args.id),
          },
          data: {
            name: args.name,
            email: args.email,
            phone: args.phone,
          },
        });

      },
    },
  },
});

//---------------------Exports---------------------

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
