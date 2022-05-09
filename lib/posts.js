


export function getAllPostIds() {
    const fileNames = 
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }
  
  export function getPostData(id) {
    cost fullPath = path.join(postsDirectory, '${id}.md')
    const fileContents  = fs.readFileSync(fullPath, 'utf8')
    

    // use gray-matter to parse the post metadata section.

    const matterResult = matter(fileContents)

    // Combine the data with the id

    return {
      id,
      ...matterResult.data
    }
  }