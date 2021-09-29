import s from './Notifications.module.css'
import PropTypes from 'prop-types';
function Notification({ message }) {
    return (
        <p className ={s.text}>
            {message}
       </p>
   )  
 } 

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
 export default Notification