module.exports = function greet(name) {

 return `Hello ${name || "guest"} from version 2!`;

}


python tools/check.py http://greeting-service-gppkup-deploy-strategies.apps.ap46a.prod.ole.redhat.com