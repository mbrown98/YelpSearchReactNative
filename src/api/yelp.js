import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DB9-K_wTi80GDUBskr3tsjfOHYpqTg9TBTS8lHBhqA-IE_0oc-BAyACbyGlK-2YPUBwC5ExYq2g0FUpkIBmTwTv_tzm58qW-EvwXhEVLXVYrPXBtMIr8_2GbJF6kX3Yx",
  },
});
