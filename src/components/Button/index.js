// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Button({
  text,
  onButtonClick,
  className,
  ...rest
}) {
  return (
    <button
      type="button"
      onClick={onButtonClick}
      className={classNames(className)}
      {...rest}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
Button.defaultProps = {
  className: 'button',
};
export default React.memo(Button);
