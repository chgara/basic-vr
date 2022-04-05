(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// var newsEntities = Array.prototype.slice.call(document.querySelectorAll('.news-entity-container'));
// newsEntities.forEach((entity, i) => {
//   console.log(entity, i);
//   entity.object3D.rotation.x = Math.PI/12 * (1 - i);
// });

AFRAME.registerComponent('toggle-detail', {
  schema: {
    target: { default: null }
  },

  init: function () {
    this.targetElement = document.querySelector(this.data.target);

    var el = this.el;

    el.addEventListener('click', () => {
      console.log(this.targetElement);
      this.targetElement.classList.toggle('detail');
    });
  }
});

// window.addEventListener('load', () => {
//   console.log('load');
//   var rows = document.querySelectorAll('.row');
//   console.log(rows);
//   Array.prototype.forEach.call(rows, (row) => {
//     console.log(row);
//     row.addEventListener('loaded', () => {
//       console.log('row loaded');
//       row.emit('');
//     });
//   });

//   var row = document.querySelector('.row');
//   row.addEventListener('loaded', () => {
//     console.log('row loaded');
//   });
// });

},{}]},{},[1]);
