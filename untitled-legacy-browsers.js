/***************** 
 * Untitled *
 *****************/


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const training_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(training_loopLoopBegin(training_loopLoopScheduler));
flowScheduler.add(training_loopLoopScheduler);
flowScheduler.add(training_loopLoopEnd);



flowScheduler.add(start_mainRoutineBegin());
flowScheduler.add(start_mainRoutineEachFrame());
flowScheduler.add(start_mainRoutineEnd());
const main_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(main_loopLoopBegin(main_loopLoopScheduler));
flowScheduler.add(main_loopLoopScheduler);
flowScheduler.add(main_loopLoopEnd);


flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'sequences/training.csv', 'path': 'sequences/training.csv'},
    {'name': 'stimuli/stim001.png', 'path': 'stimuli/stim001.png'},
    {'name': 'stimuli/stim002.png', 'path': 'stimuli/stim002.png'},
    {'name': 'stimuli/stim003.png', 'path': 'stimuli/stim003.png'},
    {'name': 'sequences/main.csv', 'path': 'sequences/main.csv'},
    {'name': 'stimuli/stim004.png', 'path': 'stimuli/stim004.png'},
    {'name': 'stimuli/stim005.png', 'path': 'stimuli/stim005.png'},
    {'name': 'stimuli/stim006.png', 'path': 'stimuli/stim006.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var text;
var welcome_response;
var training_stimulus_presentationClock;
var stimulus_presentation_train;
var yesno_response_train;
var stop_training;
var training_written_responseClock;
var textbox_response_training;
var end_textinput_button;
var start_mainClock;
var main_instructions;
var main_instruction_keyresp;
var main_trialClock;
var stimulus_presentation_main;
var yesno_response_main;
var textbox_response_main;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Hey!\n\nPress any key to continue!\n\nThis is v1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_stimulus_presentation"
  training_stimulus_presentationClock = new util.Clock();
  stimulus_presentation_train = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus_presentation_train', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  yesno_response_train = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  stop_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_written_response"
  training_written_responseClock = new util.Clock();
  textbox_response_training = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_response_training',
    text: '',
    placeholder: 'Melyik fogalomra gondoltál?',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  end_textinput_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'end_textinput_button',
    text: 'Kész!',
    font: 'Arvo',
    pos: [0, 0],
    size: [0.5, 0.5],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  end_textinput_button.clock = new util.Clock();
  
  // Initialize components for Routine "start_main"
  start_mainClock = new util.Clock();
  main_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_instructions',
    text: 'This is now the main task',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  main_instruction_keyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_trial"
  main_trialClock = new util.Clock();
  stimulus_presentation_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus_presentation_main', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  yesno_response_main = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textbox_response_main = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_response_main',
    text: 'Any text\n\nincluding line breaks',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcomeMaxDurationReached;
var _welcome_response_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    welcome_response.keys = undefined;
    welcome_response.rt = undefined;
    _welcome_response_allKeys = [];
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(text);
    welcomeComponents.push(welcome_response);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *welcome_response* updates
    if (t >= 0.0 && welcome_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_response.tStart = t;  // (not accounting for frame time here)
      welcome_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome_response.clearEvents(); });
    }
    
    // if welcome_response is active this frame...
    if (welcome_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_response.getKeys({
        keyList: typeof ['y','n','left','right','space'] === 'string' ? [['y','n','left','right','space']] : ['y','n','left','right','space'], 
        waitRelease: false
      });
      _welcome_response_allKeys = _welcome_response_allKeys.concat(theseKeys);
      if (_welcome_response_allKeys.length > 0) {
        welcome_response.keys = _welcome_response_allKeys[_welcome_response_allKeys.length - 1].name;  // just the last key pressed
        welcome_response.rt = _welcome_response_allKeys[_welcome_response_allKeys.length - 1].rt;
        welcome_response.duration = _welcome_response_allKeys[_welcome_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welcome_response.corr, level);
    }
    psychoJS.experiment.addData('welcome_response.keys', welcome_response.keys);
    if (typeof welcome_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcome_response.rt', welcome_response.rt);
        psychoJS.experiment.addData('welcome_response.duration', welcome_response.duration);
        routineTimer.reset();
        }
    
    welcome_response.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training_loop;
function training_loopLoopBegin(training_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    training_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sequences/training.csv',
      seed: undefined, name: 'training_loop'
    });
    psychoJS.experiment.addLoop(training_loop); // add the loop to the experiment
    currentLoop = training_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    training_loop.forEach(function() {
      snapshot = training_loop.getSnapshot();
    
      training_loopLoopScheduler.add(importConditions(snapshot));
      training_loopLoopScheduler.add(training_stimulus_presentationRoutineBegin(snapshot));
      training_loopLoopScheduler.add(training_stimulus_presentationRoutineEachFrame());
      training_loopLoopScheduler.add(training_stimulus_presentationRoutineEnd(snapshot));
      training_loopLoopScheduler.add(training_written_responseRoutineBegin(snapshot));
      training_loopLoopScheduler.add(training_written_responseRoutineEachFrame());
      training_loopLoopScheduler.add(training_written_responseRoutineEnd(snapshot));
      training_loopLoopScheduler.add(training_loopLoopEndIteration(training_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function training_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(training_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function training_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var main_loop;
function main_loopLoopBegin(main_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sequences/main.csv',
      seed: undefined, name: 'main_loop'
    });
    psychoJS.experiment.addLoop(main_loop); // add the loop to the experiment
    currentLoop = main_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    main_loop.forEach(function() {
      snapshot = main_loop.getSnapshot();
    
      main_loopLoopScheduler.add(importConditions(snapshot));
      main_loopLoopScheduler.add(main_trialRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_trialRoutineEachFrame());
      main_loopLoopScheduler.add(main_trialRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_loopLoopEndIteration(main_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function main_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(main_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function main_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var training_stimulus_presentationMaxDurationReached;
var _yesno_response_train_allKeys;
var _stop_training_allKeys;
var training_stimulus_presentationMaxDuration;
var training_stimulus_presentationComponents;
function training_stimulus_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_stimulus_presentation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    training_stimulus_presentationClock.reset();
    routineTimer.reset();
    training_stimulus_presentationMaxDurationReached = false;
    // update component parameters for each repeat
    stimulus_presentation_train.setImage(stimulus);
    yesno_response_train.keys = undefined;
    yesno_response_train.rt = undefined;
    _yesno_response_train_allKeys = [];
    stop_training.keys = undefined;
    stop_training.rt = undefined;
    _stop_training_allKeys = [];
    stop_training.keys = [];
    psychoJS.experiment.addData('training_stimulus_presentation.started', globalClock.getTime());
    training_stimulus_presentationMaxDuration = null
    // keep track of which components have finished
    training_stimulus_presentationComponents = [];
    training_stimulus_presentationComponents.push(stimulus_presentation_train);
    training_stimulus_presentationComponents.push(yesno_response_train);
    training_stimulus_presentationComponents.push(stop_training);
    
    training_stimulus_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function training_stimulus_presentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_stimulus_presentation' ---
    // get current time
    t = training_stimulus_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimulus_presentation_train* updates
    if (t >= 0.0 && stimulus_presentation_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_presentation_train.tStart = t;  // (not accounting for frame time here)
      stimulus_presentation_train.frameNStart = frameN;  // exact frame index
      
      stimulus_presentation_train.setAutoDraw(true);
    }
    
    
    // if stimulus_presentation_train is active this frame...
    if (stimulus_presentation_train.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stimulus_presentation_train.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stimulus_presentation_train.tStop = t;  // not accounting for scr refresh
      stimulus_presentation_train.frameNStop = frameN;  // exact frame index
      // update status
      stimulus_presentation_train.status = PsychoJS.Status.FINISHED;
      stimulus_presentation_train.setAutoDraw(false);
    }
    
    
    // *yesno_response_train* updates
    if (t >= 0.0 && yesno_response_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yesno_response_train.tStart = t;  // (not accounting for frame time here)
      yesno_response_train.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { yesno_response_train.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { yesno_response_train.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { yesno_response_train.clearEvents(); });
    }
    
    // if yesno_response_train is active this frame...
    if (yesno_response_train.status === PsychoJS.Status.STARTED) {
      let theseKeys = yesno_response_train.getKeys({
        keyList: typeof ['y','n','left','right'] === 'string' ? [['y','n','left','right']] : ['y','n','left','right'], 
        waitRelease: false
      });
      _yesno_response_train_allKeys = _yesno_response_train_allKeys.concat(theseKeys);
      if (_yesno_response_train_allKeys.length > 0) {
        yesno_response_train.keys = _yesno_response_train_allKeys[_yesno_response_train_allKeys.length - 1].name;  // just the last key pressed
        yesno_response_train.rt = _yesno_response_train_allKeys[_yesno_response_train_allKeys.length - 1].rt;
        yesno_response_train.duration = _yesno_response_train_allKeys[_yesno_response_train_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *stop_training* updates
    if (t >= 0.0 && stop_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_training.tStart = t;  // (not accounting for frame time here)
      stop_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_training.clearEvents(); });
    }
    
    // if stop_training is active this frame...
    if (stop_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_training.getKeys({
        keyList: typeof 'q' === 'string' ? ['q'] : 'q', 
        waitRelease: false
      });
      _stop_training_allKeys = _stop_training_allKeys.concat(theseKeys);
      if (_stop_training_allKeys.length > 0) {
        stop_training.keys = _stop_training_allKeys[_stop_training_allKeys.length - 1].name;  // just the last key pressed
        stop_training.rt = _stop_training_allKeys[_stop_training_allKeys.length - 1].rt;
        stop_training.duration = _stop_training_allKeys[_stop_training_allKeys.length - 1].duration;
      }
    }
    
    // Run 'Each Frame' code from code_train
    // press Q to stop the training loop
    if (stop_training.keys.length > 0) {
        training_loop.finished = true;
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    training_stimulus_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _lastKey;
var needTextInput;
function training_stimulus_presentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_stimulus_presentation' ---
    training_stimulus_presentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('training_stimulus_presentation.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(yesno_response_train.corr, level);
    }
    psychoJS.experiment.addData('yesno_response_train.keys', yesno_response_train.keys);
    if (typeof yesno_response_train.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('yesno_response_train.rt', yesno_response_train.rt);
        psychoJS.experiment.addData('yesno_response_train.duration', yesno_response_train.duration);
        routineTimer.reset();
        }
    
    yesno_response_train.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stop_training.corr, level);
    }
    psychoJS.experiment.addData('stop_training.keys', stop_training.keys);
    if (typeof stop_training.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stop_training.rt', stop_training.rt);
        psychoJS.experiment.addData('stop_training.duration', stop_training.duration);
        }
    
    stop_training.stop();
    // Run 'End Routine' code from code_train
    // Get the last key pressed (handles array vs single value)
    let _lastKey = null;
    if (typeof yesno_response_train.keys !== 'undefined' && yesno_response_train.keys !== null) {
      _lastKey = Array.isArray(yesno_response_train.keys) ? yesno_response_train.keys.slice(-1)[0] : yesno_response_train.keys;
    }
    
    // True if last key was 'y' or 'left'
    needTextInput = ((_lastKey === 'y') || (_lastKey === 'left'));
    // the Routine "training_stimulus_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training_written_responseMaxDurationReached;
var training_written_responseMaxDuration;
var training_written_responseComponents;
function training_written_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_written_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    training_written_responseClock.reset();
    routineTimer.reset();
    training_written_responseMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_response_training.setText('');
    textbox_response_training.refresh();
    // reset end_textinput_button to account for continued clicks & clear times on/off
    end_textinput_button.reset()
    // Run 'Begin Routine' code from code_whatconc
    // If the previous response wasn't 'y' or 'left', skip this routine
    if (!needTextInput) {
        continueRoutine = false;
    }
    psychoJS.experiment.addData('training_written_response.started', globalClock.getTime());
    training_written_responseMaxDuration = null
    // keep track of which components have finished
    training_written_responseComponents = [];
    training_written_responseComponents.push(textbox_response_training);
    training_written_responseComponents.push(end_textinput_button);
    
    training_written_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function training_written_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_written_response' ---
    // get current time
    t = training_written_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_response_training* updates
    if (t >= 0.0 && textbox_response_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_response_training.tStart = t;  // (not accounting for frame time here)
      textbox_response_training.frameNStart = frameN;  // exact frame index
      
      textbox_response_training.setAutoDraw(true);
    }
    
    
    // if textbox_response_training is active this frame...
    if (textbox_response_training.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *end_textinput_button* updates
    if (t >= 0 && end_textinput_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_textinput_button.tStart = t;  // (not accounting for frame time here)
      end_textinput_button.frameNStart = frameN;  // exact frame index
      
      end_textinput_button.setAutoDraw(true);
    }
    
    
    // if end_textinput_button is active this frame...
    if (end_textinput_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (end_textinput_button.status === PsychoJS.Status.STARTED) {
      // check whether end_textinput_button has been pressed
      if (end_textinput_button.isClicked) {
        if (!end_textinput_button.wasClicked) {
          // store time of first click
          end_textinput_button.timesOn.push(end_textinput_button.clock.getTime());
          // store time clicked until
          end_textinput_button.timesOff.push(end_textinput_button.clock.getTime());
        } else {
          // update time clicked until;
          end_textinput_button.timesOff[end_textinput_button.timesOff.length - 1] = end_textinput_button.clock.getTime();
        }
        if (!end_textinput_button.wasClicked) {
          // end routine when end_textinput_button is clicked
          continueRoutine = false;
          
        }
        // if end_textinput_button is still clicked next frame, it is not a new click
        end_textinput_button.wasClicked = true;
      } else {
        // if end_textinput_button is clicked next frame, it is a new click
        end_textinput_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if end_textinput_button hasn't started / has finished
      end_textinput_button.clock.reset();
      // if end_textinput_button is clicked next frame, it is a new click
      end_textinput_button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    training_written_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_written_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_written_response' ---
    training_written_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('training_written_response.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_response_training.text',textbox_response_training.text)
    psychoJS.experiment.addData('end_textinput_button.numClicks', end_textinput_button.numClicks);
    psychoJS.experiment.addData('end_textinput_button.timesOn', end_textinput_button.timesOn);
    psychoJS.experiment.addData('end_textinput_button.timesOff', end_textinput_button.timesOff);
    // the Routine "training_written_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_mainMaxDurationReached;
var _main_instruction_keyresp_allKeys;
var start_mainMaxDuration;
var start_mainComponents;
function start_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_main' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    start_mainClock.reset();
    routineTimer.reset();
    start_mainMaxDurationReached = false;
    // update component parameters for each repeat
    main_instruction_keyresp.keys = undefined;
    main_instruction_keyresp.rt = undefined;
    _main_instruction_keyresp_allKeys = [];
    psychoJS.experiment.addData('start_main.started', globalClock.getTime());
    start_mainMaxDuration = null
    // keep track of which components have finished
    start_mainComponents = [];
    start_mainComponents.push(main_instructions);
    start_mainComponents.push(main_instruction_keyresp);
    
    start_mainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function start_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_main' ---
    // get current time
    t = start_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_instructions* updates
    if (t >= 0.0 && main_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_instructions.tStart = t;  // (not accounting for frame time here)
      main_instructions.frameNStart = frameN;  // exact frame index
      
      main_instructions.setAutoDraw(true);
    }
    
    
    // if main_instructions is active this frame...
    if (main_instructions.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (main_instructions.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      main_instructions.tStop = t;  // not accounting for scr refresh
      main_instructions.frameNStop = frameN;  // exact frame index
      // update status
      main_instructions.status = PsychoJS.Status.FINISHED;
      main_instructions.setAutoDraw(false);
    }
    
    
    // *main_instruction_keyresp* updates
    if (t >= 0.0 && main_instruction_keyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_instruction_keyresp.tStart = t;  // (not accounting for frame time here)
      main_instruction_keyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { main_instruction_keyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { main_instruction_keyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { main_instruction_keyresp.clearEvents(); });
    }
    
    // if main_instruction_keyresp is active this frame...
    if (main_instruction_keyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = main_instruction_keyresp.getKeys({
        keyList: typeof ['y','n','left','right','space'] === 'string' ? [['y','n','left','right','space']] : ['y','n','left','right','space'], 
        waitRelease: false
      });
      _main_instruction_keyresp_allKeys = _main_instruction_keyresp_allKeys.concat(theseKeys);
      if (_main_instruction_keyresp_allKeys.length > 0) {
        main_instruction_keyresp.keys = _main_instruction_keyresp_allKeys[_main_instruction_keyresp_allKeys.length - 1].name;  // just the last key pressed
        main_instruction_keyresp.rt = _main_instruction_keyresp_allKeys[_main_instruction_keyresp_allKeys.length - 1].rt;
        main_instruction_keyresp.duration = _main_instruction_keyresp_allKeys[_main_instruction_keyresp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_mainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_main' ---
    start_mainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start_main.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(main_instruction_keyresp.corr, level);
    }
    psychoJS.experiment.addData('main_instruction_keyresp.keys', main_instruction_keyresp.keys);
    if (typeof main_instruction_keyresp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('main_instruction_keyresp.rt', main_instruction_keyresp.rt);
        psychoJS.experiment.addData('main_instruction_keyresp.duration', main_instruction_keyresp.duration);
        routineTimer.reset();
        }
    
    main_instruction_keyresp.stop();
    // the Routine "start_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_trialMaxDurationReached;
var _yesno_response_main_allKeys;
var main_trialMaxDuration;
var main_trialComponents;
function main_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_trialClock.reset();
    routineTimer.reset();
    main_trialMaxDurationReached = false;
    // update component parameters for each repeat
    stimulus_presentation_main.setImage(stimulus);
    yesno_response_main.keys = undefined;
    yesno_response_main.rt = undefined;
    _yesno_response_main_allKeys = [];
    psychoJS.experiment.addData('main_trial.started', globalClock.getTime());
    main_trialMaxDuration = null
    // keep track of which components have finished
    main_trialComponents = [];
    main_trialComponents.push(stimulus_presentation_main);
    main_trialComponents.push(yesno_response_main);
    main_trialComponents.push(textbox_response_main);
    
    main_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function main_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_trial' ---
    // get current time
    t = main_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimulus_presentation_main* updates
    if (t >= 0.0 && stimulus_presentation_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_presentation_main.tStart = t;  // (not accounting for frame time here)
      stimulus_presentation_main.frameNStart = frameN;  // exact frame index
      
      stimulus_presentation_main.setAutoDraw(true);
    }
    
    
    // if stimulus_presentation_main is active this frame...
    if (stimulus_presentation_main.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stimulus_presentation_main.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stimulus_presentation_main.tStop = t;  // not accounting for scr refresh
      stimulus_presentation_main.frameNStop = frameN;  // exact frame index
      // update status
      stimulus_presentation_main.status = PsychoJS.Status.FINISHED;
      stimulus_presentation_main.setAutoDraw(false);
    }
    
    
    // *yesno_response_main* updates
    if (t >= 0.0 && yesno_response_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yesno_response_main.tStart = t;  // (not accounting for frame time here)
      yesno_response_main.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { yesno_response_main.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { yesno_response_main.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { yesno_response_main.clearEvents(); });
    }
    
    // if yesno_response_main is active this frame...
    if (yesno_response_main.status === PsychoJS.Status.STARTED) {
      let theseKeys = yesno_response_main.getKeys({
        keyList: typeof ['y','n','left','right'] === 'string' ? [['y','n','left','right']] : ['y','n','left','right'], 
        waitRelease: false
      });
      _yesno_response_main_allKeys = _yesno_response_main_allKeys.concat(theseKeys);
      if (_yesno_response_main_allKeys.length > 0) {
        yesno_response_main.keys = _yesno_response_main_allKeys[_yesno_response_main_allKeys.length - 1].name;  // just the last key pressed
        yesno_response_main.rt = _yesno_response_main_allKeys[_yesno_response_main_allKeys.length - 1].rt;
        yesno_response_main.duration = _yesno_response_main_allKeys[_yesno_response_main_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *textbox_response_main* updates
    if (t >= 0.0 && textbox_response_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_response_main.tStart = t;  // (not accounting for frame time here)
      textbox_response_main.frameNStart = frameN;  // exact frame index
      
      textbox_response_main.setAutoDraw(true);
    }
    
    
    // if textbox_response_main is active this frame...
    if (textbox_response_main.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textbox_response_main.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      textbox_response_main.tStop = t;  // not accounting for scr refresh
      textbox_response_main.frameNStop = frameN;  // exact frame index
      // update status
      textbox_response_main.status = PsychoJS.Status.FINISHED;
      textbox_response_main.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_trial' ---
    main_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('main_trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(yesno_response_main.corr, level);
    }
    psychoJS.experiment.addData('yesno_response_main.keys', yesno_response_main.keys);
    if (typeof yesno_response_main.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('yesno_response_main.rt', yesno_response_main.rt);
        psychoJS.experiment.addData('yesno_response_main.duration', yesno_response_main.duration);
        routineTimer.reset();
        }
    
    yesno_response_main.stop();
    // the Routine "main_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
