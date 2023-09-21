export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  //   doc: 'Post',
  // export const schemaTypes = [blog]
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      // name: 'description',
      name: 'slug',
      // type: 'string',
      type: 'slug',
      title: 'slug',
      options: {
        source: 'title',
      }
    },
    {
      // name: 'string'
      name: 'content',
      // type: 'string',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          //   title?: 'slug' | 'content',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              // title?: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
  ],
}
