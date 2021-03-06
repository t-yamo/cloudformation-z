/*
var consts = module.exports.consts = {
  CREATE_COMPLETE: {exists: true},
  CREATE_IN_PROGRESS: {exists: true},
  CREATE_FAILED: {exists: false},
  DELETE_COMPLETE: {exists: false},
  DELETE_FAILED: {exists: true},
  DELETE_IN_PROGRESS: {exists: true},
  ROLLBACK_COMPLETE: {exists: false},
  ROLLBACK_FAILED: {exists: false},
  ROLLBACK_IN_PROGRESS: {exists: true},
  UPDATE_COMPLETE: {exists: true},
  UPDATE_COMPLETE_CLEANUP_IN_PROGRESS: {exists: true},
  UPDATE_IN_PROGRESS: {exists: true},
  UPDATE_ROLLBACK_COMPLETE: {exists: true},
  UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS: {exists: true},
  UPDATE_ROLLBACK_FAILED: {exists: true},
  UPDATE_ROLLBACK_IN_PROGRESS: {exists: true},
};
*/

module.exports = {
  create: {
    end: ["CREATE_COMPLETE"],
    abend: ["CREATE_FAILED","ROLLBACK_COMPLETE","ROLLBACK_FAILED"]
  },
  update: {
    end: ["UPDATE_COMPLETE"],
    abend: ["UPDATE_ROLLBACK_COMPLETE","UPDATE_ROLLBACK_FAILED"]
  },
  delete: {
    end: ["DELETE_COMPLETE"],
    abend: ["DELETE_FAILED"],
  }
}
