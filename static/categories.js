/*(function() {
  window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
    id: "featured",
    label: "Featured",
    subCategories: [
    {
      id: "go",
      label: "Go",
      icon: "icon-go-gopher",
      tags: [
        "go",
        "golang",
        "eap"
      ]
    },
    {
      id: "jenkins",
      label: "Jenkins",
      icon: "icon-jenkins",
      tags: [
        "jenkins",
        "nginx",
        "httpd"
      ]
    }]
  });
}());*/

(function() {
  var categories = [
    {id: 'databases', label: 'Databases', subCategories: [
      {id: 'mysql', label: 'MySQL', tags: ['mysql'], icon: 'icon-mysql-database'},
      {id: 'postgresql', label: 'Postgres', tags: ['postgresql'], icon: 'icon-postgresql'},
      {id: 'mariadb', label: 'MariaDB', tags: ['mariadb'], icon: 'icon-mariadb'}
    ]},
    {id: 'middleware', label: 'Middleware', subCategories: [
      {id: 'runtimes', label: 'Runtimes & Frameworks', tags: ['eap', 'httpd', 'tomcat', 'nginx', 'jws']}
    ]},
    {id: 'cicd', label: 'CI/CD', subCategories: [
      {id: 'jenkins', label: 'Jenkins', tags: ['jenkins'], icon: 'icon-jenkins'},
      {id: 'pipelines', label: 'Pipelines', tags: ['pipelines'], icon: 'fa fa-clone'}
    ]
  ];
  _.set(window, 'OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES', categories);
}());
