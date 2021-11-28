const _posts = []
  
  export default class PostsStore {
    async all() {
      return _posts
    }
  
    async find(id: number) {
      return _posts.find(post => post.id.toString() === id.toString())
    }
  }
