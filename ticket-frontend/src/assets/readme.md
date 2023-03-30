## Use below command to install bootstrap : 

    npm install bootstrap

## Copy below lines to angular.json file to update configuarion :

"styles": [
          "node_modules/bootstrap/dist/css/bootstrap.min.css", //<--add this line
          "src/styles.css"
        ],
        "scripts": [
          "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" //<--and this line
        ]
