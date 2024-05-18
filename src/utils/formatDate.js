import moment from "moment";
import 'moment/locale/tr';

const formatDate = (unix_time) => {

   const   formatted = new Date(unix_time * 1000)
   return  moment(formatted).calendar();         
};


export default formatDate