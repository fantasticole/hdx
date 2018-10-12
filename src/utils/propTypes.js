import PropTypes from "prop-types";

function childTaskFunction(f) {
  return () => (f.apply(this, arguments));
}

const childTaskType = childTaskFunction(() => (taskPropType));

export const taskPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tasks: PropTypes.objectOf(childTaskType),
});
