/**
 * Physics engine settings, shared by both renderers
 */
module.exports = function () {
  return {
    springLength : 80,
    springCoeff : 0.0004,
    gravity: -5.2,
    theta : 0.5,
    dragCoeff : 0.02
  };
};
