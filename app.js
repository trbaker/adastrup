(() => {
'use strict';
const COURSE = window.GIS_COURSE;
const KEY = 'gisLearningStudio:v1';
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const UI = {
 en:{
  saved:'Saved locally',saving:'Saving…',settings:'Accessibility & settings',progress:'Course progress',modules:'Modules',continue:'Continue where I left off',
  welcome:'Learn GIS by reading, mapping, checking, and revisiting',intro:'This companion course turns the open textbook into short learning cycles: read at the level that works for you, use a live ArcGIS map, answer formative questions, record notes, and return later without losing your place.',
  featuresTitle:'Built for learner choice',features:['English, French, or Spanish','Three reading bands for multi-paragraph lessons','Live ArcGIS-powered maps using anonymous public services','Formative feedback + confidence checks','Local progress saving + export/import','WCAG-oriented keyboard, contrast, motion, and text controls'],
  start:'Start module',resume:'Resume module',completed:'Completed',sourceLicense:'Source & license',sourceNote:'Adapted for noncommercial learning from the openly licensed textbook Geographic Information Systems and Cartography by Adam Dastrup (2022). Original text remains the authoritative source.',
  unit:'Unit',objectives:'Learning objectives',readingLevel:'Reading level',essential:'Essential',standard:'Standard',advanced:'Advanced',keyTerms:'Key terms',bookSections:'Original book sections',openBook:'Open this unit in the source book',markComplete:'Mark lesson complete',lessonComplete:'Lesson complete',
  mapLab:'Live ArcGIS map lab',mapMission:'Map mission',missionDone:'Mission completed',markMission:'Mark map mission complete',mapAlt:'Interactive ArcGIS map using anonymous public data. No ArcGIS account is required. Keyboard users can tab into map controls; the mission text above provides the learning task without requiring mouse-only interaction.',basemap:'Basemap',streets:'OpenStreetMap',topo:'USGS Topo',imagery:'USGS Imagery',jumpTo:'Example place',anonymous:'Anonymous access only',states:'U.S. States',counties:'U.S. Counties',places:'Incorporated Places',
  assessment:'Formative check',assessmentHelp:'Answer, rate your confidence, then check your thinking. You can retry.',confidence:'Confidence',low:'Low',medium:'Medium',high:'High',check:'Check answers',retry:'Retry',score:'Score',correct:'Correct',review:'Review this idea',
  notes:'Field notes',notesHint:'Write an observation, question, example, or connection. Notes save automatically.',notesSaved:'Notes saved locally.',
  language:'Language',game:'Gamification',none:'None',explorer:'Explorer XP',badges:'Cartographer badges',quest:'Map Quest',display:'Display supports',contrast:'High contrast',spacing:'Readable spacing',motion:'Reduce motion',focus:'Focus mode',textSize:'Text size',export:'Export progress',import:'Import progress',reset:'Reset local progress',privacy:'Progress and notes are stored only in this browser unless you export them.',done:'Done',
  xp:'Explorer XP',rank:'Rank',badgeCollection:'Badge collection',questProgress:'Map Quest',stamps:'map stamps',next:'Next module',reviewDeck:'Retrieval review',reviewDeckText:'Missed questions are saved here so you can revisit them instead of simply moving on.',reviewNow:'Review missed concept',
  resetConfirm:'Reset all saved progress, settings, notes, and assessment results on this device?',imported:'Progress imported.',badImport:'That file could not be imported.',exported:'Progress file created.',savedToast:'Progress saved.',missionToast:'Map mission recorded.',completeToast:'Module marked complete.',
  offline:'The course shell can work offline after its first visit. Live maps require an internet connection, but they do not require an ArcGIS sign-in.'
 },
 fr:{
  saved:'Enregistré localement',saving:'Enregistrement…',settings:'Accessibilité et réglages',progress:'Progression du cours',modules:'Modules',continue:'Reprendre là où je me suis arrêté',
  welcome:'Apprendre les SIG en lisant, cartographiant, vérifiant et révisant',intro:'Ce cours compagnon transforme le manuel ouvert en cycles courts : lire au niveau adapté, utiliser une carte ArcGIS en direct, répondre à des questions formatives, prendre des notes et reprendre plus tard sans perdre sa progression.',
  featuresTitle:'Conçu pour le choix de l’apprenant',features:['Anglais, français ou espagnol','Trois niveaux de lecture pour les leçons de plusieurs paragraphes','Cartes ArcGIS en direct utilisant des services publics anonymes','Rétroaction formative + confiance','Sauvegarde locale + export/import','Contrôles clavier, contraste, mouvement et taille du texte'],
  start:'Commencer le module',resume:'Reprendre le module',completed:'Terminé',sourceLicense:'Source et licence',sourceNote:'Adapté pour un apprentissage non commercial à partir du manuel ouvert Geographic Information Systems and Cartography d’Adam Dastrup (2022). Le texte original reste la source de référence.',
  unit:'Unité',objectives:'Objectifs d’apprentissage',readingLevel:'Niveau de lecture',essential:'Essentiel',standard:'Standard',advanced:'Avancé',keyTerms:'Mots-clés',bookSections:'Sections du livre original',openBook:'Ouvrir cette unité dans le livre source',markComplete:'Marquer la leçon terminée',lessonComplete:'Leçon terminée',
  mapLab:'Laboratoire ArcGIS en direct',mapMission:'Mission cartographique',missionDone:'Mission terminée',markMission:'Marquer la mission terminée',mapAlt:'Carte ArcGIS interactive utilisant des données publiques anonymes. Aucun compte ArcGIS n’est requis. Les utilisateurs du clavier peuvent accéder aux contrôles ; le texte de mission fournit aussi la tâche sans souris.',basemap:'Fond de carte',streets:'OpenStreetMap',topo:'Topo USGS',imagery:'Imagerie USGS',jumpTo:'Lieu exemple',anonymous:'Accès anonyme uniquement',states:'États des É.-U.',counties:'Comtés des É.-U.',places:'Lieux incorporés',
  assessment:'Vérification formative',assessmentHelp:'Répondez, indiquez votre confiance, puis vérifiez votre raisonnement. Vous pouvez recommencer.',confidence:'Confiance',low:'Faible',medium:'Moyenne',high:'Élevée',check:'Vérifier les réponses',retry:'Recommencer',score:'Score',correct:'Correct',review:'À revoir',
  notes:'Carnet de terrain',notesHint:'Notez une observation, une question, un exemple ou un lien. Les notes sont enregistrées automatiquement.',notesSaved:'Notes enregistrées localement.',
  language:'Langue',game:'Ludification',none:'Aucune',explorer:'XP Explorateur',badges:'Badges de cartographe',quest:'Quête cartographique',display:'Aides d’affichage',contrast:'Contraste élevé',spacing:'Espacement lisible',motion:'Réduire les animations',focus:'Mode concentration',textSize:'Taille du texte',export:'Exporter la progression',import:'Importer la progression',reset:'Réinitialiser la progression locale',privacy:'La progression et les notes sont stockées uniquement dans ce navigateur sauf si vous les exportez.',done:'Terminé',
  xp:'XP Explorateur',rank:'Rang',badgeCollection:'Collection de badges',questProgress:'Quête cartographique',stamps:'tampons cartographiques',next:'Module suivant',reviewDeck:'Révision espacée',reviewDeckText:'Les questions manquées sont conservées pour vous permettre d’y revenir.',reviewNow:'Revoir un concept manqué',
  resetConfirm:'Réinitialiser toute la progression, les réglages, les notes et les résultats sur cet appareil ?',imported:'Progression importée.',badImport:'Impossible d’importer ce fichier.',exported:'Fichier de progression créé.',savedToast:'Progression enregistrée.',missionToast:'Mission cartographique enregistrée.',completeToast:'Module marqué comme terminé.',
  offline:'L’interface du cours peut fonctionner hors ligne après la première visite. Les cartes en direct nécessitent Internet, mais aucun identifiant ArcGIS.'
 },
 es:{
  saved:'Guardado localmente',saving:'Guardando…',settings:'Accesibilidad y ajustes',progress:'Progreso del curso',modules:'Módulos',continue:'Continuar donde lo dejé',
  welcome:'Aprende SIG leyendo, mapeando, comprobando y repasando',intro:'Este curso complementario convierte el libro abierto en ciclos breves: leer al nivel adecuado, usar un mapa ArcGIS en vivo, responder preguntas formativas, tomar notas y volver después sin perder el progreso.',
  featuresTitle:'Diseñado para dar opciones al estudiante',features:['Inglés, francés o español','Tres niveles de lectura para lecciones de varios párrafos','Mapas ArcGIS en vivo con servicios públicos anónimos','Retroalimentación formativa + confianza','Guardado local + exportar/importar','Controles de teclado, contraste, movimiento y tamaño de texto'],
  start:'Comenzar módulo',resume:'Reanudar módulo',completed:'Completado',sourceLicense:'Fuente y licencia',sourceNote:'Adaptado para aprendizaje no comercial del libro abierto Geographic Information Systems and Cartography de Adam Dastrup (2022). El texto original sigue siendo la fuente autorizada.',
  unit:'Unidad',objectives:'Objetivos de aprendizaje',readingLevel:'Nivel de lectura',essential:'Esencial',standard:'Estándar',advanced:'Avanzado',keyTerms:'Términos clave',bookSections:'Secciones del libro original',openBook:'Abrir esta unidad en el libro fuente',markComplete:'Marcar lección completada',lessonComplete:'Lección completada',
  mapLab:'Laboratorio ArcGIS en vivo',mapMission:'Misión de mapa',missionDone:'Misión completada',markMission:'Marcar misión de mapa completada',mapAlt:'Mapa ArcGIS interactivo con datos públicos anónimos. No se requiere una cuenta de ArcGIS. Los usuarios de teclado pueden entrar en los controles; el texto de la misión ofrece la tarea sin depender del ratón.',basemap:'Mapa base',streets:'OpenStreetMap',topo:'Topo USGS',imagery:'Imágenes USGS',jumpTo:'Lugar de ejemplo',anonymous:'Solo acceso anónimo',states:'Estados de EE. UU.',counties:'Condados de EE. UU.',places:'Lugares incorporados',
  assessment:'Comprobación formativa',assessmentHelp:'Responde, indica tu confianza y comprueba tu razonamiento. Puedes volver a intentarlo.',confidence:'Confianza',low:'Baja',medium:'Media',high:'Alta',check:'Comprobar respuestas',retry:'Reintentar',score:'Puntuación',correct:'Correcto',review:'Repasar esta idea',
  notes:'Notas de campo',notesHint:'Escribe una observación, pregunta, ejemplo o conexión. Las notas se guardan automáticamente.',notesSaved:'Notas guardadas localmente.',
  language:'Idioma',game:'Gamificación',none:'Ninguna',explorer:'XP Explorador',badges:'Insignias de cartógrafo',quest:'Map Quest',display:'Apoyos de visualización',contrast:'Alto contraste',spacing:'Espaciado legible',motion:'Reducir movimiento',focus:'Modo de enfoque',textSize:'Tamaño del texto',export:'Exportar progreso',import:'Importar progreso',reset:'Restablecer progreso local',privacy:'El progreso y las notas se almacenan solo en este navegador a menos que los exportes.',done:'Listo',
  xp:'XP Explorador',rank:'Rango',badgeCollection:'Colección de insignias',questProgress:'Map Quest',stamps:'sellos de mapa',next:'Siguiente módulo',reviewDeck:'Repaso de recuperación',reviewDeckText:'Las preguntas falladas se guardan para que puedas volver a ellas en vez de simplemente avanzar.',reviewNow:'Repasar concepto fallado',
  resetConfirm:'¿Restablecer todo el progreso, ajustes, notas y resultados guardados en este dispositivo?',imported:'Progreso importado.',badImport:'No se pudo importar ese archivo.',exported:'Archivo de progreso creado.',savedToast:'Progreso guardado.',missionToast:'Misión de mapa registrada.',completeToast:'Módulo marcado como completado.',
  offline:'La estructura del curso puede funcionar sin conexión después de la primera visita. Los mapas en vivo requieren Internet, pero no un inicio de sesión de ArcGIS.'
 }
};

const defaultState = () => ({
 version:1,lang:'en',current:'unit1',completed:[],missionsCompleted:[],readingLevel:{},quiz:{},notes:{},reviewDeck:[],
 game:'none',display:{contrast:false,spacing:false,motion:false,focus:false,textSize:'100'},lastVisit:new Date().toISOString()
});
let state = loadState();
let activeMapView = null;
let toastTimer = null;

function loadState(){
 try{
  const raw=localStorage.getItem(KEY); if(!raw) return defaultState();
  const parsed=JSON.parse(raw); return {...defaultState(),...parsed,display:{...defaultState().display,...(parsed.display||{})}};
 }catch{return defaultState();}
}
function saveState(message=false){
 $('#saveStatus').textContent=t('saving');
 state.lastVisit=new Date().toISOString();
 localStorage.setItem(KEY,JSON.stringify(state));
 setTimeout(()=>{$('#saveStatus').textContent=t('saved');},180);
 if(message) toast(t('savedToast'));
 updateProgress(); renderGamePanel();
}
function t(key){return (UI[state.lang]||UI.en)[key] ?? UI.en[key] ?? key;}
function tr(obj){return obj?.[state.lang] ?? obj?.en ?? '';}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2200);}
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}

function applyDisplay(){
 document.body.classList.toggle('high-contrast',!!state.display.contrast);
 document.body.classList.toggle('readable-spacing',!!state.display.spacing);
 document.body.classList.toggle('reduce-motion',!!state.display.motion);
 document.body.classList.toggle('focus-mode',!!state.display.focus);
 document.documentElement.style.setProperty('--base-size',`${state.display.textSize||100}%`);
 document.documentElement.lang=state.lang;
}

function translateChrome(){
 $('#brandTitle').textContent=tr(COURSE.meta.title);
 $('#brandSub').textContent=tr(COURSE.meta.subtitle);
 $('#settingsBtn').textContent=t('settings');
 $('#progressLabel').textContent=t('progress');
 $('#modulesLabel').textContent=t('modules');
 $('#continueBtn').textContent=t('continue');
 $('#saveStatus').textContent=t('saved');
 $('#settingsTitle').textContent=t('settings');
 $('#languageLabel').textContent=t('language');
 $('#gameLabel').textContent=t('game');
 $('#gameNone').textContent=t('none');
 $('#gameExplorer').textContent=t('explorer');
 $('#gameBadges').textContent=t('badges');
 $('#gameQuest').textContent=t('quest');
 $('#accessLabel').textContent=t('display');
 $('#contrastLabel').textContent=t('contrast');
 $('#spacingLabel').textContent=t('spacing');
 $('#motionLabel').textContent=t('motion');
 $('#focusLabel').textContent=t('focus');
 $('#textSizeLabel').textContent=t('textSize');
 $('#exportBtn').textContent=t('export');
 $('#importBtn').textContent=t('import');
 $('#resetBtn').textContent=t('reset');
 $('#privacyNote').textContent=t('privacy');
 $('#doneSettings').textContent=t('done');
}

function renderNav(){
 const nav=$('#moduleNav');nav.innerHTML='';
 COURSE.modules.forEach(m=>{
  const b=document.createElement('button');b.className='module-link';b.dataset.unit=m.id;b.setAttribute('aria-current',state.current===m.id?'true':'false');
  b.innerHTML=`<span class="module-num">${m.number}</span><span class="module-name">${esc(tr(m.title))}</span><span class="module-done" aria-label="${state.completed.includes(m.id)?esc(t('completed')):''}">${state.completed.includes(m.id)?'✓':''}</span>`;
  b.addEventListener('click',()=>openLesson(m.id));nav.appendChild(b);
 });
}

function updateProgress(){
 const pct=Math.round((state.completed.length/COURSE.modules.length)*100);
 $('#progressPct').textContent=`${pct}%`;$('#progressBar').style.width=`${pct}%`;
 $('.progress-track').setAttribute('aria-valuenow',String(pct));
}

function renderGamePanel(){
 const p=$('#gamePanel');
 if(state.game==='none'){p.innerHTML='';return;}
 const scores=Object.values(state.quiz||{}).reduce((a,q)=>a+(q.score||0),0);
 if(state.game==='explorer'){
  const xp=state.completed.length*100+scores*25+state.missionsCompleted.length*40;
  const rank=xp>=1200?'GIS Pathfinder':xp>=700?'Spatial Analyst':xp>=300?'Map Explorer':'Survey Recruit';
  p.innerHTML=`<strong>${esc(t('xp'))}</strong><div style="font-size:1.55rem;font-weight:850;margin:.25rem 0">${xp} XP</div><div class="small">${esc(t('rank'))}: ${rank}</div>`;
 } else if(state.game==='badges'){
  const badges=state.completed.map(id=>COURSE.modules.find(m=>m.id===id)?.number).filter(Boolean);
  p.innerHTML=`<strong>${esc(t('badgeCollection'))}</strong><div class="pill-row" style="margin-top:8px">${badges.length?badges.map(n=>`<span class="pill" title="Unit ${n}">◆ ${n}</span>`).join(''):`<span class="small muted">0 / ${COURSE.modules.length}</span>`}</div>`;
 } else {
  p.innerHTML=`<strong>${esc(t('questProgress'))}</strong><div style="font-size:1.55rem;font-weight:850;margin:.25rem 0">${state.missionsCompleted.length}/${COURSE.modules.length}</div><div class="small">${esc(t('stamps'))}</div>`;
 }
}

function renderWelcome(){
 destroyMap();
 $('#lessonView').classList.add('hidden'); const v=$('#welcomeView');v.classList.remove('hidden');
 const missed=state.reviewDeck||[];
 v.innerHTML=`
 <div class="hero">
  <div class="hero-main">
   <div class="eyebrow">Open GIS learning companion</div>
   <h1>${esc(t('welcome'))}</h1>
   <p>${esc(t('intro'))}</p>
   <div class="lesson-actions"><button id="heroContinue" class="btn primary">${esc(t('continue'))}</button><a class="btn secondary" href="${COURSE.meta.bookUrl}" target="_blank" rel="noopener" style="text-decoration:none">${esc(t('openBook'))}</a></div>
  </div>
  <aside class="card hero-aside"><h2>${esc(t('featuresTitle'))}</h2><div class="feature-list">${t('features').map((x,i)=>`<div class="feature-item"><span class="feature-icon" aria-hidden="true">${['🌐','📖','🗺️','✓','💾','⌨️'][i]}</span><span>${esc(x)}</span></div>`).join('')}</div><p class="small muted">${esc(t('offline'))}</p></aside>
 </div>
 ${missed.length?`<section class="card" style="padding:18px;margin-top:22px"><h2>${esc(t('reviewDeck'))}</h2><p>${esc(t('reviewDeckText'))}</p><button id="reviewBtn" class="btn secondary">${esc(t('reviewNow'))} (${missed.length})</button></section>`:''}
 <section class="module-grid">${COURSE.modules.map(m=>`<article class="card module-card"><div class="lesson-kicker">${esc(t('unit'))} ${m.number}</div><h3>${esc(tr(m.title))}</h3><p>${esc(tr(m.focus))}</p><div class="pill-row">${m.keyTerms[state.lang].slice(0,3).map(k=>`<span class="pill">${esc(k)}</span>`).join('')}</div><button class="btn ${state.completed.includes(m.id)?'secondary':'primary'}" data-open="${m.id}">${esc(state.completed.includes(m.id)?t('resume'):t('start'))}</button></article>`).join('')}</section>
 <div class="license-note"><strong>${esc(t('sourceLicense'))}</strong><p>${esc(t('sourceNote'))}</p><span class="small">${esc(COURSE.meta.attribution)} ${esc(COURSE.meta.license)}</span></div>`;
 $('#heroContinue').addEventListener('click',()=>openLesson(state.current||'unit1'));
 $$('[data-open]',v).forEach(b=>b.addEventListener('click',()=>openLesson(b.dataset.open)));
 if($('#reviewBtn')) $('#reviewBtn').addEventListener('click',()=>{const ref=missed[0];openLesson(ref.split(':')[0]);});
 window.scrollTo({top:0,behavior:state.display.motion?'auto':'smooth'});
}

function openLesson(id){
 const m=COURSE.modules.find(x=>x.id===id); if(!m) return;
 state.current=id; saveState(); renderNav();
 $('#welcomeView').classList.add('hidden');const v=$('#lessonView');v.classList.remove('hidden');
 const level=state.readingLevel[id]||'standard';
 v.innerHTML=`<div class="lesson-layout">
  <article class="lesson-panel">
   <div class="lesson-header-row"><div><div class="lesson-kicker">${esc(t('unit'))} ${m.number}</div><h1 id="lessonTitle" class="lesson-title" tabindex="-1">${esc(tr(m.title))}</h1><p class="focus-text">${esc(tr(m.focus))}</p></div>${state.completed.includes(id)?`<span class="pill">✓ ${esc(t('completed'))}</span>`:''}</div>
   <section class="objectives"><h3>${esc(t('objectives'))}</h3><ul>${m.objectives[state.lang].map(o=>`<li>${esc(o)}</li>`).join('')}</ul></section>
   <div class="reading-tools"><fieldset><legend>${esc(t('readingLevel'))}</legend>${['essential','standard','advanced'].map(l=>`<label class="seg"><input type="radio" name="reading" value="${l}" ${level===l?'checked':''}><span>${esc(t(l))}</span></label>`).join('')}</fieldset></div>
   <section id="readingText" class="reading-text" aria-live="polite"></section>
   <section><h3>${esc(t('keyTerms'))}</h3><div class="pill-row">${m.keyTerms[state.lang].map(k=>`<span class="pill">${esc(k)}</span>`).join('')}</div></section>
   <section style="margin-top:22px"><div class="section-title-row"><h3>${esc(t('bookSections'))}</h3><a href="${m.source}" target="_blank" rel="noopener">${esc(t('openBook'))} ↗</a></div><ol class="source-list">${m.sections.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></section>
   <div class="lesson-actions"><button id="completeBtn" class="btn ${state.completed.includes(id)?'secondary':'primary'}">${esc(state.completed.includes(id)?t('lessonComplete'):t('markComplete'))}</button>${m.number<COURSE.modules.length?`<button id="nextBtn" class="btn secondary">${esc(t('next'))} →</button>`:''}</div>
  </article>
  <aside class="right-stack">
   <section class="map-card"><header><h3>${esc(t('mapLab'))}</h3></header><div class="map-mission"><strong>${esc(t('mapMission'))}</strong><p>${esc(tr(m.mapMission))}</p><button id="missionBtn" class="btn secondary">${esc(state.missionsCompleted.includes(id)?'✓ '+t('missionDone'):t('markMission'))}</button></div><div id="mapView" class="map-wrap" tabindex="0" aria-label="${esc(t('mapLab'))}"></div><div class="map-alt">${esc(t('mapAlt'))}</div></section>
   <section id="assessmentCard" class="assessment-card"></section>
   <section class="notes-card"><h3>${esc(t('notes'))}</h3><p class="small muted">${esc(t('notesHint'))}</p><textarea id="notesArea" aria-label="${esc(t('notes'))}" placeholder="…"></textarea><div class="notes-meta">${esc(t('notesSaved'))}</div></section>
   <section class="source-card"><h3>${esc(t('sourceLicense'))}</h3><p class="small">${esc(t('sourceNote'))}</p><a href="${m.source}" target="_blank" rel="noopener">Pressbooks ↗</a><p class="small muted">${esc(COURSE.meta.license)}</p></section>
  </aside>
 </div>`;
 updateReading(m,level); renderAssessment(m); initMap(m.mapMode);
 $('#notesArea').value=state.notes[id]||'';
 let noteTimer; $('#notesArea').addEventListener('input',e=>{clearTimeout(noteTimer);noteTimer=setTimeout(()=>{state.notes[id]=e.target.value;saveState();},250);});
 $$('input[name=reading]',v).forEach(r=>r.addEventListener('change',e=>{state.readingLevel[id]=e.target.value;saveState();updateReading(m,e.target.value);}));
 $('#completeBtn').addEventListener('click',()=>toggleComplete(id));
 $('#missionBtn').addEventListener('click',()=>toggleMission(id));
 if($('#nextBtn')) $('#nextBtn').addEventListener('click',()=>openLesson(`unit${m.number+1}`));
 $('#main').focus();window.scrollTo({top:0,behavior:state.display.motion?'auto':'smooth'});
}

function updateReading(m,level){
 const target=$('#readingText'); if(!target) return;
 const paras=m.reading[state.lang][level]||m.reading.en.standard;
 target.innerHTML=paras.map(p=>`<p>${esc(p)}</p>`).join('');
}
function toggleComplete(id){
 if(!state.completed.includes(id)){state.completed.push(id);toast(t('completeToast'));} else state.completed=state.completed.filter(x=>x!==id);
 saveState();openLesson(id);
}
function toggleMission(id){
 if(!state.missionsCompleted.includes(id)){state.missionsCompleted.push(id);toast(t('missionToast'));} else state.missionsCompleted=state.missionsCompleted.filter(x=>x!==id);
 saveState(); const b=$('#missionBtn');if(b)b.textContent=state.missionsCompleted.includes(id)?`✓ ${t('missionDone')}`:t('markMission');
}

function renderAssessment(m){
 const card=$('#assessmentCard'); const prior=state.quiz[m.id];
 card.innerHTML=`<div class="assessment-head"><h3>${esc(t('assessment'))}</h3>${prior?`<span class="pill">${esc(t('score'))}: ${prior.score}/${m.quiz.length}</span>`:''}</div><p class="small muted">${esc(t('assessmentHelp'))}</p><form id="quizForm">${m.quiz.map((q,qi)=>`<fieldset class="question"><legend>${qi+1}. ${esc(tr(q.prompt))}</legend>${q.answers.map((a,ai)=>`<label class="answer"><input type="radio" name="q${qi}" value="${ai}"> ${esc(tr(a))}</label>`).join('')}<div id="fb${qi}"></div></fieldset>`).join('')}<fieldset class="confidence"><legend>${esc(t('confidence'))}</legend><label><input type="radio" name="confidence" value="1"> ${esc(t('low'))}</label><label><input type="radio" name="confidence" value="2"> ${esc(t('medium'))}</label><label><input type="radio" name="confidence" value="3"> ${esc(t('high'))}</label></fieldset><button class="btn primary" type="submit">${esc(t('check'))}</button></form><div id="scoreBox"></div>`;
 $('#quizForm').addEventListener('submit',e=>{e.preventDefault();gradeQuiz(m);});
}

function gradeQuiz(m){
 let score=0, answered=0; const answers=[]; let missed=[];
 m.quiz.forEach((q,qi)=>{
  const checked=$(`input[name=q${qi}]:checked`); const fb=$(`#fb${qi}`); fb.className='feedback';
  if(!checked){fb.textContent='—';return;}
  answered++;const val=Number(checked.value);answers.push(val);
  if(val===q.correct){score++;fb.classList.add('good');fb.textContent=`✓ ${t('correct')}. ${tr(q.explanation)}`;state.reviewDeck=state.reviewDeck.filter(x=>x!==`${m.id}:${qi}`);} 
  else {fb.classList.add('bad');fb.textContent=`${t('review')}: ${tr(q.explanation)}`;missed.push(`${m.id}:${qi}`);if(!state.reviewDeck.includes(`${m.id}:${qi}`))state.reviewDeck.push(`${m.id}:${qi}`);}
 });
 const confidence=Number($('input[name=confidence]:checked')?.value||0);
 if(!answered){$('#scoreBox').innerHTML=`<div class="score-box">${esc(t('assessmentHelp'))}</div>`;return;}
 state.quiz[m.id]={score,total:m.quiz.length,answers,confidence,date:new Date().toISOString()};saveState();
 const pct=Math.round(score/m.quiz.length*100);let calibration='';
 if(confidence===3 && score<m.quiz.length) calibration=state.lang==='fr'?'Confiance élevée + erreur : ajoutez cette idée à votre révision.':state.lang==='es'?'Confianza alta + error: conviene repasar esta idea.':'High confidence + a miss: this is a strong candidate for retrieval review.';
 if(confidence===1 && score===m.quiz.length) calibration=state.lang==='fr'?'Vous saviez plus que vous ne le pensiez.':'You knew more than you thought.';
 if(state.lang==='es' && confidence===1 && score===m.quiz.length) calibration='Sabías más de lo que pensabas.';
 $('#scoreBox').innerHTML=`<div class="score-box"><strong>${esc(t('score'))}: ${score}/${m.quiz.length} (${pct}%)</strong>${calibration?`<div class="small">${esc(calibration)}</div>`:''}</div>`;
 renderGamePanel();
}

function initMap(mode){
 destroyMap(); const mapEl=$('#mapView'); if(!mapEl)return;
 if(typeof window.require!=='function'){mapEl.innerHTML='<p style="padding:1rem">ArcGIS map library unavailable.</p>';return;}
 window.require([
  'esri/config','esri/Map','esri/Basemap','esri/views/MapView','esri/layers/FeatureLayer','esri/layers/OpenStreetMapLayer','esri/layers/TileLayer',
  'esri/widgets/Home','esri/widgets/LayerList','esri/widgets/Expand','esri/widgets/Legend'
 ],(esriConfig,Map,Basemap,MapView,FeatureLayer,OpenStreetMapLayer,TileLayer,Home,LayerList,Expand,Legend)=>{
  if(!$('#mapView')) return;

  // Anonymous-only policy: never ask IdentityManager for a credential. If a
  // service is ever secured in the future, the request fails instead of
  // showing an ArcGIS sign-in dialog.
  esriConfig.request.useIdentity=false;

  const osmLayer=new OpenStreetMapLayer({title:'OpenStreetMap'});
  const usgsTopoLayer=new TileLayer({
   url:'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer',
   title:'USGS Topo'
  });
  const usgsImageryLayer=new TileLayer({
   url:'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer',
   title:'USGS Imagery'
  });
  const basemaps={
   osm:new Basemap({baseLayers:[osmLayer],title:'OpenStreetMap',id:'anonymous-osm'}),
   topo:new Basemap({baseLayers:[usgsTopoLayer],title:'USGS Topo',id:'anonymous-usgs-topo'}),
   imagery:new Basemap({baseLayers:[usgsImageryLayer],title:'USGS Imagery',id:'anonymous-usgs-imagery'})
  };
  let currentBasemap=mode==='imagery'?'imagery':'osm';
  const map=new Map({basemap:basemaps[currentBasemap]});

  const states=new FeatureLayer({
   url:'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/80',
   title:t('states'),outFields:['*'],opacity:.62,visible:true,
   renderer:{type:'simple',symbol:{type:'simple-fill',color:[40,105,140,20],outline:{color:[24,75,105,210],width:1.25}}},
   popupTemplate:{title:'{BASENAME}',content:[{type:'fields',fieldInfos:[{fieldName:'GEOID',label:'GEOID'},{fieldName:'AREALAND',label:'Land area (m²)',format:{digitSeparator:true,places:0}}]}]}
  });
  const counties=new FeatureLayer({
   url:'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/82',
   title:t('counties'),outFields:['*'],opacity:.58,visible:mode==='counties'||mode==='design',
   renderer:{type:'simple',symbol:{type:'simple-fill',color:[255,255,255,0],outline:{color:[95,95,95,160],width:.65}}},
   popupTemplate:{title:'{BASENAME}',content:[{type:'fields',fieldInfos:[{fieldName:'GEOID',label:'GEOID'},{fieldName:'AREALAND',label:'Land area (m²)',format:{digitSeparator:true,places:0}}]}]}
  });
  const places=new FeatureLayer({
   url:'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer/4',
   title:t('places'),outFields:['*'],opacity:.72,visible:mode==='cities'||mode==='counties',
   renderer:{type:'simple',symbol:{type:'simple-fill',color:[230,158,45,55],outline:{color:[155,92,5,210],width:1}}},
   popupTemplate:{title:'{BASENAME}',content:[{type:'fields',fieldInfos:[{fieldName:'GEOID',label:'GEOID'},{fieldName:'STATE',label:'State FIPS'}]}]}
  });
  map.addMany([states,counties,places]);

  const initialView=mode==='counties'?{center:[-98,39],zoom:6}:{center:[-98,39],zoom:4};
  const view=new MapView({container:'mapView',map,...initialView,constraints:{snapToZoom:false}});activeMapView=view;
  view.ui.add(new Home({view}),'top-left');
  const layerList=new LayerList({view});view.ui.add(new Expand({view,content:layerList,group:'top-right',expanded:false}),'top-right');
  view.ui.add(new Expand({view,content:new Legend({view}),group:'top-right',expanded:false}),'top-right');

  const controls=document.createElement('div');
  controls.id='anonymousMapControls';
  controls.className='map-toolbar anonymous-map-controls';
  controls.innerHTML=`
   <div class="map-tool-group" role="group" aria-label="${esc(t('basemap'))}">
    <strong class="map-tool-label">${esc(t('basemap'))}:</strong>
    <button type="button" class="map-chip" data-basemap="osm">${esc(t('streets'))}</button>
    <button type="button" class="map-chip" data-basemap="topo">${esc(t('topo'))}</button>
    <button type="button" class="map-chip" data-basemap="imagery">${esc(t('imagery'))}</button>
   </div>
   <label class="map-place-label"><span>${esc(t('jumpTo'))}:</span>
    <select id="placePreset" aria-label="${esc(t('jumpTo'))}">
     <option value="us">United States</option>
     <option value="newyork">New York City</option>
     <option value="chicago">Chicago</option>
     <option value="denver">Denver / Front Range</option>
     <option value="losangeles">Los Angeles</option>
     <option value="miami">Miami</option>
     <option value="seattle">Seattle</option>
     <option value="saltlake">Salt Lake City</option>
    </select>
   </label>
   <span class="anonymous-pill" title="No API key, OAuth, or ArcGIS user login is used">🔓 ${esc(t('anonymous'))}</span>`;
  mapEl.insertAdjacentElement('beforebegin',controls);

  const updateBasemapButtons=()=>{
   $$('[data-basemap]',controls).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.basemap===currentBasemap)));
  };
  $$('[data-basemap]',controls).forEach(b=>b.addEventListener('click',()=>{
   currentBasemap=b.dataset.basemap;
   map.basemap=basemaps[currentBasemap];
   updateBasemapButtons();
  }));
  updateBasemapButtons();

  const presets={
   us:{center:[-98,39],zoom:4},newyork:{center:[-74.006,40.713],zoom:10},chicago:{center:[-87.630,41.878],zoom:10},
   denver:{center:[-104.990,39.739],zoom:9},losangeles:{center:[-118.244,34.052],zoom:9},miami:{center:[-80.192,25.762],zoom:10},
   seattle:{center:[-122.332,47.606],zoom:9},saltlake:{center:[-111.891,40.761],zoom:10}
  };
  $('#placePreset')?.addEventListener('change',e=>{const p=presets[e.target.value];if(p)view.goTo(p,{duration:state.display.motion?0:700}).catch(()=>{});});

  const showMapError=(message)=>{
   if(!$('#mapView')||$('#mapView .map-load-warning'))return;
   const d=document.createElement('div');d.className='feedback bad map-load-warning';d.textContent=message;
   mapEl.appendChild(d);
  };
  Promise.allSettled([states.load(),counties.load(),places.load(),osmLayer.load(),usgsTopoLayer.load(),usgsImageryLayer.load()]).then(results=>{
   if(results.some(r=>r.status==='rejected')) showMapError('One anonymous map source is unavailable. No sign-in is needed; try another basemap or reload later.');
  });
  view.when().catch(()=>showMapError('Map could not load. Check the internet connection. No ArcGIS sign-in is required.'));
 });
}
function destroyMap(){if(activeMapView){try{activeMapView.destroy();}catch{} activeMapView=null;}}

function syncSettingsForm(){
 $('#languageSelect').value=state.lang;
 const game=$(`input[name=game][value="${state.game}"]`);if(game)game.checked=true;
 $('#contrastToggle').checked=!!state.display.contrast;$('#spacingToggle').checked=!!state.display.spacing;$('#motionToggle').checked=!!state.display.motion;$('#focusToggle').checked=!!state.display.focus;$('#textSizeSelect').value=state.display.textSize||'100';
}
function bindGlobal(){
 $('#settingsBtn').addEventListener('click',()=>{syncSettingsForm();$('#settingsDialog').showModal();});
 $('#menuBtn').addEventListener('click',()=>{const s=$('#courseNav');const o=s.classList.toggle('open');$('#menuBtn').setAttribute('aria-expanded',String(o));});
 $('#continueBtn').addEventListener('click',()=>openLesson(state.current||'unit1'));
 $('#languageSelect').addEventListener('change',e=>{state.lang=e.target.value;saveState();applyDisplay();translateChrome();renderNav();state.current?openLesson(state.current):renderWelcome();syncSettingsForm();});
 $$('input[name=game]').forEach(r=>r.addEventListener('change',e=>{state.game=e.target.value;saveState();renderGamePanel();}));
 const toggles=[['contrastToggle','contrast'],['spacingToggle','spacing'],['motionToggle','motion'],['focusToggle','focus']];
 toggles.forEach(([id,k])=>$('#'+id).addEventListener('change',e=>{state.display[k]=e.target.checked;applyDisplay();saveState();}));
 $('#textSizeSelect').addEventListener('change',e=>{state.display.textSize=e.target.value;applyDisplay();saveState();});
 $('#exportBtn').addEventListener('click',exportProgress);$('#importBtn').addEventListener('click',()=>$('#importFile').click());$('#importFile').addEventListener('change',importProgress);
 $('#resetBtn').addEventListener('click',()=>{if(confirm(t('resetConfirm'))){localStorage.removeItem(KEY);state=defaultState();applyDisplay();translateChrome();renderNav();renderGamePanel();updateProgress();syncSettingsForm();renderWelcome();}});
 document.addEventListener('keydown',e=>{
  if(e.altKey||e.ctrlKey||e.metaKey||e.target.matches('input,textarea,select')) return;
  if(e.key.toLowerCase()==='l' && !$('#lessonView').classList.contains('hidden')) $('#lessonTitle')?.focus?.();
  if(e.key.toLowerCase()==='g' && !$('#lessonView').classList.contains('hidden')) $('#mapView')?.focus?.();
  if(e.key.toLowerCase()==='q' && !$('#lessonView').classList.contains('hidden')) $('#assessmentCard')?.scrollIntoView({behavior:state.display.motion?'auto':'smooth'});
 });
}
function exportProgress(){
 const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='gis-learning-progress.json';a.click();URL.revokeObjectURL(url);toast(t('exported'));
}
function importProgress(e){
 const file=e.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!data||typeof data!=='object'||!data.version)throw new Error('bad');state={...defaultState(),...data,display:{...defaultState().display,...(data.display||{})}};saveState();applyDisplay();translateChrome();renderNav();renderGamePanel();updateProgress();syncSettingsForm();renderWelcome();toast(t('imported'));}catch{toast(t('badImport'));}};reader.readAsText(file);e.target.value='';
}

function init(){
 applyDisplay();translateChrome();renderNav();updateProgress();renderGamePanel();bindGlobal();syncSettingsForm();renderWelcome();
 if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
}

document.addEventListener('DOMContentLoaded',init);
})();
