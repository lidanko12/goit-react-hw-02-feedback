import PropTypes from 'prop-types';
 import s from './Section.module.css'

 function Section({ title, children }) {
  return (
    <div className= {s.container}>
      <h2 className = {s.title} >{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Section