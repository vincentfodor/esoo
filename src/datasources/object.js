import axios from 'axios';
import { response } from 'express';

class ObjectApi {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }

    async getObjects(args) {
        return await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${args.startDate}&end_date=${args.endDate}&detailed=true&api_key=${this.accessToken}`)
            .then(res => {
              const data = res.data.near_earth_objects;
              const response = [];
              for(let dataIndex in data) {
                data[dataIndex].forEach((object) => {
                  response.push(this.objectReducer(object))
                });
              }
              return response;
            })
    }

    objectReducer(object) {
      return {
        id: object.id,
        name: object.name,
        diameter_min: object.estimated_diameter.meters.estimated_diameter_min,
        diameter_max: object.estimated_diameter.meters.estimated_diameter_max,
        is_potentially_hazardous_asteroid: object.is_potentially_hazardous_asteroid,
        close_approach_date: object.close_approach_data[0].close_approach_date,
        relative_velocity: object.close_approach_data[0].relative_velocity.kilometers_per_second,
        miss_distance: object.close_approach_data[0].miss_distance.kilometers
      }
    }
}

export default ObjectApi;