import axios from "axios";
export const getTwittercount = () => {
  return new Promise((resolve, reject) => {
    console.log("check");
    let token = "AAAAAAAAAAAAAAAAAAAAADS5eQEAAAAACZSLhvoGJtc1xv%2BwJpXGLovn1iA%3D2ugmA1kESPkoLeG9izORyvNdhi7nOZqt2n5MnNepD20AGtvr2R";
      axios({
        method: 'get',
        url: "/twitter-api/2/users/1424805429754810388?user.fields=public_metrics",
        headers: {
            'Content-Type': 'application/json',
            "access-control-allow-origin" : "*",
            "Authorization": `Bearer ${token}`
        },
    }).then(response => {
<<<<<<< HEAD
         console.log(response.data.data.public_metrics.followers_count);
         resolve(response.data.data.public_metrics.followers_count)
=======
         console.debug(`twitter api response:`, response);
>>>>>>> 75cd10d490a919b98ba5c6c9857d6b2825f14958
    });
  });
};