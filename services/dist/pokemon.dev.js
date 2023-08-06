"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPokeData = getAllPokeData;
exports.getPokeData = getPokeData;

function getAllPokeData(url) {
  return regeneratorRuntime.async(function getAllPokeData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            fetch(url).then(function (res) {
              return res.json();
            }).then(function (data) {
              resolve(data);
            });
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getPokeData(url) {
  return regeneratorRuntime.async(function getPokeData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(url);
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            fetch(url).then(function (res) {
              return res.json();
            }).then(function (data) {
              resolve(data);
            });
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}