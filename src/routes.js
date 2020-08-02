export const routes = [



{
  method: 'GET',
  path: '/',
  handler: (request, h) => {

      return 'Homepage';
  }
},

{
  method: 'GET',
  path: '/sentilize',
  handler: (request, h) => {

      return 'I will change this to a POST request';
  }
}
  
]