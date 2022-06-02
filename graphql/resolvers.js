export default {
  Query: {
    test(root, args, ctx) {
      console.log(ctx)
      if (!ctx) return null
      return 'test'
    },
  },
}
