//connects the url routes to the correct models (which send the sql) and handles the repsonse
import { getAllQry, addMarkerQuery} from "./models.js";


export async function getAll(req, res){

    try {
        const response = await getAllQry();
        res.status(200).send({ status: "success", data: response });
        console.log(response);
      } catch (error) {
        // Handle the error and send an appropriate response
        res.status(500).json({ status: "error", message: error.message });
      }
}


export async function addMarker(req, res){
console.log('controller')
  try {
      const newMarker = req.body;
console.log(newMarker)
      const response = await addMarkerQuery(newMarker);
      res.status(200).send({ status: "success", data: response });
      console.log(response);
    } catch (error) {
      // Handle the error and send an appropriate response
      res.status(500).json({ status: "error", message: error.message });
    }
}
