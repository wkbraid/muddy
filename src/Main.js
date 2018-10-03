import React, { Component } from 'react';
import { Classroom } from './Classroom.js';
import { Overlap, OverlapGlobal } from './Overlap.js';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div class="Main">
        <h1>Overlap, Muddy Children, and a Global View of Communication</h1>  
        <p>On the table in front of you there are three shapes:</p>
        <Overlap />
        <p>Suppose you are only allowed to suggest one answer, which object
           does "circle" refer to?
           
           Immediately, we know to pick one of the two shapes on the left, but
           not how to choose between them. One clever observation is that there
           are better ways to refer to the first circle (A cooperative
           interviewer could suggest "empty" to single out the first object
           without ambiguity). <b>(This can be explained nicely as minimizing
           expected loss or something like that)</b> In a cooperative and 
           restricted setting, we can often model the other participants and
           make progress by seeing the problem through their eyes.
        </p>

        <p>In fact, this problem is also interesting from the other perspective.
           Using a one word descriptor "empty", "filled", "circle", or "square",
           can you guide the partipant to any of the three objects? To answer
           this question more thoroughly, let's look at a global view of the
           problem.
        </p>
        <OverlapGlobal />
        <p><b>TODO: reverse sides so that it's more like a function</b></p>
        <p>On the left there are three possibilites: each the shapes the
           interviewer could have in mind. On the right, each of the descriptors
           that might have been said. Choosing one option from each side, we
           completely describe any instance of the problem (Can you guess the
           empty circle, given the clue "square"?). But many of these are
           irrelevant. We restrict our attention a little further, drawing an
           edge between two options if the description is accurate.

           As a result, each edge describes a possible world, each endpoint a
           potentially uncertain view into that world, with only some of the
           information available.
        </p>

        <p>Some nodes are certain, others are not.</p>
        <p>What is it we want to say about the mapping here? there is one that
           reduces the chance of error? There is one that is obviously
           unambiguous?</p>
        <p>Possible interactivity: can map descriptor to shape, see if result
           is unambiguous</p>
        <p>Definition of constraints on function is a little weird</p>
        <p>What about infromation theory perspective?</p>

        <p>Can see why some forms of communication are deeper than others, they
        require walking further in the graph</p>
        <p>Footnote, probabilistic programming languages which can do some of this work
        Independently</p>
        <p>Collection of puzzles which get at communication.
        This is the kind of puzzle we are dealing with: everyone tries hard, cooperates,
        thinks about the problem. We are exploring the <b>limitations</b> of communication.</p>
        <h2>Muddy Children</h2>
        <p>Problem introduction, seeming paradox</p>
        <p>Think of the problem as an inductive proof: Base case, Continue case</p>
        <p>To clarify: what did each of the children know? Concept of general knowledge.</p>
        <Classroom children="4" width="500"/>
      </div>
    );
  }
}

export default Main;
