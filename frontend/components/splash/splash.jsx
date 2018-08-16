import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="knittingtimes">

      <div className="mainimage">
        <img src={window.knittingtimes} />
        <div className="maintext">
          <h1>Everyone is interesting</h1>
          <h2>But you don’t discover that when you’re staring at a screen.</h2>
          <Link to="/knitting_times">let's get tea</Link>
        </div>
      </div>
      <div className="transversal" id="flex">
        <div>
          <h2>Show up for tea time</h2>
          <p>You and a few others join a host at a cafe.</p>
        </div>
        <div>
          <h2>Have a real conversation</h2>
          <p>You talk for two hours about anything.</p>
        </div>
        <div>
          <h2>See what happens</h2>
          <p>That's it. No strings attached.</p>
        </div>
      </div>
      <div className="body">
        <h2>SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</h2>
        <div className="mono_desc">
          <div>MONO</div>
          <div>
            <h2>It’s weird.</h2>
            <h4>Everyone at tea time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.</h4>
          </div>
        </div>
        <div className="mono_desc">
          <div>
            <h2>We won't meet otherwise.</h2>
            <h4>In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity. </h4>
          </div>
          <div>MONO</div>
        </div>
        <div className="mono_desc">
          <div>MONO</div>
            <div>
              <h2>Your hands are made for high fiving!</h2>
              <h4>And your eyes are made…for eye contact! Real humans are so much cooler than their tweets or Instagram pictures. Tea time has real humans! #nofilter!</h4>
            </div>
        </div>
        <div className="transversal">
          <div>Actually talk to people.</div>
          <Link to="/knitting_times">let's get tea</Link>
        </div>
        <div className="mono_desc">
          <div>”I met people who I continue to be in touch with almost a year later, and people who I shared delightful conversations with that day but no more. Both are their own kind of fun.” Freia, NYC</div>
          <div>”I’m not the type of person who talks to strangers. This doesn’t mean I don’t want to. Tea With Strangers just makes it easier because you know everyone there wants it too.” Molly, SF</div>
        </div>
        <h2>THERE'S NO SUCH THING AS A STRANGER.</h2>
        <div className="mono_desc">
          <div>MONO</div>
          <div>
            <h2>It’s weird.</h2>
            <h4>You'd never think of yourself as a stranger. But everyone else does. You know your story. Your embarrassments. Your joy. Your idiocyncrasies — the thing that make you, you. But they don't.<br/>
            And everyone has these — whether or not we know what they are. Everyone around you is a person, loaded with stories that you can't even begin to fathom. They are different from yours, but the fact that we all have them is what brings us together.<br/>
            In a stranger's story, we might discover parts of our own. And in seeing where a stranger is coming from, we might realize they're actually not so strange. But we don't discover much just by thinking about it. So let's find out.</h4>
          </div>
        </div>
        <div className="transversal">
          <div>Do we get to high five yet?</div>
          <Link to="/knitting_times">yes</Link>
        </div>
      </div>
    </div>
  )

};

export default Splash;
