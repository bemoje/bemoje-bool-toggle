(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['bool-toggle'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Set a boolean to its opposite value and then returns it.
	 * @param {boolean} bool - The boolean value
	 * @returns {boolean}
	 */
	function boolToggle(bool) {
		return bool === true ? false : true
	}

	return boolToggle;

})));
