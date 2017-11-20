
/**
 * @class Project
 * @since 0.0.1
 */
class Project {

  /**
   * @constructor
   * @param {string} code
   * @param {string} src
   */
  constructor(code, name, src) {
    this.code = code;
    this.name = name;
    this.src = src;
  }

  /**
   * @function
   * @name toString
   * @description
   *
   * Function return project name, code and src
   *
   * @return {string}
   * @since 0.0.1
   */
  toString() {
    return `${this.name}(${this.code}) [src: ${this.src}]`;
  }
}

module.exports = Project;
