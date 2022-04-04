import { Page } from "../../../../src/page";

const md = `
## WARD TOUR ONLINE REGISTRATION IS NOW CLOSED

**If you want to register in person come early to city hall, as close to 9:00 A.M as possible since lines get long and you don't want to miss the ride!**

### Ward Tour Registration

#### The 2019 Ward Tour &amp; Festival will take place Sunday June 2!

TO REGISTER:

FIRST: Check out detailed information about the Ward Tour on the main page [HERE](/events/jersey-city-ward-tour).

SECOND: Read the legal waiver below. Registering means you agree to all its conditions.

THIRD: Sign up yourself and each minor under your supervision, including volunteers, for only ONE of the two routes available, the 15-mile route within Jersey City, or the special 25-mile route that includes parts of Bayonne and Hoboken. You MUST meet the conditions listed for whichever route you choose.

**REGISTER FOR THE 15-MILE ROUTE**

**All riders on the main 15-mile route MUST also be able to maintain a pace of approximately 10 mph.** This is a fairly relaxed pace for an adult who bikes even occasionally. We also take some short breaks to catch a breath and to allow for smooth traffic control, and our one long break in Lincoln Park roughly at the halfway point, after the only steep uphill on the course (so you can just walk your bike up that hill if you want).

<!--[15 Mile Route Registration](/events/jersey-city-ward-tour/ward-tour-registration/15-mile-route-registration-form)-->

**REGISTER FOR THE 25-MILE ROUTE**

**All riders on the 25-mile route MUST be able to maintain a somewhat faster pace, about 12 mph, obviously for longer, and must be ready to roll with fewer and shorter rest breaks.**

This is a new, one-time, more complex route that we are offering to celebrate our 10th Ward Tour and showcase the growing bike communities in our neighboring towns.

**But we will be especially strict about who does this route, for safety and logistics reasons.**

<!--[25 Mile Route Registration](events/jersey-city-ward-tour/ward-tour-registration/register-25-mile-ride)-->

**You must read and agree to the following waiver in order to participate:**

**READ THIS DOCUMENT COMPLETELY. ITS EFFECT IS TO RELEASE Bike JC, its volunteers, JCPD and the City of Jersey City, FROM ANY LIABILITY RESULTING FROM YOUR PARTICIPATION IN THE ACTIVITIES DESCRIBED BELOW, AND TO WAIVE ALL CLAIMS FOR DAMAGES OR LOSSES AGAINST Bike JC, its volunteers, JCPD and the City of Jersey City, WHICH MAY ARISE FROM SUCH ACTIVITIES EVEN IF THEY RESULT FROM SUCH NEGLIGENCE.**

**[DOWNLOAD THIS DOCUMENT IN SPANISH-](/sites/default/files/BIKE%20JC%20TRANSLATION%20to%20SPANISH.pdf)([español](/sites/default/files/BIKE%20JC%20TRANSLATION%20to%20SPANISH.pdf))**

I, the undersigned (hereinafter “Participant”) accept exercising my own free choice to participate voluntarily in these activities, and promising to take due care during such participation, I accept full responsibility for the care and use of personal equipment. I understand that bicycling is a hazardous activity. I understand that the sport of bicycling and the use of bike equipment involve a risk of serious bodily injury, or death, as a result of accidents, equipment failures, or other causes.

I hereby agree to freely and expressly assume and accept any risks and all injury to myself, my personal property, and any others injured or damaged as a result of my use of this equipment. I understand that bicycle protective gear such as helmets and gloves are recommended, but they do not eliminate the risk of injury in the event of an accident.

Further I hereby indemnify and hold harmless, Bike JC, its volunteers, JCPD and the City of Jersey City, employees, and any other persons or entities acting on their behalf, and the successors and assigns for any and all of the aforementioned persons and entities, against any and all claims, demands, and causes of action whatsoever, whether presently known or unknown, of any person who suffers any injury, disability, death or other harm, to person or property or both, as a result of my participation in this bicycle parade.

I agree to follow all laws pertaining to the riding of a bicycle pursuant to all state and local laws and the rules and regulations pertaining to bicycles. I agree that I am solely responsible and will not hold Bike JC, its volunteers, JCPD and the City of Jersey City, liable for any fines incurred by me for violations while riding a bicycle. This document constitutes the final and entire agreement between Bike JC, its volunteers, JCPD and the City of Jersey City, and the undersigned.

**THERE IS NO WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.**
`

export default function Home() { return <Page path={"/events/jersey-city-ward-tour/ward-tour-registration"} banner="/files/wardtourbanner1_1.jpg" md={md} /> }
