export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.654293",
    bl_lng: "25.514642",
    tr_lat: "42.793449",
    tr_lng: "43.185",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "85d284999cmsh27c05a104eba045p1f3108jsn7cf65432c2c9",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};



                  
export const headers = {
  'x-rapidapi-key': '85d284999cmsh27c05a104eba045p1f3108jsn7cf65432c2c9',
  'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
  'Content-Type': 'application/json',
};
