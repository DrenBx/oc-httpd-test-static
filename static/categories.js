(function() {
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
}());
