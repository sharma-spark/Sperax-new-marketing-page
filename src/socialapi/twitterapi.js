import axios from "axios";
export const getTwittercount = () => {
  return new Promise((resolve, reject) => {
    // axios.get('https://api.twitter.com/2/users/:id?user.fields=public_metrics',{
    //     headers:{
    //         Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAADS5eQEAAAAACZSLhvoGJtc1xv%2BwJpXGLovn1iA%3D2ugmA1kESPkoLeG9izORyvNdhi7nOZqt2n5MnNepD20AGtvr2R`,
    //     }
    // }).then(res => {
    //     console.log(res);
    //     resolve(res)
    // })
    console.log("asjdnad");
    const api = 'https://api.twitter.com/2/users/:id?user.fields=public_metrics';
    const token = 'AAAAAAAAAAAAAAAAAAAAADS5eQEAAAAACZSLhvoGJtc1xv%2BwJpXGLovn1iA%3D2ugmA1kESPkoLeG9izORyvNdhi7nOZqt2n5MnNepD20AGtvr2R';
    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data).catch((error) => {
          console.log(error);
        });
      });
  });
};