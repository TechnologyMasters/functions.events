---
announced: true
edition: 2018-toronto
name: Ron Yishai
twitter: RonYishai
company: Epsagon
talk: Distributed Tracing in Serverless Systems
bio: > 
  I am a software engineer with an academic background in Mathematics, experienced in cyber-security, reverse engineering, machine learning - and recently also a Serverless enthusiast. During the last year, I am working as a senior developer on Epsagon - a startup focused on bringing observability to serverless cloud applications, using distributed tracing and AI technologies, tackling the unique challenges in such environments.
---

Observability of serverless, distributed systems is complex since each service is separated and from the others. Distributed tracing is key to understanding such systems. In serverless, there are unique challenges and opportunities which make distributed tracing powerful for gaining observability.

As companies move from monolithic to multi-service architectures, existing techniques for debugging and profiling begin to break down. Previously, troubleshooting could be accomplished by isolating a single instance of the monolith and reproducing the problem. With microservices, this approach is no longer feasible, because no single service provides a complete picture of the performance or correctness of the application as a whole. Old approaches for distributed tracing include enforcing a policy across the development teams, such as writing manual traces inside the code. In serverless, cloud-based systems, new things can be achieved. Since some of the environment characteristics are known in advanced, the tracing can sometimes be done automatically, which makes it far more powerful.

