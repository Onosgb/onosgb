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
                  buildHookId: '61ad6f52d44cc3140a46e494',
                  title: 'Sanity Studio',
                  name: 'onosgb-studio',
                  apiId: '659f8aa4-dff2-490e-8150-351efe56ff50'
                },
                {
                  buildHookId: '61ad6f5229f491d58a0852c0',
                  title: 'Portfolio Website',
                  name: 'onosgb',
                  apiId: '955f22bd-2139-4d4e-8a24-ba96769e5af7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Onosgb/Onosgb',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://onosgb.netlify.app',
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
