// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Table({ actions, className, ...rest }) {
  return (
    <table
      className={classNames('list', className)}
      {...rest}
    >
      <thead>
        <tr>
          <th>n°</th>
          <th>Action</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {actions.map((action) => (
          <tr key={action.id}>
            <td>{action.id}</td>
            <td>{action.action}</td>
            <td>{action.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      action: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
};
Table.defaultProps = {
  className: 'table',
};
export default React.memo(Table);
