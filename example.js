/**
 * @api {post} /trucks/ Add a truck
 * @apiVersion 0.1.0
 * @apiName AddTruck
 * @apiGroup Trucks
 * @apiDescription Add a new food truck to the database.
 * @apiPermission Admin level access required.
 *
 * @apiParam {String}   name  The company name of the truck.
 * @apiParam {String} foodType  The type of food the truck serves.
 * @apiParam {Float} [avgCost]   The average item cost at this truck.
 * @apiParam {Float} [latitude]  The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 * @apiParam {Float} [longitude] The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 *
 *
 * @apiExample Example usage:
 * curl -X POST
  https://www.genericfoodtrucks.com/v1/trucks/ 
  -H 'cache-control: no-cache' 
  -H 'content-type: application/json' 
  -d '  {
    "name": "Sweet's Treats",
    "foodtype": "Baked Goods",
    "avgcost": 8,
    "latitude": 38.1,
    "longitude": -45.5
  }'
 *
 * @apiSuccess {String}   id    The unique ID of the truck.
 * @apiSuccess {String}   name  The company name of the truck.
 * @apiSuccess {String} foodType  The type of food the truck serves.
 * @apiSuccess {Float} avgCost   The average item cost  at this truck.
 * @apiSuccess {Float} latitude  The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 * @apiSuccess {Float} longitude The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 */
function addTruck() { return; }

/**
 * @api {get} /trucks/ Get all trucks
 * @apiVersion 0.1.0
 * @apiName GetTrucks
 * @apiGroup Trucks
 * @apiDescription View all food trucks in the database.
 *
 *
 *
 * @apiExample Example usage:
 * curl -i https://www.genericfoodtrucks.com/v1/trucks/
 *
 * @apiSuccess {String}   id    The unique ID of the truck.
 * @apiSuccess {String}   name  The company name of the truck.
 * @apiSuccess {String} foodType  The type of food the truck serves.
 * @apiSuccess {Float} avgCost   The average item cost  at this truck.
 * @apiSuccess {Float} latitude  The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 * @apiSuccess {Float} longitude The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 */
function getTrucks() { return; }

/**
 * @api {get} /trucks/ Get a specific truck
 * @apiVersion 0.1.0
 * @apiName GetTruckById
 * @apiGroup Trucks
 * @apiDescription Search for a specific food truck by ID.
 *
 * @apiParam {String}   id    The unique ID of the truck.
 *
 *
 * @apiExample Example usage:
 * curl -i https://www.genericfoodtrucks.com/v1/trucks/[id]
 *
 * @apiSuccess {String}   id    The unique ID of the truck.
 * @apiSuccess {String}   name  The company name of the truck.
 * @apiSuccess {String} foodType  The type of food the truck serves.
 * @apiSuccess {Float} avgCost   The average item cost  at this truck.
 * @apiSuccess {Float} latitude  The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 * @apiSuccess {Float} longitude The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 */
function getTruckById() { return; }

/**
 * @api {get} /trucks/ Update a truck
 * @apiVersion 0.1.0
 * @apiName UpdateTruckById
 * @apiGroup Trucks
 * @apiDescription Update the data for a specific food truck.
 * @apiPermission Admin level access required.
 *
 * @apiParam {String}   id    The unique ID of the truck.
 * @apiParam {String}   name  The company name of the truck.
 * @apiParam {String} foodType  The type of food the truck serves.
 * @apiParam {Float} [avgCost]   The average item cost at this truck.
 * @apiParam {Float} [latitude]  The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 * @apiParam {Float} [longitude] The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 *
 *
 * @apiExample Example usage:
 * curl -X PUT
 * https://www.genericfoodtrucks.com/v1/trucks/[id]
  -H 'cache-control: no-cache'
  -H 'content-type: application/json'
  -d '  {
    "name": "Dolly's BBQ",
    "foodtype": "BBQ",
    "avgcost": 10,
    "latitude": 38.1,
    "longitude": -45.5
  }'
 *
 * @apiSuccess {String}   id    The unique ID of the truck.
 * @apiSuccess {String}   name  The company name of the truck.
 * @apiSuccess {String} foodType  The type of food the truck serves.
 * @apiSuccess {Float} avgCost   The average item cost  at this truck.
 * @apiSuccess {Float} latitude  The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 * @apiSuccess {Float} longitude The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 */
function updateTruckById() { return; }

/**
 * @api {get} /trucks/ Delete a truck
 * @apiVersion 0.1.0
 * @apiName DeleteTruckById
 * @apiGroup Trucks
 * @apiDescription Delete a food truck from the database.
 * @apiPermission Admin level access required.
 *
 * @apiParam {String}   id    The unique ID of the truck.
 *
 *
 * @apiExample Example usage:
 * curl -X DELETE
 * https://www.genericfoodtrucks.com/v1/trucks/[id]
 *
 * @apiSuccess {String}   id    The unique ID of the truck.
 * @apiSuccess {String}   name  The company name of the truck.
 * @apiSuccess {String} foodType  The type of food the truck serves.
 * @apiSuccess {Float} avgCost   The average item cost  at this truck.
 * @apiSuccess {Float} latitude  The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 * @apiSuccess {Float} longitude The latitude coordinates for stationary trucks. Format [-80.0; 80.0].
 */
function deleteTruckById() { return; }


/**
 * @api {post} /reviews/ Add a review
 * @apiVersion 0.1.0
 * @apiName AddReview
 * @apiGroup Reviews
 * @apiDescription Add a new review for a specific truck.
 * @apiPermission Admin level access required.
 * 
 * @apiParam {String}   id  The unique ID of the truck.
 * @apiParam {String}   reviewTitle     The title of the review.
 * @apiParam {String} reviewText  The text of the review.
 * @apiParam {Int} [starRating]   The star rating of the review. Values 1 - 5.
 *
 *
 * @apiExample Example usage:
 * curl -X POST
  https://www.genericfoodtrucks.com/v1/trucks/reviews/ 
  -H 'cache-control: no-cache' 
  -H 'content-type: application/json' 
  -d '  {
    "id": "123456",
    "reviewTitle": "Fantastic Food!",
    "reviewText": "Best BBQ I have had outside of Kansas.",
    "starRating": 4
  }'
 *
 * @apiSuccess {String}   id    The unique ID of the truck.
 * @apiSuccess {String}   reviewTitle  The title of the review..
 * @apiSuccess {String} reviewText  The text of the review.
 * @apiSuccess {Int} [starRating]   The star rating of the review. Values 1 - 5.
 * */
function AddReview() { return; }

function GetReviews() { return; }
function GetReviewsById() { return; }
function UpdateReview() { return; }
function DeleteReview() { return; }
function CountReviews() { return; }
function AverageRating() { return; }