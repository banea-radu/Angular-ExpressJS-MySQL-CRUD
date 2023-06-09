## Angular-ExpressJS-MySQL-CRUD

### Angular application with ExpressJS backend with CRUD operations for MySQL database

  #### There are 2 branches:
    1. "main" : for frontend Angular
    2. "backend" : for backend ExpressJS
    
  ### Main functionalities:
    - Get a list of products and output in html Table view
    - sql database (MariaDB):
      - table "produse" structure:
        - CodIdx - string, 20 char
        - CodMagazin - string, 20 char
        - Denumire - string, 150 char
        - DataInregistare - date (datetime)
        - Cantitate - numeric
        - PretUnitar - numeric
      - CRUD operations:
        - (C)reate : new product
        - (R)ead : all products
        - (U)pdate : product by "CodIdx"
        - (D)elete : product by "CodIdx"

### Technologies used:
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-original.svg "  title="Bootstrap" alt="Bootstrap" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/angularjs/angularjs-original.svg" title="Angular" alt="Angular" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="Express" alt="Express" width="40" height="40"/>&nbsp;
  <img src="https://mariadb.org/wp-content/themes/twentynineteen-child/icons/mariadb_org_rgb_h.svg" title="MariaDB SQL" alt="MariaDB SQL" width="40" height="40"/>&nbsp;
</div>

### Live version deployed here: https://angular-products-crud-sql.netlify.app/
