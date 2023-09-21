export default {
  name: 'post',
  type: 'document',
  title: 'Post',
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
     
      name: 'slug',
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
