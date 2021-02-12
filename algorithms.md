---
layout: default
---
# Algorithmic Racism

The Rio Grande Valley straddles the Texas border between Mexico and the US. Aside from its larger city of Brownsville, much of the landscape is dotted by _Colonias_ - small migrant communities defined by their lack of sanitary services. 42% of the residents of these towns [live below the poverty line](https://www.dallasfed.org/~/media/documents/cd/pubs/lascolonias.pdf); another 19% lie precariously close.

So why is the Rio Grande Valley the most audited area in Texas?

In 2019, _[ProPublica](https://www.propublica.org/datastore/dataset/irs-audit-rates-by-county)_ released a dataset of IRS audit rates throughout the United States, revealing staggering disparities in who gets audited by the IRS. The most impoverished areas stand out: the Rio Grande Valley, Mississippi Delta, Black Belt, and various Western reservations, among others. The data is clear. The people who have the least are audited the most. 

![[IRS audits 2.png]]

The IRS is going over poor people's taxes with a fine-toothed comb, while ignoring wealthier people's taxes. And, these people who get audited just tend to be minorities.

The IRS selects people for audits with an algorithm called the _Discriminant Inventory Function System_, or [DIF](https://www.sambrotman.com/blog/how-tax-returns-are-selected-for-audit/). This program looks at the forms and filings one has returned during any given year and assigns them a score, with a higher score flagging a problematic filing. Then, the filings with the highest scores are sent to a human who looks over the data. From there, the agent can choose to start an audit. This process just happens to select poorer people and minorities more frequently.

The DIF algorithm is not public, ostensibly so that people cannot figure out how to avoid its screening process. It is a black box that just happens to flag poorer people and minorities at a higher rate than rich, white people.

***

End stage renal disease is an [unpleasant way to die](https://www.ncbi.nlm.nih.gov/books/NBK499861/). A patient starts to vomit more than usual, spending hours over the toilet. As toxins build up, they develop bruises across their body. They start to develop random pains in their body, cramp, and twitch. Seizures become commonplace, rendering them home-bound if they weren't already. One day, there is a seizure that they don't wake up from.

This process is not inevitable; one can halt this disease's progress with a kidney transplant. Life is nearly back to normal - the vomiting stops, the pains are mostly gone, and the seizures are no longer a worry. And luckily, there is an equation one's doctors can perform to help determine whether one is eligible or prioritized for a kidney transplant. It is called the [CKD-EPI](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2763564/), and it calculates how well a patient's kidneys work. It looks like this:


$$ eGFR = 141 \times min({S_{Cr}}/{k,1})^a \times max({S_{Cr}}/{k,1})^{-1.209} \times .993^{Age} \times 1.018 \mbox{ (if female)} \times 1.159 \mbox{ (if Black)}$$

If a patient's eGFR is higher, they are viewed by medical staff to have better-functioning kidneys. And, if a patient is Black, they will receive a higher eGFR score as calculated by the CKD-EPI. This equation is a relatively new innovation, only published in 2009. As well, the implications of this equation are fairly simple - if a patient is Black, they are assumed to have ~16% more kidney function than a white patient of the same age and gender. It's an infallible algorithm that just happens to claim that White patients need kidney donations slightly more than Black people.

The devil's advocate could argue that Black people's kidney function just _appears_ lower; that a colorblind equation fails to account for some slight anatomical difference. This is not the case. A 2020 [study](https://pubmed.ncbi.nlm.nih.gov/33063202/) found that if the race variable dropped out of the equation, a third of African-American patients would be shifted to more severe kidney failure classifications. Roughly 3% would be eligible for organ donation. Given that African-Americans tend to have higher rates of end-stage renal disease than White Americans, the above facts suggest that the algorithm that qualifies one for kidney donation is flawed, specifically harming Black people.

Many of us accept programming and algorithms in everyday life. We don't think about how [facial recognition](http://sitn.hms.harvard.edu/flash/2020/racial-discrimination-in-face-recognition-technology/) works. We enjoy it when Alexa recognizes our voice so that we can play a song. We take it for granted that our [newsfeeds](https://www.wired.com/2016/11/facebook-echo-chamber/) cater to our interests. In general, one doesn't think about how something works, the separate processes coming together to help us in our life. These algorithms are unbiased assistants to make it easier to do what we need.

But, these programs are ultimately created by people. Even though a computer cannot be biased in a vacuum, people are subject to their own biases. And these are not always conscious biases. It just happened that all of the members of the CKD-EPI research team were non-Black. It just happened that the people who created the DIF probably were not wanting for money. It just happens, [again](https://www.propublica.org/article/facebook-hate-speech-censorship-internal-documents-algorithms) and [again](https://www.seattletimes.com/business/microsoft/how-linkedins-search-engine-may-reflect-a-bias/).

Technology, as portrayed in movies, is characterized as cold and calculating, free of personality. That is true. A computer does not have unique thought. But it neither has independent thought. Everything a computer does comes from its creators, and its creators have biases and personality. Those who perform experiments have biases. People who write policy decisions have personal beliefs. We like to pretend they do not, that any creation is independent of its creator. This is not so. And these creations have real world effects. They can impoverish a family. They can kill.

