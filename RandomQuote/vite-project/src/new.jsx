import axios from "axios";

const Url = axios
  .get("https://api.quotable.io/random")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
export default Url;
