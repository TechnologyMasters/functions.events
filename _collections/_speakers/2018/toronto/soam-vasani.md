---
announced: false
edition: 2018-toronto
name: Soam Vasani
company: 
talk: Function Composition in a Serverless World
bio: 
---

As serverless applications grow more complex, function composition, or the ability for functions to call each other, becomes important. This talk will dive into a few different approaches to compose FaaS functions together to form large applications:

Compilation is the idea of simply combining functionality into a bigger FaaS function. Chaining is having each function “know” what comes after it and, having that function call its successor. Coordinating Functions are functions that manage the execution of other functions by calling them over the network.

While those approaches work without any additional frameworks, two approaches add a stateful component to better manage composition: Event-driven Composition uses functions emitting and reacting to events on message queue topics. Workflow Systems introduce a mechanism for expressing a graph of function interactions and having a new runtime to manage the execution of these functions.

We’ll give examples and live demos for each approach, and compare then on the basis of expressiveness, performance, and fault-tolerance; and also on the basis of operational concerns, such as the ease of doing upgrades, and monitoring the overall application’s performance.
