/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
/* eslint-disable no-negated-condition */
 /* global Velocity forEach */
var EX = {
  ui: {
    body: document.getElementsByTagName('body')[0],
    header: document.querySelector('.js-site-header'),
    lyrics: document.querySelector('.js-lyrics-link'),
    firstTrack: document.querySelector('.js-first-track'),
    onLoad: document.querySelector('.js-on-init'),
    player: document.querySelector('.js-player')
  }
};

(function() {
  'use strict';

  EX.ui.player.addEventListener('load', function() {
    Velocity(EX.ui.player, {
      opacity: 1.0
    }, {
      duration: 500,
      easing: 'easeInSine',
      complete: function() {
        EX.ui.player.classList.add('is-loaded');
      }
    });
  });

  setTimeout(function() {
    // If player hasnt loaded in 2 whole seconds, load it anyway.
    if (!EX.ui.player.classList.contains('is-loaded')) {
      Velocity(EX.ui.player, {
        opacity: 1.0
      }, {
        duration: 500,
        easing: 'easeInSine',
        complete: function() {
          EX.ui.player.classList.add('is-loaded');
        }
      });
    }
  }, 2500);

  window.addEventListener('scroll', function() {
    var currentPosition = window.pageYOffset;

    if (currentPosition > 1) {
      EX.ui.header.classList.add('scrolled');
    } else {
      EX.ui.header.classList.remove('scrolled');
    }
  });

  window.dispatchEvent(new Event('scroll'));

  EX.ui.lyrics.addEventListener('click', function(e) {
    e.preventDefault();
    Velocity(EX.ui.firstTrack, 'scroll', {
      duration: 1000,
      offset: -100
    }, 'easeInSine');
  });

  var lockupAnimatedElements = document.querySelectorAll('.js-on-init');
  animateLockup();

  function animateLockup() {
    forEach(lockupAnimatedElements, function(element, index) {
      Velocity(element, {
        opacity: 1.0
      }, {
        delay: 250 * (index + 1),
        duration: 750,
        easing: 'easeInSine'
      });
    });
  }
})();
