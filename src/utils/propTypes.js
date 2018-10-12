import PropTypes from "prop-types";

function childTaskFunction(f) {
  return () => (f.apply(this, arguments));
}

const childTaskType = childTaskFunction(() => (taskPropType));

export const taskPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subtasks: PropTypes.arrayOf(childTaskType),
});
