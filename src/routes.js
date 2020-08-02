export const routes = [



{
  method: 'GET',
  path: '/',
  handler: (request, h) => {

      return 'Homepage';
  }
},

{
  method: 'POST',
  path: '/sentilize',
  handler: (request, h) => {
      const payload = request.payload
      return payload.sentence
  }
}
  
]