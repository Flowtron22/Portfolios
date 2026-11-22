import * as T from './assets/three.module.js';
import {createScene as createPuzzle} from './scene.js';

const destinations = [
  {label: 'ART', href: '#/solo/art', material: 4, accent: '#d6ef8d', tint: '#4c6130', rotation: 0},
  {label: 'GAMES', href: '#/solo/games', material: 0, accent: '#9ddffb', tint: '#274c65', rotation: -Math.PI / 2},
  {label: 'LIBRARY', href: '#/solo/library', material: 2, accent: '#f6d799', tint: '#655036', rotation: 0},
  {label: 'CV', href: '#/cv', material: 1, accent: '#f1b49e', tint: '#634134', rotation: Math.PI / 2},
  {label: 'CONTACT', href: '#/contact', material: 5, accent: '#c4b7ff', tint: '#453c6a', rotation: Math.PI}
];
const faceDestinations = new Map(destinations.map(destination => [destination.material, destination]));

function drawIcon(ctx, label) {
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  switch (label) {
    case 'ART':
      ctx.roundRect(191, 120, 130, 100, 12);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(279, 151, 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(192, 204);
      ctx.lineTo(235, 165);
      ctx.lineTo(266, 198);
      ctx.lineTo(285, 181);
      ctx.lineTo(320, 212);
      break;
    case 'GAMES':
      ctx.moveTo(221, 137);
      ctx.lineTo(291, 137);
      ctx.quadraticCurveTo(313, 137, 321, 161);
      ctx.lineTo(331, 193);
      ctx.quadraticCurveTo(333, 216, 310, 210);
      ctx.lineTo(282, 190);
      ctx.lineTo(230, 190);
      ctx.lineTo(202, 210);
      ctx.quadraticCurveTo(179, 216, 181, 193);
      ctx.lineTo(191, 161);
      ctx.quadraticCurveTo(199, 137, 221, 137);
      ctx.moveTo(222, 151);
      ctx.lineTo(222, 176);
      ctx.moveTo(209, 163);
      ctx.lineTo(235, 163);
      ctx.moveTo(286, 164);
      ctx.lineTo(286, 165);
      ctx.moveTo(304, 157);
      ctx.lineTo(304, 158);
      break;
    case 'LIBRARY':
      for (const x of [196, 237, 278]) ctx.roundRect(x, 118, 34, 102, 4);
      ctx.moveTo(182, 220);
      ctx.lineTo(330, 220);
      break;
    case 'CONTACT':
      ctx.roundRect(187, 127, 138, 87, 10);
      ctx.moveTo(190, 133);
      ctx.lineTo(256, 180);
      ctx.lineTo(322, 133);
      break;
    case 'CV':
      ctx.roundRect(209, 116, 94, 110, 9);
      for (const y of [147, 170, 193]) {
        ctx.moveTo(229, y);
        ctx.lineTo(282, y);
      }
      break;
  }
  ctx.stroke();
}

function makeFaceTexture(destination, highlighted = false) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const accent = destination?.accent ?? '#708173';
  const gradient = ctx.createLinearGradient(30, 20, 448, 484);
  gradient.addColorStop(0, highlighted ? accent : destination?.tint ?? '#364438');
  gradient.addColorStop(1, highlighted ? '#ffffff' : '#121916');

  ctx.fillStyle = '#0c120f';
  ctx.fillRect(0, 0, 512, 512);
  ctx.beginPath();
  ctx.roundRect(15, 15, 482, 482, 24);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.globalAlpha = highlighted ? 1 : .58;
  ctx.lineWidth = highlighted ? 8 : 3;
  ctx.stroke();

  const ink = highlighted ? '#172018' : accent;
  ctx.globalAlpha = .13;
  ctx.fillStyle = ink;
  for (let x = 44; x < 475; x += 16) {
    for (let y = 44; y < 475; y += 16) ctx.fillRect(x, y, 2, 2);
  }
  if (destination) {
    ctx.globalAlpha = 1;
    ctx.strokeStyle = ink;
    drawIcon(ctx, destination.label);
    ctx.fillStyle = ink;
    ctx.font = '800 74px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(destination.label, 256, 312);
    if (highlighted) {
      ctx.font = '600 56px system-ui, sans-serif';
      ctx.fillText('↗', 256, 395);
    } else ctx.fillRect(206, 387, 100, 5);
  }
  const map = new T.CanvasTexture(canvas);
  map.colorSpace = T.SRGBColorSpace;
  return map;
}

function createMenu(host) {
  host.innerHTML = `<div class="cube-stage cube-menu-stage" tabindex="0" role="group" aria-label="Portfolio navigation cube. Use the left and right arrow keys to choose a face and Enter to open it." aria-describedby="cube-current"></div>
    <p class="cube-menu-help">Drag left or right. Tap a face to open it.</p>
    <span id="cube-current" class="sr-only" aria-live="polite">ART</span>`;

  const stage = host.querySelector('.cube-menu-stage');
  const current = host.querySelector('#cube-current');
  const renderer = new T.WebGLRenderer({alpha: true, antialias: true});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.domElement.setAttribute('aria-hidden', 'true');
  stage.append(renderer.domElement);

  const scene = new T.Scene();
  const camera = new T.OrthographicCamera(-2.55, 2.55, 2.55, -2.55, .1, 100);
  camera.position.z = 8;
  const geometry = new T.BoxGeometry(2.65, 2.65, 2.65);
  const textures = Array.from({length: 6}, (_, index) => makeFaceTexture(faceDestinations.get(index)));
  const highlightedTextures = new Map(destinations.map(destination => [
    destination.material, makeFaceTexture(destination, true)
  ]));
  const materials = textures.map(map => new T.MeshBasicMaterial({map}));
  const cube = new T.Mesh(geometry, materials);
  const pitch = Math.atan(1 / Math.sqrt(2));
  let yaw = -Math.PI / 4;
  const euler = new T.Euler(pitch, yaw, 0);
  const target = new T.Quaternion().setFromEuler(euler);
  cube.quaternion.copy(target);
  scene.add(cube);

  const ray = new T.Raycaster();
  const pointer = new T.Vector2();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let drag, frame, highlighted, selected = 0;

  function highlight(destination) {
    const index = destination?.material;
    if (index === highlighted) return;
    if (highlighted !== undefined) materials[highlighted].map = textures[highlighted];
    if (index !== undefined) materials[index].map = highlightedTextures.get(index);
    highlighted = index;
    requestDraw();
  }
  function hover(destination) {
    highlight(destination);
    stage.classList.toggle('cube-face-hover', Boolean(destination));
  }

  function pick(event) {
    const rect = stage.getBoundingClientRect();
    pointer.set(2 * (event.clientX - rect.left) / rect.width - 1, 1 - 2 * (event.clientY - rect.top) / rect.height);
    cube.updateMatrixWorld();
    ray.setFromCamera(pointer, camera);
    return faceDestinations.get(ray.intersectObject(cube)[0]?.face.materialIndex);
  }
  function open(destination) {
    if (location.hash === destination.href) window.scrollTo(0, 0);
    else location.hash = destination.href;
  }
  function down(event) {
    if (drag || event.button !== 0) return;
    event.preventDefault();
    stage.blur();
    hover(pick(event));
    drag = {id: event.pointerId, x: event.clientX, y: event.clientY, moved: false};
    stage.setPointerCapture(event.pointerId);
  }
  function move(event) {
    if (!drag) {
      hover(pick(event));
      return;
    }
    if (drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    if (!drag.moved && Math.hypot(dx, event.clientY - drag.y) < 7) return;
    drag.moved = true;
    drag.x = event.clientX;
    yaw += dx * .009;
    target.setFromEuler(euler.set(pitch, yaw, 0));
    cube.quaternion.copy(target);
    hover(undefined);
    stage.classList.add('cube-dragging');
    requestDraw();
  }
  function end(event) {
    if (drag?.id !== event.pointerId) return;
    const wasMoved = drag.moved;
    drag = undefined;
    stage.classList.remove('cube-dragging');
    const destination = event.type === 'pointerup' ? pick(event) : undefined;
    hover(event.pointerType === 'mouse' ? destination : undefined);
    if (!wasMoved && destination) open(destination);
  }
  function keydown(event) {
    const {key} = event;
    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      open(destinations[selected]);
      return;
    }
    const step = {ArrowLeft: -1, ArrowRight: 1}[key];
    if (!step) return;
    event.preventDefault();
    selected = (selected + step + destinations.length) % destinations.length;
    const destination = destinations[selected];
    current.textContent = destination.label;
    highlight(destination);
    yaw = destination.rotation;
    target.setFromEuler(euler.set(pitch, yaw, 0));
    requestDraw();
  }
  function requestDraw() {
    if (frame === undefined) frame = requestAnimationFrame(draw);
  }
  function draw() {
    frame = undefined;
    if (!drag) {
      if (reduced.matches || cube.quaternion.angleTo(target) < .001) cube.quaternion.copy(target);
      else {
        cube.quaternion.slerp(target, .18);
        requestDraw();
      }
    }
    renderer.render(scene, camera);
  }
  const observer = new ResizeObserver(() => {
    const {width, height} = stage.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height);
    const aspect = width / height;
    const halfHeight = 2.55 / Math.min(1, aspect);
    camera.top = halfHeight;
    camera.bottom = -halfHeight;
    camera.right = halfHeight * aspect;
    camera.left = -camera.right;
    camera.updateProjectionMatrix();
    requestDraw();
  });
  observer.observe(stage);
  const clearHighlight = () => hover(undefined);
  const listeners = {
    pointerdown: down, pointermove: move, pointerup: end, pointercancel: end, lostpointercapture: end,
    pointerleave: clearHighlight, blur: clearHighlight, keydown
  };
  for (const [event, handler] of Object.entries(listeners)) stage.addEventListener(event, handler);
  host.classList.add('ready');
  requestDraw();

  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    for (const [event, handler] of Object.entries(listeners)) stage.removeEventListener(event, handler);
    geometry.dispose();
    for (const texture of [...textures, ...highlightedTextures.values()]) texture.dispose();
    for (const material of materials) material.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
  };
}

export function createCubeDemo(host) {
  const fallback = host.innerHTML;
  let dispose;
  let puzzle = false;
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'cube-mode-toggle';

  function showFallback() {
    host.removeEventListener('webglcontextlost', onContextLost, true);
    dispose?.();
    dispose = undefined;
    host.innerHTML = fallback;
    host.classList.remove('cube-menu');
    host.setAttribute('aria-label', 'Portfolio navigation');
  }
  function onContextLost(event) {
    if (host.contains(event.target)) showFallback();
  }
  function showMode() {
    try {
      dispose?.();
      dispose = undefined;
      dispose = puzzle ? createPuzzle(host) : createMenu(host);
      host.classList.toggle('cube-menu', !puzzle);
      host.setAttribute('aria-label', puzzle ? 'Playable Rubik’s cube' : 'Portfolio navigation cube');
      toggle.textContent = puzzle ? 'Back to portfolio cube' : 'Play Rubik’s cube';
      host.append(toggle);
    } catch (error) {
      console.warn('Interactive cube unavailable', error);
      showFallback();
    }
  }
  toggle.addEventListener('click', () => {
    puzzle = !puzzle;
    showMode();
    if (toggle.isConnected) toggle.focus({preventScroll: true});
  });
  host.addEventListener('webglcontextlost', onContextLost, true);
  showMode();
  return () => {
    host.removeEventListener('webglcontextlost', onContextLost, true);
    dispose?.();
  };
}
