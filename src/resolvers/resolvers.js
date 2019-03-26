export default {
    Query: {
        info: () => {
            return 'Earth Surrounding Object Observer'
        },
        getObjects: async (parent, args, { dataSources }) => {
            return await dataSources.objectApi.getObjects(args);
        }
    }
}