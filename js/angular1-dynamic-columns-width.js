var app = angular.module('tuto', []);

//controller
app.controller('MainController', ['$timeout', mainController]);

function mainController($timeout) {
    var vm = this;
    
    vm.testData = [
      {
        "_id": "5c0103f8d50bad0773654762",
        "index": 0,
        "guid": "0ab68e44-93c4-49db-bd46-e4289d98fc87",
        "isActive": true,
        "balance": "$1,316.72",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "blue",
        "name": {
          "first": "Marta",
          "last": "Witt"
        },
        "company": "ISOSTREAM",
        "email": "marta.witt@isostream.name",
        "phone": "+1 (925) 595-3778",
        "address": "592 Sackett Street, Wanship, Montana, 4162",
        "about": "Cupidatat anim esse laboris dolor. Qui minim occaecat incididunt dolore adipisicing nostrud sint quis nisi reprehenderit ullamco anim sunt. Labore elit officia magna eu deserunt ut commodo enim. Nulla culpa dolore occaecat incididunt in amet. Elit minim in anim reprehenderit do aute et eu proident est eu.",
        "registered": "Monday, September 11, 2017 3:18 AM",
        "latitude": "-0.982068",
        "longitude": "-169.876713",
        "tags": [
          "anim",
          "fugiat",
          "elit",
          "minim",
          "occaecat"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Mooney Stephenson"
          },
          {
            "id": 1,
            "name": "Wallace Figueroa"
          },
          {
            "id": 2,
            "name": "Mclean Vinson"
          }
        ],
        "greeting": "Hello, Marta! You have 10 unread messages.",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5c0103f85e68a3867d2ff034",
        "index": 1,
        "guid": "3cf13391-1495-4526-81c1-2e801cf0ec55",
        "isActive": true,
        "balance": "$3,721.96",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "brown",
        "name": {
          "first": "Duncan",
          "last": "Patton"
        },
        "company": "FLUM",
        "email": "duncan.patton@flum.me",
        "phone": "+1 (971) 574-3125",
        "address": "804 Bragg Court, Catherine, New Jersey, 417",
        "about": "Veniam esse sint Lorem ullamco culpa voluptate pariatur commodo dolore minim magna nostrud. Incididunt quis do nisi nostrud aliqua qui duis commodo eiusmod. Qui minim qui ex pariatur id.",
        "registered": "Wednesday, May 24, 2017 12:26 PM",
        "latitude": "-1.707209",
        "longitude": "-4.181401",
        "tags": [
          "aliqua",
          "pariatur",
          "nisi",
          "eu",
          "est"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Charlotte Stevens"
          },
          {
            "id": 1,
            "name": "Wilkinson Kirby"
          },
          {
            "id": 2,
            "name": "Maribel Burns"
          }
        ],
        "greeting": "Hello, Duncan! You have 9 unread messages.",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5c0103f804c9a6850660edec",
        "index": 2,
        "guid": "aae2e29f-cebd-4b91-9a2d-d531ac4c3d24",
        "isActive": true,
        "balance": "$1,099.32",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "eyeColor": "green",
        "name": {
          "first": "Hilary",
          "last": "Ball"
        },
        "company": "EVIDENDS",
        "email": "hilary.ball@evidends.biz",
        "phone": "+1 (865) 556-2109",
        "address": "139 Hemlock Street, Newcastle, American Samoa, 6783",
        "about": "Pariatur aliqua pariatur amet elit. Sit fugiat excepteur in proident minim reprehenderit adipisicing et aliqua sunt aliqua velit tempor deserunt. Ad duis cupidatat ex deserunt cillum amet nostrud.",
        "registered": "Friday, December 5, 2014 8:46 AM",
        "latitude": "-22.860405",
        "longitude": "-78.168471",
        "tags": [
          "consectetur",
          "laborum",
          "aliquip",
          "officia",
          "ullamco"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Marcy Clark"
          },
          {
            "id": 1,
            "name": "Cassandra Sloan"
          },
          {
            "id": 2,
            "name": "Newton Rogers"
          }
        ],
        "greeting": "Hello, Hilary! You have 9 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5c0103f8620a8a3b1b9403eb",
        "index": 3,
        "guid": "d73b4dee-214d-4810-a34d-ae2f4ac751fd",
        "isActive": true,
        "balance": "$2,868.19",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "brown",
        "name": {
          "first": "Sharpe",
          "last": "Keith"
        },
        "company": "SIGNIDYNE",
        "email": "sharpe.keith@signidyne.org",
        "phone": "+1 (929) 402-2052",
        "address": "242 Amber Street, Baden, Massachusetts, 9311",
        "about": "Reprehenderit reprehenderit ad voluptate aute ad ad consequat quis laborum proident anim ex consequat. Occaecat magna dolore ullamco aute in laborum reprehenderit consectetur est. Culpa cillum elit ea quis quis aliqua. Consequat velit est ut est mollit eiusmod non commodo pariatur incididunt laboris voluptate ad minim. Culpa sint sint laboris irure irure Lorem nulla duis ex laboris laboris. Est exercitation sit ad mollit nostrud occaecat consequat et veniam velit consequat nostrud elit. Nisi laborum cillum nostrud duis.",
        "registered": "Sunday, March 11, 2018 6:52 AM",
        "latitude": "85.818493",
        "longitude": "-27.664656",
        "tags": [
          "laboris",
          "eiusmod",
          "duis",
          "ipsum",
          "officia"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Patty Rivers"
          },
          {
            "id": 1,
            "name": "Leah Hooper"
          },
          {
            "id": 2,
            "name": "Alicia Gregory"
          }
        ],
        "greeting": "Hello, Sharpe! You have 9 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5c0103f8a8ede70d1a4a748a",
        "index": 4,
        "guid": "facb561b-a507-4874-81a5-f962c240c0cb",
        "isActive": false,
        "balance": "$1,789.76",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "brown",
        "name": {
          "first": "Townsend",
          "last": "Ruiz"
        },
        "company": "COLLAIRE",
        "email": "townsend.ruiz@collaire.ca",
        "phone": "+1 (905) 409-2381",
        "address": "920 Hamilton Avenue, Newry, Iowa, 299",
        "about": "Culpa aliqua incididunt nostrud minim eu. Duis quis ut sit fugiat minim elit est enim voluptate enim irure officia minim cupidatat. Lorem ea duis magna fugiat enim est ex amet. Non voluptate aute proident irure nulla sint labore exercitation eiusmod. Ut est ex anim ipsum occaecat anim minim dolor deserunt elit.",
        "registered": "Thursday, August 14, 2014 2:36 PM",
        "latitude": "-89.821521",
        "longitude": "7.197348",
        "tags": [
          "fugiat",
          "magna",
          "ullamco",
          "laborum",
          "laborum"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Althea Baird"
          },
          {
            "id": 1,
            "name": "Willis Bentley"
          },
          {
            "id": 2,
            "name": "Rhodes Burton"
          }
        ],
        "greeting": "Hello, Townsend! You have 7 unread messages.",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5c0103f8ae88e48a777093c5",
        "index": 5,
        "guid": "c6b5aad1-ce88-4aea-af44-2bf69ae5b154",
        "isActive": true,
        "balance": "$3,884.66",
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "eyeColor": "green",
        "name": {
          "first": "Meghan",
          "last": "Solis"
        },
        "company": "TRASOLA",
        "email": "meghan.solis@trasola.tv",
        "phone": "+1 (809) 447-2896",
        "address": "882 Holt Court, Belleview, Pennsylvania, 2392",
        "about": "Occaecat dolore laborum ad reprehenderit quis proident duis laboris minim. Exercitation ex duis ullamco dolore sunt consequat nulla. Velit voluptate exercitation sint in occaecat in qui ipsum irure sunt exercitation laborum reprehenderit magna. Tempor elit magna irure aute aute elit duis.",
        "registered": "Wednesday, September 20, 2017 3:50 PM",
        "latitude": "5.214814",
        "longitude": "-148.832965",
        "tags": [
          "eiusmod",
          "fugiat",
          "culpa",
          "qui",
          "ex"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Eaton Fry"
          },
          {
            "id": 1,
            "name": "Ilene Robinson"
          },
          {
            "id": 2,
            "name": "Bridgette Odom"
          }
        ],
        "greeting": "Hello, Meghan! You have 6 unread messages.",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5c0103f820f26800f49561d4",
        "index": 6,
        "guid": "b952602e-1faa-43c6-b139-ffeb7306abde",
        "isActive": false,
        "balance": "$3,794.72",
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "eyeColor": "green",
        "name": {
          "first": "Chris",
          "last": "Cherry"
        },
        "company": "ROTODYNE",
        "email": "chris.cherry@rotodyne.info",
        "phone": "+1 (805) 462-3640",
        "address": "694 Chestnut Street, Rockhill, West Virginia, 1502",
        "about": "Esse ut ea duis ea ullamco ex sunt mollit ipsum magna cupidatat et sint. Culpa ad do cupidatat fugiat dolor laboris qui duis pariatur aliqua dolor. Duis consequat Lorem fugiat mollit et. Pariatur magna in incididunt reprehenderit. Sit duis commodo reprehenderit non est quis consequat minim. Cillum eiusmod velit qui duis sunt.",
        "registered": "Thursday, July 24, 2014 6:53 PM",
        "latitude": "61.371738",
        "longitude": "58.43345",
        "tags": [
          "aute",
          "duis",
          "sunt",
          "ullamco",
          "voluptate"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Hughes Carlson"
          },
          {
            "id": 1,
            "name": "Berta Rose"
          },
          {
            "id": 2,
            "name": "Hubbard Pollard"
          }
        ],
        "greeting": "Hello, Chris! You have 7 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5c0103f8a808f992649638e0",
        "index": 7,
        "guid": "c7cbcd26-558c-45f4-a4b0-464d6cc49cbe",
        "isActive": false,
        "balance": "$2,266.49",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "green",
        "name": {
          "first": "Cynthia",
          "last": "Gray"
        },
        "company": "GLUKGLUK",
        "email": "cynthia.gray@glukgluk.io",
        "phone": "+1 (812) 431-2838",
        "address": "909 Milton Street, Cetronia, Maine, 1441",
        "about": "Reprehenderit ea dolore elit quis voluptate ex eu laboris velit ex exercitation magna. Aute magna occaecat exercitation ullamco pariatur sint irure magna veniam amet cupidatat labore. Cillum exercitation voluptate deserunt esse commodo duis id non cillum. Aliquip ipsum est quis consequat consequat consectetur ullamco nisi aliqua mollit elit commodo tempor. In aliquip qui ea amet eu. Officia voluptate consectetur laborum amet anim.",
        "registered": "Wednesday, December 14, 2016 5:45 AM",
        "latitude": "69.887067",
        "longitude": "-66.794859",
        "tags": [
          "aliqua",
          "officia",
          "minim",
          "fugiat",
          "reprehenderit"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Jeri Key"
          },
          {
            "id": 1,
            "name": "Gretchen Stone"
          },
          {
            "id": 2,
            "name": "Holly Bruce"
          }
        ],
        "greeting": "Hello, Cynthia! You have 7 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5c0103f80c9144dd23d2bec8",
        "index": 8,
        "guid": "dc790685-db4f-4cdc-b6dc-0d7d8666a1f8",
        "isActive": false,
        "balance": "$1,402.14",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "brown",
        "name": {
          "first": "Camacho",
          "last": "Chang"
        },
        "company": "GENMEX",
        "email": "camacho.chang@genmex.biz",
        "phone": "+1 (828) 438-3430",
        "address": "544 Prospect Avenue, Highland, Federated States Of Micronesia, 3567",
        "about": "Velit velit laborum cillum officia ex ut proident quis laboris non. Ea labore ex irure aliqua occaecat esse. Proident dolore aliqua do duis ad. Ipsum irure Lorem occaecat officia dolor proident proident exercitation tempor non esse voluptate aliquip. Velit magna est veniam minim aute. Laboris quis cupidatat labore magna aliqua aliqua esse nisi magna laborum deserunt ea.",
        "registered": "Saturday, July 30, 2016 6:40 AM",
        "latitude": "6.034622",
        "longitude": "-123.685075",
        "tags": [
          "sint",
          "adipisicing",
          "labore",
          "Lorem",
          "irure"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Marshall Mccall"
          },
          {
            "id": 1,
            "name": "Lottie Lindsey"
          },
          {
            "id": 2,
            "name": "Strong Summers"
          }
        ],
        "greeting": "Hello, Camacho! You have 5 unread messages.",
        "favoriteFruit": "apple"
      }
    ];
    
    vm.columns= {
        //name: isVisible
        "id": true,
        "name": true,
        "address": true,
        "isActive": true,
        "age": true
    };
    
    vm.fixedSizeColumns = {
      "isActive": 70,
      "age": 45
    };

    $timeout(function() {
      vm.calculateTableColumnsSizes();
    }, 1000);

    vm.calculateTableColumnsSizes = function () {
      var firstLine = document.querySelectorAll('table#resizable-table tbody tr')[0];
  
      var resizableTableWidth = firstLine.clientWidth - 1;
  
      var colonnesVisibles = [];
      for (column in vm.columns) {
        if (vm.columns[column] === true) {
          colonnesVisibles.push(column);
        }
      }
  
      var colonnesVariablesVisibles = 0;
      for (var i=0; i<colonnesVisibles.length - 1; i++) {
        if (angular.isUndefined(vm.fixedSizeColumns[colonnesVisibles[i]])) {
          colonnesVariablesVisibles++;
        }
      }
  
      var cumul = 0;
      for (column in colonnesVisibles) {
        if (angular.isDefined(vm.fixedSizeColumns[colonnesVisibles[column]])) {
          cumul += vm.fixedSizeColumns[colonnesVisibles[column]];
        }
      }
  
      var nbColonnes = colonnesVariablesVisibles;
  
      var availabeWidth = resizableTableWidth - cumul;
  
      var colSize = availabeWidth / (nbColonnes > 0 ? nbColonnes : 1);
  
      vm.dynamicWidth = {width: colSize + 'px'};
    }
}