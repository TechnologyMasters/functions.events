---
announced: true
edition: 2018-toronto
name: Christian Zommerfelds
company: D2L
talk: When Serverless Gets In the Way of Scalability
bio: 
---

In the age of countless cloud service offerings we often live in an idealized bubble where everything can auto-scale infinitely. In particular, serverless computing enables automatic fast provisioning/deprovisioning of server resources. However, scaling your compute power this quickly is not always beneficial and can even break your entire system. For example, storage systems may have fixed capacity; even with auto-scaling, the scaling takes longer time, resulting in unbalanced capacity between computing power and storage. This will make the storage systems the bottlenecks in the system. Therefore, a design without proper capacity management may lead to complete failure of the system under increasing load.

At D2L we have been developing microservices using serveless technologies. In this talk, you will learn: * the challenges we have faced in scaling serverless applications. We will demonstrate real-world examples. * various approaches we used to overcome the scalability challenges, including concurrency limit, backoff and retry and TCP-like congestion control. We will compare the pro. and cons. of each approach and give advice on best practices.
