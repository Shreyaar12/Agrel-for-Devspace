## Backend

Requires MongoDB, Node.js, Express

### Requests 

##### Authentication: 
/api/v1/authenticate

2 POST requests
Login:  Need to pass email and password as json body   
Returns a token , which is used to authenticate the user

Register: Need to pass email, name and password as json body
Returns a token

/api/v1/review
needs auth / cors
POST: To post a review > Name and Review as JSON Body
GET: returns a list of reviews

/api/v1/weather
GET: Need to pass city as JSON Body , returns a JSON object with the weather

/api/v1/farmer
POST /crop : Need to pass auth token as header, and
```
name: { type: String },
    description: { type: String },
    details: {
      howOld: { type: String },
      estimatedTime: { type: String },
    },
    location: {
      city: { type: String },
      state: { type: String },
      district: { type: String },
    },
```
as body, returns a success message if succed
GET /crop: Needs to pass auth token as header
Returns a list of crops of the farmer 

PUT /crop: Same as POST 
except for updating the crop details