import * as _ from 'lodash';

(function() {
  var categories = [
    { id: 'languages', label: 'Languages', subCategories: [
      { id: 'java', label: 'Java', tags: ['java'], icon: 'icon-openjdk' },
      { id: 'javascript', tags: ['javascript', 'nodejs', 'js'], label: 'JavaScript', icon: 'icon-js' },
      { id: 'dotnet', label: '.NET', tags: ['dotnet'], icon: 'icon-dotnet' },
      { id: 'perl', label: 'Perl', tags: ['perl'], icon: 'icon-perl' },
      { id: 'ruby', label: 'Ruby', tags: ['ruby'], icon: 'icon-ruby' },
      { id: 'php', label: 'PHP', tags: ['php'], icon: 'icon-php' },
      { id: 'python', label: 'Python', tags: ['python'], icon: 'icon-python' },
      { id: 'golang', label: 'Go', tags: ['golang', 'go'], icon: 'icon-go-gopher' },
    ]},
    { id: 'databases', label: 'Databases', subCategories: [
      { id: 'mongodb', label: 'Mongo', tags: ['mongodb'], icon: 'icon-mongodb' },
      { id: 'mssql', label: 'MS SQL', tags: ['mssql'], icon: 'icon-mssql' },
      { id: 'mysql', label: 'MySQL', tags: ['mysql'], icon: 'icon-mysql-database' },
      { id: 'postgresql', label: 'Postgres', tags: ['postgresql'], icon: 'icon-postgresql' },
      { id: 'mariadb', label: 'MariaDB', tags: ['mariadb'], icon: 'icon-mariadb' }
    ]},
    { id: 'middleware', label: 'Middleware', subCategories: [
      { id: 'integration', label: 'Integration', tags: ['amq', 'fuse', 'jboss-fuse', 'sso', '3scale'] },
      { id: 'process-automation', label: 'Process Automation', tags: ['decisionserver', 'processserver'] },
      { id: 'analytics-data', label: 'Analytics & Data', tags: ['datagrid', 'datavirt'] },
      { id: 'runtimes', label: 'Runtimes & Frameworks', tags: ['eap', 'httpd', 'tomcat', 'nginx', 'jws'] }
    ]},
    { id: 'cicd', label: 'CI/CD', subCategories: [
      { id: 'jenkins', label: 'Jenkins', tags: ['jenkins'], icon: 'icon-jenkins' },
      { id: 'pipelines', label: 'Pipelines', tags: ['pipelines'], icon: 'fa fa-clone' }
    ]},
    { id: 'virtualization', label: 'Virtualization', subCategories: [
      { id: 'vms', label: 'Virtual Machines', tags: ['virtualmachine'] }
    ]}
  ];

  _.set(window, 'OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES', categories);
}());
