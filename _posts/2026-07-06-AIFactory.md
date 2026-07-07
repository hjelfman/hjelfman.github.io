---
layout: post
title: "Cautionary Note: AI in Factory Automation"
date: 2026-06-07
categories: misc
---

# So you want to automate a factory

Many people are concerned about AI automation in factories. Others believe that they can do a lot more with today's technologies & replace outdated systems for efficiency's sake. While there is room for improvement, there exist quite a few roadblocks in the way of full automation that those operating solely in coding rarely expect. I'd like to point out a few of them to show that many changes have already been considered by the industry.

### Primary issue: GUIs

<figure>
<img width="100%" src="http://hjelfman.com/deltav.jpeg">
<figcaption>graphic design is my passionj</figcaption>
</figure>

Factory control screens are atrociously ugly, despite advances in most GUIs. They remain as if they were designed in MS Paint. As well, they are fairly intrusive and unintuitive. Surely, by designing better-looking screens, we could improve operator efficiency.

A primary issue is that these screens are information-dense for a reason. Each screen ought to represent a process unit. In any vessel, one might need to know:

- Inlet temperature, pressure, flow, etc.
- Outlet temperature, pressure, flow, etc.
- Vessel temperature, pressure, level, volume, etc.
- Interlock states on the vessel
- Valve statuses

And this would be for a basic process, neglecting multi-step operations or multiple process units. Each of these variables must be displayed to ensure an operator has full information for a unit operation. This doesn't even include past or intended setpoint values, valve positions, and so on, all of which are vital. These must all be displayed! Sensors may fail, process variables may shift, and any single sensor anomaly may precede a more dangerous change.

The failure to include relevant process variables can lead to disaster. As an example, the inlet flow to a column and the level of said column were placed on separate screens during the Texas City explosion, meaning operators failed to notice a level-sensor error (though liquid continued to flow into the column, the level read as constant; either the level sensor was functioning incorrectly, or there was a leak).

Alarms are busy and distracting. Though there is such a thing as alarm exhaustion, they are _supposed_ to be garish & distracting; this catches the operator's eye better! A desire to beautify alarms risks eliminating intended, necessary distractions.

### Intermediate issue: Data storage

Let us pretend that we have infallible process measurements (this will be discussed later). To build a dataset, we want to record the process in its usual states with all datapoints included. To do so requires selecting a sampling frequency. Valve positions may change in seconds, and chemical reactions even faster. Even if our process were fully deterministic and measured, we would need to collect data on the shortest-timescale reaction for every variable in the process. Because processes may also be subject to seasonality, at least a year of data is required.

Using the example of just one operation, we are tracking ~20 variables. A conservative sampling frequency is once per second. We must collect 20 datapoints/second with timestamps for a year. Quickly, data storage becomes an issue.

### Hard problem: Determinism

Most situations a programmer deals with are deterministic. A correct algorithm will always give its user the same output given the same input—the same is false for most chemical processes. Inputs may vary, even from the same source; a feedstock may have slightly differing impurities due to random circumstances which disturb the rest of the process.

Equipment also suffers from degradation; a heat exchanger on a fresh factory floor will be more efficient than one that has operated for ten years. A vessel may be slightly larger due to thermal expansion. Situations like these are difficult to control for or test during training periods, reducing the effectiveness of any attempt to control a process with 100% certainty. Much of the time, these are unmeasured differences, both due to a lack of knowledge and measurement capability.

Then comes data collection. for a computer, data is generally read with 100% fidelity. the same cannot be said for processes. any two identical sensors may vary within their operating range due to design tolerances. these tolerances can be made smaller at high cost, but not eliminated. replacing an instrument requires more data collection; a model trained on factors containing "identical" parts may not work for another. equipment suffers from degradation; it may read increasingly poor values over time. even installing an array of sensors for the same variable does not guarantee accuracy for these reasons. As well, these sensors are likely expensive and their costs do not justify their usage. we often trade between effectiveness and cost.

There are mostly automated factories. People tend to be better at catching the unknown unknowns ("hey, the compressor is rattling louder than usual!") and may be able to assist automated processes as a "Centaur" of sorts. However, 100% uptime is impossible. even in the physical environment, 100% uptime is impossible. Many of the comments re:manufacturing are likely overblown

Some will point out that autonomous sensing & moving robots may be able to take over some of these human-only tasks. aside from the capital v. operating expenditure discussion here, The lack of determinism in large processes still makes this unlikely. i would be much happier if factory output were determined only by its input constraints; due to the existence of chance & difficulty in collecting perfect information about the world, i suspect that this will not happen.
