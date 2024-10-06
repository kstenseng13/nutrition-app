'use server';

export default async function handler(req, res) {
    if (req.method === "POST") {


    } else if (req.method === "GET") {

        //let upc = "047495112900";

        //get the upc from the query string
        // Call from address bar to test:  localhost:3000/api/getFoodData?upc=047495112900
        let upc = req.query.upc;

        console.log('Getting Nutrition Info from OFF Server');
        const url = "https://world.openfoodfacts.net/api/v3/product/" + upc + "?fields=brands,brand_owner,product_name,serving_size,nutriments";

        //make api request to openfoodfacts server with url
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        //return the data to the client
        res.status(200).json(data);

    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}
