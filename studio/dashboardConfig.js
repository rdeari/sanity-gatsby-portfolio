export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea600cba4028d68da38c572',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j7zac6qv',
                  apiId: '266eb345-6826-4a1c-90a1-99ffcf2f688f'
                },
                {
                  buildHookId: '5ea600cb03d6d40958082a0a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-v8dhcs4q',
                  apiId: '8caa4ad1-19a0-4c91-8f69-c4e575841a8c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rdeari/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-v8dhcs4q.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
