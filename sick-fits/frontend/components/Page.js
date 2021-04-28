import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      {cool}
      <h2>I am a page!</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};
