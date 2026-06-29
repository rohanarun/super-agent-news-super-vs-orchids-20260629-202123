(function(){
  if (!window.gsap) return;
  gsap.from('.hero h1', {opacity:0, y:30, duration:1, ease:'power3.out'});
  gsap.from('.hero-sub', {opacity:0, y:20, duration:1, delay:0.2});
  gsap.from('.hero-actions .btn', {opacity:0, y:10, duration:0.6, stagger:0.1, delay:0.4});
})();