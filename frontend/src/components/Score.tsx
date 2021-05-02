// import opensheetmusicdisplay from 'https://cdn.skypack.dev/opensheetmusicdisplay'
import osmd from 'opensheetmusicdisplay'
import React, { ReactElement, useLayoutEffect, useRef, useState } from 'react'
import 'twin.macro'
import { Button } from '.'
const file = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
  <movement-title>West Point</movement-title>
  <identification>
    <creator type="composer">Jonatha Brooke</creator>
    <rights>© 1995 Dog Dream Music. All rights reserved.</rights>
    <encoding>
      <software>Finale v25 for Mac</software>
      <encoding-date>2017-12-12</encoding-date>
      <supports attribute="new-system" element="print" type="yes" value="yes"/>
      <supports attribute="new-page" element="print" type="yes" value="yes"/>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="stem" type="yes"/>
    </encoding>
  </identification>
  <defaults>
    <scaling>
      <millimeters>7.2319</millimeters>
      <tenths>40</tenths>
    </scaling>
    <page-layout>
      <page-height>1545</page-height>
      <page-width>1194</page-width>
      <page-margins type="both">
        <left-margin>140</left-margin>
        <right-margin>70</right-margin>
        <top-margin>70</top-margin>
        <bottom-margin>70</bottom-margin>
      </page-margins>
    </page-layout>
    <system-layout>
      <system-margins>
        <left-margin>0</left-margin>
        <right-margin>0</right-margin>
      </system-margins>
      <system-distance>181</system-distance>
      <top-system-distance>70</top-system-distance>
    </system-layout>
    <staff-layout>
      <staff-distance>81</staff-distance>
    </staff-layout>
    <appearance>
      <line-width type="stem">0.957</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="staff">1.4583</line-width>
      <line-width type="light barline">1.4583</line-width>
      <line-width type="heavy barline">5</line-width>
      <line-width type="leger">1.875</line-width>
      <line-width type="ending">1.4583</line-width>
      <line-width type="wedge">0.9375</line-width>
      <line-width type="enclosure">1.4583</line-width>
      <line-width type="tuplet bracket">1.4583</line-width>
      <note-size type="grace">50</note-size>
      <note-size type="cue">50</note-size>
      <distance type="hyphen">60</distance>
      <distance type="beam">8</distance>
    </appearance>
    <music-font font-family="Jazz,handwritten" font-size="20.5"/>
    <word-font font-family="JazzText" font-size="10.25"/>
    <lyric-font font-family="JazzText" font-size="10.25"/>
  </defaults>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1124" default-y="1393" font-size="12" font-weight="bold" halign="right" justify="center" valign="top" xml:space="preserve">Words and Music by
Jonatha Brooke</credit-words>
  </credit>
  <credit page="1">
    <credit-type>rights</credit-type>
    <credit-words default-x="632" default-y="44" font-size="10" justify="center" valign="bottom">© 1995 Dog Dream Music. All rights reserved. Transcription by Ken Temple, Marian Russell, and Michael Good.</credit-words>
  </credit>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="632" default-y="1458" font-size="24" font-weight="bold" justify="center" valign="top">West Point</credit-words>
  </credit>
  <part-list>
    <score-part id="P1">
      <part-name print-object="no">Voice</part-name>
      <score-instrument id="P1-I3">
        <instrument-name>Voice</instrument-name>
        <instrument-sound>voice.vocals</instrument-sound>
        <solo/>
      </score-instrument>
      <midi-instrument id="P1-I3">
        <midi-channel>1</midi-channel>
        <midi-program>55</midi-program>
        <volume>80</volume>
        <pan>0</pan>
      </midi-instrument>
    </score-part>
    <score-part id="P2">
      <part-name print-object="no">Guitar</part-name>
      <score-instrument id="P2-I2">
        <instrument-name>Acoustic Guitar (steel)</instrument-name>
        <instrument-sound>pluck.guitar.steel-string</instrument-sound>
      </score-instrument>
      <midi-instrument id="P2-I2">
        <midi-channel>2</midi-channel>
        <midi-program>26</midi-program>
        <volume>80</volume>
        <pan>0</pan>
      </midi-instrument>
    </score-part>
  </part-list>
  <!--=========================================================-->
  <part id="P1">
    <measure number="1">
      <print>
        <measure-numbering>none</measure-numbering>
      </print>
      <attributes>
        <divisions>4</divisions>
        <key>
          <fifths>6</fifths>
          <mode>major</mode>
        </key>
        <time symbol="common">
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
        <staff-details print-object="no"/>
      </attributes>
      <sound tempo="84"/>
      <note>
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="2">
      <note>
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="3">
      <note>
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="4">
      <note>
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="5">
      <print new-system="yes"/>
      <note>
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="6">
      <note>
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="7">
      <note>
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="8">
      <note>
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="9">
      <note>
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="10" width="313">
      <print new-system="yes">
        <system-layout>
          <system-distance>83</system-distance>
        </system-layout>
      </print>
      <attributes>
        <staff-details print-object="yes"/>
      </attributes>
      <note default-x="140">
        <rest/>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
      </note>
      <note default-x="216">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note default-x="257">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="5">up</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>I'm</text>
        </lyric>
      </note>
      <note default-x="284">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="10">up</stem>
        <beam number="1">end</beam>
        <lyric default-y="-97" number="1">
          <syllabic>begin</syllabic>
          <text>re</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="11" width="357">
      <note default-x="16">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="5">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <lyric default-y="-97" number="1">
          <syllabic>middle</syllabic>
          <text>tra</text>
        </lyric>
      </note>
      <note default-x="52">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="5">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>middle</syllabic>
          <text>vel</text>
        </lyric>
      </note>
      <note default-x="93">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="5">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>end</syllabic>
          <text>ling</text>
        </lyric>
      </note>
      <note default-x="134">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="5">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>this</text>
        </lyric>
      </note>
      <note default-x="172">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="5">up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start"/>
        </notations>
        <lyric default-y="-97" number="1">
          <syllabic>begin</syllabic>
          <text>life</text>
        </lyric>
      </note>
      <note default-x="219">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="5">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="246">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="2.5">up</stem>
        <beam number="1">end</beam>
        <lyric default-y="-97" number="1">
          <syllabic>end</syllabic>
          <text>line</text>
        </lyric>
      </note>
      <note default-x="293">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="5">up</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>that's</text>
        </lyric>
      </note>
      <note default-x="331">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="10">up</stem>
        <beam number="1">end</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>so</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="12" width="313">
      <note default-x="25">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="5">up</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>close</text>
        </lyric>
      </note>
      <note default-x="63">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="2.5">up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start"/>
        </notations>
        <lyric default-y="-97" justify="left" number="1">
          <syllabic>single</syllabic>
          <text>to</text>
          <extend/>
        </lyric>
      </note>
      <note default-x="102">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-5">up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="139">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-7">up</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
        </notations>
        <lyric default-y="-97" justify="left" number="1">
          <syllabic>single</syllabic>
          <text>home</text>
          <extend/>
        </lyric>
      </note>
      <note default-x="187">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-4">up</stem>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="228">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
      </note>
      <note default-x="251">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-10">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>We</text>
        </lyric>
      </note>
      <note default-x="283">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-7">up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>are</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="13" width="570">
      <print new-system="yes">
        <system-layout>
          <system-distance>83</system-distance>
        </system-layout>
      </print>
      <note default-x="142">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="0">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>on</text>
        </lyric>
      </note>
      <note default-x="176">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="0">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>our</text>
        </lyric>
      </note>
      <note default-x="219">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="0">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>way</text>
        </lyric>
      </note>
      <note default-x="260">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="0">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>to</text>
        </lyric>
      </note>
      <note default-x="303">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="0">up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start"/>
        </notations>
        <lyric default-y="-97" justify="left" number="1">
          <syllabic>single</syllabic>
          <text>West</text>
          <extend/>
        </lyric>
      </note>
      <note default-x="357">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-15">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="393">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="-17">up</stem>
        <beam number="1">end</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>Point</text>
        </lyric>
      </note>
      <note default-x="440">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
      </note>
      <note default-x="483">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-10">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>Where</text>
        </lyric>
      </note>
      <note default-x="533">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-7.5">up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>your</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="14" width="413">
      <note default-x="15">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-5">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <lyric default-y="-97" number="1">
          <syllabic>begin</syllabic>
          <text>per</text>
        </lyric>
      </note>
      <note default-x="57">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-7.5">up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <lyric default-y="-97" number="1">
          <syllabic>end</syllabic>
          <text>fect,</text>
        </lyric>
      </note>
      <note default-x="93">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
      </note>
      <note default-x="133">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-9.5">up</stem>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>blond</text>
        </lyric>
      </note>
      <note default-x="195">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-20">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <lyric default-y="-97" number="1">
          <syllabic>begin</syllabic>
          <text>cou</text>
        </lyric>
      </note>
      <note default-x="233">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-20">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>end</syllabic>
          <text>sin</text>
        </lyric>
      </note>
      <note default-x="278">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-20">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>will</text>
        </lyric>
      </note>
      <note default-x="333">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-20">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>throw</text>
        </lyric>
      </note>
      <note default-x="381">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-20">up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>his</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="15" width="408">
      <print new-system="yes">
        <system-layout>
          <system-distance>77</system-distance>
        </system-layout>
      </print>
      <note default-x="146">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-19">up</stem>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>hat</text>
        </lyric>
      </note>
      <note default-x="177">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
      </note>
      <note default-x="209">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="5">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>in</text>
        </lyric>
      </note>
      <note default-x="238">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="7.5">up</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>the</text>
        </lyric>
      </note>
      <note default-x="268">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="10">up</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
        </notations>
        <lyric default-y="-97" justify="left" number="1">
          <syllabic>single</syllabic>
          <text>air</text>
          <extend/>
        </lyric>
      </note>
      <note default-x="310">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="10.5">up</stem>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="16" width="328">
      <note default-x="10">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="10.5">up</stem>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="104">
        <rest/>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
      </note>
      <note default-x="151">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-19">up</stem>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>And</text>
        </lyric>
      </note>
      <note default-x="185">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-20">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>we</text>
        </lyric>
      </note>
      <note default-x="223">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-20">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>will</text>
        </lyric>
      </note>
      <note default-x="273">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-20">up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start"/>
        </notations>
        <lyric default-y="-97" justify="left" number="1">
          <syllabic>single</syllabic>
          <text>watch</text>
          <extend/>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="17" width="247">
      <note default-x="13">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-15">up</stem>
        <beam number="1">begin</beam>
        <beam number="2">forward hook</beam>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="37">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-16">up</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-97" number="1">
          <syllabic>single</syllabic>
          <text>it</text>
        </lyric>
      </note>
      <note default-x="70">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-17.5">up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <tied type="start"/>
        </notations>
        <lyric default-y="-97" justify="left" number="1">
          <syllabic>single</syllabic>
          <text>fall</text>
          <extend/>
        </lyric>
      </note>
      <note default-x="120">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>12</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <stem default-y="-19">up</stem>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
    </measure>
  </part>
  <!--=========================================================-->
  <part id="P2">
    <measure number="1" width="268">
      <print>
        <system-layout>
          <top-system-distance>211</top-system-distance>
        </system-layout>
        <measure-numbering>none</measure-numbering>
      </print>
      <attributes>
        <divisions>4</divisions>
        <key print-object="no">
          <fifths>6</fifths>
          <mode>major</mode>
        </key>
        <clef>
          <sign>TAB</sign>
          <line>5</line>
        </clef>
        <staff-details>
          <staff-lines>6</staff-lines>
          <staff-tuning line="1">
            <tuning-step>D</tuning-step>
            <tuning-octave>2</tuning-octave>
          </staff-tuning>
          <staff-tuning line="2">
            <tuning-step>A</tuning-step>
            <tuning-octave>2</tuning-octave>
          </staff-tuning>
          <staff-tuning line="3">
            <tuning-step>D</tuning-step>
            <tuning-octave>3</tuning-octave>
          </staff-tuning>
          <staff-tuning line="4">
            <tuning-step>G</tuning-step>
            <tuning-octave>3</tuning-octave>
          </staff-tuning>
          <staff-tuning line="5">
            <tuning-step>B</tuning-step>
            <tuning-octave>3</tuning-octave>
          </staff-tuning>
          <staff-tuning line="6">
            <tuning-step>D</tuning-step>
            <tuning-octave>4</tuning-octave>
          </staff-tuning>
          <capo>4</capo>
          <staff-size>183</staff-size>
        </staff-details>
      </attributes>
      <sound tempo="84"/>
      <harmony default-y="40" font-size="15.4">
        <root>
          <root-step>B</root-step>
        </root>
        <kind halign="left" text="Maj7">major-seventh</kind>
        <bass>
          <bass-step>D</bass-step>
          <bass-alter>1</bass-alter>
        </bass>
      </harmony>
      <direction placement="above">
        <direction-type>
          <words default-y="72" relative-x="-22">Tuning D-A-D-G-B-D, Capo 4th fret</words>
        </direction-type>
      </direction>
      <note default-x="41">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="58">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="86">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="114">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="131" print-dot="no">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="168">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="196">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="213">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="230" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="2" width="214">
      <note default-x="11">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="26">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="52">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="76">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="91" print-dot="no">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="125">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="149">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="165">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="181" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="3" width="218">
      <harmony default-y="40" font-size="15.4">
        <root>
          <root-step>B</root-step>
        </root>
        <kind halign="left" text="Maj7">major-seventh</kind>
      </harmony>
      <note default-x="12" print-dot="no">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="12" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="11" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="11" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="50" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="49" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="88" print-dot="no">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="88" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="86" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="87" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="125" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="125" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="163">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="163">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="162">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="162">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="180" print-dot="no">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="4" width="284">
      <note default-x="12" print-dot="no">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="12" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="11" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="11" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="58" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="58" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="105">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="105">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="103">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="125">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="161">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="196">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="216">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <pull-off number="1" type="start">P</pull-off>
            <string>5</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="237" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <pull-off number="1" type="stop"/>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="5" width="206">
      <print new-system="yes">
        <system-layout>
          <system-distance>83</system-distance>
        </system-layout>
      </print>
      <harmony default-y="40" font-size="15.4">
        <root>
          <root-step>G</root-step>
          <root-alter>1</root-alter>
        </root>
        <kind halign="left" text="m9">minor-ninth</kind>
      </harmony>
      <note default-x="11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="26">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="51" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="51" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="51" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="51" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="83" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="83" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="84" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="84" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="117" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="117" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="117" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="117" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="149">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="149">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="150">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="150">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="165">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="165">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="165">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="165">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="189">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="6" width="206">
      <note default-x="12">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="27">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="51" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="51" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="51" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="84" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="84" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="84" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="84" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="117" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="117" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="117" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="117" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="150">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="150">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="150">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="150">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="165">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="166">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="166">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="166">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="190">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="7" width="190">
      <harmony default-y="40" font-size="15.4">
        <root>
          <root-step>F</root-step>
          <root-alter>1</root-alter>
        </root>
        <kind halign="left" text="">major</kind>
      </harmony>
      <note default-x="12" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="12" print-dot="no">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="44" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <harmony default-y="40" font-size="15.4">
        <root>
          <root-step>C</root-step>
          <root-alter>1</root-alter>
        </root>
        <kind halign="left" text="7sus4">suspended-fourth</kind>
        <degree print-object="no">
          <degree-value>7</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
        </degree>
      </harmony>
      <note default-x="77" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="76" print-dot="no">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="77" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="109" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="110" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="110" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="110" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="142">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="142">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="142">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="157" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="8" width="190">
      <harmony default-y="40" font-size="15.4">
        <root>
          <root-step>F</root-step>
          <root-alter>1</root-alter>
        </root>
        <kind halign="left" text="">major</kind>
      </harmony>
      <note default-x="11" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="11" print-dot="no">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="44" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <harmony default-y="40" font-size="15.4">
        <root>
          <root-step>C</root-step>
          <root-alter>1</root-alter>
        </root>
        <kind halign="left" text="7sus4">suspended-fourth</kind>
        <degree print-object="no">
          <degree-value>7</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
        </degree>
      </harmony>
      <note default-x="77" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="76" print-dot="no">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="77" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="109" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="110" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="110" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="110" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="142">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="142">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="142">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="157" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="9" width="191">
      <harmony default-y="40" font-size="15.4">
        <root>
          <root-step>F</root-step>
          <root-alter>1</root-alter>
        </root>
        <kind halign="left" text="">major</kind>
      </harmony>
      <note default-x="11" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="11" print-dot="no">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="44" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <harmony default-y="40" font-size="15.4">
        <root>
          <root-step>C</root-step>
          <root-alter>1</root-alter>
        </root>
        <kind halign="left" text="7sus4">suspended-fourth</kind>
        <degree print-object="no">
          <degree-value>7</degree-value>
          <degree-alter>0</degree-alter>
          <degree-type>add</degree-type>
        </degree>
      </harmony>
      <note default-x="77" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="77" print-dot="no">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="77" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="109" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="110" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="110" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="110" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="143">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="142">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="143">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="157" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="10" width="313">
      <print new-system="yes"/>
      <note default-x="143" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="143" print-dot="no">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="170" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="198" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="198" print-dot="no">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="198" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="230" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="230" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="231" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="230" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="258">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="258">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="258">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="272" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="11" width="357">
      <note default-x="17">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="53">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="94">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="135">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="154" print-dot="no">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="247">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="278">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="293">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="313" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="12" width="313">
      <note default-x="26">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="39">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="64">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="111">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="139" print-dot="no">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="195">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="214">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="228">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="243" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="13" width="570">
      <print new-system="yes"/>
      <note default-x="144" print-dot="no">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="144" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="143" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="143" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="220" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="220" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="284" print-dot="no">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="284" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="282" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="283" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="395" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="395" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="441">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="441">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="440">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="440">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="463" print-dot="no">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="14" width="413">
      <note default-x="17" print-dot="no">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="17" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="16" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="16" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="115" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="115" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="163">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="163">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="162">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="181">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="235">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="280">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>5</fret>
          </technical>
        </notations>
      </note>
      <note default-x="306">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <pull-off number="1" type="start">P</pull-off>
            <string>5</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="335" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <pull-off number="1" type="stop"/>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="15" width="408">
      <print new-system="yes"/>
      <note default-x="147">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="162">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="190" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="190" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="190" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="190" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="269" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="269" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="269" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="269" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="319" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="319" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="319" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="319" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="351">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="351">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="351">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="351">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="367">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="367">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="367">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="367">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="391">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="16" width="328">
      <note default-x="11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="26">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="50" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="50" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="50" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="83" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="83" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="83" print-dot="no">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="83" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="120" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="121" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="121" print-dot="no">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="121" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="186">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="186">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="186">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="186">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="224">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="224">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="224">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="224">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="274">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="17" width="247">
      <note default-x="14" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>6</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="14" print-dot="no">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="71" print-dot="no">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>4</fret>
          </technical>
        </notations>
      </note>
      <note default-x="138" print-dot="no">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="138" print-dot="no">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="138" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="169" print-dot="no">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="169" print-dot="no">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="170" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>2</string>
            <fret>3</fret>
          </technical>
        </notations>
      </note>
      <note default-x="169" print-dot="no">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>1</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="200">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>5</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="200">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>2</fret>
          </technical>
        </notations>
      </note>
      <note default-x="200">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>none</stem>
        <notations>
          <technical>
            <string>3</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
      <note default-x="216" print-dot="no">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>none</stem>
        <notations>
          <technical>
            <string>4</string>
            <fret>0</fret>
          </technical>
        </notations>
      </note>
    </measure>
  </part>
  <!--=========================================================-->
</score-partwise>`

export default function Score(): ReactElement {
  console.log('render')
  const divRef = useRef<HTMLDivElement>(null)
  const [score, setScore] = useState<osmd.OpenSheetMusicDisplay>()
  const [currentPage] = useState(0)
  // const {}

  const goToNextPage = () => {
    goToPage(currentPage + 1)
  }

  useLayoutEffect(() => {
    const newScore = new osmd.OpenSheetMusicDisplay(divRef.current as HTMLElement, {
      followCursor: false,
    })
    newScore.load(file).then(() => {
      newScore.setPageFormat(`${window.innerWidth}x${window.innerHeight}`)
      newScore.render()
      newScore.cursor.show()
      setScore(newScore)
    })
  }, [])

  function goToMeasure(targetMeasure: number) {
    // if (!this.state.ready) return;
    // in case we want to go back
    // this.osmd.cursor.reset();
    while (getCurrentMeasureNumber() < targetMeasure) {
      score?.cursor.next()
    }
    scrollToCursor()
  }

  function scrollToCursor() {
    const diffToBar = score?.cursor.cursorElement.getBoundingClientRect().top ?? 0

    window.scrollBy({
      //TODO: should be not fixed!
      top: diffToBar - 20,
      behavior: 'smooth',
    })

    // OR

    // this.osmd.cursor.cursorElement.scrollIntoView({
    //   behavior: diff < 1000 ? "smooth" : "auto",
    //   block: "start",
    // });

    // but it cuts upper part of music sheet
  }

  function goToPage(pageNumber: number) {
    //console.log("going to page not tested", pageNumber);
    // this.props.onMeasureChange({ pageNumber, pagesArray: this.getPagesArray() });
    const musicPage = score?.GraphicSheet.MusicPages[pageNumber]
    if (musicPage) {
      const firstMeasureOfGivenPage =
        musicPage.MusicSystems[0].GraphicalMeasures[0][0].MeasureNumber
      goToMeasure(firstMeasureOfGivenPage)
    }
  }

  function getCurrentMeasureNumber() {
    // TODO: check if always defined
    if (!score) return 0
    return score.cursor.iterator.CurrentMeasureIndex + 1
  }

  return (
    <>
      <div tw="w-auto overflow-hidden" ref={divRef}></div>
      <Button tw="fixed bottom-4 right-4" variant="primary" onClick={() => goToNextPage()}>
        NEXT
      </Button>
    </>
  )
}